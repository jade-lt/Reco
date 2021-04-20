import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Button,
} from "@material-ui/core";
import { AccountCircle, Home, Search } from "@material-ui/icons";
import { useHistory } from "react-router";

const navLinks = [
  { name: "Search", path: "/search" },
  { name: "Clubs", path: "/clubs" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
];

const navLinksLoggedIn = [
  { name: "Search", path: "/search" },
  { name: "Clubs", path: "/clubs" },
  { name: "Categories", path: "/categories" },
  { name: "My Reco's", path: "/my-recos" },
  { name: "My List", path: "/my-list" },
  { name: "Sign Out", path: "/" },
]

export const Navbar = () => {

  const history = useHistory();

  const isAuthenticated = localStorage.getItem('token');

  const homeClickHandler = () => {
      console.log("home icon button clicked");
    history.replace("/");
  };

  const accountClickHandler = () => {
    console.log("account icon button clicked");
  history.replace("/dashboard");
};

const clickSignOutHandler = () => {
  localStorage.removeItem("token");
  history.replace("/");
};

return isAuthenticated ? (
  
<AppBar position="static">
      <Toolbar className="navbar">
        <Container className="navbar-display-flex">
          <IconButton
            edge="start"
            color="inherit"
            className="home"
            onClick={homeClickHandler}
          >
            <Home fontSize="large"/>
          </IconButton>

          <IconButton
            edge="start"
            color="inherit"
            className="home"
            // onClick={homeClickHandler}
          >
            <Search fontSize="large"/>
          </IconButton>

          <Button color="inherit">Search</Button>
          <Button color="inherit">Clubs</Button>
          <Button color="inherit">Categories</Button>
          <Button color="inherit">My Reco's</Button>
          <Button color="inherit">My List</Button>
          <Button color="inherit" onClick={clickSignOutHandler}>Sign Out</Button>

          <IconButton
            edge="end"
            color="inherit"
            className="account"
            onClick={accountClickHandler}
          >
            <AccountCircle fontSize="large"/>
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>

)
    :
(
  

<AppBar position="static">
      <Toolbar className="navbar">
        <Container className="navbar-display-flex">
          <IconButton
            edge="start"
            color="inherit"
            className="home"
            onClick={homeClickHandler}
          >
            <Home fontSize="large"/>
          </IconButton>

          <IconButton
            edge="start"
            color="inherit"
            className="home"
            // onClick={homeClickHandler}
          >
            <Search fontSize="large"/>
          </IconButton>

          <Button color="inherit">Search</Button>
          <Button color="inherit">Clubs</Button>
          <Button color="inherit">Categories</Button>
          <Button color="inherit">About</Button>

          <IconButton
            edge="end"
            color="inherit"
            className="account"
            onClick={accountClickHandler}
          >
            <AccountCircle fontSize="large"/>
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
    

    )

  }
