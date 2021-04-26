import { useState } from "react";
import jwt from "jwt-decode";
import moment from "moment";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserLoginForm } from "./components/user/UserLoginForm";
import { RecoUpdate } from "./components/reco/RecoUpdate";
import { MyRecos } from "./components/user/MyRecos";
import { RecoCreate } from "./components/reco/RecoCreate";
import { HomePage } from "./components/HomePage";
import { UserRegister } from "./components/user/UserRegister";
import { RecoDelete } from "./components/reco/RecoDelete";
import { Search } from "./components/Search";
import { About } from "./components/About";
import { AllCategories } from "./components/category/AllCategories";
import { Navbar } from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { MyList } from "./components/user/MyList";
import { UserDashboard } from "./components/user/UserDashboard";
import { AllRecos } from "./components/AllRecos"
import { RecoInfo } from "./components/reco/RecoInfo";
import { AllClubs } from "./components/club/AllClubs";
import { ClubInfo } from "./components/club/ClubInfo";
import { ListDelete } from "./components/user/ListDelete";
import { MyClubs } from "./components/user/MyClubs";
import { MyClubsDelete } from "./components/user/MyClubsDelete";
import { AllGenres } from "./components/genre/AllGenres";
import { BookClub } from "./components/club/BookClub";






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

  // const isLoggedOut = () => {
  //   const token = window.localStorage.getItem("token");
  //   if (!token) {
      
  //     return true;
  //   }
  // }

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
            <RecoInfo setLoginStatus={setLoggedIn} loginStatus={loggedIn} />
          </Route>

          <Route exact path="/club/:id">
            {/* <Navbar /> */}
            <ClubInfo setLoginStatus={setLoggedIn} loginStatus={loggedIn} />
          </Route>

          <ProtectedRoute path="/dashboard" component={UserDashboard} />

          {/* <ProtectedRoute exact path="/reco/create" component={RecoCreate} /> */}

          {/* <ProtectedRoute path="/reco/edit/:id" component={RecoUpdate} /> */}

          {/* <ProtectedRoute exact path="/reco/delete/:id" component={RecoDelete} /> */}

          <ProtectedRoute path="/my-recos" component={MyRecos} />

          <ProtectedRoute path="/my-list" component={MyList} />

          <Route exact path="/list/delete/:id">
            {/* <Navbar /> */}
            <ListDelete />
          </Route>

          <Route exact path="/search">
            {/* <Navbar /> */}
            <Search />
          </Route>

          <Route exact path="/about">
            {/* <Navbar /> */}
            <About />
          </Route>

          <Route exact path="/genres">
            {/* <Navbar /> */}
            <AllGenres />
          </Route>

          <Route exact path="/categories">
            {/* <Navbar /> */}
            <AllCategories />
          </Route>

          <Route exact path="/all-clubs">
            {/* <Navbar /> */}
            <AllClubs />
          </Route>

          <Route exact path="/my-club">
            {/* <Navbar /> */}
            <MyClubs />
          </Route>

          <Route exact path="/Book-Club">
            {/* <Navbar /> */}
            <BookClub />
          </Route>

          <Route exact path="/my-club/delete/:id">
            {/* <Navbar /> */}
            <MyClubsDelete />
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
