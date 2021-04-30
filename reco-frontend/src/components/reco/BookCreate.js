import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";


export const BookCreate = () => {

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

  const inputUrl = (
    `https://openlibrary.org/search.json?q=${nameInput}`
  );

  const submitSearchHandler = (e) => {
    e.preventDefault();
    console.log("api search button was clicked");

    fetch(inputUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        const array = data.docs;
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

      <h3>Add a Book</h3>
      <form onSubmit={submitSearchHandler}>
        <label>
         
          <input name="name" value={form.name} placeholder="Enter a title or author" onChange={changeHandler} />
        </label>
       
        <Button variant="primary" type="submit">
          Search
        </Button>
      </form>
      <div>
        <ul>
          {searchResults.map((el) => (
            <div className="user-recos-list" id="all-recos-hoverable" >
              <li key={el.id_google}>
                <h4>{el.title}</h4>
                {/* <h4>{el.name}</h4> */}

                {/* <img
                  className="reco-img"
                  src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                  alt="">
                  </img> */}



                  <Button variant="primary" 
                  
                //   onClick={() => {
                    
                //       setReco({
                //         category: form.category,
                //         name: el.original_title,
                //         cost: "",
                //         source: "",
                //         description: el.overview,
                //         genre: "",
                //         img: `https://image.tmdb.org/t/p/w200${el.poster_path}`,
                //     })
                //     history.push('/test')
                //     }
                //   }
                  
                    

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