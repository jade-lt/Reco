import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";


export const GameCreate = () => {

    const history = useHistory();
  
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

  const inputUrl = (
    `https://rawg.io/api/games?key=f22b54c31e4c4dfcb73fbd916c13f087&search=${nameInput}
    `
  );

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
        // console.log("setSearchResults ", searchResults);
        // console.log(array[0].genre_ids[0])
      })
      .catch((err) => console.error(err));
  };

  const clickAddManuallyHandler = () => {
      history.push('/reco/add-manually')
  }

  return (
    <div className="main">
    
      <h3>Add a Game</h3>
      <form onSubmit={submitSearchHandler}>
        <label>
       
          <input name="name" value={form.name} placeholder="Enter a game name" onChange={changeHandler} />
        </label>
        {/* <label>
          Category:
          <input
            name="category"
            value={form.category}
            onChange={changeHandler}
          />
        </label> */}
        <Button variant="primary" type="submit">
          Search
        </Button>
      </form>
      <div>
        <ul>
          {searchResults.map((el) => (
            <div className="user-recos-list" id="all-recos-hoverable" >
              <li key={el.id}>
                <h4>{el.name}</h4>
                {/* <h4>{el.name}</h4> */}

                <img
                  className="reco-img"
                  src={el.background_image}
                  alt="">
                  </img>



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









}
