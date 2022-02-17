//prototype을 이용한 메서드 정의
const User3 = function (id,email){
    this._id= id;
    this._email= email;
};

//로그인"을 수행하는 메서드
User3.prototype.login= function(){
    console.log
    ("로그인 되었습니다. (id:"+ this._id+ ",email="+ this._email);
    //객체안에 속한 메서드안에서는 생성자가 정의한 멤버변수를 마음껏 활용가능
};

//로그아웃을 수행하는 메서드
User3.prototype.logout= function(){
    console.log
    ("로그아웃 되었습니다. (id:"+ this._id+ ",email="+ this._email);
};


//객체 생성
const student= new User3("학생", "stud@gmail.com");

const teacher= new User3("강사", "teach@gmail.com");

student.login();
student.logout();

teacher.login();
teacher.logout();
//객체안 내장된 메서드 호출

//객체가 갖는 멤버변수 수정
teacher._id= "선생님";
teacher._email= "teachers@gmail.com";

teacher.login();
teacher.logout();
