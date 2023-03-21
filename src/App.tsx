import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.PureComponent {
  state = {
    filteredText: "",
  };
  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { filteredText: searchField };
    });
  };

  render() {
    return (
      <div className="App">
        <Link to="/about">
          <a className="about-us">About Us</a>
        </Link>
        <SearchBar onChangeHandler={this.onSearchChange} />
        <Cards searchField={this.state.filteredText} />
      </div>
    );
  }
}

export default App;
