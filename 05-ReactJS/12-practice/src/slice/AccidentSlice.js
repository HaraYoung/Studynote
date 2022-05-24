import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//비동기 처리 함수  구현- ajax요청을 위한 함수
export const accidentList= createAsyncThunk('accident/accidentList', async(payload, {rejectWithValue})=>{
    let result= null;
    try{
        result = await axios.get('http://localhost:3001/traffic_acc',{
            params:{
                //payload로 params전달..
                year: payload?.year
            }
        });
    }catch(e){
        result= rejectWithValue(e.response)
    }
    return result;  //ajax 연동 결과를 리턴
});

//slice 정의 (action함수+ reducer의 개념)
//ajax의 처리결과를 관리할 상태값 정의
const accidentSlice= createSlice({
    name: 'accident',
    initialState:{
        data: null,         //ajax처리를 통해 수신된 데이터
        loading: false,     //로딩 여부
        error: null         //에러 정보
    },
    extraReducers:{     // ajax연동기능을 호출할때 사용
        [accidentList.pending]: (state, {payload})=>{        //로딩중-기존의 상태값 복사후 로딩만 true로 바꿈
            return {...state, loading: true}
        },
        [accidentList.fulfilled]: (state, {payload})=>{      //ajax완료-성공
            return{
                data: payload?.data,    //payload가(ajax결과가) 존재할때만 data에 접근함
                loading: false,
                error: null
            }
        },
        [accidentList.rejected]: (state, {payload})=>{       //에러
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
export default accidentSlice.reducer;