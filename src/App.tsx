import React from "react";
import "./App.css";

import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Cards />
      </div>
    );
  }
}

export default App;
