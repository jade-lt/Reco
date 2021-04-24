import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


export const ClubInfo = (props) => {
  const [club, setClub] = useState([]);

  const history = useHistory();

  const params = useParams();


  useEffect(() => {
    fetch(`/api/clubs/${params.id}`, {
        headers: {
            'token': window.localStorage.getItem('token')
          }
    })
    .then(response => response.json())
    .then(data => setClub(data))
}, [params])


  return (
    <div className="main">
    <ul>
          <div className="user-recos-list" >
            <div className={`${club.category}-category`}>
              <li key={club.id}>
                <h5 className="reco-name">{club.name}</h5>
                <img className="reco-img" src={club.img} alt=""></img>
                <br />
                Category: {club.category}
                <br />
                Source/Author: {club.source}
                <br />
                Cost: {club.cost}
                <br />
                Genre: {club.genre}
                <br />
                Description: {club.description}



                {props.loginStatus && (<span> <br />
                <IconButton
                  edge="start"
                  color="inherit"
                  component={Link}
                  to={`/club/edit/${club._id}`}
                >
                  <Edit fontSize="small" />
                </IconButton>
                <IconButton
                  edge="start"
                  color="inherit"
                  component={Link}
                  to={`/club/delete/${club._id}`}
                >
                  <Delete fontSize="small" />
                </IconButton></span>)}

              </li>

            </div>
      <Button variant="primary" onClick={() => history.push(`/all-clubs`)} >Back to All Clubs</Button>

          </div>

      </ul>

      </div>
  )
};
