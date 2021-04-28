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
import { Genre } from "./components/genre/Genre";
import { Category } from "./components/category/Category";
import { ClubChat } from "./components/club/ClubChat";


function App() {

  const isLoggedIn = () => {
    const token = window.localStorage.getItem("token");
  
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

          <Route exact path="/categories">
            <AllCategories />
          </Route>

          <Route path="/all-categories/Book">
            <h1>Books</h1>
            <Category category="Book" />
          </Route>

          <Route exact path="/all-categories/Movie">
          <h1>Movies</h1>

            <Category category="Movie" />
          </Route>

          <Route exact path="/all-categories/TV">
          <h1>TV Shows</h1>

            <Category category="TV" />
          </Route>

          <Route exact path="/all-categories/Game">
          <h1>Games</h1>
            
            <Category category="Game" />
          </Route>
          

          <Route exact path="/all-clubs">
            <AllClubs />
          </Route>

          <Route exact path="/my-club">
            <MyClubs />
          </Route>

          <Route exact path="/Book-Club">
          <Category category="Book" />
          <ClubChat club="Book" username="jade1234" />
          </Route>

          <Route exact path="/Movie-Club">
            <Category category="Movie" />
          <ClubChat club="Movie" username="jade1234" />

          </Route>

          <Route exact path="/TV-Club">
          <Category category="TV" />
          <ClubChat club="TV" username="jade1234" />
          </Route>

          <Route exact path="/Game-Club">
          <Category category="Game" />
          <ClubChat club="Game" username="jade1234" />
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
