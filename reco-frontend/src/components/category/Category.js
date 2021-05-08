import { RecoCard } from "../reco/RecoCard";
import { useEffect, useState } from "react";

export const Category = (props) => {
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

  const results = recos.filter((response) =>
    response.category.includes(props.category)
  );

  return (
    <div className="main">
      <RecoCard listToMap={results} />
      {/* {currentUserType === "admin" && (
                    <span>
                        <ButtonComponent
                          onClick={() => history.push(`/admin/edit/category-genre/${props.category}`)}
                          buttonLabel="Edit this Category"
                        />
                    <br />
                     
                        <ButtonComponent
                          onClick={() => history.push(`/admin/delete/category-genre/${props.category}`)}
                          buttonLabel="Delete this Category"
                          />
                        
                    </span>
                  )} */}
    </div>
  );
};
