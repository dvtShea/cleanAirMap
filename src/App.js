import React from "react";
import DocumentMeta from "react-document-meta";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const App = () => {
  const meta = {
    title: "cleanAirMap",
    description:
      "React app that fetches air quality data for a queried city. Displays a map as well as weather data for the selected city's coordinates. UI created with Bootstrap.",
    canonical: "https://cleanairmap.netlify.com/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags"
      }
    }
  };

  return (
    <div>
      <DocumentMeta {...meta} />

      <SearchBar />
      <Footer />
    </div>
  );
};
export default App;
