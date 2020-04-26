import React, { Component } from 'react';
import rollDice from '../../utils/rollDice';

class CharacterGen extends Component {
    constructor() {
        super();
        this.state = {
            strength: rollDice(3, 6, 0),
            intelligence: rollDice(3, 6, 0),
            wisdom: rollDice(3, 6, 0),
            dexterity: rollDice(3, 6, 0),
            constitution: rollDice(3, 6, 0),
            charisma: rollDice(3, 6, 0)
        };
    };

    checkClass() {
        let result = [], 
            strength = this.state.strength, 
            intelligence = this.state.intelligence, 
            wisdom = this.state.wisdom,
            dexterity = this.state.dexterity,
            constitution = this.state.constitution,
            charisma = this.state.charisma;
        if (strength >= 9 && wisdom >= 5 && dexterity >= 5 && constitution >= 7 && charisma >= 5)
            result.push("Fighter");
        if (intelligence >= 9 && wisdom >= 5 && dexterity >= 6 && constitution >= 5 && charisma >= 5)
            result.push("Mage");
        if (strength >= 5 && intelligence >= 5 && wisdom >= 9 && constitution >= 5 && charisma >= 5)
            result.push("Cleric");
        if (strength >= 5 && intelligence >= 5 && dexterity >= 9 && constitution >= 5 && charisma >= 5)
            result.push("Thief");
        return result;
    }

    checkRace() {
        let result = ["Human"], 
            strength = this.state.strength, 
            intelligence = this.state.intelligence, 
            wisdom = this.state.wisdom,
            dexterity = this.state.dexterity,
            constitution = this.state.constitution,
            charisma = this.state.charisma;
        if (strength >= 8 && dexterity <= 17 && constitution >= 12 && charisma <= 16)
            result.push("Dwarf");
        if (intelligence >= 8 && dexterity >= 7 && constitution >= 6 && charisma >= 8)
            result.push("Elf");
        if (strength >= 6 && strength <= 17 && intelligence >= 6 && wisdom <= 17 && dexterity >= 8 && constitution >= 10)
            result.push("Halfling");
        return result;
    }

    render() {
        //const { user } = this.props.auth;

        return (
            <form style={{width: "50%", padding: "10px"}}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/><br/>
                <label htmlFor="str">Strength</label>
                <input type="text" id="str" value={this.state.strength} disabled/><br/>
                <label htmlFor ="int">Intelligence</label>
                <input type="text" id="int" value={this.state.intelligence} disabled/><br/>
                <label htmlFor="wis">Wisdom</label>
                <input type="text" id="wis" value={this.state.wisdom} disabled/><br/>
                <label htmlFor="dex">Dexterity</label>
                <input type="text" id="dex" value={this.state.dexterity} disabled/><br/>
                <label htmlFor="con">Constitution</label>
                <input type="text" id="con" value={this.state.constitution} disabled/><br/>
                <label htmlFor="cha">Charisma</label>
                <input type="text" id="cha" value={this.state.charisma} disabled/><br/>
                {this.checkClass().map((cl) => (
                    <span>
                        <label htmlFor={cl}>{cl}</label>
                        <input type="radio" id={cl} key={cl} name="characterClass" value={cl}/>
                    </span>
                ))}
                <br/>
                {this.checkRace().map((race) => (
                    <span>
                        <label htmlFor={race}>{race}</label>
                        <input type="radio" id={race} key={race} name="race" value={race}/>
                    </span>
                ))}
            </form>
        );
    }
}

export default CharacterGen;