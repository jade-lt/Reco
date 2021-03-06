import { RecoCard } from "./reco/RecoCard";
import { ClubCard } from "./club/ClubCard";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ButtonComponent } from "./ButtonComponent";
import { Footer } from "./Footer";

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
      <div id="header-home">
        <h1 id="header-text">RECO</h1>
      </div>

      <div id="home-options"></div>
      <div>
        <h1>Featured Recommendations</h1>
        <RecoCard listToMap={recos} />
        <ButtonComponent buttonLabel="See All" onClick={clickAllRecosHandler} />
      </div>
      <div>
        <h1>Featured Clubs</h1>
        <ClubCard listToMap={clubs} />
        <ButtonComponent buttonLabel="See All" onClick={clickAllClubsHandler} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
