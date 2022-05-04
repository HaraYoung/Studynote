import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

/*메뉴 링크- NavLink: 현재 머물고있는 페이지와 관련된 링크에 css적용 */
const MenuLinkContainer= styled(NavLink)`
    font-size:20px;
    cursor:pointer;
    text-decoration: none;
    padding-bottom: 3px;
    color: black;

    &:hover {
        color: gray;
        text-decoration: underline;
    }
    &:after{
        content:'|';
        display: inline-block;
        padding: 0 7px;
        color: gray;
    }
    &:last-child{
        &:after{
            //글자색을 흰색으로 지정해 화면에서 숨김
            color:white;
        }
    }
    /*URL이 현재 메뉴를 가르키는 경우(콜론이 아닌 점. -주의) 
    활성 메뉴에 적용되는 기본 클래스 이름이 'active'*/
    &.active{
        text-decoration: underline;
        color: gray;
        &::after{
            //흰색 선을 추가해 .active에서 지정한 border를 덮을수있도록 지정
            border-bottom: 4px solid white !important;
        }
    }
`;

const MenuLink=({to, children})=> <MenuLinkContainer to={to}>{children}</MenuLinkContainer>;

export default MenuLink;
//export default ({to, children})=> <MenuLinkContainer to={to}>{children}</MenuLinkContainer>;