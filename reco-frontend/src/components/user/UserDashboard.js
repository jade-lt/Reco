import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
// import { IconButton } from "@material-ui/core";
// import { Edit, Delete } from "@material-ui/icons";
// import { Link } from 'react-router-dom';



export const UserDashboard =() => {

  const [recos, setRecos] = useState([]);

  const history = useHistory();


  useEffect(() => {
    fetch("/api/recos", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setRecos([data[0], data[1], data[2]]);
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, []);


const clickAllRecosHandler = () => {
    history.replace("/my-recos");
  };


    return (
        <div>

        
        <h2 id="my-reco-text">My Reco's</h2>

        <ul>
        {recos.map((el) => (
          <div className="user-recos-list" id="user-dashboard-hoverable">
            <div className={`${el.category}-category`} onClick={() => history.push(`/reco/${el._id}`)}>
              <li key={el.id}>
                <h5 className="reco-name">{el.name}</h5>
                <img className="reco-img" src={el.img} alt=""></img>
                <br />
                Category: {el.category}
                <br />
                Source/Author: {el.source}
                <br />
                {/* <IconButton
                  edge="start"
                  color="inherit"
                  component={ Link } 
                  to={`/reco/edit/${el._id}`}
                >
                  <Edit fontSize="small" />
                </IconButton>
                <IconButton
                  edge="start"
                  color="inherit"
                  component={ Link } 
                  to={`/reco/delete/${el._id}`}
                >
                  <Delete fontSize="small" />
                </IconButton> */}
              </li>
            </div>
          </div>
        ))}
      </ul>
        <Button variant="primary" onClick={clickAllRecosHandler}>
        See All
      </Button>

        </div>

    )
}