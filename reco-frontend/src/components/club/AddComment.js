import { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent";

export const AddComment = (props) => {
  const [newChat, setNewChat] = useState({
    club: "",
    username: "",
    userId: "",
    dateTime: "",
    subject: "",
    comment: "",
  });

  const currentUsername = window.localStorage.getItem("username");

  const currentUserId = window.localStorage.getItem("id");

  const changeHandler = (e) => {
    const newFormState = { ...newChat };
    newFormState[e.target.name] = e.target.value;
    setNewChat(newFormState);
  };

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
        username: currentUsername,
        userId: currentUserId,
        dateTime: new Date(),
        subject: newChat.subject,
        comment: newChat.comment,
      }),
    })
      .then((response) => response.json())
      .then(
        setNewChat({
          club: "",
          username: "",
          userId: "",
          dateTime: "",
          subject: "",
          comment: "",
        })
      );
  };

  return (
    <div className="new-chat-comment-form">
      <h3>Add a comment</h3>
      <form>
        <label>
          Subject
          <br />
          <input
            name="subject"
            value={newChat.subject}
            onChange={changeHandler}
          />
        </label>
        <br />
        <label>
          Comment
          <br />
          <textarea
            name="comment"
            value={newChat.comment}
            onChange={changeHandler}
          />
        </label>
        <ButtonComponent
          buttonLabel="Add Comment"
          onClick={clickNewCommentHandler}
        />
      </form>
    </div>
  );
};
