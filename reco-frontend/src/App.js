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



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <UserLoginForm />
        </Route>

        <Route exact path="/register">
          <UserRegister />
        </Route>

        <Route exact path="/reco/create">
          <RecoCreate />
        </Route>

        <Route exact path="/reco/edit/:id">
          <RecoUpdate />
        </Route>

        <Route exact path="/reco/delete/:id">
          <RecoDelete />
        </Route>

        <Route exact path="/my-recos">
          <UserRecos />
        </Route>

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
