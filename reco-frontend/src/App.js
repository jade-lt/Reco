import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserLoginForm } from "./components/user/UserLoginForm";
import { RecoList } from "./components/reco/RecoList";
import { RecoEditDelete } from "./components/reco/RecoEditDelete";
import { UserRecos } from "./components/user/UserRecos";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <UserLoginForm />
        </Route>

        <Route exact path="/reco/create">
          <h1>Add new reco</h1>
        </Route>

        <Route exact path="/reco/edit/:id">
          <RecoEditDelete />
        </Route>

        <Route exact path="/my-recos">
          <UserRecos />
        </Route>

        <Route exact path="/">
          <h1>Home</h1>
          {/* <RecoList /> */}
        </Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
