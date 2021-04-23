import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Button from "react-bootstrap/Button";

export const RecoDelete = () => {
  const [reco, setReco] = useState([]);

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
}, [params.id])

const clickDeleteHandler = (e) => {
    e.preventDefault();
    fetch(`/api/recos/${params.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'token': window.localStorage.getItem('token')
      }
    })
      .then(() => history.push('/my-recos'))
  }

  // const clickNoHandler = () => {
  //   history.replace("/my-recos");
  // };


  return (
    <div className="main">
    <div className="header-text" id="header-delete">

          <h1 >Delete</h1>
          </div>
          <h3 id="delete-text">Are you sure you want to delete this reco?</h3>

          <div className="delete-reco">

          <h4 className="reco-name">{reco.name}</h4>

          <img className="reco-img"src={reco.img} alt=""></img>
          <Button variant="primary" onClick={clickDeleteHandler} >Delete</Button><h1>   </h1>
          <Button variant="primary" onClick={() => history.push(`/reco/${reco._id}`)} >Cancel</Button>

          </div>
      </div>
  )
};
