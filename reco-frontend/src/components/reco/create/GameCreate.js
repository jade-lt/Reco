import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";

export const GameCreate = () => {
  const history = useHistory();

  const [searchResults, setSearchResults] = useState([]);

  const currentUserId = window.localStorage.getItem("id");

  const [form, setForm] = useState({
    name: "",
    category: "",
  });

  const changeHandler = (e) => {
    const newFormState = { ...form };
    newFormState[e.target.name] = e.target.value;
    setForm(newFormState);
  };

  useEffect(() => {});

  const nameInput = form.name;

  const inputUrl = `https://rawg.io/api/games?key=f22b54c31e4c4dfcb73fbd916c13f087&search=${nameInput}
    `;

  const submitSearchHandler = (e) => {
    e.preventDefault();
    console.log("api search button was clicked");

    fetch(inputUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        const array = data.results;
        console.log("array: ", array);
        setSearchResults(array);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="main">
      <h3>Add a Game</h3>
      <form onSubmit={submitSearchHandler}>
        <label>
          <input
            name="name"
            value={form.name}
            placeholder="Enter a game name"
            onChange={changeHandler}
          />
        </label>
        <Button
          variant="default"
          style={{ color: "white", background: "#ff5768", marginLeft: "0.5%" }}
          type="submit"
        >
          Search
        </Button>
      </form>
      <div className="api-credit">
        <h6 className="api-credit-text">Powered by</h6>
        <img
          className="api-logo-game"
          src={
            "https://media-exp1.licdn.com/dms/image/C4D0BAQEkfrEmDmspvQ/company-logo_200_200/0/1570710261259?e=2159024400&v=beta&t=0oqw9I47vUYgu-bqIlCC4vqCf64NtX7OSEdtqhhwICs"
          }
          alt=""
        ></img>
      </div>
      <div>
        <ul>
          {searchResults.map((el) => (
            <div className="search-new-reco-list">
              <li key={el.id}>
                <h4>{el.name}</h4>
                <img
                  className="reco-img"
                  src={el.background_image}
                  alt=""
                ></img>
                <br />
                <Button
                  variant="primary"
                  onClick={() => {
                    fetch("/api/recos", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        token: window.localStorage.getItem("token"),
                      },
                      body: JSON.stringify({
                        category: "Game",
                        name: el.name,
                        cost: "",
                        source: "",
                        description: "",
                        genre: "",
                        img: el.background_image,
                        userId: currentUserId,
                      }),
                    })
                      .then((response) => response.json())
                      .then(history.push("/my-recos"));
                  }}
                >
                  Add to My Reco's
                </Button>
              </li>
            </div>
          ))}
        </ul>
        <br />
      </div>
    </div>
  );
};
