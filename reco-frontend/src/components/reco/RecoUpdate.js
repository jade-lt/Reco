import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';




export const RecoUpdate = () => {

    const [reco, setReco] = useState({
        category: '',
        name: '',
        cost: '',
        source: '',
        description: '',
        genre: '',
        img: '',
        userId: ''
    })

  const history = useHistory();


  const params = useParams();

    useEffect(() => {
        fetch(`/api/recos/${params.id}`, {
            headers: {
                'token': window.localStorage.getItem('token')
              }
        })
        .then(console.log(params))

        .then(response => response.json())
        .then(data => setReco(data))
    }, [params])

    const changeHandler = (e) => {
        const newFormState = { ...reco };
        newFormState[e.target.name] = e.target.value;
        setReco(newFormState);
    }

      const submitHandler = (e) => {
        e.preventDefault();
        fetch(`/api/recos/${params.id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
          },
          body: JSON.stringify(reco)
        })
          .then(response => response.json())
          .then(() => history.push('/my-recos'))
      }

    //   const clickCancelHandler = () => {
    //     history.replace("/my-recos");
    //   };

    return (
        <div className="main">
        <div className="header-text" id="header-update">
            <h1>Edit</h1>
            </div>
            <div>
            <form>
                <label>
                    Category<br />
                    <input name="category" value={reco.category} onChange={changeHandler} />
                </label><br />
                <label>
                    Name<br />
                    <input name="name" value={reco.name} onChange={changeHandler} />
                </label><br />
                <label>
                    Genre<br />
                    <input name="genre" value={reco.genre} onChange={changeHandler} />
                </label><br />
                <label>
                    Cost<br />
                    <input name="cost" value={reco.cost} onChange={changeHandler} />
                </label><br />
                <label>
                    Source/Author<br />
                    <input name="source" value={reco.source} onChange={changeHandler} />
                </label><br />
                <label>
                    Description/Comment<br />
                    <input name="description" value={reco.description} onChange={changeHandler} />
                </label><br />
                <label>
                    Image Url<br />
                    <input name="img" value={reco.img} onChange={changeHandler} />
                </label><br />
                <Button variant="outline-primary" onClick={() => history.push(`/reco/${reco._id}`)} >Cancel</Button>

                <Button variant="primary" type="submit" onClick={submitHandler} >Save</Button>

            </form>
            </div>
        </div>
    )
    
}