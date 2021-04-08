import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';
import { UserLoginForm } from "./user/UserLoginForm";


export const HomePage = () => {

    const history = useHistory();

    const clickRegisterHandler = () => {
        history.replace('/register')
    }

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
        </div>
    )
}