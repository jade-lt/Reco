import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";


export const MyList = () => {

    const [recos, setRecos] = useState([]);

    // const history = useHistory();
  
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
      }, [recos]);






      return (
        <div className="main">
          <div className="header-text" id="header-my-recos">
            <h1>My List</h1>
          </div>
          <ul>
            {recos.map((el) => (
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
                      to={`/list/delete/${el._id}`}
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