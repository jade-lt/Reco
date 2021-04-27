import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const AllGenres = () => {
  const [genres, setGenres] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("/api/genres", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setGenres(data);
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, [setGenres]);

  return (
    <div className="main">
      <div className="header-text" id="header-categories">
        <h1>Genres</h1>
      </div>
      <ul>
        {genres.map((el) => (
          <div className="user-recos-list" id="genre-list-hoverable" >
            <div id="genre-list" className={`${el.name}-category`} onClick={() => history.push(`/${el.name}-genre`)}>
              <li key={el._id}>
                <h5 className="reco-name">{el.name}</h5>
                <img className="reco-img" src={el.img} alt=""></img>
                {/* <br />
                Category: {el.category}
                <br />
                Source/Author: {el.source}
                <br /> */}
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
