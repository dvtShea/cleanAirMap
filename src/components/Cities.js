import React, { useEffect, useState } from "react";
import City from "./City";
import aqicn from "../services/aqicn";

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
    <React.Fragment>
      {results !== [] && (
        <div>
          <p className="d-sm-none px-4 mt-3 d-flex justify-content-center">
            <a
              href="http://aqicn.org/scale/"
              target="_blank"
              rel="noopener noreferrer"
            >
              What do these levels mean?
            </a>
          </p>
          <p className="d-none d-sm-block px-4 mt-3">
            <a
              href="http://aqicn.org/scale/"
              target="_blank"
              rel="noopener noreferrer"
            >
              What do these levels mean?
            </a>
          </p>
        </div>
      )}
      {results !== [] &&
        results.map(item => <City key={item.uid} station={item} />)}
    </React.Fragment>
  );
};

export default Cities;
