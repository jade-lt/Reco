// import { RecoCard } from "./reco/RecoCard";
// import { useEffect, useState } from "react";

// export const RecoListTest = () => {
//   const [recos, setRecos] = useState([]);

//   useEffect(() => {
//     fetch("/api/recos", {
//       headers: {
//         token: window.localStorage.getItem("token"),
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const currentUserId = window.localStorage.getItem("id");
//         const results = data.filter(
//           (result) => result.userId === currentUserId
//         );

//         setRecos(results);
//       })
//       .catch((error) => console.log("catch error:", error));
//   }, []);

//   return <RecoCard listToMap={recos} />;
// };
