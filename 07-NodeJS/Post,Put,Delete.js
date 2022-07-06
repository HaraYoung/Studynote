//1- 모듈 참조

//직접 구현한 모듈
import logger from './helper/LogHelper.js';
import {myip, urlFormat} from './helper/urlFormat.js';

//내장 모듈
import url from 'url';
import path from 'path';

//설치가 필요한 모듈
import dotenv from 'dotevn';
import express, { application } from 'express'; //Express 본체
import useragent from 'express-useragent'; //클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from 'serve-static'; //favtion 처리
import bodyParser from 'body-parser';   //post 파라미터 처리
import methodOverride from 'method-override';   //put 파라미터 처리
import { appendFile } from 'fs';


//EXpress 객체의 추가 설정
/**
 * post 파라미터 수신 모듈 설정
 * 추가되는 미들 웨어들 중 가장 먼저 설정해야함
 * body-parser를 이용해  application/x-www-form-urlencoded 파싱
 * extended: true => 지속적 사용
 * extended: false => 한번만 사용
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());         //text형식의 파라미터 수신 가능
app.use(bodyParser.json());         //json형식의 파라미터 수신 가능

/**HTTP put, delete 전송방식 확장
 * 브라우저 개발자들이 put,delete 방식으로 전송하는 HTTP Header 이름 */

app.use(methodOverride('X-HTTP-Method'));                   //Microsoft
app.use(methodOverride('X-HTTP-Method-Override'));         //Google/ GDate
app.use(methodOverride('X-HTTP-Method'));                  //IBM

//HTTP플렛 폼에서 put,delete로 전송할 경우 post방식을 사용하되, action주소에 '?_method'라고 추가
app.use(methodOverride('_method')); //HTML from


/** HTML, CSS, JavaScript, IMG 등의 정적 파일을 URL에 노출시킬 폴더 연결
 * 'http://IP(혹은 도메인):포트번호' 이후의 경로가 router에 등록하지 않은 경로라면
 * static 모듈에 연결된 폴더 안에서 해당 경로를 탐색함
*/
app.use('/',serveStatic(process.env.PUBLIC_PATH));

//favicon 설정
app.use(serveFavicon(process.env.FAVICON_PATH));

//라우터(UTL 분배기) 객체 설정-> 맨마지막에 설정
const router= express.Router();

//라우터를 express에 등록
app.use('/',router)