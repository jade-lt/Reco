import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { login, updateHeaderOptions } from "../api";
// import jwt from "jwt-decode";


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
        localStorage.setItem("token", token); 
        props.setLoginStatus(true);  
        updateHeaderOptions(); 
        history.push("/dashboard"); 
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
       <div className="main" id="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Username: <br />
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={username}
          />
        </label><br />

        <label>
          Password: <br />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
        </label><br />

        <Button variant="primary" type="submit">Login</Button>
      </form>
    </div>
    </div>
  );
}



// import { useState } from "react";
// import { useHistory, useLocation } from "react-router";
// import Button from 'react-bootstrap/Button';
// import jwtDecode  from "jwt-decode";


// export const UserLoginForm = (props) => {

//     const [form, setForm] = useState({
//         username: '',
//         password: ''
//     })

//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };

//     const updateHeaderOptions = () => {
//       console.log("updating token for API requests"); //called on login
    
//       const headerOptions = {
//         "Content-Type": "application/json",
//         token: window.localStorage.getItem("token"),
//       };
//     }

//     const changeHandler = (e) => {
//         const newFormState = { ...form };
//         newFormState[e.target.name] = e.target.value;
//         setForm(newFormState);
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         fetch('api/users/login', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(form)
//         })


//         .then((token) => {
//           //handle token
//           console.log(token);
//           const decoded = jwtDecode(token, { header: true });
//           console.log(decoded);
  
//           localStorage.setItem("token", token); //store token
//           props.setLoginStatus(true); //update login state for nav
//           updateHeaderOptions(); //update the API header with new token
//           history.push(from); //route to prior page or homepage
//         })
//         .catch((e) => {
//           console.log(e);
//           //do something to tell user it failed
//         });



//         // .then(response => response.json())
//         // .then(data => {
//         //     console.log('token data', data)
//         //     window.localStorage.setItem('token', data.token)
//         //     if(data.token) {
//         //         history.push('/dashboard')
//         //     }
//         // })


        
//     }

//     const clickRegisterHandler = () => {
//       history.push('/register')

//     }

//     return (
//       <div>
//         <div className="main" id="login-form">
//             {/* <div className="header-text" id="header-login">
//           <h1>Login</h1>
//           </div> */}
//           <h2>Please Login</h2>
//           <form onSubmit={submitHandler}>
//             <label>
//               Username: <br />
//               <input name="username" value={form.username} onChange={changeHandler} />
//             </label><br />
//             <label>
//               Password: <br />
//               <input name="password" type="password" value={form.password} onChange={changeHandler} />
//             </label><br />
//             <Button variant="primary" type="submit">Login</Button>
//           </form>
//         </div>
//         <div>
//           <h2>Not a Member? Register Now!</h2>
//           <Button variant="primary" type="submit" onClick={clickRegisterHandler}>Register</Button>
//         </div>
//         </div>
//       );
// }