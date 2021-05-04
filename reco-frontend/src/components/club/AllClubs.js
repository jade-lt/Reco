import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ClubCard } from "./ClubCard"
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
      <ClubCard listToMap={clubs}/>
    </div>
  );
};
