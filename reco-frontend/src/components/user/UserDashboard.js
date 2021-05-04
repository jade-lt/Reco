import { RecoCard } from "../reco/RecoCard";
import { ClubCard } from "../club/ClubCard";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

export const UserDashboard = () => {
  const [recos, setRecos] = useState([]);

  const [clubs, setClubs] = useState([]);

  const [list, setList] = useState([]);

  const history = useHistory();

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

        if (results.length > 3) {
          setList([results[0], results[1], results[2]]);
        } else {
          setList(results);
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  useEffect(() => {
    fetch("/api/recos", {
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

        if (results.length > 3) {
          setRecos([results[0], results[1], results[2]]);
        } else {
          setRecos(results);
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  useEffect(() => {
    fetch("/api/my-clubs", {
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

        if (results.length > 2) {
          setClubs([results[0], results[1]]);
        } else {
          setClubs(results);
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  const clickAllListHandler = () => {
    history.replace("/my-list");
  };

  const clickAllRecosHandler = () => {
    history.replace("/my-recos");
  };

  const clickAllClubsHandler = () => {
    history.replace("/my-club");
  };

  return (
    <div className="main">
      <div>
        <h2 id="my-reco-text">My List</h2>
        <RecoCard listToMap={list} />
        <Button variant="primary" onClick={clickAllListHandler}>
          See All
        </Button>
        <br />
      </div>

      <h2 id="my-reco-text">My Reco's</h2>
      <RecoCard listToMap={recos} />
      <Button variant="primary" onClick={clickAllRecosHandler}>
        See All
      </Button>
      <br />
      <div>
        <h2 id="my-reco-text">My Clubs</h2>
        <ClubCard listToMap={clubs} />
        <Button variant="primary" onClick={clickAllClubsHandler}>
          See All
        </Button>
        <br />
      </div>
    </div>
  );
};
