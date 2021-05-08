import { useState } from "react";
import jwt from "jwt-decode";
import moment from "moment";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import { UserLoginForm } from "./components/user/UserLoginForm";
import { RecoUpdate } from "./components/reco/RecoUpdate";
import { MyRecos } from "./components/user/MyRecos";
import { RecoCreateManually } from "./components/reco/create/RecoCreateManually";
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
import { AllClubs } from "./components/club/AllClubs";
import { ListDelete } from "./components/user/ListDelete";
import { MyClubs } from "./components/user/MyClubs";
import { MyClubsDelete } from "./components/user/MyClubsDelete";
import { AllGenres } from "./components/genre/AllGenres";
import { Genre } from "./components/genre/Genre";
import { Category } from "./components/category/Category";
import { ClubMembership } from "./components/club/ClubMembership";
import { BookCreate } from "./components/reco/create/BookCreate";
import { GameCreate } from "./components/reco/create/GameCreate";
import { MovieCreate } from "./components/reco/create/MovieCreate";
import { TvCreate } from "./components/reco/create/TvCreate";
import { RecoInfoCard } from "./components/reco/RecoInfoCard";
import { CommentCard } from "./components/club/CommentCard";
import { AddComment } from "./components/club/AddComment";

function App() {
  const isLoggedIn = () => {
    const token = window.localStorage.getItem("token");
    console.log("token", token);

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
        <Switch>
          <Route exact path="/reco/add-manually">
            <RecoCreateManually />
          </Route>

          <Route exact path="/login">
            <UserLoginForm setLoginStatus={setLoggedIn} />
          </Route>

          <Route exact path="/register">
            <UserRegister />
          </Route>

          <Route exact path="/reco/edit/:id">
            <RecoUpdate />
          </Route>

          <Route exact path="/reco/delete/:id">
            <RecoDelete />
          </Route>

          <Route exact path="/reco/create">
            <MovieCreate />
            <TvCreate />
            <BookCreate />
            <GameCreate />
            <h3 className="main">Or add a Reco Manually</h3>
            <RecoCreateManually />
          </Route>

          <Route exact path="/reco/:id">
            <RecoInfoCard setLoginStatus={setLoggedIn} loginStatus={loggedIn} />
          </Route>

          <Route exact path="/category/:name">
            <Category setLoginStatus={setLoggedIn} loginStatus={loggedIn} />
          </Route>

          <ProtectedRoute path="/dashboard" component={UserDashboard} />

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
            <Genre genre="Comedy" />
          </Route>

          <Route exact path="/Action-genre">
            <Genre genre="Action" />
          </Route>

          <Route exact path="/Crime-genre">
            <Genre genre="Crime" />
          </Route>

          <Route exact path="/Drama-genre">
            <Genre genre="Drama" />
          </Route>

          <Route exact path="/Fantasy-genre">
            <Genre genre="Fantasy" />
          </Route>

          <Route exact path="/Horror-genre">
            <Genre genre="Horror" />
          </Route>

          <Route exact path="/Non-Fiction-genre">
            <Genre genre="Non-Fiction" />
          </Route>

          <Route exact path="/Other-genre">
            <Genre genre="Other" />
          </Route>

          <Route exact path="/Romance-genre">
            <Genre genre="Romance" />
          </Route>

          <Route exact path="/Sci-Fi-genre">
            <Genre genre="Sci-Fi" />
          </Route>

          <Route exact path="/Thriller-genre">
            <Genre genre="Thriller" />
          </Route>

          <Route exact path="/Western-genre">
            <Genre genre="Western" />
          </Route>

          <Route exact path="/Fiction-genre">
            <Genre genre="Fiction" />
          </Route>

          <Route exact path="/Kids-genre">
            <Genre genre="Kids" />
          </Route>

          <Route exact path="/categories">
            <AllCategories />
          </Route>

          <Route path="/all-categories/Book">
            <h1 className="main">Books</h1>
            <Category category="Book" />
          </Route>

          <Route exact path="/all-categories/Movie">
            <h1 className="main">Movies</h1>

            <Category category="Movie" />
          </Route>

          <Route exact path="/all-categories/TV">
            <h1 className="main">TV Shows</h1>

            <Category category="TV" />
          </Route>

          <Route exact path="/all-categories/Game">
            <h1 className="main">Games</h1>

            <Category category="Game" />
          </Route>

          <Route exact path="/all-clubs">
            <AllClubs />
          </Route>

          <Route exact path="/my-club">
            <MyClubs />
          </Route>

          <Route exact path="/Book-Club">
            <ClubMembership
              category="Book"
              name="Book Club"
              description="a club for people to find and chat about books"
              img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Feducation-learning%2F128%2Freading-512.png&f=1&nofb=1"
            />
            <Category category="Book" />

            <CommentCard club="Book" />
            <AddComment club="Book" />
          </Route>

          <Route exact path="/Movie-Club">
            <ClubMembership
              category="Movie"
              name="Cinema Junkies"
              description="a club for people to find and chat about movies"
              img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Ffood-and-drink-6%2F100%2Ffood-19-512.png&f=1&nofb=1"
            />
            <Category category="Movie" />
            <CommentCard club="Movie" />
            <AddComment club="Movie" />
          </Route>

          <Route exact path="/TV-Club">
            <ClubMembership
              category="TV"
              name="Couch Potatoes"
              description="a club for people to find and chat about tv shows"
              img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-tv-watched-tv-3.png&f=1&nofb=1"
            />
            <Category category="TV" />
            <CommentCard club="TV" />
            <AddComment club="TV" />
          </Route>

          <Route exact path="/Game-Club">
            <ClubMembership
              category="Game"
              name="Gamers"
              description="a club for people to find and chat about games"
              img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.searchpng.com%2Fwp-content%2Fuploads%2F2018%2F12%2FGamer-Png-icon-715x715.png&f=1&nofb=1"
            />
            <Category category="Game" />
            <CommentCard club="Game" />
            <AddComment club="Game" />
          </Route>

          <Route exact path="/my-club/delete/:id">
            <MyClubsDelete />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="footer-overlap"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
