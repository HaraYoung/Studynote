/*
@filename: BadRequestException.js
@author: 박세영 (qkrtpdud9899@gmail.com)
@description: 잘못된 요청에 대한 예외상황-함수를 호출할때 상황에 맞는 에러 메세지 전달
*/


class BadRequestException extends Error{
    constructor(msg= '잘못된 요청입니다.', selector= null){
        super(msg);
        //멤버변수 추가
        this._statusCode= 400;
        this._selector= selector;
    }
    get statusCode(){
        return this._statusCode;
    }
    get selector(){
        return this._selector;
    }
    set selector(params){
        this._selector= params;
    }
}

/*for node.js*/
module.exports= BadRequestException;