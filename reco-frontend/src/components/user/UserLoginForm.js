import { useState } from "react";
import { useHistory } from "react-router";

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
            window.localStorage.setItem('token', data.token)
            if(data.token) {
                history.replace('/')
            }
        })
    }

    return (
        <div>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
            <label>
              Username:
              <input name="name" value={form.name} onChange={changeHandler} />
            </label>
            <label>
              Password:
              <input name="password" value={form.password} onChange={changeHandler} />
            </label>
            <button type="submit" >Submit</button>
          </form>
        </div>
      );
}