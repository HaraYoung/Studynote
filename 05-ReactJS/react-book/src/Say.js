import React from 'react';

const Say = () => {
    const [msg, setMsg]= React.useState('');
    const onClickEnter= ()=> setMsg('어서오세요!');
    const onClickLeave= ()=> setMsg('안녕히가세요!!');

    const [color, setColor]= React.useState('black');
    return (
        <div>
            <button onClick={onClickEnter}>등장!!</button>
            <button onClick={onClickLeave}>퇴장!!</button>
            <h1 style={{color}}>{msg}</h1> 
            <button style={{color:'red'}} onClick={()=> setColor('red')}> RED </button>
            <button style={{color:'green'}} onClick={()=> setColor('green')}> GREEN </button>          
            <button style={{color:'blue'}} onClick={()=> setColor('blue')}> BLUE </button>          

        </div>
    );
};

export default Say;