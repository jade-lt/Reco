import { useState } from "react";
import jwt from "jwt-decode";
import moment from "moment";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserLoginForm } from "./components/user/UserLoginForm";
import { RecoUpdate } from "./components/reco/RecoUpdate";
import { UserRecos } from "./components/user/UserRecos";
import { RecoCreate } from "./components/reco/RecoCreate";
import { HomePage } from "./components/HomePage";
import { UserRegister } from "./components/user/UserRegister";
import { RecoDelete } from "./components/reco/RecoDelete";
import { Search } from "./components/Search";
import { About } from "./components/About";
import { Categories } from "./components/Categories";
import { Navbar } from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserList } from "./components/user/UserList";
import { UserDashboard } from "./components/user/UserDashboard";
import { AllRecos } from "./components/AllRecos"
import { RecoInfo } from "./components/reco/RecoInfo";
import { AllClubs } from "./components/club/AllClubs";



function App() {

  const isLoggedIn = () => {
    const token = window.localStorage.getItem("token");
  
    if (token) {
      const decoded = jwt(token);
      const expires = moment.unix(decoded.exp);
  
      //todo set timoute for expiry to auto logout
      //bonus: auto refresh token if user is active and expiry approaches
  
      //true if token exists & expiry < current time
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
        <Switch>
          <Route exact path="/login">
            {/* <Navbar /> */}
            <UserLoginForm setLoginStatus={setLoggedIn} />
          </Route>

          <Route exact path="/register">
            {/* <Navbar /> */}
            <UserRegister />
          </Route>

          <Route exact path="/all-recos">
            {/* <Navbar /> */}
            <AllRecos />
          </Route>

          <Route exact path="/reco/edit/:id">
            {/* <Navbar /> */}
            <RecoUpdate />
          </Route>

          <Route exact path="/reco/delete/:id">
            {/* <Navbar /> */}
            <RecoDelete />
          </Route>

          <Route exact path="/reco/create">
            {/* <Navbar /> */}
            <RecoCreate />
          </Route>

          <Route exact path="/reco/:id">
            {/* <Navbar /> */}
            <RecoInfo />
          </Route>

          <ProtectedRoute path="/dashboard" component={UserDashboard} />

          {/* <ProtectedRoute exact path="/reco/create" component={RecoCreate} /> */}

          {/* <ProtectedRoute path="/reco/edit/:id" component={RecoUpdate} /> */}

          {/* <ProtectedRoute exact path="/reco/delete/:id" component={RecoDelete} /> */}

          <ProtectedRoute path="/my-recos" component={UserRecos} />

          <ProtectedRoute path="/my-list" component={UserList} />

          <Route exact path="/search">
            {/* <Navbar /> */}
            <Search />
          </Route>

          <Route exact path="/about">
            {/* <Navbar /> */}
            <About />
          </Route>

          <Route exact path="/categories">
            {/* <Navbar /> */}
            <Categories />
          </Route>

          <Route exact path="/all-clubs">
            {/* <Navbar /> */}
            <AllClubs />
          </Route>

          <Route exact path="/">
            {/* <Navbar /> */}
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
