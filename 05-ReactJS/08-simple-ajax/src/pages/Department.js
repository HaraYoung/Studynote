import React from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const Department = () => {
  //화면에 표시할  상태값(ajax연동 결과로 받아올 json)-> 초기값을 빈 배열로 정의함
  const [department, setDepartments] = React.useState([]);
  //현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = React.useState(false);
  /*검색 키워드
   검색어를 ajax로 보낼때 쿼리스트링 파라미터로 보내야함
   검색어의 상태값이 바뀌면 ajax를 새로해 백엔드에서 검색어가 반영된 목록을 새로 받아와야함*/
  const [keyword, setKeyword] = React.useState("");
  //삭제할 항목에 대한 id값을 저장하기 위한 상태값
  const [dropId, setDropId] = React.useState(-1);

  //페이지가 처음 열렸을때와 검색어가 변경되었을때  실행할 hook
  React.useEffect(() => {
    setLoading(true); //Ajax 로딩 시작을 표시

    setTimeout(() => {
      //로딩시간이 너무 빨라 예제에 딜레이 적용으로 확인
      (async () => {
        //즉시 실행 함수
        //let json= null; -즉시 실행 함수 아닐때
        try {
          const response = await axios.get("http://localhost:3001/department", {
            //검색어가 있다면 dname값으로 설정,그렇지 않으면 정의x- 쿼리 스트링
            params: keyword ? { dname: keyword } : null,
          });
          //json= response.data; -즉시 실행 함수 아닐때

          //값이 업데이트되므로 화면이 자동으로 갱신됨
          setDepartments(response.data);
          console.log("response.data:: " + keyword);
        } catch (e) {
          console.error(e);
          alert("Ajax 연동 실패!!");
        } finally {
          //ajax 로딩이 종료됨을 표시- 로딩이미지 사라짐
          setLoading(false);
        }
        /*if(json!= null)setDepartments(json);}
          -즉시 실행 함수 아닐때, ajax연동결과가 있다면 결과를 상태값에 적용*/
      })();
    }, 1000);
  }, [keyword]);

  //겁색어 입력 요소에 연결할 참조 변수
  const myKeywordInput = React.useRef();

  //검색 버튼에 대한 클릭 이벤트
  const onButtonClick = (e) => {
    setKeyword(myKeywordInput.current.value);
  };

  //form에서 submit이벤트가 발생할때 호출될 이벤트 핸들러
  const onDepartmentSave = (e) => {
    //페이지 강제 이동 차단
    e.preventDefault();

    //<form>안에 있는 입력 요소의 값 추출
    const dname = e.currentTarget.dname.value;
    const loc = e.currentTarget.loc.value;
    console.log(`학과 명: ${dname}, 위치: ${loc}`);

    setLoading(true); //Ajax 로딩 시작을 표시
    setTimeout(() => {
      (async () => {
        let json = null;
        try {
          //post 방식으로 전송할 파라미터 정의
          const response = await axios.post(
            "http://localhost:3001/department",
            {
              dname: dname,
              loc: loc,
            }
          );
          console.log(response);
          json = response.data;
          //setDepartments(response.data);
        } catch (e) {
          console.error(e);
          alert("데이터 저장 실패!!");
        } finally {
          //ajax 로딩이 종료됨을 표시- 로딩이미지 사라짐
          setLoading(false);
        }
        if (json != null) {
          const addArr = [json];
          setDepartments(department.concat(addArr));
        }
        /* ajax연동결과가 있다면 결과를 상태값에 적용*/
      })();
    }, 1000);
  };
  //삭제하기 버튼이 클릭되었을때 호출될 이벤트 핸들러
  const onDeleteClick = (e) => {
    //클릭된 자기 자신
    const current = e.currentTarget;
    //클릭된 자신에게 숨어있는 data-id값 추출
    const id = parseInt(current.dataset.id);
    //삭제 대상을 알림
    setDropId(id);
  };
  //dropId가 변경되었을때 실행할 hook
  React.useEffect(() => {
    if (dropId > -1) {
      //id가 일치하지 않는 항목만 filter로 걸러내어 상태값 갱신
      setDepartments(department.filter((v, i) => v.id !== dropId));
      setLoading(true); //Ajax 로딩 시작을 표시
      setTimeout(() => {
        (async () => {
          //백엔드에 데이터가 삭제되었음을 알림
          try {
            //ajax를 통한 데이터 삭제 요청
            await axios.delete(`http://localhost:3001/department/${dropId}`);
          } catch (e) {
            console.error(e);
            alert("데이터 저장 실패!!");
          } finally {
            //ajax 로딩이 종료됨을 표시- 로딩이미지 사라짐
            setLoading(false);
          }
        })();
      }, 1000);
      //상태변수를 되돌림
      setDropId(-1);
    }
  },[dropId]);

  return (
    <div>
      <Spinner visible={loading} />
      <h2> 학과 목록 </h2>
      <form onSubmit={onDepartmentSave}>
        <div>
          <label htmlFor="dname"> 학과 : </label>
          <input type="text" name="dname" id="dname" />
        </div>
        <div>
          <label htmlFor="loc"> 위치 : </label>
          <input type="text" name="loc" id="loc" />
        </div>
        <br />
        <button type="submit"> 저장하기 </button>
      </form>
      <br />
      <hr />

      <form>
        <input type="text" name="keyword" ref={myKeywordInput} />
        &nbsp;&nbsp;&nbsp;
        <button type="button" onClick={onButtonClick}>
          {" "}
          검색{" "}
        </button>
      </form>
      <br />
      <hr />
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>학과 번호</th>
            <th>학과 명</th>
            <th>학과 위치</th>
            <th color="red"> 삭제 </th>
          </tr>
        </thead>
        <tbody>
          {department.length > 0 ? ( //가져온 데이터가 있다면
            department.map((v, i) => {
              return (
                <tr key={v.id}>
                  {/*데이터를 고유하게 식별할수 있는 값을 key 속성에 넣기 */}
                  <td>{v.id}</td>
                  <td>{v.dname}</td>
                  <td>{v.loc}</td>
                  <td><button type="button" onClick={onDeleteClick} data-id={v.id} color='red'>
                       삭제하기</button></td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3" align="center">
                검색 결과가 없습니다!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
