import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Button from "react-bootstrap/Button";

export const MovieCreate = () => {
  const history = useHistory();
  const currentUserId = window.localStorage.getItem("id");


  const [searchResults, setSearchResults] = useState([]);

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


  const inputUrl = encodeURI(
    `http://api.themoviedb.org/3/search/movie?api_key=dd5b5fb0f236579b40c792f17042106b&query=${nameInput}`
  );

  const submitSearchHandler = (e) => {
    e.preventDefault();
    console.log("api search button was clicked");

    fetch(inputUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Array of results: ", data.results);
        const array = data.results;
        setSearchResults(array);
        console.log("setSearchResults ", searchResults);

      })
      .catch((err) => console.error(err));
  };


  return (
    <div className="main">
    
      <h3>Add a Movie</h3>
      <form onSubmit={submitSearchHandler}>
        <label>
 
          <input name="name" value={form.name} placeholder="Enter a movie title" onChange={changeHandler} />
        </label>
        
        <Button variant="primary" type="submit">
          Search
        </Button>
      </form>
      <div>
        <ul>
          {searchResults.map((el) => (
            <div className="user-recos-list" id="all-recos-hoverable">
              <li key={el.id}>
                <h4>{el.title}</h4>
                <h4>{el.name}</h4>

                <img
                  className="reco-img"
                  src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                  alt=""
                ></img>

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
                        category: "Movie",
                        name: el.title,
                        cost: "",
                        source: "",
                        description: el.overview,
                        genre: "",
                        img: `https://image.tmdb.org/t/p/w200/${el.poster_path}`,
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
      {/* <div>
        <h3>Or add a new Reco manually</h3>
        <Button variant="primary" onClick={clickAddManuallyHandler}>
          Manualy Add a Reco
        </Button>
      </div> */}
    </div>
  );
};
