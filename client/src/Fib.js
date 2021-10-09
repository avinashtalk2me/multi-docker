import React, { useState, useEffect } from "react";
import axios from "axios";

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");

  const getIndexes = async () => {
    const response = await axios.get("/api/values/all");
    setSeenIndexes(response.data);
  };

  const getValues = async () => {
    const response = await axios.get("/api/values/current");
    setValues(response.data);
  };

  const renderSeenIndexes = () => {
    return (seenIndexes || []).map((item) => item.number).join(", ");
  };

  const renderCalculatedValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} calculate value is {values[key]}
        </div>
      );
    }

    return entries;
  };
  useEffect(() => {
    getValues();
    getIndexes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("/api/values", {
      index,
    });
    getValues();
    getIndexes();
    setIndex("");
  }; 
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input onChange={(e) => setIndex(e.target.value)} value={index} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated values</h3>
      {renderCalculatedValues()}
    </div>
  );
};

export default Fib;
