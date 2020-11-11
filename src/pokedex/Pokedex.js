import React, {Component} from 'react';
import Pokecard from '../pokecard/Pokecard';

class Pokedex extends Component{
    static defaultProps = {
        pokemon: [
            {id: 4, name: "Charmander", type: "fire", exp: 62},
            {id: 7, name: "Squirtle", type: "water", exp: 63},
            {id: 11, name: "Metapod", type: "bug", exp: 3},
            {id: 12, name: "Butterfree", type: "flying", exp: 15},
            {id: 25, name: "Pikachu", type: "electric", exp: 83},
            {id: 39, name: "Jigglypuff", type: "normal", exp: 23},
            {id: 94, name: "Gengar", type: "poison", exp: 83},
            {id: 133, name: "Eevee", type: "normal", exp: 19},
        ]
    }
    render(){
        return(
            <div className="Pokedex"></div>
        )
    }
}

export default Pokedex;