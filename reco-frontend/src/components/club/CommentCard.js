import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: "30%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const CommentCard = (props) => {
  const classes = useStyles();

  const [chat, setChat] = useState([]);

  useEffect(() => {
    fetch(`/api/chats`, {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setChat(data));
  }, [chat]);

  const results = chat.filter((response) => response.club.includes(props.club));

  return (
    <div className="comment-cards-list">
      <h1 className="main">Comments</h1>
      <ul>
        {results.map((el) => (
          <li key={el.id}>
            <div className="comment-card">
              <Card className={classes.root} variant="outlined">
                <CardContent className={`${props.club}-category-header`}>
                  <Typography variant="p" component="p">
                    {el.subject}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {el.username}
                  </Typography>
                  <Typography
                    className={classes.pos}
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    {el.dateTime}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="body2" component="p">
                    {el.comment}
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
