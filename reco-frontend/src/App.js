import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserLoginForm } from "./components/user/UserLoginForm";

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
          <h1>Edit a Reco</h1>
        </Route>

        <Route exact path="/reco/delete/:id">
          <h1>Delete a reco</h1>
        </Route>

        <Route exact path="/">
          <h1>Home</h1>
        </Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
