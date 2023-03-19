import React from "react";
import "./Card.styles.css";
interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}
interface Item {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  url: string;
  created: string;
}


class Card extends React.PureComponent<Item> {
    values = Object.entries(this.props)
  render() {
    console.log(this.values)
    return (
      <article>
        <div className="article-wrapper">
          <figure>
            <img src={this.props.image} alt={this.props.name} />
          </figure>
          <div className="article-body">
            <h2>{this.props.name}</h2>
            <h3 className="details">Details:</h3>
            <div className="info">
              <h4>Status:</h4>
              <h4>{this.props.status}</h4>
            </div>
            <div className="info">
              <h4>Species:</h4>
              <h4>{this.props.species}</h4>
            </div>
            <div className="info">
              <h4>Gender:</h4>
              <h4>{this.props.gender}</h4>
            </div>
            <div className="info">
              <h4>Location:</h4>
              <h4>{this.props.location.name}</h4>
            </div>
            {this.props.origin.name !== "unknown" && (
              <div className="info">
                <h4>Origin:</h4>
                <h4>{this.props.origin.name}</h4>
              </div>
            )}
            {this.props.type && (
              <div className="info">
                <h4>Type:</h4>
                <h4>{this.props.type}</h4>
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
