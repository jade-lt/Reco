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
import { BookRecos } from "./components/reco/BookRecos";
import { MovieRecos } from "./components/reco/MovieRecos";
import { TvRecos } from "./components/reco/TvRecos";
import { GameRecos } from "./components/reco/GameRecos";
import { Category } from "./components/category/Category";
import { ComedyRecos } from "./components/genre/ComedyRecos";
import { ActionRecos } from "./components/genre/ActionRecos";
import { CrimeRecos } from "./components/genre/CrimeRecos";
import { DramaRecos } from "./components/genre/DramaRecos";
import { FantasyRecos } from "./components/genre/FantasyRecos";
import { HorrorRecos } from "./components/genre/HorrorRecos";
import { NonFictionRecos } from "./components/genre/NonFictionRecos";
import { OtherRecos } from "./components/genre/OtherRecos";
import { RomanceRecos } from "./components/genre/RomanceRecos";
import { SciFiRecos } from "./components/genre/SciFiRecos";
import { ThrillerRecos } from "./components/genre/ThrillerRecos";
import { WesternRecos } from "./components/genre/WesternRecos";







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
            <UserLoginForm setLoginStatus={setLoggedIn} />
          </Route>

          <Route exact path="/register">
            <UserRegister />
          </Route>

          <Route exact path="/all-recos">
            <AllRecos />
          </Route>

          <Route exact path="/reco/edit/:id">
            <RecoUpdate />
          </Route>

          <Route exact path="/reco/delete/:id">
            <RecoDelete />
          </Route>

          <Route exact path="/reco/create">
            <RecoCreate />
          </Route>

          <Route exact path="/reco/:id">
            <RecoInfo setLoginStatus={setLoggedIn} loginStatus={loggedIn} />
          </Route>

          <Route exact path="/club/:id">
            <ClubInfo setLoginStatus={setLoggedIn} loginStatus={loggedIn} />
          </Route>

          <Route exact path="/category/:name">
            <Category setLoginStatus={setLoggedIn} loginStatus={loggedIn} />
          </Route>

          <ProtectedRoute path="/dashboard" component={UserDashboard} />

          {/* <ProtectedRoute exact path="/reco/create" component={RecoCreate} /> */}

          {/* <ProtectedRoute path="/reco/edit/:id" component={RecoUpdate} /> */}

          {/* <ProtectedRoute exact path="/reco/delete/:id" component={RecoDelete} /> */}

          <ProtectedRoute path="/my-recos" component={MyRecos} />

          <ProtectedRoute path="/my-list" component={MyList} />

          <Route exact path="/list/delete/:id">
            <ListDelete />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/genres">
            <AllGenres />
          </Route>

          <Route exact path="/Comedy-genre">
            <ComedyRecos />
          </Route>

          <Route exact path="/Action-genre">
            <ActionRecos />
          </Route>

          <Route exact path="/Crime-genre">
            <CrimeRecos />
          </Route>

          <Route exact path="/Drama-genre">
            <DramaRecos />
          </Route>

          <Route exact path="/Fantasy-genre">
            <FantasyRecos />
          </Route>

          <Route exact path="/Horror-genre">
            <HorrorRecos />
          </Route>

          <Route exact path="/Non-Fiction-genre">
            <NonFictionRecos />
          </Route>

          <Route exact path="/Other-genre">
            <OtherRecos />
          </Route>

          <Route exact path="/Romance-genre">
            <RomanceRecos />
          </Route>

          <Route exact path="/Sci-Fi-genre">
            <SciFiRecos />
          </Route>

          <Route exact path="/Thriller-genre">
            <ThrillerRecos />
          </Route>

          <Route exact path="/Western-genre">
            <WesternRecos />
          </Route>

          <Route exact path="/categories">
            <AllCategories />
          </Route>

          <Route path="/all-categories/Book">
            <BookRecos />
          </Route>

          <Route exact path="/all-categories/Movie">
            <MovieRecos />
          </Route>

          <Route exact path="/all-categories/TV">
            <TvRecos />
          </Route>

          <Route exact path="/all-categories/Game">
            <GameRecos />
          </Route>
          

          <Route exact path="/all-clubs">
            <AllClubs />
          </Route>

          <Route exact path="/my-club">
            <MyClubs />
          </Route>

          <Route exact path="/Book-Club">
            <BookRecos />
          </Route>

          <Route exact path="/Movie-Club">
            <MovieRecos />
          </Route>

          <Route exact path="/TV-Club">
            <TvRecos />
          </Route>

          <Route exact path="/Game-Club">
            <GameRecos />
          </Route>

          <Route exact path="/my-club/delete/:id">
            <MyClubsDelete />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
