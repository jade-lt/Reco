import { useState } from "react";
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';



export const RecoCreate = () => {

    const [reco, setReco] = useState({
        category: '',
        name: '',
        genre: '',
        cost: '',
        source: '',
        description: ''
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
          body: JSON.stringify(reco)
        })
          .then(response => response.json())
          .then(history.push('/my-recos'))
      }

      return (
        <div className="main">
                <h1>Create a Reco</h1>
                <form onSubmit={submitHandler}>
                    <label>
                        Category
                        <input name="category" value={reco.category} onChange={changeHandler} />
                    </label>
                    <label>
                        Name
                        <input name="name" value={reco.name} onChange={changeHandler} />
                    </label>
                    <label>
                        Genre
                        <input name="genre" value={reco.genre} onChange={changeHandler} />
                    </label>
                    <label></label>
                    <label>
                        Cost
                        <input name="cost" value={reco.cost} onChange={changeHandler} />
                    </label>
                    <label>
                        Source/Author
                        <input name="source" value={reco.source} onChange={changeHandler} />
                    </label>
                    <label>
                        Description/Comment
                        <input name="description" value={reco.description} onChange={changeHandler} />
                    </label>
                    <Button variant="outline-success" type="submit">Create</Button>
    
                </form>
            </div>
        )
}