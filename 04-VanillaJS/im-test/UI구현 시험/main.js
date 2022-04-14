/*
@filename: RegexHelper.js
@author: 박세영 (qkrtpdud9899@gmail.com)
@description: 회원가입 페이지의 기능
                -click이벤트
*/
let RegexHelper= require('./RegexHelper');
let BadRequestException= require('./BadRequestException');

document.querySelector('#main').addEventListener('submit', e=>{
    e.preventDefault();
    const regexHelper= new RegexHelper();
    try{
        //아이디 검사
        regexHelper.value('#user_id','아이디를 입력하세요.');
        regexHelper.minLength('#user_id',5,'5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
        regexHelper.maxLength('#user_id',20,'5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
        regexHelper.engNum('#user_id','5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
    }
    catch(e){
        alert(e.message);
        console.error(e);
        document.querySelector(e.selector).focus();
        return;
    }
})