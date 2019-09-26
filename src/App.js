import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Footer />
      </div>
    );
  }
}
export default App;
