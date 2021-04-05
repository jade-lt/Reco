import { useState } from "react";
export const UserLoginForm = () => {

    const [form, setForm] = useState({
        name: '',
        password: ''
    })

    const changeHandler = (e) => {
        const newFormState = { ...form };
        newFormState[e.target.name] = e.target.value;
        setForm(newFormState);
    }

    return (
        <div>
          <h1>Login</h1>
          <form>
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