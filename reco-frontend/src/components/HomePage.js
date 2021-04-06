import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';


export const HomePage = () => {

    const history = useHistory();

    const clickLoginHandler = () => {
        history.replace('/login')
    }

    const clickRegisterHandler = () => {
        history.replace('/register')
    }

    return (
        <div className="main">
            <h1>RECO</h1>
            <Button variant="outline-primary" onClick={clickLoginHandler}>Login</Button>
            <Button variant="outline-primary" onClick={clickRegisterHandler}>Register</Button>

        </div>
    )
}