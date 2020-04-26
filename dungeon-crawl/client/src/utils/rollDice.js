const rollDice = (dice, sides, bonus) => {
    var result = 0;
    for (var i = 1; i <= dice; i++) {
        var dieRoll = Math.floor(Math.random() * (sides)) + 1;
        result += dieRoll;
    }
    result += bonus;
    return result;
}

export default rollDice;