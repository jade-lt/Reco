import { useState } from "react";
import { useHistory } from "react-router";
import Button from 'react-bootstrap/Button';
import { ProtectedNavbar } from "../ProtectedNavbar";



export const RecoCreate = () => {

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
          body: JSON.stringify(reco)
        })
          .then(response => response.json())
          .then(history.push('/my-recos'))
      }

      return (
          
        <div className="main">
            <ProtectedNavbar />
            <div className="header-text" id="header-create">
                <h1>Add a new Reco</h1>
                </div>
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
                    <Button variant="primary" type="submit">Create</Button>
    
                </form>
            </div>
        )
}