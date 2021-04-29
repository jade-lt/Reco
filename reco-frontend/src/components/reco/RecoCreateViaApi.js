import { useEffect, useState } from "react";
// import { useHistory } from "react-router";

import Button from "react-bootstrap/Button";

export const RecoCreateViaApi = () => {
  //   const history = useHistory();

  //   const [reco, setReco] = useState({
  //     category: "",
  //     name: "",
  //     cost: "",
  //     source: "",
  //     description: "",
  //     genre: "",
  //     img: "",
  //   });

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
  const categoryInput = form.category.toLowerCase();

  const inputUrl = encodeURI(
    `http://api.themoviedb.org/3/search/${categoryInput}?api_key=dd5b5fb0f236579b40c792f17042106b&query=${nameInput}`
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
    <div>
      Search for a new Reco to add
      <form onSubmit={submitSearchHandler}>
        <label>
          Name:
          <input name="name" value={form.name} onChange={changeHandler} />
        </label>
        <label>
          Category:
          <input
            name="category"
            value={form.category}
            onChange={changeHandler}
          />
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
                <h4>{el.original_title}</h4>
                <img
                  className="reco-img"
                  src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                  alt=""
                ></img>
                {/* <br />
                {el.overview} */}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
