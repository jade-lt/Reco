import { GenreCard } from "./GenreCard";
import { useEffect, useState } from "react";

export const AllGenres = () => {
  const [genres, setGenres] = useState([]);

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
      <GenreCard listToMap={genres}/>
    </div>
  );
};
