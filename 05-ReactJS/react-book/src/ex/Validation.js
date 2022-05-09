import React from "react";
import "./App.css";

const Validation = () => {
  const [password, setPassword] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const input= React.useRef();
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === "0000");
    input.current.focus();
  };
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
        ref={input}
      />
      <br/>
      <button onClick={handleButtonClick}>검증하기!</button>
    </div>
  );
};

export default Validation;
