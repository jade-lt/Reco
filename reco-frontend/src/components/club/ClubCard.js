import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    margin: "5%",
    width: "auto",
    height: 400,
    borderRadius: "4px",
    zIndex: 1000,
    padding: "2%",
  },
  cardHover: {
    cursor: "pointer",
  },
}));

export const ClubCard = (props) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div>
      <ul>
        {props.listToMap.map((el) => (
          <li key={el.id}>
            <div
              className={"club-card"}
              onClick={() => history.push(`/${el.category}-club`)}
            >
              <Card
                className={`${el.category}-category-header`}
                id="card-hoverable"
              >
                <CardHeader
                  className={`${el.category}-category-header`}
                  title={
                    el.name.length > 18
                      ? el.name.substring(0, 17) + "..."
                      : el.name
                  }
                  style={{ color: grey[50] }}
                />
                <CardContent className={classes.media}>
                  <img className="club-img" src={el.img} alt=""></img>
                </CardContent>
                <CardContent className={`${el.category}-category-header`}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  ></Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  className={`${el.category}-category-header`}
                ></CardActions>
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
