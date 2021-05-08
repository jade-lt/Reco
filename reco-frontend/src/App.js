import { useState } from "react";
import jwt from "jwt-decode";
import moment from "moment";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { RoutePaths } from "./RoutePaths";

function App() {
  const isLoggedIn = () => {
    const token = window.localStorage.getItem("token");
    console.log("token", token)

    if (token) {
      const decoded = jwt(token);
      const expires = moment.unix(decoded.exp);

      return moment().isBefore(expires);
    } else {
      return false;
    }
  };

  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar setLoginStatus={setLoggedIn} loginStatus={loggedIn} />
        <RoutePaths />
        <div className="footer-overlap">
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
