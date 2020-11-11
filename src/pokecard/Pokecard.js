import React, {Component} from 'react';
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return(
            <div className="Pokecard">
                <h2>POKECARD</h2>
                    <h3>{this.props.name}</h3>
                    <img src={imgSrc} alt={this.props.name}/>
                    <h4>{this.props.type}</h4>
                    <h4>{this.props.exp}</h4>
            </div>
        )
    }
}

export default Pokecard;