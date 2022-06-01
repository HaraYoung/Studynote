import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL= {
    web: 'https://dapi.kakao.com/v2/search/web',
    blog: 'https://dapi.kakao.com/v2/search/blog',
    cafe: 'https://dapi.kakao.com/v2/search/cafe',
    book: 'https://dapi.kakao.com/v3/search/book',
    image: 'https://dapi.kakao.com/v2/search/image'
};

const API_KEY= '8e810070ce84ed84541b41b884110121';
//비동기 처리 함수  구현- ajax요청을 위한 함수
export const getKakaoSearch= createAsyncThunk('KakaoSlice/getKakaoSearch', async(payload, {rejectWithValue})=>{
    let result= null;
    try{
        //주소 만들때 API_URL에서 payload.api가 있다면 사용- payload.api에서 ex)blog를 key로 받는값을 가져옴
        //요청 파라미터와 응답 결과 구조가 같다는 전제가 있어야 사용가능- 그렇지 않은경우는 slice를 각각 따로 만들어야함 
        result = await axios.get(API_URL[payload.api ? payload.api: 'web'],{
            /*params로 전달되는 payload의 정보 예시
            query:...,
            sorte:..,
            size:20,
            page:1,
            api:blog - 새로 추가한 로직 */
            params:{
                //payload로 params전달..
                query: payload.query,       //검색어
                sort: payload.sort ? payload.sort : null,   //정렬옵션
                page: payload.page ? payload.page :1,       //패아지
                size: payload.size ? payload.size : 20      
            },
            headers: {Authorization: `KakaoAK ${API_KEY}`}
        });
    }catch(e){
        result= rejectWithValue(e.response)
    }
    return result;  //ajax 연동 결과를 리턴
});

//slice 정의 (action함수+ reducer의 개념)
//ajax의 처리결과를 관리할 상태값 정의
const KakaoSlice= createSlice({
    name: 'kakao',
    initialState:{
        meta: null,
        documents: null,
        loading: false,     //로딩 여부
        error: null         //에러 정보
    },
    reducers: {},
    extraReducers:{     // ajax연동기능을 호출할때 사용
        [getKakaoSearch.pending]: (state, {payload})=>{        //로딩중-기존의 상태값 복사후 로딩만 true로 바꿈
            return {...state, loading: true}
        },
        [getKakaoSearch.fulfilled]: (state, {meta,payload})=>{      //ajax완료-성공
            //성공했을때 전달받는 구조를 백엔드의 연동이력을 보고 그에 맞춰 설계해야함
            //meta.arg를 통해 axios에 전달한 get파라미터를 확인할수있다(meta.arg 객체안에 page,query,size가 모여있음)
            return{
                meta: payload?.data?.meta,
                //페이지가 2이상일 경우 기존의 상태값(documents)에 결합
                //데이터를 덮어쓸지 새로쓸지를 결정
                documents: meta.arg.page > 1 ? state.documents.concat(payload?.data?.documents) : payload?.data?.documents,
                loading: false,
                error: null
            }
        },
        [getKakaoSearch.rejected]: (state, {payload})=>{       //에러
            return{
                meta: null,
                documents: null,
                loading: false,
                error:{
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    }
});

//리듀서 객체 내보네기
export default KakaoSlice.reducer;