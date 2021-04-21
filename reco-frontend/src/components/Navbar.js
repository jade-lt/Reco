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
    history.replace("/");
  };

  const searchClickHandler = () => {
  history.replace("/search");
};

const clubsClickHandler = () => {
history.replace("/clubs");
};

const categoriesClickHandler = () => {
history.replace("/categories");
};

const myRecosClickHandler = () => {
history.replace("/my-recos");
};

const myListClickHandler = () => {
history.replace("/my-list");
};

const aboutClickHandler = () => {
history.replace("/about");
};

  const accountClickHandler = () => {
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
            onClick={searchClickHandler}

          >
            <Search fontSize="large"/>
          </IconButton>

          <Button color="inherit" onClick={clubsClickHandler}>Clubs</Button>
          <Button color="inherit" onClick={categoriesClickHandler}>Categories</Button>
          <Button color="inherit" onClick={myRecosClickHandler}>My Reco's</Button>
          <Button color="inherit" onClick={myListClickHandler}>My List</Button>
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
            onClick={searchClickHandler}
          >
            <Search fontSize="large"/>
          </IconButton>

          <Button color="inherit" onClick={clubsClickHandler}>Clubs</Button>
          <Button color="inherit" onClick={categoriesClickHandler}>Categories</Button>
          <Button color="inherit" onClick={aboutClickHandler}>About</Button>

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
