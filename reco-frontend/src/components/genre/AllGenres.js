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
      <h1>GENRES</h1>
      <GenreCard listToMap={genres} />
    </div>
  );
};
