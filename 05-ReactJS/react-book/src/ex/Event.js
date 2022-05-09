import React from "react";

const Event = () => {
    const[form, setForm]= React.useState({
        name: "",
        msg: ""
    });
    const {name, msg}= form;
  const handlerChange = (e) => {
    const nextForm= {
        ...form,
        [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const handlerClick = (e) => {
    alert(name+': '+ msg);
    setForm({
        name: '',
        msg: ''
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlerClick();
    }
  };
  return (
    <div>
      <h1>이벤트를 연습해보아용</h1>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={handlerChange}
      />
      <br />
      <input
        type="text"
        name="msg"
        placeholder="Message"
        value={msg}
        onChange={handlerChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handlerClick}> 확인! </button>
    </div>
  );
};

export default Event;
