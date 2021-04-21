import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import { IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";


export const UserRecos = () => {
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
          setRecos(data);
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  const clickCreateHandler = () => {
    history.replace("/reco/create");
  };

  const clickEditIconHandler = () => {
    console.log("edit icon was clicked")
  }

  const clickDeleteIconHandler = () => {
    console.log("delete icon was clicked")
  }

  return (
    <div className="main">
      <div className="header-text" id="header-my-recos">
        <h1>My Reco's</h1>
      </div>
      <Button variant="primary" onClick={clickCreateHandler}>
        Create a new Reco
      </Button>
      <h1> </h1>
      <h2 id="my-reco-text">My Reco's</h2>
      <ul>
        {recos.map((el) => (
          <div className="user-recos-list">
            <div className={`${el.category}-category`}>
            <li key={el.id}>
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
              onClick={clickEditIconHandler}
              // onClick={history.replace(`/reco/edit/${el.id}`)}

              >
                <Edit fontSize="small"/>
                </IconButton>
                <IconButton 
              edge="start"
              color="inherit"
              onClick={clickDeleteIconHandler}
              >
                <Delete fontSize="small"/>
                </IconButton>
              {/* <Link to={`/reco/delete/${el.id}`}> Delete</Link> */}
            </li>
          </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
