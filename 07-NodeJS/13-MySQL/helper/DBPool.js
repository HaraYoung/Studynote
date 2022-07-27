//필요한 패키지 가져오기
import { join, resolve } from "path";
import dotenv from "dotenv";
import mysql2 from "mysql2/promise";
import logger from './LogHelper.js';
import { query } from "express";

//환경 설정 파일 로드- DB접속정보를 가져오기 위해
dotenv.config({ path:join(resolve(), "../config.txt") });

//DATABASE Connection Pool을 관리하기 위한 싱글톤 클래스
class DBPool{
    //싱글톤 객체
    static current= null;

    //접속 정보 설정- 정적 멤버변수로 만들어줌
    static connectionInfo= {
        host: process.env.DATABASE_HOST, //MYSQL 서버 주소 (다른 PC인 경우 IP주소),
        post: process.env.DATABASE_PORT, //MYSQL 포트번호
        user: process.env.DATABASE_USERNAME, //MYSQL의 로그인 할 수 있는 계정이름
        password: process.env.DATABASE_PASSWORD, //비밀번호
        database: process.env.DATABASE_SCHEMA, //사용하고자 하는 데이터 베이스 이름
        connectionLimit: process.env.DATABASE_CONNECTION_LIMIT,           //최대 커낵션 수
        connectTimeout:process.env.DATABASE_CONNECT_TIMEOUT,              //커낵션 타임아웃
        waitForConnections:process.env.DATABASE_WAIT_FOR_CONNECTIONS      //커낵션 풀이 다 찬 경우 처리
      };

      //싱글톤 객체를 생성해 리턴하는 메서드
      static getInstance(){
        if(DBPool.current == null){
            DBPool.current= new DBPool();
        }
        return DBPool.current;
      }
      //생성자를 생성
      /**
       * DB Connection Pool을 생성하고 필요한 이벤트를 정의함
       * 각 이벤트는 DB Connection의 생성, 임대, 반납 여부를 모니터링 하고
       * DB에 접속되었을 경우 DB에 전달되는 SQL문을 가로채 로그로 기록하는 기능을 구현함
       */
      constructor(){
        //Connection Pool 객체를 멤버변수로써 생성
        this.pool= mysql2.createPool(DBPool.connectionInfo);

        //DB에 접속된 경우 발생할 이벤트
        this.pool.on('connection', (connection)=> {
            logger.info(' >> DATABASE 접속됨 [threaId= %d]', connection.threadId);

            //이 객체로 전달되는 SQL 수행기능을 가로챔
            const oldQuery= connection.query;

            //가로챈 객체의 기능을 로그 기록 후 SQL을 수행하도록 재정의
            connection.query= function(...args) {
                const queryCmd= oldQuery.apply(connection, args);
                /*sql문에 포함된 모든 줄 바꿈 문자를 띄어쓰기로 변환함
                -> sql문에 포함된 2회 연속 공백 문자를 하나의 공백으로 변환함
                    -> 그 결과를 로그로 기록
                */
                logger.debug(queryCmd.sql.trim().replace(/\n/g, " ").replace(/ +(?= )/g, " "));
                return queryCmd;
            }
        });
        
        this.pool.on('acquire', (connection)=> {
            logger.info(' >> Connection 임대됨 [threaId= %d]', connection.threadId);
        });
        
        this.pool.on('release', (connection)=> {
            logger.info(' >> Connection이 반납됨 [threaId= %d]', connection.threadId);
        });
        
      }
      //Connection Pool에서 하나의 DB를 접속 객체를 임대하는 메서드
      async getConnection(){
        let dbcon= null;
        try{
            dbcon= await this.pool.getConnection();
        }catch (err){
        //임대한 자원이 있다면 반드시 반납해야함
        if(dbcon){dbcon.release()}
        logger.error(err);
        throw err;
        }
        return dbcon;
      }
      //DB Connection Pool을 종료
      close(){
        this.pool.end();
      }
}
//싱글톤 객체를 모듈로 내보냄
export default DBPool.getInstance();