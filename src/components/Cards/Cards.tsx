import React from 'react';

import data from '../../assets/RickAndMorty.json';
import Card from '../Card/Card';

import './Cards.styles.css';

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Props {
  searchField: string;
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

class Cards extends React.PureComponent<Props> {
  state = {
    cards: [],
  };

  componentDidMount(): void {
    this.setState(() => {
      return { cards: data.results };
    });
  }

  render(): React.ReactNode {
    const { cards } = this.state;
    const filteredcards = cards.filter((card: Item) => {
      return card.name.toLocaleLowerCase().includes(this.props.searchField);
    });
    return (
      <div className="cards-wrapper">
        {filteredcards.map((item: Item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    );
  }
}

export default Cards;
