import React from "react";
import "./SearchBar.styles.css";

interface myProps {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchBar extends React.PureComponent<myProps> {
  render() {
    return (
      <form id="animated">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          name="search"
          placeholder="Search.."
          onChange={this.props.onChangeHandler}
        />
      </form>
    );
  }
}

export default SearchBar;
