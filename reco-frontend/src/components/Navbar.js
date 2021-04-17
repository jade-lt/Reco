import * as React from "react";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const navLinks = [
  { title: `search`, path: `/search` },
  { title: `clubs`, path: `/clubs` },
  { title: `categories`, path: `/categories` },
  { title: `about`, path: `/about` },
  { title: `login`, path: `/login` },
];

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton>
        <List component="nav" aria-labelledby="main navigation">
    {navLinks.map(({ title, path }) => (
      <a href={path} key={title}>
        <ListItem button>
          <ListItemText primary={title} />
        </ListItem>
      </a>
    ))}
  </List>
      </Toolbar>
    </AppBar>
  );
};
