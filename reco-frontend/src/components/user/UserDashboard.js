import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";




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
          <div className="user-recos-list">
            <div className={`${el.category}-category`}>
            <li key={el.id}>
              <h5 className="reco-name">{el.name}</h5>
              <img className="reco-img" src={el.img} alt=""></img>
              <br />
              Category: {el.category}
              <br />
              Source/Author: {el.source}
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