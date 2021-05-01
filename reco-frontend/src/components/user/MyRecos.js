import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
// import { IconButton } from "@material-ui/core";
// import { Edit, Delete } from "@material-ui/icons";
// import { Link } from "react-router-dom";

export const MyRecos = () => {
  const [recos, setRecos] = useState([]);
  // const [results, setResults] = useState([]);

  // console.log(currentUserId)

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
  }, [recos]);

  const clickCreateHandler = () => {
    history.replace("/reco/create");
  };

  // const clickRecoHandler = () => {
  //   console.log("the reco was clicked")
  // };

  return (
    <div className="main">
      <div className="header-text" id="header-my-recos">
        <h1>My Reco's</h1>
      </div>
      <Button variant="primary" onClick={clickCreateHandler}>
        Create a new Reco
      </Button>
      <h1> </h1>
      <h2 id="my-reco-text">My Reco's</h2>
      <ul>
        {recos.map((el) => (
          <div className="user-recos-list" id="user-recos-list-hoverable">
            <div
              className={`${el.category}-category`}
              onClick={() => history.push(`/reco/${el._id}`)}
            >
              <li key={el._id}>
                <h5 className="reco-name">{el.name}</h5>
                <img className="reco-img" src={el.img} alt=""></img>
                <br />
                Category: {el.category}
                <br />
                Source/Author: {el.source}
                <br />
                {/* <IconButton
                  edge="start"
                  color="inherit"
                  component={Link}
                  to={`/reco/edit/${el._id}`}
                >
                  <Edit fontSize="small" />
                </IconButton>
                <IconButton
                  edge="start"
                  color="inherit"
                  component={Link}
                  to={`/reco/delete/${el._id}`}
                >
                  <Delete fontSize="small" />
                </IconButton> */}
                {/* <Link to={`/reco/delete/${el.id}`}> Delete</Link> */}
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
