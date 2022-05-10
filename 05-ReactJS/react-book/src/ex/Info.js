import React from 'react'
import useInputs from './useInputs'

const Info = () => {
  const [state,onChange]= useInputs({
      name: '',
      nickname: ''
  });
  const {name, nickname} = state;
    return (
    <div>
         <div>
            <input name="name" value={name} onChange={onChange}/>
            <input name="nickname" value={nickname} onChange={onChange}/>
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

export default Info