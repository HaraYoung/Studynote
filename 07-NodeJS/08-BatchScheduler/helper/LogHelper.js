import dotenv from 'dotenv';
import {join, resolve} from 'path';
import {mkdirs} from './FileHelper.js';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

//1- 설정 파일 가져오기
dotenv.config({path: join(resolve(), '../config.env')});

//2- 로그가 저장될 폴더 생성
mkdirs(process.env.LOG_PATH);

//3- 로그가 출력될 형식 지정
const {combine, timestamp, printf, splat, simple} = winston.format;

//4- winston 객체 만들기
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
            name: 'log',
            level: process.env.LOG_LEVEL,                //출력할 로그의 수준 , = process.env.LOG_LEVEL
            datePattern: 'YYMMDD',          //파일 이름에 표시될 날짜 형식
            filename: 'log_%DATE%.log',    //파일 이름 형식. %DATE% : datePattern의 값
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
            level: process.env.LOG_LEVEL,
            format: combine(
                winston.format.colorize(),
                printf((info)=>{
                    return `${info.timestamp} [${info.level}] : ${info.message}`;
                })
            )

        })
    );
}
//6- 생성한 로그 객체 내보내기
export default logger;