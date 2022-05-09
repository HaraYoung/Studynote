import React from "react";

const UseEffect = () => {
  const [name, setName] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  React.useEffect(() => {
    //화면이 로딩될때 실행
    console.log('effect');
    console.log(name);
    
    //화면의 로딩이 종료될때 실행
    return () => {
      console.log('unmount');
    };
  },[]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <br />
      <div>
        <b>이름:: </b>
        <span>{name}</span>
      </div>
      <div>
        <b>닉네임:: </b>
        <span>{nickname}</span>
      </div>
    </div>
  );
};

export default UseEffect;
