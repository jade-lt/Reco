import { useState } from "react";
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';


export const UserLoginForm = () => {

    const [form, setForm] = useState({
        name: '',
        password: ''
    })

    const history = useHistory();

    const changeHandler = (e) => {
        const newFormState = { ...form };
        newFormState[e.target.name] = e.target.value;
        setForm(newFormState);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetch('api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(data => {
            console.log('token data', data)
            window.localStorage.setItem('token', data.token)
            if(data.token) {
                history.push('/dashboard')
            }
        })
    }

    const clickRegisterHandler = () => {
      history.push('/register')

    }

    return (
      <div>
        <div className="main" id="login-form">
            {/* <div className="header-text" id="header-login">
          <h1>Login</h1>
          </div> */}
          <h2>Please Login</h2>
          <form onSubmit={submitHandler}>
            <label>
              Username: <br />
              <input name="name" value={form.name} onChange={changeHandler} />
            </label><br />
            <label>
              Password: <br />
              <input name="password" type="password" value={form.password} onChange={changeHandler} />
            </label><br />
            <Button variant="primary" type="submit">Login</Button>
          </form>
        </div>
        <div>
          <h2>Not a Member? Register Now!</h2>
          <Button variant="primary" type="submit" onClick={clickRegisterHandler}>Register</Button>
        </div>
        </div>
      );
}