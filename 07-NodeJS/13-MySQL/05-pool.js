import { join, resolve } from "path";
import dotenv from "dotenv";
import mysql2 from "mysql2/promise";

//설정파일 내용 가져오기
dotenv.config({ path: join(resolve(), "../config.txt") });

//접속 정보 설정
const connectionInfo = {
  host: process.env.DATABASE_HOST, //MYSQL 서버 주소 (다른 PC인 경우 IP주소),
  post: process.env.DATABASE_PORT, //MYSQL 포트번호
  user: process.env.DATABASE_USERNAME, //MYSQL의 로그인 할 수 있는 계정이름
  password: process.env.DATABASE_PASSWORD, //비밀번호
  database: process.env.DATABASE_SCHEMA, //사용하고자 하는 데이터 베이스 이름
  connectionLimit: process.env.DATABASE_CONNECTION_LIMIT,           //최대 커낵션 수
  connectTimeout:process.env.DATABASE_CONNECT_TIMEOUT,              //커낵션 타임아웃
  waitForConnections:process.env.DATABASE_WAIT_FOR_CONNECTIONS      //커낵션 풀이 다 찬 경우 처리
};
console.info(connectionInfo);

//2- MYSQL 접속 객체 생성 및 접속 정보 설정
const pool = mysql2.createPool(connectionInfo);

//3- pool객체가 지원하는 이벤트 정의
pool.on('connection', (connection)=> {
    console.debug(' >> DATABASE 접속됨 [threaId= %d]', connection.threadId);
});

pool.on('acquire', (connection)=> {
    console.debug(' >> Connection 임대됨 [threaId= %d]', connection.threadId);
});

pool.on('enqueue', ()=> {
    console.debug(' >> 접속이 진행중이거나 모두 임대되어 반납을 기다리는 중...');
});

pool.on('release', (connection)=> {
    console.debug(' >> Connection이 반납됨 [threaId= %d]', connection.threadId);
});

(async ()=> {
    let dbcon= null;

    //4- 커낵션 풀에서 접속객체 하나를 임대함
    //에러가 발생하거나 사용이 종료된 경우 반드시 임대한 접속객체를 반납해야함
    try{
        dbcon= await pool.getConnection();
    }catch(err){
        console.error('접속 객체 임대에 실패했습니다.');
        console.error(err);
        //임대한 자원이 있다면 반드시 반납해야함
        if(dbcon){dbcon.release()}
        //Connection pool 접속 해제(실 시스템에서는 사용할 일 없음)
        pool.end();
        return;
    }
    //5- 정상 접속이 되었다면 SQL문 실행함
    const sql= 'select * from professor where deptno=?';
    const input_data= ['101'];
    try{
        const [result]= await dbcon.query(sql, input_data);
        result.map((v, i)=>{
            console.log("%S %s\t 급여: %d만원\t 입사일: %s", v.name, v.position, v.sal, v.hiredate);
        });
    }catch(err) {
        console.error('SQL문 수행에 실패했습니다.');
        console.error(err);
    }finally{
        //임대한 접속 객체 반납
        if(dbcon){dbcon.release();}
        //Connection Pool 접속 해제 (실 시스템에서는 사용할 일 없음)
        pool.end();
    }
})();