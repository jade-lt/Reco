import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";


export const BookCreate = () => {

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
    `https://www.googleapis.com/books/v1/volumes?q=${nameInput}&key=AIzaSyD0fhiuvUpOW2Y0zysgECZCG1tofGSv6Jk`
  );

  const submitSearchHandler = (e) => {
    e.preventDefault();
    console.log("api search button was clicked");
    console.log(inputUrl);

    fetch(inputUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        const array = data.items;
        console.log("array: ", array);
        const bookImage = array[0].volumeInfo.imageLinks
        
        console.log("image: ", bookImage);
        console.log("name: ", array[0].volumeInfo.title);

        console.log("genre: ", array[0].volumeInfo.categories[0]);
        console.log("description: ", array[0].volumeInfo.description);
    
        const thumbnail = bookImage.thumbnail
        console.log("thumbnail", thumbnail);



        setSearchResults(array);
        // console.log("setSearchResults ", searchResults);
        // console.log(array[0].genre_ids[0])
      })
      .catch((err) => console.error(err));
  };






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
                <h4>{el.volumeInfo.title}</h4>

                <img
                  className="reco-img"
                  src={el.volumeInfo.imageLinks.thumbnail}
                  alt="">
                  </img>
<br />


                  <Button variant="primary" 
                   onClick={() => {

                    
                    fetch("/api/recos", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        token: window.localStorage.getItem("token"),
                      },
                      body: JSON.stringify({
                        category: "Book",
                        name: el.volumeInfo.title,
                        cost: "",
                        source: "",
                        description: el.volumeInfo.description,
                        genre: el.volumeInfo.categories[0],
                        img: el.volumeInfo.imageLinks.thumbnail,
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