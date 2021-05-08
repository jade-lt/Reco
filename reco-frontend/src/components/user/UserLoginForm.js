import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonComponent } from "../ButtonComponent";
import jwt_decode from "jwt-decode";
import { login, updateHeaderOptions } from "../../api";

export function UserLoginForm(props) {
  const history = useHistory();

  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      username: username,
      password: password,
    })
      .then((token) => {
        const decoded = jwt_decode(token);

        const decodedUserId = decoded.id;

        const decodedUsername = decoded.user;

        const decodedUserType = decoded.userType;

        console.log("decoded username", decodedUsername);

        localStorage.setItem("token", token);

        localStorage.setItem("id", decodedUserId);

        localStorage.setItem("username", decodedUsername);

        localStorage.setItem("userType", decodedUserType);

        props.setLoginStatus(true);
        updateHeaderOptions();
        history.push("/dashboard");
        console.log("token", token);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="main">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <br />
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={username}
          />
        </label>
        <br />
        <label>
          Password: <br />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
        </label>
        <br />
        <ButtonComponent buttonLabel="Login" onClick={handleSubmit} />
      </form>
      <h3>Not a Member? Register Now!</h3>
      <ButtonComponent
        buttonLabel="Register"
        onClick={() => history.push(`/register`)}
      />
    </div>
  );
}
