import React, { useEffect, useState } from "react";
import City from "./City";

const aqicnKey = process.env.REACT_APP_AQICN_KEY;

const Cities = props => {
  const { search } = props;

  const [results, setResults] = useState([]);

  useEffect(() => {
    // memory leak cleanup
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchData() {
      const res = await fetch(
        `https://api.waqi.info/search/?token=${aqicnKey}&keyword=${search}`,
        { signal: signal }
      );

      res
        .json()
        .then(res => setResults(res.data.slice(0, 6)))
        .catch(err => {
          console.log(err);
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
