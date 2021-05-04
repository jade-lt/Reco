import { RecoCard } from "../reco/RecoCard";
import { useEffect, useState } from "react";

export const Category = (props) => {
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
    response.category.includes(props.category)
  );

  return (
    <div className="main">
      <RecoCard listToMap={results} />
    </div>
  );
};
