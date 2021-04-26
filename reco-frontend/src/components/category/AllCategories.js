import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const AllCategories = () => {
  const [categories, setCategories] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("/api/categories", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setCategories(data);
        }
      })
      .catch((error) => console.log("catch error:", error));
  }, [setCategories]);

  return (
    <div className="main">
      <div className="header-text" id="header-categories">
        <h1>Categories</h1>
      </div>
      <ul>
        {categories.map((el) => (
          <div className="user-recos-list" id="user-recos-list-hoverable" >
            <div className={`${el.name}-category`} onClick={() => history.push(`/${el.name}-category`)}>
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
