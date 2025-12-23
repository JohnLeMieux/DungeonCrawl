import { combat } from "../shared-data/combat-tables";
import { CharacterType, MonsterType } from "../shared-data/types";
import { rollDice } from "./utils";

export const characterHit = (character: CharacterType, monster: MonsterType) => {
  const table = combat.find(item => item.class.includes(character.class));
  const monsterAc = table?.to_hit.find(item => item.ac === monster.armor_class);
  const toHit = monsterAc?.to_hit.find(item => item.level === character.level)?.to_hit;
  if (toHit == null) {
    throw new Error(`Could not find ${character.level} level ${character.class} to hit ${monster.armor_class} AC monster`);
  }
  return rollDice(1, 20) >= toHit;
};
