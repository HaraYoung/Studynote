import mybatisMapper from "mybatis-mapper";
import DBPool from "../helper/DBPool.js";
import RuntimeException from "../exceptions/RuntimeException.js";

class DepartmentService {
  //생성자- Mapper파일을 로드함
  constructor() {
    mybatisMapper.createMapper([
      //mapper의 위치는 소스 파일이아닌 프로젝트 root를 기준으로 상대 경로
      "./mappers/DepartmentMapper.xml",
      "./mappers/StudentMapper.xml",
      "./mappers/ProfessorMapper.xml",
    ]);
  }
  //목록 데이터를 조회
  async getList(params) {
    let dbcon = null;
    let data = null;
    try {
      //DB접속
      dbcon = await DBPool.getConnection();
      let sql = mybatisMapper.getStatement("DepartmentMapper", "selectList",params);
      //spl실행
      let [result] = await dbcon.query(sql);
      //예외 발생 여부
      if (result.length === 0) {
        throw new RuntimeException("조회된 데이터가 없습니다.");
      }
      data = result;
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
    return data;
  }
  //단일 데이터를 조회
  async getItem(params) {
    let dbcon = null;
    let data = null;
    try {
      //DB접속
      dbcon = await DBPool.getConnection();
      let sql = mybatisMapper.getStatement(
        "DepartmentMapper",
        "selectItem",
        params
      );
      //spl실행
      let [result] = await dbcon.query(sql);
      //예외 발생 여부
      if (result.length === 0) {
        //where절 조건이 없기때문에 데이터 없음
        throw new RuntimeException("조회된 데이터가 없습니다.");
      }
      //데이터가 1개 뿐이기 때문에 배열 통째로 필요x
      data = result[0];
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
    return data;
  }
  //데이터 추가와 추가된 결과를 조회하고 리턴
  async addList(params) {
    let dbcon = null;
    let data = null;
    try {
      //DB접속
      dbcon = await DBPool.getConnection();
      let sql = mybatisMapper.getStatement(
        "DepartmentMapper",
        "insertItem",
        params
      );
      //spl실행
      let [{ insertId, affectedRows }] = await dbcon.query(sql);
      if (affectedRows === 0) {
        throw new RuntimeException("저장된 데이터가 없습니다.");
      }
      //새로 저장된 데이터의 PK값을 활용해 다시 조회
      sql = mybatisMapper.getStatement("DepartmentMapper", "selectItem", {
        deptno: insertId
      });

      let [result] = await dbcon.query(sql);
      if (result.length === 0) {
        throw new RuntimeException("저장된 데이터를 조회할 수 없습니다.");
      }
      data = result[0];
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
    return data;
  }
  //데이터 수정과 수정된 결과를 조회하고 리턴
  async editItem(params) {
    //params에 이미 PK값이 들어있음
    let dbcon = null;
    let data = null;
    try {
      //DB접속
      dbcon = await DBPool.getConnection();
      let sql = mybatisMapper.getStatement(
        "DepartmentMapper",
        "updateItem",
        params
      );
      //spl실행
      let [{ affectedRows }] = await dbcon.query(sql);
      if (affectedRows === 0) {
        throw new RuntimeException("저장된 데이터가 없습니다.");
      }
      //수정된 데이터의 PK값을 활용해 다시 조회
      sql = mybatisMapper.getStatement("DepartmentMapper", "selectItem", {
        deptno: params.deptno,
      });

      let [result] = await dbcon.query(sql);
      if (result.length === 0) {
        throw new RuntimeException("저장된 데이터를 조회할 수 없습니다.");
      }
      data = result[0];
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
    return data;
  }
  //데이터 삭제
  async deleteItem(params) {
    let dbcon = null;
    try {
      //DB접속
      dbcon = await DBPool.getConnection();
      let sql = mybatisMapper.getStatement(
        "StudentMapper",
        "deleteItemByDeptno",
        params
      );
      let [{ affectedRows }] = await dbcon.query(sql);
      sql = mybatisMapper.getStatement(
        "ProfessorMapper",
        "deleteItemByDeptno",
        params
      );
      [{ affectedRows }] = await dbcon.query(sql);

      sql = mybatisMapper.getStatement(
        "DepartmentMapper",
        "deleteItem",
        params
      );
      //spl실행
      [{ affectedRows }] = await dbcon.query(sql);
      if (affectedRows === 0) {
        throw new RuntimeException("삭제된 데이터가 없습니다.");
      }
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
  }
  //전체 데이터 수 조회
  async getCount(params) {
    let dbcon = null;
    let cnt = 0;
    try {
      //DB접속
      dbcon = await DBPool.getConnection();
      let sql = mybatisMapper.getStatement(
        "DepartmentMapper",
        "selectCountAll",
        params
      );
      //spl실행
      let [result] = await dbcon.query(sql);
      //예외 발생 여부
      if (result.length > 0) {
        cnt= result[0].cnt;
      }
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) {
        dbcon.release();
      }
    }
    return cnt;
  }
}
export default new DepartmentService();
