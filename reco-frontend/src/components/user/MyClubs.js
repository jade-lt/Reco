import { useEffect, useState } from "react";
import { ClubCard } from "../club/ClubCard";

import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useHistory } from "react-router";

export const MyClubs = () => {
  const [clubs, setClubs] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("/api/my-clubs", {
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

        setClubs(results);
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  return (
    <div className="main">
      <div>
        <h1>My Clubs</h1>
      </div>
      <ClubCard listToMap={clubs}/>
    </div>
  );
};
