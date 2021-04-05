// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// export const RecoList = () => {

//     const [recos, setRecos] = useState([]);

//     useEffect(() => {
//         fetch('/api/recos', {
//             headers: {
//                 'token': window.localStorage.getItem('token')
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.length) {
//                 setRecos(data)
//             }
//         })
//         .catch((error) => console.log('catch error:', error))
//     }, [])

//     // const randomIndex = Math.floor(Math.random() * recos.length);
//     // const randomReco = recos[randomIndex];
//     // setRecos(randomReco);
    

//     return (
//         <div>
//             <h1>Featured Reco</h1>
//             <ul>
//                 {
//                     recos.map(el => <li key={el.id}>{el.name}</li> )
//                 }
//             </ul>
//         </div>
//     )
// }