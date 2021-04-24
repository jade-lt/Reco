import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";

export const HomePage = () => {
  const [recos, setRecos] = useState([]);
  const [clubs, setClubs] = useState([]);


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
          const shuffledArray = data.sort((a, b) => 0.5 - Math.random());
          setRecos(shuffledArray.slice(0,3));
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, [setRecos]);

  useEffect(() => {
    fetch("/api/clubs", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          const shuffledArray = data.sort((a, b) => 0.5 - Math.random());
          setClubs(shuffledArray.slice(0,3));
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, [setClubs]);

  const clickAllRecosHandler = () => {
    history.replace("/all-recos");
  };

  const clickAllClubsHandler = () => {
    history.replace("/all-clubs");
  };


  return (
    <div className="main">
      <div className="header-text" id="header-home">
        <h3 id="about">
        
          Find and share recommendations <br /> of movies, TV-shows, books and
          games
          <br /> with Reco!
        </h3>
      </div>

      <div id="home-options"></div>
      <div>
          <h1>Featured Reco's</h1>
      <ul>
        {recos.map((el) => (
          <div className="user-recos-list" id="recos-home-page-hoverable">
            <div className={`${el.category}-category`} onClick={() => history.push(`/reco/${el._id}`)}>
            <li key={el._id}>
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
      <br />
      <Button variant="primary" onClick={clickAllRecosHandler}>
        See All
      </Button>
      </div>
      <div className="header-text" id="header-home">
        <h3 id="about">
          Join a Club!
        </h3>
      </div>
      <div>
          <h1>Featured Clubs</h1>
      <ul>
      {clubs.map((el) => (
          <div className="user-recos-list" id="clubs-home-page-hoverable">
            <div className={`${el.category}-category`} onClick={() => history.push(`/${el.category}-club`)}>
            <li key={el.id}>
              <h5 className="reco-name">{el.name}</h5>
              <img className="reco-img" src={el.img} alt=""></img>
              {/* <br />
              Category: {el.category}
              <br />
              Source/Author: {el.source} */}
            </li>
          </div>
          </div>
        ))}
      </ul>
      <Button variant="primary" onClick={clickAllClubsHandler}>
        See All
      </Button>
      </div>
    </div>
  );
};
