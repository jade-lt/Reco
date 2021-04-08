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
          .then(history.push('/'))
      }

    return (
        <div className="main" >
            <div className="header-text" id="header-register">
          <h1>Register</h1>
          </div>
          <div >
          <form onSubmit={submitHandler} id="rego-form">
            <label>
              Username:<br />
              <input name="name" value={form.name} onChange={changeHandler} placeholder="Enter a Username" />
            </label><br />
            <label>
              Password:<br />
              <input name="password" value={form.password} onChange={changeHandler} placeholder="Enter a Username" />
            </label><br/>
            <Button variant="primary" type="submit">Submit</Button>
          </form>
          </div>
        </div>
      );
}