import { useEffect, useState } from "react";
import { ClubCard } from "./ClubCard";

export const AllClubs = () => {
  const [clubs, setClubs] = useState([]);

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
      <h1>Clubs</h1>
      <ClubCard listToMap={clubs} />
    </div>
  );
};
