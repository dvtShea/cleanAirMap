import React, { useEffect, useState } from "react";
import City from "./City";

let aqicnKey;

if (process.env.NODE_ENV !== "production") {
  aqicnKey = process.env.REACT_APP_AQICN_KEY;
} else {
  aqicnKey = process.env.AQICN_KEY;
}

const Cities = props => {
  const { search } = props;

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.waqi.info/search/?token=${aqicnKey}&keyword=${search}`
      );

      res.json().then(res => setResults(res.data.slice(0, 6)));
    }
    fetchData();
  }, [search]);

  return (
    <div>
      {results !== [] &&
        results.map(item => <City key={item.uid} station={item} />)}
    </div>
  );
};

export default Cities;
