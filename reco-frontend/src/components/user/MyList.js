import { useEffect, useState } from "react";
import { ListCard } from "../reco/ListCard";

export const MyList = () => {
  const [recos, setRecos] = useState([]);

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

        setRecos(results);
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  return (
    <div className="main">
      <div>
        <h1>My List</h1>
      </div>
      <ListCard listToMap={recos} />
    </div>
  );
};
