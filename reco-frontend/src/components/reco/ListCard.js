import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { grey } from "@material-ui/core/colors";
import { Tooltip, Box } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: "auto",
    paddingTop: "150%",
  },
}));

export const ListCard = (props) => {
  const classes = useStyles();

  return (
    <div className="main">
      <div>
        <ul>
          {props.listToMap.map((el) => (
            <div className={"reco-card"}>
              <Card className={`${el.category}-category-header`}>
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
                <CardActions
                  disableSpacing
                  className={`${el.category}-category-header`}
                >
                  <Box display="flex" flexGrow={1}></Box>

                  <Tooltip title="Remove from My List" arrow="true">
                    <IconButton
                      edge="start"
                      color="inherit"
                      component={Link}
                      to={`/list/delete/${el._id}`}
                    >
                      <Delete fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
