import React from 'react'
interface Origin {
    'name': string;
    "url": string;
}

interface Location {
    "name": string;
    "url": string;
}



import data from '../../assets/RickAndMorty.json'
import Card from '../Card/Card'

import './Cards.styles.css'

interface Item {id: number; name: string; status: string; species: string; type: string; gender: string; origin: Origin; location: Location; image: string; url: string; created: string }

class Cards extends React.PureComponent {
 

    render(): React.ReactNode {
        return (
          <div className='cards-wrapper'>
            {data.results.map((item: Item) => {
                return (
                    <Card {...item} />
                );
            })}
          </div>
        );
    }
}

export default Cards