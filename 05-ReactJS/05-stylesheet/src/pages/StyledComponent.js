import React from 'react';
/*컴포넌트 코드안에서 scss문법을 적용한 컴포넌트를 직접 정의
=> 패키지 설치 필요
- yarn add styled-components
- vscode 확장팩: vscode-styled-components */

//기능을 위한 참조
import styled, {css} from 'styled-components';

/*ul태그로 구성된 컴포넌트 정의
- styled.태그이름``(역따옴표) */
const MyGridContainer= styled.ul`
    //scss 작성
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1024px;
    border: 5px solid black;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

//li태그로 구성된 컴포넌트 정의
const MyGridItem= styled.li`
    //width:33%;
    /*전달받은 변수값에 접근하여 넓이를 동적으로 설정
    - JSX로부터 전달받은 변수들은 'props'라는 이름의 객체 형태로 주입받는 콜백함수를 정의함 
     이 콜백함수에서 리턴하는 값이 이 위치에 적용됨*/
     width: ${props=> props.width};
     //= width: ${function(props){return props.width;}};
`;

//div태그로 구성된 컴포넌트 정의
const MyBox= styled.div`
    border: 3px dotted black;
    margin: 5px;
    background-color: white;
    height:100px;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    //color: black;
    &:hover{
        transform: scale(1.05, 1.05) rotate(-10deg);
        color: red;
        border: 3px solid gray;

    }

    /*색상값이 전달된 경우: 해당값 사용, 그렇지않은 경우: 'black'을 기본값으로 사용*/
    color: ${(props)=> props.color || 'black'};
    &:hover{
        transform: scale(1.05, 1.05) rotate(-10deg);
        background-color: ${(props)=> props.color || '#eee'};
        color: gray;
    }

    //props값에 대한 조건절 처리
    ${(props)=>
         props.number% 2=== 1&&
          css`
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
         `}

`;

const StyledComponent= () =>{
    const myColors= ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink'];

    //배열 전체를 100으로 보고 하나당 몇 %인지 계산
    const myWidth= 100/ myColors.length+ '%';
    return(
        <div>
            <h2>Styled Component</h2>

            <h3>단순 태그처럼 사용</h3>
            <MyGridContainer>
                {/*MyGridItem에게 width라는 이름의 변수값 전달 */}
                <MyGridItem width={'15%'}>
                    <MyBox>Item-1</MyBox>
                </MyGridItem>
                <MyGridItem width={'20%'}>
                    <MyBox>Item-2</MyBox>
                </MyGridItem>
                <MyGridItem width={'10%'}>
                    <MyBox>Item-3</MyBox>
                </MyGridItem>
                <MyGridItem width={'35%'}>
                    <MyBox>Item-4</MyBox>
                </MyGridItem>
                <MyGridItem width={'20%'}>
                    <MyBox>Item-5</MyBox>
                </MyGridItem>
            </MyGridContainer>

            <h3>배열원소를 활용한 컴포넌트 사용</h3>
            <MyGridContainer>
                {myColors.map((v,i)=>{
                    return(
                        /*styledComponent에게 HTML속성처럼 전달하는 값들=> 변수로서 적용
                        속성 이름은 특별히 정해진것은 없음 */
                        <MyGridItem key={i} width={myWidth}>
                            <MyBox color={v} number={i}>
                                {v}
                            </MyBox>
                        </MyGridItem>
                    );
                })}
            </MyGridContainer>
        </div>
    );
};
export default StyledComponent;