/*
@filename: BadRequestException.js
@author: 박세영 (qkrtpdud9899@gmail.com)
@description: 잘못된 요청에 대한 예외상황-함수를 호출할때 상황에 맞는 에러 메세지 전달
*/


class BadRequestException extends Error{
    constructor(msg= '잘못된 요청입니다.'){
        //field는 객체- 객체 자체로 접근
        super(msg);
        //멤버변수 추가
        this._statusCode= 400;
    }
    get statusCode(){
        return this._statusCode;
    }

}

export default BadRequestException;
//export default 내보내기는 소스파일 하나당 한번만 가능
/* 한 파일안에 함수 or 클래스가 a,b,c가 있다고 가정
export {a,b,c}; =>import {a,b,c} from ...
=>{}가 있다면 서브기능들을 사용하는것
*/