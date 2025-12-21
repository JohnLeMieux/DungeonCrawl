export const rollDice = (dice: number, sides: number, bonus = 0) => {
  let total = 0;
  for (let i = 1; i <= dice; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  total += 0;
  return total;
};