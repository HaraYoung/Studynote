/*1- 모듈 참조 */
//직접 구현한 모듈
import logger from "./helper/LogHelper.js";
import { myip, urlFormat } from "./helper/UtilHelper.js";
import {mkdirs, initMulter, checkUploadError, createThumbnail, createThumbnailMultiple} from "./helper/FileHelper.js";

//내장 모듈
import url from "url";
import path, { extname } from "path";
import { request } from "http";

//설치가 필요한 모듈
import dotenv from "dotenv";
import express from "express"; //express 본체
import useragent from "express-useragent"; //클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from "serve-static"; //특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from "serve-favicon"; //favicon 처리
import bodyParser from "body-parser"; //post 파라미터 처리
import methodOverride from "method-override"; //put,delete 파라미터 처리
import cookieParser from "cookie-parser"; //cookie 처리
import expressSessions from "express-session"; //Session처리
import nodemailer from "nodemailer"; //메일 발송-> app.use()로 추가 설정 필요 없음
// import multer from "multer";         //업로드 모듈
// import thumbnail from 'node-thumbnail';       //썸네일 이미지 생성 모듈

//url을 라우팅하는 모듈 참조
import SetUpController from './controllers/SetupController.js'

/*--- 01 setup --- */
/*2- Express 객체 생성 */
/*여기서 생성한 app객체의 use() 함수를 사용해서 
app에 각종 외부기능, 설정 내용,URL을 계속해서 확장하는 형태로 구현이 진행됨 */
const app = express();

//프로젝트 폴더 위치
const __dirname = path.resolve();

//설정 파일 내용 가져오기
dotenv.config({ path: path.join(__dirname, "../config.txt") });

/*3- 클라이언트의 접속시 초기화 */
/*app객체에 UserAgent모듈을 탑재
- Express객체(app)에 추가되는 확장 기능들을 Express에서는 미들웨어라고 부름
- UserAgent모듈은 초기화 콜백 함수에 전달되는 req,res객체를 확장하기 때문에
    다른 모듈들보다 먼저 설정되어야 함
*/
app.use(useragent.express());

//클라이언트의 접속을 감지
app.use((req, res, next) => {
  logger.debug("클라이언트가 접속했습니다.");

  //클라이언트가 접속한 시간
  const beginTime = Date.now();

  //클라이언트의 IP주소(출처: 스택오버플로우)
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  //클라이언트의 디바이스 정보 기록(UserAgent사용)
  logger.debug(
    `[client] ${ip} / ${req.useragent.os} / ${req.useragent.browser} (${req.useragent.version}) / ${req.useragent.platform}`
  );

  /*클라이언트가 요청한 페이지 URL
    콜백함수에 전달되는 req파라미터는 클라이언트가 요청한 URL의 각 부분을 변수로 담고 있음 */
  const current_url = urlFormat({
    protocol: req.protocol, //ex) http://
    host: req.get("host"), //ex) 172.16.141.1
    port: req.port, //ex) 3000
    pathname: req.originalUrl, //ex) /page1.html
  });
  logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

  //클라이언트의 접속이 종료된 경우의 이벤트-> 모든 응답의 전송이 완료된 경우
  res.on("finish", () => {
    //접속 종료 시간
    const endTime = Date.now();

    //이번 접속에서 클라이언트가 머문 시간= 백엔드가 실행하는데 걸린 시간
    const time = endTime - beginTime;
    logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
    logger.debug(`--------------------------------`);
  });
  //이 콜백함수를 종료하고 요청 URL에 연결된 기능으로 제어를 넘김
  next();
});

/*4- Express 객체의 추가 설정 */
/**
 * post 파라미터 수신 모듈 설정
 * 추가되는 미들 웨어들 중 가장 먼저 설정해야함
 * body-parser를 이용해  application/x-www-form-urlencoded 파싱
 * extended: true => 지속적 사용
 * extended: false => 한번만 사용
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text()); //text형식의 파라미터 수신 가능
app.use(bodyParser.json()); //json형식의 파라미터 수신 가능

/**HTTP put, delete 전송방식 확장
 * 브라우저 개발자들이 put,delete 방식으로 전송하는 HTTP Header 이름 */

app.use(methodOverride("X-HTTP-Method")); //Microsoft
app.use(methodOverride("X-HTTP-Method-Override")); //Google/ GDate
app.use(methodOverride("X-HTTP-Method")); //IBM

//HTTP플렛 폼에서 put,delete로 전송할 경우 post방식을 사용하되, action주소에 '?_method'라고 추가
app.use(methodOverride("_method")); //HTML from

/**쿠키를 처리할 수 있는 객체 연결
 * cookie-parser는 데이터를 저장,조회할때 암호화 처리를 동반함
 * 이때 암호화에 사용되는 key문자열을 개발자가 정해야함
 */
app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));

/**세션 설정 */
app.use(
  expressSessions({
    //암호화 키
    secret: process.env.SESSION_ENCRYPT_KEY,
    //세션이 초기화되지 않더라도 새로 저장할지 여부(일반적으로 false)
    resave: false,
    //세션이 저장되기 전에 기존의 세션을 초기화 상태로 만들지 여부
    saveUninitialized: false,
  })
);

/*html,css,img,js 등 정적 파일을 url에 노출시킬 폴더 연결
'http://IP(혹은 도메인): port번호' 이후 경로가 router에 등록되지 않은 경로라면
static모듈에 연결된 폴더 안에서 해당 경로를 탐색함 */
app.use("/", serveStatic(process.env.PUBLIC_PATH));
//업로드된 파일이 저장될 폴더를 URL에 노출함
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));
//썸네일 이미지가 저장될 폴더를 URL에 노출함
app.use(process.env.THUMB_URL, serveStatic(process.env.THUMB_DIR));

//favicon설정
app.use(serveFavicon(process.env.FAVICON_PATH));

//라우터(URL 분배기) 객체 설정-> 맨 마지막에 설정
//const router = express.Router();
//라우터를 express에 등록
//app.use("/", router);

/*5- 각 URL별 백엔드 기능 정의 */
//router.route(path).get|post|put|delete((req,res,next) => {})

app.use(SetUpController());

/*6- 설정한 내용을 기반으로 서버 구동 시작 */
const ip = myip();
app.listen(process.env.PORT, () => {
  logger.debug("-------------------------------");
  logger.debug("    Start Express Server       ");
  logger.debug("-------------------------------");
  ip.forEach((v, i) => {
    logger.debug(`server address => http://${v}: ${process.env.PORT}`);
  });
  logger.debug("-------------------------------");
});
