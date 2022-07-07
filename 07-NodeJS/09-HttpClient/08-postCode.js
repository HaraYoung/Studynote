import axios from "axios";

(async () => {
  let json = null;
  try {
    //axios를 활용하여 다른 백엔드에게 HTTP get 파라미터를 전달하고 결과를 리턴받음
    const response = await axios.get(
      "https://www.juso.go.kr/addrlink/addrLinkApi.do",
      {
        params: {
          confmKey: "devU01TX0FVVEgyMDIyMDcwNzEyNTQ0OTExMjc3MDg=", //발급받은 승인키
          currentPage: 1, //현재 페이지 번호
          countPerPage: 20, //페이지당 출력할 결과 Row수
          keyword: "서초W", //주소 검색어
          resultType: "json", //검색 결과 형식 설정 (xml,json)
        },
      });

      //console.log(response.data);

    if (response.data.results?.common?.errorCode !== '0') {
      const error = new Error();
      error.response = {
        status: response.data.results.common.errorCode,
        statusText: response.data.results.common.errorMessage,
      }
      throw error;
    }
    json = response.data;
  } catch (error) {
    const errorMsg =
      "[" + error.response.status + "] " + error.response.statusText;
    console.error(errorMsg);
    return;
  }
  json.results.juso.map((v, i) => {
    console.log("[%s]", v.zipNo);
    console.log("[지번주소]" + v.jibunAddr);
    console.log("[도로명 주소]" + v.roadAddr);
    console.log();
  });
})();
