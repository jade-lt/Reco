import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";

export const Category = () => {
    const [reco, setReco] = useState([]);

  const history = useHistory();

  const params = useParams();

  useEffect(() => {
    fetch(`/api/recos/${params.category}`, {
        headers: {
            'token': window.localStorage.getItem('token')
          }
    })
    .then(response => response.json())
    .then(data => setReco(data))
}, [params])

return (
    <div className="main">
    <ul>
          <div className="user-recos-list" >
            <div className={`${reco.category}-category`}>
              <li key={reco.id}>
                
                {/* <IconButton
                  edge="end"
                  color="inherit"
                  onClick={clickFavouriteHandler}
                >
                  <Star fontSize="large" />
                </IconButton> */}
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



                {/* {props.loginStatus && (<span> <br />
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
                </IconButton></span>)} */}

              </li>

            </div>
      {/* <Button variant="primary" onClick={() => history.push(`/my-recos`)} >Back to My Reco's</Button> */}

          </div>

      </ul>

      </div>
  )

}