import { useEffect, useState } from "react";
import { useHistory } from "react-router";
// import Button from "react-bootstrap/Button";

export const AllClubs = () => {
  const [clubs, setClubs] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("/api/clubs", {
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
  }, [setClubs]);

  return (
    <div className="main">
      <div className="header-text" id="header-clubs">
        <h1>Clubs</h1>
      </div>
      <ul>
        {clubs.map((el) => (
          <div className="user-recos-list" id="user-recos-list-hoverable" >
            <div className={`${el.category}-category`} onClick={() => history.push(`/club/${el._id}`)}>
              <li key={el.id}>
                <h5 className="reco-name">{el.name}</h5>
                <img className="reco-img" src={el.img} alt=""></img>
                {/* <br />
                Category: {el.category}
                <br />
                Source/Author: {el.source}
                <br /> */}
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
