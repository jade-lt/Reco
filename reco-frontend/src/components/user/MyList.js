import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { grey } from "@material-ui/core/colors";
import { ListCard } from "../reco/ListCard";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: "auto",
    paddingTop: "150%",
  },
}));

export const MyList = () => {
  const [recos, setRecos] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    fetch("/api/lists", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const currentUserId = window.localStorage.getItem("id");
        const results = data.filter(
          (result) => result.userId === currentUserId
        );

        setRecos(results);
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  return (
    <div className="main">
      <div>
        <h1>My List</h1>
      </div>
<ListCard listToMap={recos} />
    </div>
  );
};
