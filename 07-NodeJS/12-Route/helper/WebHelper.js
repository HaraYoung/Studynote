/*
@filename: WebHelper.js
@author: 박세영 (qkrtpdud9899@gmail.com)
@description: 백엔드 개박시 자주 사용되는 res, req 확장 함수들 모음
*/
import { request } from "express";
import logger from "./LogHelper.js";

const WebHelper = () => {
  return (req, res, next) => {
    /*Express의 res, req의 기능을 확장 
        req.foo=() =>{...};
        res.bar= () =>{...};
        */

    //GET,URL,POST,PUT,DELETE 파라미터를 수신하여 값을 리턴하는 함수
    req._getParam = (method, key, def = null) => {
      //파라미터를 HTTP전송방식에 따라 받음
      let value = null;

      /* 1- undefined인 경우 def값으로 대체
            -> 파라미터를 받지만 빈 문자열이거나 공백으로만 구성된경우는 걸러내지 못함*/
      if (method.toUpperCase() === "GET") {
        value = req.query[key] || req.params[key] || def;
      } else {
        value = req.body[key] || def;
      }
      if (value === undefined) {
        value = def;
      }

      //2- 빈 문다열이거나 공백인 경우 걸러냄
      if (value !== null && typeof value == "string") {
        value = value.trim();
        if (value.length === 0) {
          value = def;
        }
      }
      logger.debug("[HTTP %s Params] %s= %s", method, key, value);
      return value;
    };

    //get파라미터 수신 함수-> _get_param함수를 호출함
    req.get = function (key, def) {
      return this._getParam("GET", key, def);
    };
    //post파라미터 수신 함수-> _get_param함수를 호출함
    req.post = function (key, def) {
      return this._getParam("POST", key, def);
    };
    //put파라미터 수신 함수-> _get_param함수를 호출함
    req.put = function (key, def) {
      return this._getParam("PUT", key, def);
    };
    //delete파라미터 수신 함수-> _get_param함수를 호출함
    req.delete = function (key, def) {
      return this._getParam("DELETE", key, def);
    };
    
    //프론트엔드에게 json결과를 출력하는 기능
    res._sendResult= (statusCode, message, data= null) =>{
        /*{
            rt: 결과 코드(200,400,404,500),
            rtmsg:결과메세지 ,
            (200인경우 OK, 그외의 경우는 Error내용
                -> 프론트가 Alert다이얼로그로 사용자에게 제시할 목적)
            data: [..json 데이터...],
            pubdate: 생성일시
        }
         */
        const json= {
            rt: statusCode || 200,
            rtmsg: message || 'OK'
        }
        if(data){
            json.data= data;
        }

        //표준시로부터 한국의 시차를 적용해 IOS포멧을 생성
        const offset= new Date().getTimezoneOffset()* 60000;
        const today= new Date(Date.now()- offset);
        json.pubdate= today.toISOString();

        res.header('Content-Type', 'application/json; charset=utf-8');
        res.header('message', encodeURIComponent(json.rtmsg));
        res.status(json.rt).send(json);
    };
    //결과가 200(ok)인 경우에 대한 json출력
    res.sendResult= (data) => {
        res._sendResult(200, 'OK', data);
    };
    //에러 처리 출력
    res.sendError=(error)=>{ 
        logger.error(`[${error.name}] ${error.message}`);
        logger.error(error.stack);
        if(error.statusCode== undefined){
            error.statusCode= 500;
        }
        res._sendResult(error.statusCode, error.message);
    };
    //express의 그다음 처리 단례로 넘어감
    next();
  };
};

export default WebHelper;