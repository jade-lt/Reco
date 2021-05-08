import { RecoCard } from "./reco/RecoCard";
import { useState, useEffect } from "react";
import axios from "axios";

export const Search = () => {
  const [reco, setReco] = useState([]);

  const [filteredRecos, setFilteredRecos] = useState([]);

  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/recos");
        setReco(res.data);
        setFilteredRecos(res.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const results = filteredRecos.filter((res) =>
      res.name.toLowerCase().includes(result)
    );
    setReco(results);
  }, [filteredRecos, result]);

  const onChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div className="main">
      <div >
        <input
        id="search"
          type="text"
          placeholder="Search"
          value={result}
          onChange={onChange}
        />
      </div>
      <RecoCard listToMap={reco} />
    </div>
  );
};
