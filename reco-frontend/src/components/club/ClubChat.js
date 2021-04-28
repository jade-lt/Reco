import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';


export const ClubChat = (props) => {

    const history = useHistory();

  const [chat, setChat] = useState([]);

  const [newChat, setNewChat] = useState({
    club: "",
    username: "",
    dateTime: "",
    comment: "",
  });

  useEffect(() => {
    fetch(`/api/chats`, {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setChat(data));
  }, [chat]);

  const results = chat.filter((response) => response.club.includes(props.club));

  const clickNewCommentHandler = (e) => {
    e.preventDefault();

    fetch("/api/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: window.localStorage.getItem("token"),
      },
      body: JSON.stringify({
        club: props.club,
        username: props.username,
        dateTime: new Date(),
        comment: newChat.comment,
      }),
    })
      .then((response) => response.json())
      .then(setNewChat({
        club: "",
        username: "",
        dateTime: "",
        comment: "",
      }));
  };

  const changeHandler = (e) => {
    const newFormState = { ...newChat };
    newFormState[e.target.name] = e.target.value;
    setNewChat(newFormState);
}

  return (
    <div className="main">
        <div className="club-chat-comments">
      <ul>
        {results.map((el) => (
            <li key={el.id}>
              <h5>{el.username}</h5>
              <br />
              <p>{el.dateTime}</p>
              <br />
              <p>{el.comment}</p>
            </li>
          
        ))}
      </ul>
      </div>

      <div className="new-chat-comment-form">
          <h3>Add a comment</h3>
          <form onSubmit={clickNewCommentHandler}>
              <textarea name="comment" value={newChat.comment} onChange={changeHandler} />

<Button variant="primary" type="submit">Add Comment</Button>
          </form>

      </div>
    </div>
  );
};
