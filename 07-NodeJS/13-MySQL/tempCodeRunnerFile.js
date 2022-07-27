import { join, resolve } from "path";
import dotenv from "dotenv";
import mysql from "mysql2";

//설정파일 내용 가져오기
dotenv.config({ path: join(resolve(), "../config.txt") });

//접속 정보 설정
const connectionInfo = {
  host: process.env.DATABASE_HOST, //MYSQL 서버 주소 (다른 PC인 경우 IP주소),
  post: process.env.DATABASE_PORT, //MYSQL 포트번호
  user: process.env.DATABASE_USERNAME, //MYSQL의 로그인 할 수 있는 계정이름
  password: process.env.DATABASE_PASSWORD, //비밀번호
  database: process.env.DATABASE_SCHEMA, //사용하고자 하는 데이터 베이스 이름
};
console.info(connectionInfo);

//2- MYSQL 접속 객체 생성
const dbcon = mysql.createConnection(connectionInfo);

//3- 데이터 베이스 접속
dbcon.connect((error) => {
  if (error) {
    console.error("데이터베이스 접속에 실패했습니다.");
    console.error(error);
    return;
  }
  const targetDeptno = 101;

  //4- INSERT,UPDATE,DELETE 쿼리 생성하기
  dbcon.query(
    "delete from student where deptno=?",
    [targetDeptno],
    (error, results) => {
      if (error) {
        console.log("SQL문이 실행에 실패했습니다.");
        console.log(error);
        dbcon.end();
        return;
      }
      dbcon.query(
        "delete from professor where deptno=?",
        [targetDeptno],
        (error, results) => {
          if (error) {
            console.log("SQL문이 실행에 실패했습니다.");
            console.log(error);
            dbcon.end();
            return;
          }
          dbcon.query(
            "delete from department where deptno=?",
            [targetDeptno],
            (error, results) => {
              if (error) {
                console.log("SQL문이 실행에 실패했습니다.");
                console.log(error);
                dbcon.end();
                return;
              }
              //저장결과 확인
              console.log("반영된 데이터의 수: " + results.affectedRows);
              //데이터베이스 접속 해제 <중요>
              dbcon.end();
            }
          );
        }
      );
    }
  );
});
