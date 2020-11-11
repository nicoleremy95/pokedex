import React, {Component} from 'react';
import './Pokecard.css'

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// let newId = function(number){
//     if(number <= 999){
//         return `00${number}.slice(-3)`
//     }
// }
let newId = (num) => (num <= 999 ? `00${num}`.slice(-3): num)



class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${newId(this.props.id)}.png`
        return(
            <div className="Pokecard">
                    <h3 className="Pokecard-title">{this.props.name}</h3>
                    <div className="Pokecard-image">
                        <img src={imgSrc} alt={this.props.name}/>
                    </div>
                    <div className="Pokecard-data">{this.props.type}</div>
                    <div className="Pokecard-data">{this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;