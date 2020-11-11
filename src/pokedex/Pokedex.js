import React, {Component} from 'react';
import Pokecard from '../pokecard/Pokecard';
import './Pokedex.css'

class Pokedex extends Component{
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else{
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }
        return(
            <div className="Pokedex">
                {title}
                <h4>total experience:{this.props.expTotal}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map(character => (
                        <Pokecard id={character.id} name={character.name} type = {character.type} exp={character.exp}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;