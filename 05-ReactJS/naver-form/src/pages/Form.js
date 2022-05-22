import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "../로고.png";

/*전체적인 CSS손보기 ->  ajax 구현-> ajax 실험후 작동한다면 -> 유효성 검사 넣기*/

const FormStyle = styled.div`
  /*공통 영역*/
  html,
  body {
    background-color: #f5f6f7;
    width: 100%;
    height: 100%;
    font-family: Dotum, "돋움", Helvetica, sans-serif;
    font-size: 12px;
    margin: auto;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  ul,
  li {
    list-style: none;
  }

  #header,
  #main,
  #footer {
    margin: auto;
    width: 40%;
    max-width: 768px;
    min-width: 460px;
  }
  /*head 영역*/
  #header {
    padding: 60px 0 54px;
    img {
      width: 40%;
      margin-left: 200px;
    }
  }

  /*main 영역*/
  #main {
.form-item {
  padding: 15px 0;
}

.form-item:first-child {
padding-top: 0;
}
.form-item:last-child {
text-align: center;
}
label {
font-size: 14px;
font-weight: 700;
cursor: pointer;
display: inline-block;
margin-bottom: 10px;
}
  }
  input {
    border: solid 1px #a7a7a7;
    width: 100%;
    height: 51px;
    cursor: pointer;
    padding-left: 10px;
    &:focus {
      outline: 1px solid #00a149;
      /*https://velog.io/@ssumniee/ 참고*/
    }
  }
  .relative {
    position: relative;
  }
  /*아이디 입력란 안의 텍스트영역*/
  .id-in {
    position: absolute;
    top: 16px;
    right: 13px;
    font-size: 15px;
    line-height: 18px;
    color: #8e8e8e;
  }
  /*비밀번호 입력란 안의 아이콘 영역1*/
  .icon1 {
    position: absolute;
    background-image: url(./m_icon_pw_step.png);
    top: 50%;
    right: 13px;
    width: 24px;
    height: 24px;
    margin-top: -15px;
    background-repeat: no-repeat;
    background-size: 125px 75px;
    cursor: pointer;
  }
  /*비밀번호 입력란 안의 아이콘 영역2*/
  .icon2 {
    position: absolute;
    background-image: url(./m_icon_pw_step.png);
    top: 50%;
    right: 13px;
    width: 24px;
    height: 24px;
    margin-top: -12px;
    background-repeat: no-repeat;
    background-size: 125px 75px;
    cursor: pointer;
    background-position: -27px 0;
    #user_mm {
      width: 181px;
      height: 55px;
      margin-left: 15px;
    }
    /*일 입력란 영역*/
    .th-ma-r {
        margin-right: 0;
    }
    /*월 선택영역*/
    #gender,
    #nation {
      width: 102%;
      height: 51px;
      padding-left: 10px;
    }

    /*이메일 옆*/
    .email-item {
      font-size: 12px;
      font-weight: 400;
      color: #8e8e8e;
    }
    .tel-width {
      width: 70%;
      margin: 10px 0;
    }
    /*버튼 공통*/
    .button-item {
      background-color: #03c75a;
      color: white;
      border: 1px solid #00a149;
    }
    .button1 {
      display: inline-block;
      padding: 15px;
      width: 100%;
      margin-left: 20px;
      text-align: center;
    }
    .button2 {
      width: 100%;
      padding: 10px 0;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
}
  .float-left {
    float: left;
    margin-right: 15px;
  }
  .form-item::after,
  .float-none::after {
    content: "";
    display: block;
    clear: both;
    float: none;
  }
  .float-none {
    margin-left: 50px;
  }
  #footer {
    padding-bottom: 20px;
    .ma-le {
      margin-left: 130px;
    }
    address {
      display: inline;
      font: 9px Verdana;
      padding-left: 5px;
    }
    ul li a:hover,
   address a:hover {
     color: #438a01;
     text-decoration: underline;
   }
  }
`;

const Form = () => {
  return (
    <FormStyle>
      <div id="header">
        <NavLink to="#">
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <form id="main" name="join-form">
        <div className="form-item">
          <label for="user_id">아이디</label>
          <div className="relative">
            <input type="text" name="user_id" id="user_id" />
            <span className="id-in">@naver.com</span>
          </div>
        </div>
        <div className="form-item">
          <label for="user_pw">비밀번호</label>
          <div className="relative">
            <input type="password" name="user_pw" id="user_pw" />
            <span className="icon1"></span>
          </div>
        </div>
        <div className="form-item">
          <label for="user_pw">비밀번호 재확인</label>
          <div className="relative">
            <input type="password" name="user_pw_re" id="user_pw_re" />
            <span className="icon2"></span>
          </div>
        </div>
        <div className="form-item">
          <label for="user_name">이름</label>
          <div>
            <input type="text" name="user_name" id="user_name" />
          </div>
        </div>
        <div className="form-item">
          <label style={{ display: "block" }} for="user_birth">
            생년월일
          </label>
          <div className="float-left">
            <input
              type="text"
              name="user_yy"
              id="user_yy"
              placeholder="년(4자)"
            />
          </div>
          <div className="float-left">
            <select name="user_mm" id="user_mm" >
              <option value="">월</option>
              {/*반복문으로 설정 */}
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="float-left th-ma-r">
            <input type="text" name="user_dd" id="user_dd" placeholder="일" />
          </div>
        </div>
        <div className="form-item">
          <label for="gender" style={{ display: "block" }}>
            성별
          </label>
          <select id="gender" name="gender">
            <option value="">성별</option>
            <option value="M">남자</option>
            <option value="F">여자</option>
            <option value="U">선택안함</option>
          </select>
        </div>
        <div className="form-item">
          <label for="email">본인 확인 이메일</label>
          <span className="email-item">(선택)</span>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="선택입력"
            />
          </div>
        </div>
        <div className="form-item">
          <label for="tel">휴대 전화</label>
          <div>
            <select id="nation">
              <option value="82">대한민국 +82</option>
              <option value="44">영국 +44</option>
              <option value="1">미국/캐나다 +1</option>
            </select>
          </div>
          <div className="float-left tel-width">
            <input type="tel" name="tel" id="tel" placeholder="전화번호 입력" />
          </div>
          <div className="form-item float-left">
            <NavLink className="button-item button1" to="#aut-num">
              <span>인증번호 받기</span>
            </NavLink>
          </div>
          <div>
            <input id="aut-num" placeholder="인증번호를 입력하세요" disabled />
          </div>
        </div>
        <div className="form-item">
          <button className="button-item button2" type="submit">
            <span>가입하기</span>
          </button>
        </div>
      </form>
      <div id="footer">
        <ul className="float-none">
          <li className="float-left">
            <NavLink to="#">이용약관</NavLink>
          </li>
          <li className="float-left">
            <NavLink to="#">
              <b>개인정보처리방침</b>
            </NavLink>
          </li>
          <li className="float-left">
            <NavLink to="#">책임의 한계와 법적고지</NavLink>
          </li>
          <li className="float-left">
            <NavLink to="#">회원정보 고객센터</NavLink>
          </li>
        </ul>
        <NavLink to="#" className="ma-le">
          <img src={Logo} width="63px" alt="logo" />
        </NavLink>
        <address>
          Copyright
          <NavLink to="#">
            <b>NAVER Corp. </b>
          </NavLink>
          All Rights Reserved.
        </address>
      </div>
    </FormStyle>
  );
};

export default Form;
