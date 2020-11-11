import React, {Component} from 'react';
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
       
        // while (hand1< hand2){
        //     let randomIndex 
        // }
       
        //attempt 1
        // let array = this.props.pokemon;
        // let randomArray = array[Math.floor(Math.random() * array.length)]
        // for(let i = 0; i < randomArray.length; i ++){
        //     if(i<4){
        //         hand1.push(randomArray[i])
        //     } else {
        //         hand2.push(randomArray[i])
        //     }
        // }


        return(
            <div className="Pokegame">
                <h1>POKEGAME</h1>
                {/* <div>{hand2.name}</div> */}
                {/* <div>{hand1.type}</div> */}
            </div>
        )
    }
}

export default Pokegame; 