import * as React from "react";
import { AppBar, Toolbar, IconButton, Button, Box } from "@material-ui/core";
import { AccountCircle, Home, Search } from "@material-ui/icons";
import { useHistory } from "react-router";
import { Tooltip } from "@material-ui/core/";

export const Navbar = (props) => {
  const history = useHistory();

  const currentUserToken = window.localStorage.getItem("token");

  const homeClickHandler = () => {
    history.replace("/");
  };

  const searchClickHandler = () => {
    history.replace("/search");
  };

  const clubsClickHandler = () => {
    history.replace("/all-clubs");
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

  const myClubsClickHandler = () => {
    history.replace("/my-club");
  };

  const genresClickHandler = () => {
    history.replace("/genres");
  };

  const aboutClickHandler = () => {
    history.replace("/about");
  };

  const accountClickHandler = () => {
    history.replace("/dashboard");
  };

  const signOutClickHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("userType");

    props.setLoginStatus(false);
    history.replace("/");
  };

  const signInClickHandler = () => {
    history.replace("/login");
  };

  const registerClickHandler = () => {
    history.replace("/register");
  };

  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        <Box display="flex" flexGrow={1}>
          <Tooltip title="Home" arrow="true">
            <IconButton
              edge="start"
              color="inherit"
              className="home"
              onClick={homeClickHandler}
            >
              <Home fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Search" arrow="true">
            <IconButton
              edge="start"
              color="inherit"
              className="home"
              onClick={searchClickHandler}
            >
              <Search fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
        <Button color="inherit" onClick={clubsClickHandler}>
          Clubs
        </Button>
        <Button color="inherit" onClick={genresClickHandler}>
          Genres
        </Button>
        <Button color="inherit" onClick={categoriesClickHandler}>
          Categories
        </Button>
        {(currentUserToken === "undefined" || currentUserToken === null) && (
          <span>
            <Button color="inherit" onClick={aboutClickHandler}>
              About
            </Button>
            <Button color="inherit" onClick={registerClickHandler}>
              Register
            </Button>
            <Button color="inherit" onClick={signInClickHandler}>
              Sign In
            </Button>
          </span>
        )}

        {props.loginStatus && (
          <span>
            <Button color="inherit" onClick={myClubsClickHandler}>
              My Clubs
            </Button>
            <Button color="inherit" onClick={myRecosClickHandler}>
              My Reco's
            </Button>
            <Button color="inherit" onClick={myListClickHandler}>
              My List
            </Button>
            <Button color="inherit" onClick={signOutClickHandler}>
              Sign Out
            </Button>

            <Tooltip title="Dashboard" arrow="true">
              <IconButton
                edge="end"
                color="inherit"
                className="account"
                onClick={accountClickHandler}
              >
                <AccountCircle fontSize="large" />
              </IconButton>
            </Tooltip>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
};
