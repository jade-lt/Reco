import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const RomanceRecos = () => {

    const [recos, setRecos] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetch("/api/recos", {
          headers: {
            token: window.localStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.length) {
              setRecos(data);
            }
          })
          .catch((error) => console.log("catch error:", error));
      }, []);

      const results = recos.filter(response => response.genre.includes("Romance"))



    return (
        <ul>
        {results.map((el) => (
        
        
        
                  <div className="user-recos-list" id="all-recos-hoverable">
                    <div className={`${el.category}-category`} onClick={() => history.push(`/reco/${el._id}`)}>
                    <li key={el._id}>
                      <h5 className="reco-name">{el.name}</h5>
                      <img className="reco-img" src={el.img} alt=""></img>
                      <br />
                      Category: {el.category}
                      <br />
                      Source/Author: {el.source}
                    </li>
                  </div>
                  </div>
                ))}
                </ul>
    )
}