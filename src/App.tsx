import React from "react";
import "./App.css";

import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";

  interface searchProps {
    searchWord: string;
    cards: [string];
  }

class App extends React.PureComponent {

    state = {
      searchWord: '',
      cards: []
    }



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
