//1- 패키지 참조
import {mkdirs} from './helper/FileHelper';
import {join, resolve} from 'path';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

//프로젝트 폴더 위치 조회
const __dirname= resolve();

//2-환경 설정 정보
const config= {
    //로그 파일이 저장될 경로 및 출력 레벨
    log:{
        //개발자가 필요에 의해 기록하는 정보들을 저장할 파일
        debug:{
            path: join(__dirname, '_files/_logs'),
            level: 'debug'
        },
        //시스템에 심각한 문제가 발생했을 때의 정보를 저장할 파일
        err:{
            path: join(__dirname, '_files/_logs'),
            level: 'error'
        }
    }
}

//3- 로그가 저장될 폴더 생성
mkdirs(config.log.debug.path);
mkdirs(config.log.error.path);

//로그가 출력될 형식 지정
const {combine, timestamp, printf, splat, simple} = winston.format;

//5- winston 객체 만들기
const logger= winston.createLogger({
    //로그의 전반적인 형식
    format: combine(
        timestamp({
            /*날짜 출력 형식은 https://day.js.org/docs/en/display/format 참고
            - format: 'YYYY-MM-DD HH:mm:ss'*/
            format: 'YYYY-MM-DD HH:mm:ss SSS'
        }),
        printf((info)=>{
            return `${info.timestamp} [${info.level}] : ${info.message}`;
        }),
        splat()
    ),
    //일반 로그 규칙 정의
    transports:[
        //하루에 하나씩 파일 형태로 기록하기 위한 설정
        new winstonDaily({
            name: 'debug-file',
            level: config.log.debug.level,   //출력할 로그의 수준
            datePattern: 'YYMMDD',          //파일 이름에 표시될 날짜 형식
            filename: 'log_%DATE%.log',    //파일 이름 형식. %DATE% : datePattern의 값
            maxsize: 50000000,
            maxFiles: 50,
            zippedArchive: true
            }),
            

            //에러 내용만 기록할 별도의 설정
            new winstonDaily({
                name: 'error-file',
                level: config.log.erro.level,  
                datePattern: 'YYMMDD',         
                filename: 'error_%DATE%.log',  
                maxsize: 50000000,
                maxFiles: 50,
                zippedArchive: true

            })
    ]
});

//6- 콘솔 설정
//프로덕션 버전(=상용화 버전)이 아니라면?
if(process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            prettyPrint: true,
            showLevel: true,
            level: config.log.debug.level,
            format: combine(
                winston.format.colorize(),
                printf((info)=>{
                    return `${info.timestamp} [${info.level}] : ${info.message}`;
                })
            )

        })
    );
}

logger.error('error 메세지 입니다 - 1수준');
logger.warn('warn 메세지 입니다 - 2수준');
logger.info('info 메세지 입니다 - 3수준');
logger.verbose('verbose 메세지 입니다 - 4수준');