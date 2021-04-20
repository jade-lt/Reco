import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserLoginForm } from "./components/user/UserLoginForm";
import { RecoUpdate } from "./components/reco/RecoUpdate";
import { UserRecos } from "./components/user/UserRecos";
import { RecoCreate } from './components/reco/RecoCreate';
import { HomePage } from './components/HomePage';
import { UserRegister } from './components/user/UserRegister';
import { RecoDelete } from './components/reco/RecoDelete';
import { Search } from './components/Search';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { Clubs } from './components/Clubs';
import { Navbar } from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
      <Switch>
        <Route exact path="/login">
          <UserLoginForm />
        </Route>

        <Route exact path="/register">
          <UserRegister />
        </Route>

        <ProtectedRoute path="/reco/create" component={RecoCreate} />

        <ProtectedRoute path="/reco/edit/:id" component={RecoUpdate} />

        <ProtectedRoute path="/reco/delete/:id" component={RecoDelete} />

        <ProtectedRoute path="/my-recos" component={UserRecos} />

        <Route exact path="/search">
          <Search />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/categories">
          <Categories />
        </Route>

        <Route exact path="/clubs">
          <Clubs />
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
