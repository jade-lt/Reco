import { useEffect, useState } from "react";
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
      <div className="header-text" id="header-my-recos">
        <h1>My Clubs</h1>
      </div>
      <ul>
        {clubs.map((el) => (
          <div className="user-recos-list" >
            <div
              className={`${el.category}-category`}
              
            >
              <li key={el._id}>
                <div id="my-clubs-hoverable">
                <h5 className="reco-name">{el.name}</h5>
                <img className="reco-img" src={el.img} alt="" onClick={() => history.push(`/${el.category}-club`)}></img>
                <br />
                Category: {el.category}
                <br />
                Source/Author: {el.source}
                <br />
                </div>
                <IconButton
                  edge="start"
                  color="inherit"
                  component={Link}
                  to={`/my-club/delete/${el._id}`}
                >
                  <Delete fontSize="large" />
                </IconButton>
                
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
