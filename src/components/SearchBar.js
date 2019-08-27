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
        <form className="form-inline my-2 my-lg-0 ">
          <input
            className="form-control form-control-lg"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Enter a City..."
            aria-label="Search"
          ></input>
        </form>
        <div className="navbar-brand ml-auto" href="#">
          <div className="">cleanAirMap</div>
        </div>
      </nav>

      {search.length >= 3 && <Cities search={search} isEmpty={isEmpty} />}
    </React.Fragment>
  );
};

export default SearchBar;
