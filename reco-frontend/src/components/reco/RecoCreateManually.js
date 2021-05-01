import { useState } from "react";
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';




export const RecoCreateManually = () => {


    const currentUserId = window.localStorage.getItem("id");

    const [reco, setReco] = useState({
        category: '',
        name: '',
        cost: '',
        source: '',
        description: '',
        genre: '',
        img: ''
    })

    const history = useHistory();

    const changeHandler = (e) => {
        const newFormState = { ...reco };
        newFormState[e.target.name] = e.target.value;
        setReco(newFormState);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetch('/api/recos', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
          },
          body: JSON.stringify({
            category: reco.category,
            name: reco.name,
            cost: reco.cost,
            source: reco.source,
            description: reco.description,
            genre: reco.genre,
            img: reco.img,
            userId: currentUserId,
          })
        })
          .then(response => response.json())
          .then(history.push('/my-recos'))
      }

      const clickCancelHandler = () => {
        history.replace("/my-recos");
      };

      return (
          
        <div className="main">

                <form onSubmit={submitHandler}>
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
                <Button variant="outline-primary" onClick={clickCancelHandler} >Cancel</Button>

                    <Button variant="primary" type="submit">Save</Button>
    
                </form>
            </div>
        )
}