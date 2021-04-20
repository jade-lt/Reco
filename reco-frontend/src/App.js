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
import { Clubs } from "./components/Clubs";
import { Navbar } from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserList } from "./components/user/UserList";
import { UserDashboard } from "./components/user/UserDashboard";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Navbar />
            <UserLoginForm />
          </Route>

          <Route exact path="/register">
            <Navbar />
            <UserRegister />
          </Route>

          <ProtectedRoute path="/dashboard" component={UserDashboard} />


          <ProtectedRoute path="/reco/create" component={RecoCreate} />

          <ProtectedRoute path="/reco/edit/:id" component={RecoUpdate} />

          <ProtectedRoute path="/reco/delete/:id" component={RecoDelete} />

          <ProtectedRoute path="/my-recos" component={UserRecos} />

          <ProtectedRoute path="/my-list" component={UserList} />

          <Route exact path="/search">
            <Navbar />
            <Search />
          </Route>

          <Route exact path="/about">
            <Navbar />
            <About />
          </Route>

          <Route exact path="/categories">
            <Navbar />
            <Categories />
          </Route>

          <Route exact path="/clubs">
            <Navbar />
            <Clubs />
          </Route>

          <Route exact path="/">
            <Navbar />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
