import React from "react";
import './SearchBar.styles.css'
  interface searchProps {
    searchWord: string;
    cards: [string];
  }
class SearchBar extends React.PureComponent {
  render() {
    return (
      <form id="animated">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" name="search" placeholder="Search.." />
      </form>
    );
  }
}

export default SearchBar
