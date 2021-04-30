import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";


export const ClubMembership = (props) => {

  const history = useHistory();

const clickJoinClubHandler = () => {
    fetch('/api/my-clubs', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'token': window.localStorage.getItem('token')
        },
        body: JSON.stringify({
          category: props.category,
          name: props.name,
          description: props.description,
          img: props.img,
      })
      })
        .then(response => response.json())
        .then(history.push('/my-club'))
}

  return (
<Button variant="primary" onClick={clickJoinClubHandler}>
          Join this Club
        </Button>
  )




}










