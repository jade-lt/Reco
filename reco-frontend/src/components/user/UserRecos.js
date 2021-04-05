import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const UserRecos = () => {

    const [recos, setRecos] = useState([]);

    useEffect(() => {
        fetch('/api/recos', {
            headers: {
                'token': window.localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length) {
                setRecos(data)
            }
        })
        .catch((error) => console.log('catch error:', error))
    }, [])

    return (
        <div>
            <h1>My Recos</h1>
            <ul>
                {
                    recos.map(el => <li key={el.id}><Link to={`/reco/edit/${el.id}`}>{el.name}</Link></li> )
                }
            </ul>
        </div>
    )
}