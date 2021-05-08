import { useHistory } from "react-router";
import { ButtonComponent } from "../ButtonComponent";

export const ClubMembership = (props) => {
  const history = useHistory();

  const currentUserId = window.localStorage.getItem("id");

  const clickJoinClubHandler = () => {
    fetch("/api/my-clubs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: window.localStorage.getItem("token"),
      },
      body: JSON.stringify({
        category: props.category,
        name: props.name,
        description: props.description,
        img: props.img,
        userId: currentUserId,
      }),
    })
      .then((response) => response.json())
      .then(history.push("/my-club"));
  };

  return (
    <div className="main">
      <h1>Welcome to {props.name}!</h1>
      <ButtonComponent
        buttonLabel="Join this Club"
        onClick={clickJoinClubHandler}
      />
    </div>
  );
};
