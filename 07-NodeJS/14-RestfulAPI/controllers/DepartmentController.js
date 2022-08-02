/*
@filename: DepartmentController.js
@author: 박세영 (qkrtpdud9899@gmail.com)
@description: 
*/

import logger from "../helper/LogHelper.js";
import express from "express";
import BadRequestException from "../exceptions/BadRequestException.js";
import RegexHelper from "../helper/RegexHelper.js";
import departmentService from "../services/DepartmentService.js";
import { pagenation } from "../helper/UtilHelper.js";

const DepartmentController = () => {
  const url = "/department";
  const router = express.Router();

  //전체 목록 조회-> read(select)
  router.get(url, async (req, res, next) => {
    //검색어 파리미터
    const query = req.get("query");

    //페이지 번호 파라미터- 값이 없다면 기본값= 1
    const page = req.get("page", 1);

    //한 페이지에 보여질 목록 수 받기 -가본값= 10
    const rows = req.get("rows", 10);

    const params = {};
    if (query) {
      params.dname = query;
      params.loc = query;
    }

    //데이터 조회
    let json = null;
    let pageInfo = null;
    try {
      //전체 데이터 수 얻기
      const totalCount = await departmentService.getCount(params);
      //페이지 번호 계산- groupCount는 기본값 사용
      pageInfo = pagenation(totalCount, page, rows);

      //limit절 수행
      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;

      json = await departmentService.getList(params);
    } catch (err) {
      return next(err);
    }
    res.sendResult({ pageInfo: pageInfo, item: json });
  });

  //단일행 조회-> read(select)
  router.get(`${url}/:deptno`, async (req, res, next) => {
    //파라미터 받기
    const deptno = req.get("deptno");

    //파라미터 유효성 검사- 반드시 해야하는 작업
    try {
      RegexHelper.value(deptno, "학과 번호가 없습니다.");
      RegexHelper.num(deptno, "학과 번호가 잘못되었습니다.");
    } catch (err) {
      return next(err);
    }

    //데이터 조회
    let json = null;
    try {
      json = await departmentService.getItem({ deptno: deptno });
    } catch (err) {
      return next(err);
    }
    res.sendResult({ item: json });
  });

  //데이터 추가-> create(insert)
  router.post(url, async (req, res, next) => {
    //파라미터 받기
    const dname = req.post("dname");
    const loc = req.post("loc");

    //유효성 검사
    try {
      //loc는 null혀용이기 때문에 굳이 검사 X
      RegexHelper.value(dname, "학과 이름이 없습니다.");
      RegexHelper.maxLength(
        dname,
        20,
        "학과 이름은 최대 20자까지 입력 가능합니다."
      );
    } catch (err) {
      return next(err);
    }
    //데이터 저장
    let json = null;
    try {
      json = await departmentService.addItem({ dname: dname, loc: loc });
    } catch (err) {
      return next(err);
    }
    res.sendResult({ item: json });
  });
  //데이터 수정-> update(update)
  router.put(`${url}/:deptno`, async (req, res, next) => {
    //파라미터 받기
    const deptno = req.get("deptno");
    const dname = req.put("dname");
    const loc = req.put("loc");

    //유효성 검사
    try {
      //loc는 null혀용이기 때문에 굳이 검사 X
      RegexHelper.value(deptno, "학과 번호가 없습니다.");
      RegexHelper.num(deptno, "학과 번호가 잘못되었습니다.");
      RegexHelper.value(dname, "학과 이름이 없습니다.");
      RegexHelper.maxLength(
        dname,
        20,
        "학과 이름은 최대 20자까지 입력 가능합니다."
      );
    } catch (err) {
      return next(err);
    }
    //데이터 저장
    let json = null;
    try {
      json = await departmentService.editItem({
        deptno: deptno,
        loc: loc,
        dname: dname,
      });
    } catch (err) {
      return next(err);
    }
    res.sendResult({ item: json });
  });
  //데이터 삭제-> delete(delete)
  router.delete(`${url}/:deptno`, async (req, res, next) => {
    //파라미터 받기
    const deptno = req.get("deptno");

    //유효성 검사
    try {
      //loc는 null혀용이기 때문에 굳이 검사 X
      RegexHelper.value(deptno, "학과 번호가 없습니다.");
      RegexHelper.num(deptno, "학과 번호가 잘못되었습니다.");
    } catch (err) {
      return next(err);
    }
    try {
      await departmentService.deleteItem({ deptno: deptno });
    } catch (err) {
      return next(err);
    }
    //에러가 나지 않으면 성공이기 때문에 프론트에게 줄 데이터가 없음
    res.sendResult();
  });
};
export default DepartmentController;
