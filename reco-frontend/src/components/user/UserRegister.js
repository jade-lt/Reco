import { useState } from "react";
import { useHistory } from "react-router";
import { ButtonComponent } from "../ButtonComponent";

export const UserRegister = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    userType: "",
  });

  const history = useHistory();

  const changeHandler = (e) => {
    const newFormState = { ...form };
    newFormState[e.target.name] = e.target.value;
    setForm(newFormState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
        address: form.address,
        userType: "standard",
      }),
    })
      .then((response) => response.json())
      .then(history.push("/login"));
  };

  return (
    <div className="main">
      <h1>REGISTER</h1>
      <div>
        <form id="rego-form">
          <label>
            Username:
            <br />
            <input
              name="username"
              value={form.username}
              onChange={changeHandler}
              placeholder="Enter a Username"
            />
          </label>
          <br />
          <label>
            Password:
            <br />
            <input
              name="password"
              value={form.password}
              onChange={changeHandler}
              placeholder="Enter a Password"
            />
          </label>
          <br />
          <label>
            First Name:
            <br />
            <input
              name="firstName"
              value={form.firstName}
              onChange={changeHandler}
              placeholder="Your First Name"
            />
          </label>
          <br />
          <label>
            Last Name:
            <br />
            <input
              name="lastName"
              value={form.lastName}
              onChange={changeHandler}
              placeholder="Your Last Name"
            />
          </label>
          <br />
          <label>
            Phone:
            <br />
            <input
              name="phone"
              value={form.phone}
              onChange={changeHandler}
              placeholder="Your Phone Number"
            />
          </label>
          <br />
          <label>
            Email:
            <br />
            <input
              name="email"
              value={form.email}
              onChange={changeHandler}
              placeholder="Your Email Address"
            />
          </label>
          <br />
          <label>
            Address:
            <br />
            <input
              name="address"
              value={form.address}
              onChange={changeHandler}
              placeholder="Your Home Address"
            />
          </label>
          <br />
          <ButtonComponent
            buttonLabel="Cancel"
            onClick={() => history.push(`/`)}
          />

          <ButtonComponent buttonLabel="Register" onClick={submitHandler} />
        </form>
      </div>
    </div>
  );
};
