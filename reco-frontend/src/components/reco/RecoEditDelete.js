import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";



export const RecoEditDelete = () => {

    const [reco, setReco] = useState({
        category: '',
        name: '',
        cost: '',
        source: '',
        description: ''
    })

  const history = useHistory();


  const params = useParams();

    useEffect(() => {
        fetch(`/api/recos/${params.id}`, {
            headers: {
                'token': window.localStorage.getItem('token')
              }
        })
        .then(response => response.json())
        .then(data => setReco(data))
    }, [])

    const changeHandler = (e) => {
        const newFormState = { ...reco };
        newFormState[e.target.name] = e.target.value;
        setReco(newFormState);
    }

      const submitEditHandler = (e) => {
        e.preventDefault();
        fetch(`/api/recos/${params.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
          },
          body: JSON.stringify(reco)
        })
          .then(response => response.json())
          .then(history.push('/my-recos'))
      }

      const submitDeleteHandler = (e) => {
        e.preventDefault();
        fetch(`/api/recos/${params.id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'token': window.localStorage.getItem('token')
          }
        })
          .then(history.push('/my-recos'))
      }

    return (
    <div>
            <h1>Edit or Delete a Reco</h1>
            <form>
                <label>
                    Category
                    <input name="category" value={reco.category} onChange={changeHandler} />
                </label>
                <label>
                    Name
                    <input name="name" value={reco.name} onChange={changeHandler} />
                </label>
                <label>
                    Cost
                    <input name="cost" value={reco.cost} onChange={changeHandler} />
                </label>
                <label>
                    Source
                    <input name="source" value={reco.source} onChange={changeHandler} />
                </label>
                <label>
                    Description
                    <input name="description" value={reco.description} onChange={changeHandler} />
                </label>
                <button type="submit" onClick={submitEditHandler} >Edit</button>
                <button type="submit" onClick={submitDeleteHandler} >Delete</button>

            </form>
        </div>
    )
    
}