    //업로드된 파일의 정보와 결과 코드 및 메세지를 조합하여 응답 정보를 구성함
     const result= {
      rt: result_code,
      rtmsg: result_msg,
      item: req.file