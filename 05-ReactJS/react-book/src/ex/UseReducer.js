import React from "react";

function render(state, action) {
    return {
        ...state,
        [action.name]: action.value  //입력값 그자체- <input>
    };
}

const UseReducer = () => {
  const [state, dispatch] = React.useReducer(render, {
      name:'',
      nickname: ''
  });
  const {name, nickname} = state;
  const onChange= e=>{dispatch(e.target);};
  return <div>
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
  </div>;
};

export default UseReducer;
