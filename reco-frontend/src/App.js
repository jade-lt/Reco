import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserLoginForm } from "./components/user/UserLoginForm";
import { RecoEditDelete } from "./components/reco/RecoEditDelete";
import { UserRecos } from "./components/user/UserRecos";
import { RecoCreate } from './components/reco/RecoCreate';
import { HomePage } from './components/HomePage';
import { UserRegister } from './components/user/UserRegister'


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
          <RecoEditDelete />
        </Route>

        <Route exact path="/my-recos">
          <UserRecos />
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
