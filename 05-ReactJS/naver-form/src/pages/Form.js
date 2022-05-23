import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "../로고.png";

/*전체적인 CSS손보기 ->  ajax 구현-> ajax 실험후 작동한다면 -> 유효성 검사 넣기*/

const FormStyle = styled.div`
  margin: 0 auto;
  width: 460px;
  #header {
    padding: 60px 0 20px;
    display: flex;
    justify-content: center;
    img {
      width: 240px;
      height: 44px;
    }
  }
  #main {
    .form-item {
      padding: 0.5% 0;
      label {
        font-size: 14px;
        font-weight: bold;
        display: block;
        margin: 10px 0;
        cursor: pointer;
      }
      div {
        position: relative;
        input {
          width: 100%;
          cursor: pointer;
          height: 51px;
          border: solid 1px #dadada;
          &:focus {
            outline: 1px solid #03c75a;
          }
        }
        .id-in {
          position: absolute;
          top: 16px;
          right: 13px;
          font-size: 15px;
          line-height: 18px;
          color: #8e8e8e;
          font-weight: bold;
        }
      }
      &.name-form {
        padding-top: 5%;
      }
      .birthArea {
        display: flex;
        justify-content: space-between;
        .select {
          margin-left: 5%;
          width: 65%;
          select {
            width: 65%;
            height: 55px;
            border: solid 1px #dadada;
            background: #fff;
            cursor: pointer;
            &:focus {
              outline: 1px solid #03c75a;
            }
          }
        }
        input {
          box-sizing: inherit;
          padding-left: 4px;
        }
        .th-ma-r {
          margin-left: -15%;
        }
      }

      #gender {
        box-sizing: inherit;
        width: 100%;
        padding-right: 1%;
        cursor: pointer;
        border: solid 1px #dadada;
        height: 55px;
        &:focus {
          outline: 1px solid #03c75a;
        }
      }
    }
    .emailText {
      display: flex;
      cursor: pointer;
      .email-item {
        display: inline-block;
        margin-top: 3%;
        font-size: 12px;
        color: #8e8e8e;
      }
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
          <div>
            <input type="text" name="user_id" id="user_id" />
            <span className="id-in">@naver.com</span>
          </div>
        </div>
        <div className="form-item">
          <label for="user_pw">비밀번호</label>
          <div>
            <input type="password" name="user_pw" id="user_pw" />
            <span className="icon1"></span>
          </div>
        </div>
        <div className="form-item">
          <label for="user_pw">비밀번호 재확인</label>
          <div>
            <input type="password" name="user_pw_re" id="user_pw_re" />
            <span className="icon2"></span>
          </div>
        </div>
        <div className="form-item name-form">
          <label for="user_name">이름</label>
          <div>
            <input type="text" name="user_name" id="user_name" />
          </div>
        </div>
        <div className="form-item">
          <label for="user_birth">생년월일</label>
          <div className="birthArea">
            <div className="float-left">
              <input
                type="text"
                name="user_yy"
                id="user_yy"
                placeholder="년(4자)"
              />
            </div>
            <div className="select">
              <select name="user_mm" id="user_mm">
                <option value="">월</option>
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
        </div>
        <div className="form-item">
          <label for="gender">성별</label>
          <select id="gender" name="gender">
            <option value="">성별</option>
            <option value="M">남자</option>
            <option value="F">여자</option>
            <option value="U">선택안함</option>
          </select>
        </div>
        <div className="form-item">
          <div className="emailText">
            <label for="email">본인 확인 이메일</label>
            <span className="email-item">(선택)</span>
          </div>
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
