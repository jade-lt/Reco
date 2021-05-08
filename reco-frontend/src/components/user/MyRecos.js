import { RecoCard } from "../reco/RecoCard";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ButtonComponent } from "../ButtonComponent";

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
      <div>
        <h1>My Recommendations</h1>
      </div>
      <ButtonComponent
        buttonLabel="Create a New Reco"
        onClick={clickCreateHandler}
      />
      <RecoCard listToMap={recos} />
    </div>
  );
};
