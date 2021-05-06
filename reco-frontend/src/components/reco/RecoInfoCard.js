import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { grey } from "@material-ui/core/colors";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { IconButton } from "@material-ui/core";
import { Edit, Delete, Star } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    width: "45%",
    height: "auto",
    float: "left",
    margin: "1%",
  },
}));

export const RecoInfoCard = () => {
  const [reco, setReco] = useState([]);

  const currentUserId = window.localStorage.getItem("id");

  const params = useParams();

  useEffect(() => {
    fetch(`/api/recos/${params.id}`, {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setReco(data));
  }, [params]);

  const classes = useStyles();

  const history = useHistory();

  const clickFavouriteHandler = () => {
    fetch("/api/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: window.localStorage.getItem("token"),
      },
      body: JSON.stringify({
        category: reco.category,
        name: reco.name,
        cost: reco.cost,
        source: reco.source,
        description: reco.description,
        genre: reco.genre,
        img: reco.img,
        userId: currentUserId,
      }),
    })
      .then((response) => response.json())
      .then(history.push("/my-list"));
  };

  return (
    <div className="main">
      <ul>
        <li key={reco.id}>
          <div className={"reco-info-card"}>
            <Card className={`${reco.category}-category-header`}>
              <CardHeader
                className={`${reco.category}-category-header`}
                title={reco.name}
                style={{ color: grey[50] }}
              />
              <div className="container">
                <div>
                  <CardContent>
                    <img className={classes.media} src={reco.img} alt=""></img>
                  </CardContent>
                </div>
                <div className="reco-info">
                  <h5>Genre: {reco.genre}</h5>
                  <br />
                  <h5>Category: {reco.category}</h5>
                  <br />
                  <h5>
                    About: <br />
                    {reco.description}
                  </h5>
                </div>
              </div>
              <CardActions
                disableSpacing
                className={`${reco.category}-category-header`}
                id="reco-info-card-footer"
              >
                {reco.userId === currentUserId && (
                  <span>
                    <IconButton
                      id="edit-icon"
                      align="right"
                      color="inherit"
                      component={Link}
                      to={`/reco/edit/${reco._id}`}
                    >
                      <Edit fontSize="large" />
                    </IconButton>
                    <IconButton
                      edge="end"
                      color="inherit"
                      component={Link}
                      to={`/reco/delete/${reco._id}`}
                    >
                      <Delete fontSize="large" />
                    </IconButton>
                  </span>
                )}

                {reco.userId !== currentUserId && (
                  <span>
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={clickFavouriteHandler}
                    >
                      <Star fontSize="large" />
                    </IconButton>
                  </span>
                )}
              </CardActions>
            </Card>
          </div>
        </li>
      </ul>
    </div>
  );
};
