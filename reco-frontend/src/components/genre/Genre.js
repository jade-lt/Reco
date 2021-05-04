import { RecoCard } from "../reco/RecoCard";
import { useEffect, useState } from "react";

export const Genre = (props) => {
  const [recos, setRecos] = useState([]);

  useEffect(() => {
    fetch("/api/recos", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setRecos(data);
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, []);

  const results = recos.filter((response) =>
    response.genre.includes(props.genre)
  );

  return (
    <div className="main">
      <h1>{`${props.genre} Reco's`}</h1>

      <RecoCard listToMap={results} />
    </div>
  );
};
