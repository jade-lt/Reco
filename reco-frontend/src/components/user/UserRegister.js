import { useState } from "react";
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';


export const UserRegister = () => {

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
        fetch('/api/users', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        })
          .then(response => response.json())
          .then(history.push('/login'))
      }

    return (
        <div className="main">
          <h1>Register</h1>
          <form onSubmit={submitHandler}>
            <label>
              Username:
              <input name="name" value={form.name} onChange={changeHandler} />
            </label>
            <label>
              Password:
              <input name="password" value={form.password} onChange={changeHandler} />
            </label>
            <Button variant="outline-primary" type="submit">Submit</Button>
          </form>
        </div>
      );
}