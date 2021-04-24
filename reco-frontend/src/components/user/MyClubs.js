import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

export const MyClubs = () => {

    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch("/api/my-clubs", {
          headers: {
            token: window.localStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.length) {
              setClubs(data);
            }
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
                <div className={`${el.category}-category`}>
                  <li key={el._id}>
                    <h5 className="reco-name">{el.name}</h5>
                    <img className="reco-img" src={el.img} alt=""></img>
                    <br />
                    Category: {el.category}
                    <br />
                    Source/Author: {el.source}
                    <br />

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

}