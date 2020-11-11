import React, {Component} from 'react';
import App from '../App';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return(
            <div className="Pokecard">
                <h2>POKECARD</h2>
                    <h3>{this.props.name}</h3>
                    <img src={imgSrc}/>
            </div>
        )
    }
}

export default Pokecard;