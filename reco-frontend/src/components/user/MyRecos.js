import { RecoCard } from "../reco/RecoCard";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";

export const MyRecos = () => {
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
        const currentUserId = window.localStorage.getItem("id");
        const results = data.filter(
          (result) => result.userId === currentUserId
        );

        setRecos(results);
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  const clickCreateHandler = () => {
    history.replace("/reco/create");
  };

  return (
    <div className="main">
      <div className="header-text" id="header-my-recos">
        <h1>My Reco's</h1>
      </div>
      <Button variant="primary" onClick={clickCreateHandler}>
        Create a new Reco
      </Button>
      <h2 id="my-reco-text">My Reco's</h2>
      <RecoCard listToMap={recos} />
    </div>
  );
};
