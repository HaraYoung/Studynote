import logger from "../helper/LogHelper.js";
import express from "express";
export default () => {
  const url = "/";
  let result = { rt: 200, rtmsg: "OK" };
  const router = express.Router();
  router.get("/send_get", (req, res, next) => {
    /*ex) ?answer=400&age=10&height=175&weight=80
      get파라미터들은 req.query 객체의 하위 데이터로 저장됨 */
    logger.debug("[프론트엔드로부터 전달받은 GET 파라미터]");
    for (let key in req.query) {
      const str = "\t >> " + key + "= " + req.query[key];
      logger.debug(str);
    }
    // /send_get?answer=0000 형태로 접근한 경우 answer 파라미터 값 추출
    const answer = req.query.answer;
    //or 배열처럼 접근: const answer= req.query['answer'];
    let html = null;
    if (parseInt(answer) == 300) {
      html = "<h1 style='color:blue'> 정답입니다. </h1>";
    } else {
      html = "<h1 style='color:red'> 틀렸습니다. </h1>";
    }
    res.status(200).send(html);
  });
  
  //직접 URL로 테스트
  router.get("/send_url/:username/:age", (req, res, next) => {
    /*URL 파라미터들은 req.params 객체의 하위 데이터로 저장함
      전달받은 URL 파라미터는 get파라미터와 같은 방법으로 사용 가능함 */
    logger.debug("[프론트엔드로부터 전달받은 URL 파라미터]");
    for (let key in req.params) {
      const str = "\t >> " + key + "=" + req.params[key];
      logger.debug(str);
    }
    const html =
      "<h1><span style='color:gray'>" +
      req.params.username +
      "</span>님은 <span style='color:green'>" +
      req.params.age +
      "</span>세 입니다</h1>";
    res.status(200).send(html);
  });
  return router;
};
