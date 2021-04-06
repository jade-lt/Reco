import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";

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

  const clickLogoutHandler = () => {
    localStorage.removeItem("token");
    history.replace("/");
  };

  return (
    <div className="main">
      <h1>My Recos</h1>
      <Button variant="outline-success" onClick={clickCreateHandler}>
        Create a new Reco
      </Button>
      <Button variant="outline-danger" onClick={clickLogoutHandler}>
        Logout
      </Button>
      <ul>
        {recos.map((el) => (
          <div className="user-recos-list">
            <li key={el.id}>
              <h6 className="reco-name">{el.name}</h6>
          <img className="reco-img"src={el.image} alt=""></img>
              <br />
              Category: {el.category}
              <br />
              Source: {el.source}
              <br />
              <Link to={`/reco/edit/${el.id}`}>Edit or Delete</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
