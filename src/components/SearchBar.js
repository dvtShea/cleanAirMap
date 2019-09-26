import React, { useState, useEffect } from "react";
import Cities from "./Cities";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length < 3) {
      setIsEmpty(true);
    } else if (search.length >= 3) {
      setIsEmpty(false);
    }
  }, [search]);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand mx-auto d-sm-none">cleanAirMap</div>
        <form className="form-group my-2 col-sm-4 ">
          <input
            className="form-control input-lg"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Enter a City..."
            aria-label="Search"
          ></input>
        </form>
        <div className="navbar-brand ml-auto d-none d-sm-block">
          cleanAirMap
        </div>
      </nav>

      {search.length >= 3 && <Cities search={search} isEmpty={isEmpty} />}
    </React.Fragment>
  );
};

export default SearchBar;
