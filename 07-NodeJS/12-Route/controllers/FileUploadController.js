import logger from '../helper/LogHelper.js';
import express from 'express';
import { initMulter, checkUploadError, createThumbnail, createThumbnailMultiple} from "../helper/FileHelper.js";

export default () => {

 const router = express.Router();
 router.route('/upload/single').post((req, res, nex)=>{
    /*name속성이 myphoto인 경우에 대한 업로드를 수행
    -> multer객체가 생성되고 설정 내용이 실행됨 
    <input type='file' name='myphoto'/>*/
    const upload= initMulter().single('myphoto');
    upload(req,res, (err)=>{
      console.group('request');
      console.debug(req.file);
      console.groupEnd();
  
      //에러 여부를 확인하여 결과 코드와 메세지를 생성함
      const {result_code, result_msg}= checkUploadError(err);
  
      
      //업로드 결과가 성공이라면 썸네일 생성 함수를 호출함
      if(result_code ==200){
        try{
          createThumbnail(req.file)
        }catch(error){
          console.error(error);
          result_code= 500;
          result_msg= '썸네일 이미지 생성에 실패했습니다.';
        }
      }
  
      //업로드된 파일의 정보와 결과 코드 및 메세지를 조합하여 응답 정보를 구성함
       const result= {
        rt: result_code,
        rtmsg: result_msg,
        item: req.file,
       };
       //준비한 결과값 변수를 활용해 클라이언트에게 응답을 보냄
       res.status(result_code).send(result);
    });
  });
  
  // public/07_upload_multi.html
  router.route('/upload/multiple').post((req, res, next) => {
    //업로드 처리시 배열로 설정
    req.file=[];
      /*name속성이 myphoto인 경우에 대한 업로드를 수행
    -> multer객체가 생성되고 설정 내용이 실행됨 
    <input type='file' name='myphoto'/>*/
    const upload= initMulter().array('myphoto');
  
    //single upload와 동일한 코드 재사용
    upload(req,res, (err)=>{
      console.group('request');
      console.debug(req.file);
      console.groupEnd();
  
      //에러 여부를 확인하여 결과 코드와 메세지를 생성함
      const {result_code, result_msg}= checkUploadError(err);
  
      //업로드 결과가 성공이라면 썸네일 생성 함수를 호출함
      if(result_code ==200){
        try{
          createThumbnailMultiple(req.file);
        }catch(error){
          console.error(error);
          result_code= 500;
          result_msg= '썸네일 이미지 생성에 실패했습니다.';
        }
      }
  
      //업로드된 파일의 정보와 결과 코드 및 메세지를 조합하여 응답 정보를 구성함
       const result= {
        rt: result_code,
        rtmsg: result_msg,
        item: req.file,
       };
       //준비한 결과값 변수를 활용해 클라이언트에게 응답을 보냄
       res.status(result_code).send(result);
    });
  })
  
 return router;
};