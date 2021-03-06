import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    margin: "5%",
    width: "auto",
    height: 200,
    borderRadius: "4px",
    zIndex: 1000,
    padding: "2%",
  },
}));

export const GenreCard = (props) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div>
      <ul>
        {props.listToMap.map((el) => (
          <li key={el.id}>
            <div
              className={"genre-card"}
              onClick={() => history.push(`/${el.name}-genre`)}
            >
              <Card id="genre-list" className="genre-card-hoverable">
                <CardHeader
                  className={`${el.name}-category-header`}
                  title={el.name.toUpperCase()}
                />
                <CardContent className={classes.media}>
                  <img className="club-img" src={el.img} alt=""></img>
                </CardContent>
                <CardContent className={`${el.name}-category-header`}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  ></Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  className={`${el.name}-category-header`}
                ></CardActions>
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
