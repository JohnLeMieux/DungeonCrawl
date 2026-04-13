/**
 * Simulates rolling a number of multisided dice
 * 
 * @param dice the number of dice to be rolled
 * @param sides the number of sides on a die
 * @param bonus a positive or negative number to be added to the sum of the dice
 * @example rollDice(3, 6) rolls 3d6 and returns a number 3 - 18 with a bell curve probability
 * @example rollDice(1, 8, 1) returns a number 2 - 9
 * @returns an appropriate random number
 */
export const rollDice = (dice: number, sides: number, bonus = 0) => {
  let total = 0;
  for (let i = 1; i <= dice; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  total += bonus;
  return total;
};