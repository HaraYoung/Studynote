import React from 'react'

const useState=()=> {
    const [name,setName]= React.useState('');
    const [nickname, setNickname]= React.useState('');
    const onChangeName= e =>{
        setName(e.target.value);
    };
    const onChangeNickname= e =>{
        setNickname(e.target.value);
    }

  return (
    <div>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>
        </div>
        <br />
        <div>
            <b>이름:: </b><span>{name}</span>
        </div>
        <div>
            <b>닉네임:: </b><span>{nickname}</span>
        </div>
    </div>
  )
}

export default useState;