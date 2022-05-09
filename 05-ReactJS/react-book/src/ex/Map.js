import React from "react";

const Iteration = () => {
  const [names, setNames] = React.useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = React.useState("");

  //새로운 항목을 추가할때 id
  const [nextId, setNextId] = React.useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, //nextId값을 id로 설정
      text: inputText,
    });
    setNextId(nextId + 1); //nextId값에 1을 더함
    setNames(nextNames); //names값을 업데이트
    setInputText(""); //inputText를 비움
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <br />
      <button onClick={onClick}> 추가 </button>
      <ul>{namesList}</ul>
    </>
  );
};
export default Iteration;
