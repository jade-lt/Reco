import { RecoCard } from "./reco/RecoCard";
import { ClubCard } from "./club/ClubCard";
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
          setRecos(shuffledArray.slice(0, 3));
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
          setClubs(shuffledArray.slice(0, 2));
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, [setClubs]);

  const clickAllRecosHandler = () => {
    history.replace("/search");
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
        <RecoCard listToMap={recos} />
        <br />
        <Button variant="primary" onClick={clickAllRecosHandler}>
          See All
        </Button>
      </div>
      <div>
        <h1>Featured Clubs</h1>
        <ClubCard listToMap={clubs} />
        <Button variant="primary" onClick={clickAllClubsHandler}>
          See All
        </Button>
      </div>
    </div>
  );
};
