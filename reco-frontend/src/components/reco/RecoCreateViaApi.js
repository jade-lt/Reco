import { useEffect, useState } from "react";
// import { useHistory } from "react-router";

import Button from "react-bootstrap/Button";

export const RecoCreateViaApi = () => {
  //   const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    category: "",
  });

  const [searchResults, setSearchResults] = useState("");

  //   const [reco, setReco] = useState({
  //     category: "",
  //     name: "",
  //     cost: "",
  //     source: "",
  //     description: "",
  //     genre: "",
  //     img: "",
  //   });

  const nameInput = form.name;
  const categoryInput = form.category.toLowerCase();

  const inputUrl = encodeURI(
    `http://api.themoviedb.org/3/search/${categoryInput}?api_key=dd5b5fb0f236579b40c792f17042106b&query=${nameInput}`
  );

  console.log(inputUrl);

  //   useEffect(() => {
  //     fetch(inputUrl, {
  //       headers: {
  //         token: window.localStorage.getItem("token"),
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //           if(data.length) {
  //             setSearchResults(data);
  //             console.log(searchResults)
  //           } else {
  //               console.log("couldnt set search results")
  //           }

  //         }
  //       )
  //       .catch((error) => console.log("catch error:", error));
  //   }, []);

  //   const [searchApi, setSearchApi] = useEffecT()

  //   setReco({
  //     category: form.input,
  //     name: form.input,
  //     cost: form.input,
  //     source: form.input,
  //     description: form.input,
  //     genre: form.input,
  //     img: form.input,
  //   })

  // const queryInput = "the matrix"

  //   const searchApi = async (inputUrl) => {
  //       const response = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=dd5b5fb0f236579b40c792f17042106b&query=${queryInput}`)
  //       const json = await response.json()
  //       setSearchApi({ data:json, loading:false })
  //   }

  // useEffect(() => {
  //     if (search !== '') {
  //         searchApi(`https://api.themoviedb.org/3/search/keyword?api_key=dd5b5fb0f236579b40c792f17042106b&query=${queryInput}`)
  //     }
  // }, [search])

  const changeHandler = (e) => {
    const newFormState = { ...form };
    newFormState[e.target.name] = e.target.value;
    setForm(newFormState);
  };

  //   const queryInput = form.input
  //   console.log(queryInput)

  const submitSearchHandler = (e) => {
    e.preventDefault();
    fetch(inputUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Output: ", data);
      })
      .catch((err) => console.error(err));
    // fetch("/api/recos", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     token: window.localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify(reco)
    // })
    //   .then((response) => response.json())
    //   .then(history.push("/my-recos"));
  };

  //     useEffect(() => {
  //         fetch("/tmdb/3/search/keyword?api_key=dd5b5fb0f236579b40c792f17042106b&query=matrix&page=1", {

  //             headers: {
  //                 'token': window.localStorage.getItem('token')
  //               }
  // })
  // .then(response => {
  // 	console.log(response);
  // })
  // .catch(err => {
  // 	console.error(err);
  // });
  //     })

  // for dealing with spaces later
  // encodeURI("http://www.example.org/a file with spaces.html")
  // http://www.example.org/a%20file%20with%20spaces.html

  // .then(data => setResult(data))
  // .catch(err => {
  // 	console.error(err);
  // });

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
        <p>{searchResults}</p>
      </div>
    </div>
  );
};
