import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Button from "react-bootstrap/Button";

export const MyClubsDelete = () => {

    const [club, setClub] = useState([]);

    const history = useHistory();
  
    const params = useParams();


    useEffect(() => {
        fetch(`/api/my-clubs/${params.id}`, {
            headers: {
                'token': window.localStorage.getItem('token')
              }
        })
        .then(response => response.json())
        .then(data => setClub(data))
    }, [params.id])

    const clickDeleteHandler = (e) => {
        e.preventDefault();
        fetch(`/api/my-clubs/${params.id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
          }
        })
          .then(() => history.push('/my-club'))
      }

      return (
        <div className="main">
        <div className="header-text" id="header-delete">
    
              <h1>Remove</h1>
              </div>
              <h3 id="delete-text">Are you sure you want to remove this club from your list?</h3>
    
              <div className="delete-reco">
    
              <h4 className="reco-name">{club.name}</h4>
    
              <img className="reco-img"src={club.img} alt=""></img>
              <Button variant="primary" onClick={clickDeleteHandler} >Delete</Button><h1>   </h1>
              <Button variant="primary" onClick={() => history.push(`/my-club`)} >Cancel</Button>
    
              </div>
          </div>
      )
}