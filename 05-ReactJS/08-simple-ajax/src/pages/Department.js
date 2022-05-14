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
  //수정할 항목에 대한 id값을 저장하기 위한 상태값
  /*수정하기 버튼 클릭시 버튼에 들어있는 상태값을  setUpdateId를 통해 updateId에 넣음*/
  const [updateId, setUpdateId] = React.useState(-1);

  //페이지가 처음 열렸을때와 검색어가 변경되었을때  실행할 hook
  React.useEffect(() => {
    setLoading(true); //Ajax 로딩 시작을 표시

    setTimeout(() => {
      //로딩시간이 너무 빨라 예제에 딜레이 적용으로 확인
      (async () => {
        //즉시 실행 함수
        //let json= null;
        try {
          const response = await axios.get("http://localhost:3001/department", {
            //검색어가 있다면 dname값으로 설정,그렇지 않으면 정의x- 쿼리 스트링
            params: keyword ? { dname: keyword } : null,
          });
          //json= response.data;

          //값이 업데이트되므로 화면이 자동으로 갱신됨
          //setDepartments(response.data);
          //함수형 업데이트
          setDepartments((department) => response.date);
        } catch (e) {
          console.error(e);
          alert("Ajax 연동 실패!!");
        } finally {
          //ajax 로딩이 종료됨을 표시- 로딩이미지 사라짐
          setLoading(false);
        }
        /*if(json!= null)setDepartments(json);}
          - ajax연동결과가 있다면 결과를 상태값에 적용*/
      })();
    }, 1000);
  }, [keyword]);

  //겁색어 입력 요소에 연결할 참조 변수
  const myKeywordInput = React.useRef();

  //검색 버튼에 대한 클릭 이벤트
  const onButtonClick = React.useCallback((e) => {
    setKeyword(myKeywordInput.current.value);
  }, []);

  //form에서 submit이벤트가 발생할때 호출될 이벤트 핸들러- 일련번호는 시스템이 자동으로 생성
  const onDepartmentSave = React.useCallback((e) => {
    //페이지 강제 이동 차단
    /*form태그는 submit이벤트가 발생하면 무조건 action속성으로 이동하려는 성질이 있음
      -지금은 action속성이 없기때문에 자기 스스로 submit을 하려하고 그 결과 페이지를 리프레시 되려고함 */
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
          //json-sever의 특징: post방식으로 데이터를 저장하면 저장 결과가 나중에 응답결과로 돌아옴-id값 포함해서
          console.log(response);
          //응답결과는 한건의 json객체=> {id:?, dname:?, loc:?}
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
          //기존의 상태값과 배열간 병합을 처리하기 위해 응답 결과를 배열로 묶음
          const addArr = [json];
          //배열 병합 결과로 상태값을 갱신함
          //A.concat(B)=> A와 B의 병합결과 리턴, A와 B둘다 배열이여야함
          setDepartments((department) => department.concat(addArr));
        }
        /* ajax연동결과가 있다면 결과를 상태값에 적용*/
      })();
    }, 1000);
  }, []);
  //삭제하기 버튼이 클릭되었을때 호출될 이벤트 핸들러
  const onDeleteClick = (e) => {
    //클릭된 자기 자신
    const current = e.currentTarget;
    //클릭된 자신에게 숨어있는 data-id값 추출
    const id = parseInt(current.dataset.id);
    //삭제 대상을 알림-삭제 버튼에 누적된 id값을 상태값으로 갱신
    setDropId(id);
  };
  //dropId가 변경되었을때 실행할 hook
  React.useEffect(() => {
    //초기 화면에는 지울 내역이 없기에 if문 조건이 -1보다 클때인것(초기값이 -1이기 때문)
    if (dropId > -1) {
      /*id가 일치하지 않는 항목만 filter로 걸러내어 상태값 갱신
      filter는 조건이 참을 충족하는 내역만 새로운 배열로 만들어줌*/
      setDepartments((department) =>
        department.filter((v, i) => v.id !== dropId)
      );
      /**배열을 for-jf문을 이용해 탐색하여 삭제가 요청된 id값을 찾는 방법
      const departmentCopy= [...department]; //불변성 유지를 위한 상태값(배열)복사
      //departmentCopy -상태값을 화면에 표시하기위한 대상 배열을 가지고있음
      //배열을 반복 돌면서 id값을 비교->추출한 값과 일치한 값이 있다면 삭제후 나머지 상태값 갱신
      for(let i=0; i< departmentCopy.length; i++) {
        if(departmentCopy[i].id== dropId){
          //i번째 항목 삭제
          departmentCopy.splice(i, 1);
          //삭제된 결과를 상태값으로 갱신
          setDepartments(departmentCopy);
          //처리 중단
          break;
        }
      }
      */
      setLoading(true); //Ajax 로딩 시작을 표시
      setTimeout(() => {
        (async () => {
          //백엔드에 데이터가 삭제되었음을 알림
          try {
            //ajax를 통한 데이터 삭제 요청 -${dropId}에 해당되는 값
            /*삭제할때 각각의 데이터를 식별할수 있는 고유 일련번호를 URL파라미터로 넘거야함
            =>일련번호를 삭제버튼에 숨겨놓은 이유임*/
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
  }, [dropId]);

  //수정하기 버튼이 클릭되었을때 호출될 이벤트 핸들러
  //성능 퇴적화를 위해 useCallback()적용
  const onUpdateClick = React.useCallback((e) => {
    e.preventDefault();
    //수정할 항목에 대한 인덱스 번호를 상태값으로 설정
    setUpdateId(parseInt(e.currentTarget.dataset.id));
  }, []);
  //수정사항 저장 버튼이 클릭되었을때 호출될 이벤트 핸들러
  const onUpdateSubmit = React.useCallback((e) => {
    e.preventDefault();

    //이벤트가 발생한 <form>요소 획득
    const current = e.target;

    //<form>요소 내의 <input>요소들을 name속성값으로 접근하여 입력값을 얻음
    const id = current.id.value;
    const dname = current.dname.value;
    const loc = current.loc.value;
    setLoading(true); //Ajax 로딩 시작을 표시

    //백엔드에 데이터가 수정되었음을 알림
    (async () => {
      //수정 결과에 대한 json
      let json = null;
      //Ajax를 통한 데이터 삭제 요청
      try {
        const response = await axios.put(
          `http://localhost:3001/department/${id}`,
          {
            dname: dname,
            loc: loc,
          }
        );
        //수정 결과에 대한 json을 받음
        json = response.data;
      } catch (e) {
        console.error(e);
        alert("데이터 저장 실패!!");
      } finally {
        //ajax 로딩이 종료됨을 표시- 로딩이미지 사라짐
        setLoading(false);
      }
      if (json !== null) {
        //함수형 업데이트
        /*콜백함수의 파라미터로 상태값의 복사본이 전달되므로 이값을 직접 수정해도 됨 */
        setDepartments(department => {
          //원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾음
          const find = department.findIndex((v, i) => v, id === json.id);
          //콜백함수의 true를 리턴하는 위치의 인덱스 번호= find
          //원본 상태값의 새당 인댁스 번호(find)위치부터 1개를 ajax로 반환받은 수정결과 데이터로 교체함
          department.splice(find, 1, json);
          //수정된 원본 배열을 리턴
          return department;
        });
      }
    })();
    //상태변수를 되돌림
    setUpdateId(-1);
  }, []);

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
          검색
        </button>
      </form>
      <br />
      <hr />
      <br />
      <form onSubmit={onUpdateSubmit}> {/*수정사항 저장 버튼 클릭시  form태그에서 이벤트 발생*/}
        <table border="1">
          <thead>
            <tr>
              <th>학과 번호</th>
              <th>학과 명</th>
              <th>학과 위치</th>
              <th> 수정 </th>
              <th> 삭제 </th>
            </tr>
          </thead>
          <tbody>
            {department.length > 0 ? ( //가져온 데이터가 있다면
              department.map((v, i) => {
                return (
                  /*데이터를 고유하게 식별할수 있는 값을 key 속성에 넣기 */
                  <tr key={v.id}>
                    {/*상태값에 저장되어있는 수정할 항목의 인덱스에 해당하는 원소라면 */}
                    {updateId === v.id ? (
                      <>
                        {/*수정을 위한 <input>요소를 표시 */}
                        <td>
                          {/*onChange이벤트가 적용되지 않은 상태에서는 기본값은 defaultValue,
                            이벤트가 적용되고 있을때만 value
                            hidden- 엉뚱한 데이터 수정하는것을 방지*/}
                          <input type="hidden" name="id" defaultValue={v.id} />
                          {v.id}
                        </td>
                        <td>
                          <input
                            type="text"
                            name="dname"
                            defaultValue={v.dname}
                          />
                        </td>
                        <td>
                          <input type="text" name="loc" defaultValue={v.loc} />
                        </td>
                        <td colSpan="2">
                          <button type="submit"> 수정 사항 저장 </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{v.id}</td>
                        <td>{v.dname}</td>
                        <td>{v.loc}</td>
                        <td>
                          <button
                            type="button"
                            data-id={v.id}
                            onClick={onUpdateClick}
                          >
                            수정하기
                          </button>
                        </td>
                        <td>
                          {/*일련번호를 data속성으로 숨겨놓고 있는 삭제 버튼 */}
                          <button
                            type="button"
                            onClick={onDeleteClick}
                            data-id={v.id}
                            color="red"
                          >
                            삭제하기
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" align="center">
                  검색 결과가 없습니다!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
};

//React.memo()를 사용해 함수형 컴포넌트의 리렌더링 성능 최적화
export default React.memo(Department);
