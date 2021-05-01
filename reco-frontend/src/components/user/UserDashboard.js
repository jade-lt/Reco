import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
// import { IconButton } from "@material-ui/core";
// import { Edit, Delete } from "@material-ui/icons";
// import { Link } from 'react-router-dom';



export const UserDashboard =() => {

  const [recos, setRecos] = useState([]);

  const [clubs, setClubs] = useState([]);

  const [list, setList] = useState([]);



  const history = useHistory();

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

        setList(results);
      })
      .catch((error) => console.log("catch error:", error));
  }, [list]);


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

  useEffect(() => {
    fetch("/api/my-clubs", {
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

        setClubs(results);
      })
      .catch((error) => console.log("catch error:", error));
  }, [clubs]);

  const clickAllListHandler = () => {
    history.replace("/my-list");
  };

const clickAllRecosHandler = () => {
    history.replace("/my-recos");
  };

  const clickAllClubsHandler = () => {
    history.replace("/my-club");
  };

  // console.log(clubs)

    return (
        <div>

<div>
<h2 id="my-reco-text">My List</h2>

<ul>
{list.map((el) => (
  <div className="user-recos-list" id="user-dashboard--hoverable">
    <div className={`${el.category}-category`} onClick={() => history.push(`/my-list`)}>
      <li key={el._id}>
        <h5 className="reco-name">{el.name}</h5>
        <img className="reco-img" src={el.img} alt=""></img>
        <br />
        Category: {el.category}
        <br />
        Source/Author: {el.source}
        <br />
      </li>
    </div>
  </div>
))}
</ul>
<Button variant="primary" onClick={clickAllListHandler}>
See All
</Button>

</div>

        
        <h2 id="my-reco-text">My Reco's</h2>

        <ul>
        {recos.map((el) => (
          <div className="user-recos-list" id="user-dashboard-recos-hoverable">
            <div className={`${el.category}-category`} onClick={() => history.push(`/reco/${el._id}`)}>
              <li key={el._id}>
                <h5 className="reco-name">{el.name}</h5>
                <img className="reco-img" src={el.img} alt=""></img>
                <br />
                Category: {el.category}
                <br />
                Source/Author: {el.source}
                <br />
              </li>
            </div>
          </div>
        ))}
      </ul>
        <Button variant="primary" onClick={clickAllRecosHandler}>
        See All
      </Button>

<div>
<h2 id="my-reco-text">My Clubs</h2>

<ul>
{clubs.map((el) => (
  <div className="user-recos-list" id="user-dashboard-clubs-hoverable">
    <div className={`${el.category}-category`} onClick={() => history.push(`/${el.category}-club`)}>
      <li key={el._id}>
        <h5 className="reco-name">{el.name}</h5>
        <img className="reco-img" src={el.img} alt=""></img>
        <br />
        Category: {el.category}
        <br />
        Source/Author: {el.source}
        <br />
      </li>
    </div>
  </div>
))}
</ul>
<Button variant="primary" onClick={clickAllClubsHandler}>
See All
</Button>

</div>


        </div>

    )
}