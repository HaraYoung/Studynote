import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//비동기 처리 함수  구현- ajax요청을 위한 함수
export const getList= createAsyncThunk('department/getList', async(payload, {rejectWithValue})=>{
    /*createAsyncThunk()함수를 호출하며 콜백함수를 구현함- 콜백함수가 redux에 의해 호출됨
     *payload는 이 함수를 호출할때 전달되는 파라미터- ajax요청할때 파라미터를 보내야한다면 사용함
     *'department/getList' = getList()의 별칭- 고유해야함, 고유해야하기에 앞에 폴더같이 붙임
     *rejectWithValue = 에러 메세지낼때 사용함
     */
    let result= null;
    try{
        //이전시간에서의 response로 정의했던것 = result를 받아 바로 리턴함
        result = await axios.get('http://localhost:3001/department');
    }catch(e){
        /*에러 발생시 'rejectWithValue()'함수에 에러데이터를 전달하면
        extraReducers의 rejected함수가 호출됨 */
        result= rejectWithValue(e.response);    //-status:에러코드, -responseText:에러 메세지
    }
    return result;  //ajax 연동 결과를 리턴
});

//slice 정의 (action함수+ reducer의 개념)
//ajax의 처리결과를 관리할 상태값 정의
const departmentSlice= createSlice({
    name: 'department',
    initialState:{          //초기 상태값- useAxios랑 똑같이 맞춰놓음(헷갈리지 않게)
        data: null,         //ajax처리를 통해 수신된 데이터
        loading: false,     //로딩 여부
        error: null         //에러 정보
    },
    //내부 action및 동기 action
    reducers: {},       //action함수(일반)
    //외부 action및 비동기 action (ajax용)
    extraReducers:{     // ajax연동기능을 호출할때 사용
        //ajax 함수 한개당 set- return하는 객체가 상태값을 갱신함 
        /* state= 기존의 상태값*/
        [getList.pending]: (state, {payload})=>{        //로딩중-기존의 상태값 복사후 로딩만 true로 바꿈
            return {...state, loading: true}
        },
        //payload=> 위에서 리턴되는 result =ajax 결과
        //안의 데이터 사용- payload.data
        [getList.fulfilled]: (state, {payload})=>{      //ajax완료-성공
            return{
                /*옵셔널 체이닝 기법- js 최신문법
                -  const k= null;
                - if(payload){ k= payload.data;}
                - k= payload ? payload.data : null;
                *payload?.data* - 위의 삼항연산자 축약형 
                */
                data: payload?.data,    //payload가(ajax결과가) 존재할때만 data에 접근함
                loading: false,
                error: null
            }
        },
        //payload=> 에러발생시 결과가 불러옴- rejectWithValue(e.response)
        [getList.rejected]: (state, {payload})=>{       //에러
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
export default departmentSlice.reducer;