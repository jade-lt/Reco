import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Button from "react-bootstrap/Button";

export const RecoCreate = () => {
    const history = useHistory();

    const [reco, setReco] = useState({
      category: "",
      name: "",
      cost: "",
      source: "",
      description: "",
      genre: "",
      img: "",
    });

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
        console.log(array[0].genre_ids[0])
      })
      .catch((err) => console.error(err));
  };

  const clickAddManuallyHandler = () => {
      history.push('/reco/add-manually')
  }

  // const clickAddToMyRecosHandler = () => {
  //   fetch('/api/recos', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'token': window.localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({
  //       category: reco.category,
  //       name: reco.name,
  //       cost: reco.cost,
  //       source: reco.source,
  //       description: reco.description,
  //       genre: reco.genre,
  //       img: reco.img,
  //   })
  //   })
  //     .then(response => response.json())
  //     .then(history.push('/my-list'))
  // }

  return (
    <div>
      <h3>Search for a new Reco to add</h3>
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
            <div className="user-recos-list" id="all-recos-hoverable" >
              <li key={el.id}>
                <h4>{el.title}</h4>
                <h4>{el.name}</h4>

                <img
                  className="reco-img"
                  src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                  alt="">
                  </img>



                  <Button variant="primary" 
                  
                  onClick={() => {

                    setReco({
                      category: form.category,
                      name: el.original_title,
                      cost: "",
                      source: "",
                      description: el.overview,
                      genre: "",
                      img: `https://image.tmdb.org/t/p/w200${el.poster_path}`,
                  })






                  
                    fetch('/api/recos', {
                      method: "POST",
                      headers: {
                        'Content-Type': 'application/json',
                        'token': window.localStorage.getItem('token')
                      },
                      body: JSON.stringify(reco)
                    })
                      .then(response => response.json())
                      .then(history.push('/my-recos'))
                  
                  
              
                // .then((
                //   fetch('/api/recos', {
                //     method: "POST",
                //     headers: {
                //       'Content-Type': 'application/json',
                //       'token': window.localStorage.getItem('token')
                //     },
                //     body: JSON.stringify(reco)
                //   })
                // )
                  
                      
                // )
                // .then(response => response.json())
                // .then(history.push('/my-recos'))

                  }
                  
                    
                
                }
                  >
          Add to My Reco's
        </Button>









                  {/* <Button variant="primary" onClick={clickAddToMyRecosHandler}>
          Add to My Reco's
        </Button> */}
              </li>
            </div>
          ))}
        </ul>
        <br />
      </div>
      <div>

      <h3>Or add a new Reco manually</h3>
      <Button variant="primary" onClick={clickAddManuallyHandler}>
          Manualy Add a Reco
        </Button>
        </div>
    </div>
  );
};