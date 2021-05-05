import { CategoryCard } from "../category/CategoryCard";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const AllCategories = () => {
  const [categories, setCategories] = useState([]);

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

        <h1>Categories</h1>

      <CategoryCard listToMap={categories} />
    </div>
  );
};
