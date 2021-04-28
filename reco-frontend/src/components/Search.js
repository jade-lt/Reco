import { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";



export const Search = () => {

  const history = useHistory();


    const [reco, setReco] = useState([]);
    const [filteredRecos, setFilteredRecos] = useState([]);
    const [result, setResult] = useState("");

    useEffect(()=>{
        const fetchData = async ()=> {
                try{
                    const res = await axios.get('/api/recos');
                    setReco(res.data);
                    setFilteredRecos(res.data);
                }catch(err){
                    throw new Error(err);
                }
                 };
              fetchData(); 
    },[]);




  useEffect(()=> {
    const results = filteredRecos.filter(res=> res.name.toLowerCase().includes(result)

    ); 
    setReco(results)
}, [filteredRecos, result])



const onChange = (e) => {
    setResult(e.target.value);
}
 



return (
<div className="main">

    {/* <div className="header-text" >
                <h1>Search for a Reco</h1>
                </div> */}
    <div id="search">
<input 
    type="text"
    placeholder="Search for a Reco"
    value={result}
    onChange={onChange}
/>
</div>


<ul>
{reco.map((el) => (



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
</div>

)  

    
}