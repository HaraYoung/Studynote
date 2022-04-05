//kakao rest key
const KAKAO_REST_KEY = "8e810070ce84ed84541b41b884110121";

//페이지 번호
let currentPage = 1;

//검색어
queryKeyword = null;

//마지막 페이지인지 검사
let isEnd = false;

//검색폼의 submit 이벤트- 신규 검색
document.querySelector("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();

  //검색어를 가져옴
  const queryField = document.querySelector("#query");
  queryKeyword = queryField.value.trim();

  //검색어가 입력되지 않았을 경우의 예외처리
  if (!queryKeyword) {
    alert("검색어를 입력하세요");
    queryField.focus();
    return;
  }

  //신규 검색
  currentPage = 1;
  get_image_search();
});
//스크롤 이벤트- 추가 검색
window.addEventListener("scroll", (e) => {
  //마지막 페이지이거나 이미 로딩바가 화면에 표시되고 있다면 처리 중단
  if (
    isEnd ||
    document.querySelector("#loading").classList.contains("active")
  ) {
    return;
  }
  //스크롤바의 y좌표
  const scrollTop = window.scrollY;
  //웹브라우저의 창 높이
  const windowHeight = window.screen.availHeight;
  //html문서의 높이
  const documentHeight = document.body.scrollHeight;

  //스크롤바의 반동효과를 고려해 scrollTop+ windowHeight가 실제화면보다 커질수있음
  if (scrollTop + windowHeight >= documentHeight) {
    //2페이지 이후는 추가 검색
    currentPage++;
    get_image_search();
  }
});
//ajax요청후 결과를 화면에 html로 출력하는 함수
async function get_image_search() {
  //로딩바 객체
  const loading = document.querySelector("#loading");

  //로딩바 화면에 표시
  loading.classList.add("active");

  //검색결과가 표시될 영역
  const list = document.querySelector("#list");

  //1페이지에 대한 요청일령우 기존에 표시되고있던 겸색 결과가 있다면 삭제
  if (currentPage == 1) {
    Array.from(list.getElementsByTagName("li")).forEach((v, i) => {
      list.removeChild(v);
    });
  }
  const selectName = document.querySelector("#source");
  const selectValue = selectName[selectName.selectedIndex].value;
  //검색 결과를 저장할 빈 변수
  let json = null;
  try {
      //blog or cafe
    if (selectValue == "blog") {
      json = await axios.get("https://dapi.kakao.com/v2/search/blog", {
        params: {
          query: queryKeyword,
          page: currentPage,
        },
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
        },
      });
    }else if(selectValue== 'cafe'){
        json = await axios.get("https://dapi.kakao.com/v2/search/cafe", {
            params: {
              query: queryKeyword,
              page: currentPage,
            },
            headers: {
              Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
            },
          });
    }
    //응답 결과 확인
    console.log(json);
  } catch (e) {
    console.error(e);
    alert("요청을 처리하는데 실패했습니다");
    return;
  } finally {
    //로딩바 닫기
    loading.classList.remove("active");
  }
  if (json != null) {
    const { data } = json;

    //다음 페이지를 요청할수 있는지를 판단하기 위한 값
    isEnd = data.meta.is_end;

    data.documents.map((v, i) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.setAttribute("href", v.url);
      a.setAttribute("target", "_blank");

      const img = document.createElement("img");
      img.setAttribute("src", v.thumbnail);

      const h2 = document.createElement("h2");
      h2.innerHTML = v.title;

      const p = document.createElement("p");
      p.innerHTML = v.contents;

      const span = document.createElement("span");
      span.classList.add('info');
      //blog or cafe
      if(selectValue =='blog'){
        span.innerHTML=v.blogname;
      }else if(selectValue== 'cafe'){
        span.innerHTML=v.cafename;
      }

      const dateItem= document.createElement('span');
      dateItem.classList.add('info');
      dateItem.innerHTML= new Date(v.datetime).toLocaleString();

      a.appendChild(img);
      a.appendChild(h2);
      a.appendChild(p);
      a.appendChild(span);
      a.appendChild(dateItem);
      li.appendChild(a);
      list.appendChild(li);
    });
  }
}
