import React from 'react';
//scss모듈 참조- 참조변수 이름 지정
import myScssModule from '../assets/scss/style.module.scss';

//scss 모듈 사용
const CssClass= () =>{
    return(
        <div>
            <h2>Scss Module</h2>

            <div className={myScssModule.myScss}>
                <div className={[myScssModule.myScssBox, myScssModule.red].join(' ')}/>
                <div className={[myScssModule.myScssBox, myScssModule.green].join(' ')}/>
                <div className={[myScssModule.myScssBox, myScssModule.blue].join(' ')}/>
                <div className={`${myScssModule['myScssBox']} ${myScssModule['orange']}`}/>
                <div className={`${myScssModule['myScssBox']} ${myScssModule['yellow']}`}/>
                <div className={`${myScssModule['myScssBox']} ${myScssModule['pink']}`}/>
            </div>
        </div>
    );
};
export default CssClass;
