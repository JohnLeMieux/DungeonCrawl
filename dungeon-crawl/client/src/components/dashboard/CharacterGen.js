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

    checkRaceAndClass() {
        let result = [];
        while (result.length === 0) {
            if (this.isFighter())
                result.push("Human Fighter");
            if (this.isMage()) 
                result.push("Human Mage");
            if (this.isCleric())
                result.push("Human Cleric");
            if (this.isThief())
                result.push("Human Thief");
            if (this.isElf())
                result.push("Elf Fighter/Mage");
            if (this.isDwarf() && this.isFighter())
                result.push("Dwarf Fighter");
            if (this.isDwarf() && this.isThief())
                result.push("Dwarf Thief");
            if (this.isHalfling() && this.isFighter())
                result.push("Halfling Fighter");
            if (this.isHalfling() && this.isThief())
                result.push("Halfling Thief");
            if (result.length == 0)
                this.setState({
                    strength: rollDice(3, 6, 0),
                    intelligence: rollDice(3, 6, 0),
                    wisdom: rollDice(3, 6, 0),
                    dexterity: rollDice(3, 6, 0),
                    constitution: rollDice(3, 6, 0),
                    charisma: rollDice(3, 6, 0)
                });
        }
        return result;
    }

    isFighter() {
        return this.state.strength >= 9 && this.state.wisdom > 5 && this.state.dexterity > 5 && this.state.constitution >= 7 && this.state.charisma > 5;
    }

    isMage() {
        return this.state.intelligence >= 9 && this.state.wisdom > 5 && this.state.dexterity >= 6 && this.state.constitution > 5 && this.state.charisma > 5;
    }

    isCleric() {
        return this.state.strength > 5 && this.state.intelligence > 5 && this.state.wisdom >= 9 && this.state.constitution > 5 && this.state.charisma > 5;
    }

    isThief() {
        return this.state.strength > 5 && this.state.intelligence > 5 && this.state.dexterity >= 9 && this.state.constitution > 5 && this.state.charisma > 5;
    }

    isElf() {
        return this.isFighter() && this.isMage() && this.state.dexterity >= 7 && this.state.charisma >= 8;
    }

    isDwarf() {
        return this.state.strength >= 8 && this.state.dexterity <= 17 && this.state.constitution >= 12 && this.state.charisma <= 16;
    }

    isHalfling() {
        return this.state.strength >= 6 && this.state.strength <= 17 && this.state.intelligence >= 6 && this.state.wisdom <= 17 && this.state.dexterity >= 8 && this.state.constitution >= 10;
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
                {this.checkRaceAndClass().map((rc) => (
                    <span>
                        <label htmlFor={rc}>{rc}</label>
                        <input type="radio" id={rc} key={rc} name="raceAndClass" value={rc}/><br/>
                    </span>
                ))}
            </form>
        );
    }
}

export default CharacterGen;