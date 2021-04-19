import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { AccountCircle, Home } from "@material-ui/icons";
import { useHistory } from "react-router";

const navLinks = [
  { name: "Search", path: "/search" },
  { name: "Clubs", path: "/clubs" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {

  const history = useHistory();

  const homeClickHandler = () => {
      console.log("home icon button clicked");
    history.replace("/");
  };

  const accountClickHandler = () => {
    console.log("account icon button clicked");
  history.replace("/my-recos");
};

  return (
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
          <List
            component="nav"
            className="navbar-display"
          >
            {navLinks.map(({ name, path }) => (
              <a href={path} key={name} className="navbar-links">
                <ListItem button>
                  <ListItemText primary={name} />
                </ListItem>
              </a>
            ))}
          </List>
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
  );
};
