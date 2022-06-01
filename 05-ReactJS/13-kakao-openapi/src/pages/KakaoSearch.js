import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryString} from '../hooks/useQueryString';
import {useSelector, useDispatch} from 'react-redux';
import {getKakaoSearch} from '../slice/KakaoSlice';
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';      //무한스크롤을 위한 함수참조
/*변수2개 
 - boolean(기본값:false,스크롤이 이동해 화면상 동작하면 true로 변경됨)
 - 참조변수(맨 마지막 리스트에 ref속성을 걸음[ref={참조변수}])
 - 상태값을 모니터링 하다 boolean값이 true로 변경되면 page번호를 +1 후 ajax를 다시 호출
*/
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import GoTop from '../components/GoTop';

//검색 결과에 따라 다른 UI 표시를 위한 컴포넌트- 내부적으로 li태그를 styled-components로 확장한것
import ListItem from '../components/ListItem';
import ImageItem from '../components/ImageItem';

//검색어가 입력되기 전까지는 등장하지 않는 페이지

const ListContainer = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 100%;
box-sizing: border-box;
display: flex;
//검색 종류가 image일 경우
flex-direction: ${props=> props.api === 'image' ? 'row' : 'column'};
flex-wrap: wrap;
margin-bottom: 30px;
`

const KakaoSearch = memo(() => {
    // https://~/검색종류?query=검색어 =>검색종류 = api, 검색어 = query
    //Path파라미터 받아오기-
    //라우트를 정의할떄 /:api 로 정의했음
    const {api}= useParams();
    
    //QueryString의 검색어 가져오기- querystring으로 전달된 변수값을 hook으로 만들어놨음
    const {query} = useQueryString();

    //리덕스를 통한 검색 결과 상태 조회
    const dispatch= useDispatch();
    const {meta, documents, loading, error}= useSelector((state)=> state.kakao);

    //페이지 번호 상태값
    const [page, setPage] = React.useState(1);
    //무한 스크롤 관련
    const [ref, inView]= useInView();   //ref= 참조변수, inView=boolean
    //inView는 마지막 항목이 화면 밖에있을때는 false

    const getContent= React.useCallback((p =1)=>{   //2번
        console.log(`api=${api}, page= ${p}`);
        setPage(p);
        dispatch(getKakaoSearch({
            api: api,
            query: query,
            page: p,
            size: api === 'image' ? 80 : 50
            //카카오API가이드에 image만 최대 목록수가 80
        }));
    },[api, query, dispatch]);      //검색종류가 바뀌거나 검색어가 바뀔때 마다 ajax연동을 새로함

    //검색어가 전닫되었을 경우의 hook- 1번
    React.useEffect(()=> {
        window.scrollTo(0, 0); //=> (x, y)좌표
        getContent(1);
    },[getContent, api, query]);  //페이지가 열릴때 적용됨

    //사용자가 마지막 요소를 보고 있고, 로딩중이 아니라면 - 3번
    React.useEffect(()=>{
        if(inView && !loading){
            getContent(page+ 1);
        }
    },[getContent, inView, loading, page]); //inView의 값이 true 변경되면 page+1을 시키고 ajax를 다시 요청(액션 디스패치)

  return (
    <div>
        <Spinner visible={loading}/>
        <GoTop/>
        {error ? (
            <ErrorView error={error}/>
        ): documents && (  //검색 결과가 있다면 
            <ListContainer api={api}>
                 {/* api={api} => api를 props로 보냄, 이값을 사용해 styled_component의 flex-direction설정 */}
                {documents.map((v, i)=>{ //v= 전체 검색 결과
                    return api === 'image' ?(
                        <ImageItem key={i} type={api} item={v} //한 건의 v 
                        //li태그중 맨 마지막 요소에게 ref속성을 지정하고 참조 객체(ref) 연결-
                        //<~태그 ref={ref} /> - 지금은 html태그가 아닌 컴포넌트니까 컴포넌트 안으로 ref를 전달해야함
                        {...(!meta?.is_end && !loading && documents.length- 1 === i ? {inView: ref}: {})}
                        /*
                        !meta?.is_end && !loading => 추가적으로 컨텐츠를 로딩할수있는 조건
                        ...=> ()안에 만들어진게 복제
                        !meta?.is_end=> meta가 있다면 그 안의 is_end가 거짓일때(참이면 페이지가 없다는 뜻)
                        !loading => 로딩중이 아니고
                        documents.length- 1 => ajax에서 받은 배열 데이터의 마지막 인덱스
                        documents.length- 1 === i => 마지막 인덱스가 현재 반복되고있는 항목과 같다면(마지막 항목임을 검사)
                        {inView: ref} => json 생성, inView=props이름,ref=props자체, props를 보낼때 보통 이름={값}으로 설정하지만 구문안에서 props를 어떤 조건에 따라 명시하고싶거나
                        아예 존재 자치를 조건에 따라 설정하고 싶다면 props를 json으로 구성하면 inView={ref}가 됨
                        * documents를 반복돌며 마지막 한개에만 inView={ref}가 지정됨 *
                        */
                        />
                    ) : (
                        <ListItem key={i} type={api} item={v}
                        {...(!meta?.is_end && !loading && documents.length- 1 === i ? {inView: ref}: {})}
                        />
                    )
                })}
                {/* <h2>Meta</h2>
                {JSON.stringify(meta)} {/*documents가 있다면 meta도 있을것임-둘이 세트이기 떄문 */}
                {/* <h2>Documents</h2>
                {JSON.stringify(documents)} */}
            </ListContainer>
        )}
        {/*=>if(error){...} else{ if(documents){...}} */}
    </div>
  );
});

export default KakaoSearch;