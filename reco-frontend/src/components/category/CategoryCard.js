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
}));

export const CategoryCard = (props) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className="main">
      <ul>
        {props.listToMap.map((el) => (
          <li key={el.id}>
            <div
              className={"club-card"}
              onClick={() => history.push(`/all-categories/${el.name}`)}
            >
              <Card
                className={`${el.name}-category-header`}
                id="card-hoverable"
              >
                <CardHeader
                  className={`${el.name}-category-header`}
                  title={el.name !== "TV" ? `${el.name}s` : "TV Shows"}
                  style={{ color: grey[50] }}
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
