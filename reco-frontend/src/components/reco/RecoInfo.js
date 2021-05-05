import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { IconButton } from "@material-ui/core";
import { Edit, Delete, Star } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


export const RecoInfo = (props) => {
  const [reco, setReco] = useState([]);

  const currentUserId = window.localStorage.getItem("id");


  const history = useHistory();

  const params = useParams();


  useEffect(() => {
    fetch(`/api/recos/${params.id}`, {
        headers: {
            'token': window.localStorage.getItem('token')
          }
    })
    .then(response => response.json())
    .then(data => setReco(data))
}, [params])

const clickFavouriteHandler = () => {
        fetch('/api/lists', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
          },
          body: JSON.stringify({
            category: reco.category !== null ? reco.category : "Undefined",
            name: reco.name,
            cost: reco.cost,
            source: reco.source,
            description: reco.description,
            genre: reco.genre !== null ? reco.genre : "Other",
            img: reco.img,
            userId: currentUserId
        })
        })
          .then(response => response.json())
          .then(history.push('/my-list'))
}


  return (
    <div className="main">
    <ul>
          <div className="user-recos-list" >
            <div className={`${reco.category}-category`}>
              <li key={reco.id}>
                

               {reco.userId !== currentUserId && (<span> <br />
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={clickFavouriteHandler}
                >
                  <Star fontSize="large" />
                  </IconButton></span>)}


                <h5 className="reco-name">{reco.name}</h5>
                <img className="reco-img" src={reco.img} alt=""></img>
                <br />
                Category: {reco.category}
                <br />
                Source/Author: {reco.source}
                <br />
                Cost: {reco.cost}
                <br />
                Genre: {reco.genre}
                <br />
                Description: {reco.description}



                {reco.userId === currentUserId && (<span> <br />
                <IconButton
                  edge="start"
                  color="inherit"
                  component={Link}
                  to={`/reco/edit/${reco._id}`}
                >
                  <Edit fontSize="small" />
                </IconButton>
                <IconButton
                  edge="start"
                  color="inherit"
                  component={Link}
                  to={`/reco/delete/${reco._id}`}
                >
                  <Delete fontSize="small" />
                </IconButton></span>)}

              </li>

            </div>
      <Button variant="primary" onClick={() => history.push(`/my-recos`)} >Back to My Reco's</Button>

          </div>

      </ul>

      </div>
  )
};
