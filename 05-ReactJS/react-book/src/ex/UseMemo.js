import React from 'react'

const getAverage= numbers=>{
    console.log('평균값 계산중..');
    if(numbers.length === 0) return 0;
    const sum= numbers.reduce((a, b)=> a + b);
    return sum / numbers.length;
};
const UseMemo = () => {
    const [list, setList] = React.useState([]);
    const [number, setNumber] = React.useState('');
    const inputEl= React.useRef(null);
    const onChange= React.useCallback(e=> {
        setNumber(e.target.value);
    },[]);      //컴포넌트가 처음 렌더링될때만 함수 생성
    const onInsert= React.useCallback(() =>{
        const nextList= list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number,list]);       //number or list가 바뀌었을때만 함수 생성
    const avg= React.useMemo(()=> getAverage(list), [list]);
    return (
    <div>
        <input value={number} onChange={onChange} ref={inputEl}/>
        <button onClick={onInsert}> 등록! </button>
        <ul>
            {list.map((v, i)=>(
                <li key={i}>{v}</li>
            ))}
        </ul>
        <div><b>평균값:: </b> {avg}</div>
    </div>
  );
};

export default UseMemo;