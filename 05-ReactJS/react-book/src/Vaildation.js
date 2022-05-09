import React from 'react';
import './App.css';

const Vaildation = () => {
    const [password, setPassword]= React.useState('');
    const [clicked,setClicked] = React.useState(false);
    const [validated, setValidated] = React.useState(false);

    const handleChange= (e)=> {
        setPassword(e.target.value);
    }
    const handleButtonClick= ()=> {
        setClicked(true);
        setValidated(password === '0000');
    }
    return (
        <div>
            <input type='password' value={password} onChange={handleChange} className={clicked ? (validated ? 'success')}
        </div>
    );
};

export default Vaildation;