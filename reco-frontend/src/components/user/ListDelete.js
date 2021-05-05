import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { ButtonComponent } from "../ButtonComponent";

export const ListDelete = () => {
  const [reco, setReco] = useState([]);

  const history = useHistory();

  const params = useParams();

  useEffect(() => {
    fetch(`/api/lists/${params.id}`, {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setReco(data));
  }, [params.id]);

  const clickDeleteHandler = (e) => {
    e.preventDefault();
    fetch(`/api/lists/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: window.localStorage.getItem("token"),
      },
    }).then(() => history.push("/my-list"));
  };

  return (
    <div className="main">
        <h1>Remove</h1>
      <h3 id="delete-text">
        Are you sure you want to remove this reco from your list?
      </h3>

      <div className="delete-reco">
        <h4 className="reco-name">{reco.name}</h4>

        <img className="reco-img" src={reco.img} alt=""></img>
        <ButtonComponent
          buttonLabel="Cancel"
          onClick={() => history.push(`/my-list`)}
        />
        <ButtonComponent buttonLabel="Delete" onClick={clickDeleteHandler} />
      </div>
    </div>
  );
};
