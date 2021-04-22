import { useEffect, useState } from "react";



export const AllRecos = () => {
  const [recos, setRecos] = useState([]);


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

  return (
    <div className="main">
      <ul>
        {recos.map((el) => (
          <div className="user-recos-list">
            <div className={`${el.category}-category`}>
            <li key={el.id}>
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
    </div>
  );
};
