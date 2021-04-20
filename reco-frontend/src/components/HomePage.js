import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';
import { UserLoginForm } from "./user/UserLoginForm";


export const HomePage = () => {

    const [recos, setRecos] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetch("/api/recos", {
          headers: {
            token: window.localStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.length) {
              setRecos(data);
            }
          })
          .catch((error) => console.log("catch error:", error));
      }, []);




    const clickRegisterHandler = () => {
        history.replace('/register')
    }

     
      const randomReco = recos[Math.floor(Math.random() * recos.length)];


    console.log(randomReco);
    // console.log(randomReco.name)



    return (
        <div className="main">
            <div className="header-text" id="header-home">
            <h1>Reco</h1>
            </div>
            <h3 id="about"><br />Find and share recommendations <br /> of movies, TV-shows, books and games<br /> with Reco!</h3>

            <div id="home-options">
            <div id="rego">
            <h6 id="rego-text">Not a member? Register Now!</h6>
            <Button variant="primary" onClick={clickRegisterHandler}>Register</Button>
            </div>
            <div id="login-form">
            <h6 id="login-text">Member Login</h6>
            <UserLoginForm />
            </div>
            </div>
            <div>
            {/* <ul>
            <li key={randomReco.id}>
                <h5>{randomReco.name}</h5>
              <img className="reco-img" src={randomReco.img} alt=""></img>

            </li>
        </ul> */}
            </div>
        </div>
    )
}