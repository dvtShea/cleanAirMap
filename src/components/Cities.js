import React, { useEffect, useState } from "react";
import City from "./City";
import aqicn from "../services/aqicn";

//const aqicnKey = process.env.REACT_APP_AQICN_KEY;

const Cities = props => {
  const { search } = props;

  const [results, setResults] = useState([]);

  useEffect(() => {
    // memory leak cleanup
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchData() {
      const response = await aqicn(search, signal);

      response.json().then(res => {
        setResults(res.data);
      });
    }
    fetchData();

    return function cleanup() {
      abortController.abort();
    };
  }, [search]);

  return (
    <div>
      {results !== [] &&
        results.map(item => <City key={item.uid} station={item} />)}
    </div>
  );
};

export default Cities;
