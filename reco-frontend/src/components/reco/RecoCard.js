import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
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
    height: "auto",
    paddingTop: "150%",
  },
}));

export const RecoCard = (props) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className="main">
      <ul>
        {props.listToMap.map((el) => (
          <li key={el.id}>
          <div
            className={"reco-card"}
            onClick={() => history.push(`/reco/${el._id}`)}
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
              <CardMedia
                className={classes.media}
                image={el.img}
                title={el.name}
              />
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
