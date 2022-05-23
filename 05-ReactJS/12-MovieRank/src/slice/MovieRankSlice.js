import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL='http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
const API_KEY= '6d2cf4aa96725383235c717f2e569f1e';

//비동기 처리 함수  구현- ajax요청을 위한 함수
export const getMovieRank= createAsyncThunk('MovieRankSlice/getMovieRank', async(payload, {rejectWithValue})=>{
    let result= null;
    try{
        result = await axios.get(API_URL,{

            params :{
                key:API_KEY,
            /**필수
             * key (string) :발급받은 키 값을 입력
             * targetDt (string): 조회하고자 하는 날짜를 yyyymmdd형식으로 입력
             */
            //오픈 API키를 쿼리스트링으로 보내야함
            /**컨트롤로에서 전달하는 파라미터는 payload로 전달됨
             - 단일 값인 경우: payload 자체 그 값
             - json인 경우 payload가 json이 됨
             - getMovieRank를 호출- getMovieRank(123)=> payload가 123
                                - getMovieRank ({a:100,b:200})=> payload.a, payload.b
             */
            targetDt: payload.targetDt
            }
        });
        /*에러가 발생하더라도 HTTP상태 코드는 200으로 응답이 오기때문에 catch문이 동작하지 않음
        그러므로 직접 에러를 감지해야함 */
        if(result.data.faultInfo !== undefined){
            const err= new Error();
            err.response= {status: 500, statusText: result.data.faultInfo.message};
            throw err;
        }
    }catch(e){
        result= rejectWithValue(e.response)
    }
    return result;  //ajax 연동 결과를 리턴
});

//slice 정의 (action함수+ reducer의 개념)
//ajax의 처리결과를 관리할 상태값 정의
const MovieRankSlice= createSlice({
    name: 'movieRank',
    initialState:{
        data: null,         //ajax처리를 통해 수신된 데이터
        loading: false,     //로딩 여부
        error: null         //에러 정보
    },
    extraReducers:{     // ajax연동기능을 호출할때 사용
        [getMovieRank.pending]: (state, {payload})=>{        //로딩중-기존의 상태값 복사후 로딩만 true로 바꿈
            return {...state, loading: true}
        },
        [getMovieRank.fulfilled]: (state, {payload})=>{      //ajax완료-성공
            return{
                data: payload?.data,    //payload가(ajax결과가) 존재할때만 data에 접근함
                loading: false,
                error: null
            }
        },
        [getMovieRank.rejected]: (state, {payload})=>{       //에러
            return{
                data: payload?.data,
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
export default MovieRankSlice.reducer;