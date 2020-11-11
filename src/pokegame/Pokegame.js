import React, {Component} from 'react';
import Pokedex from '../pokedex/Pokedex';
import './Pokegame.css'



class Pokegame extends Component{
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
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
       
        while (hand1.length < hand2.length){
            let randomIndex = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomIndex, 1);
            hand1.push(randomPokemon);
        }
        console.log('hand1', hand1)
        console.log('hand2', hand2)
        let exp1 = hand1.reduce((experience, pokemon) => experience + pokemon.exp, 0);
        let exp2 = hand2.reduce((experience, pokemon) => experience + pokemon.exp, 0);
        // console.log('exp1', exp1)
        // console.log('exp2', exp2)
        return(
            <div className="Pokegame">
                <h1>POKEGAME</h1>
                <Pokedex pokemon={hand1} 
                expTotal={exp1} isWinner={exp1 > exp2}
                />
                <Pokedex pokemon={hand2} 
                expTotal={exp2} isWinner={exp2 > exp1}
                />
            </div>
        )
    
    }
}


export default Pokegame; 