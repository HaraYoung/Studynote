//모듈 참조를 통해 하나의 싱글톤 객체를 전달 받음
import DBPool from "./helper/DBPool.js";

(async ()=> {
    //커낵션을 임대하는 메서드가 async이므로 이 메서드를 호출할 때에도 비동기가 적용되어야함
    const dbcon= await DBPool.getConnection();

    //임의의 SQL문 수행
    const sql= "select name from student";
    const [result1]= await dbcon.query(sql);
    console.log(result1);

    //임대한 커낵션을 반납함
    dbcon.release();

    //DB Connection Pool을 종료 -> 백엔드 프로그램 자체가 종료될 경우 수행
    DBPool.close();
})();