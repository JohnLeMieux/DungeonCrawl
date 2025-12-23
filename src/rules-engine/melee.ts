import { combat, monsterCombat } from "../shared-data/combat-tables";
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

export const monsterHit = (monster: MonsterType, character: CharacterType) => {
  const charAc = character.armor_class ?? 10;
  const record = monsterCombat.find(item => item.ac === charAc);
  let toHit;
  if (monster.hit_dice.dice === 1) {
    if (!monster.hit_dice.bonus) {
      toHit = record?.hit_dice.find(item => item.dice === 1 && item.bonus === undefined)?.to_hit;
    } else if (monster.hit_dice.bonus < -1) {
      toHit = record?.hit_dice.find(item => item.bonus === -2)?.to_hit;
    } else if (monster.hit_dice.bonus === -1) {
      toHit = record?.hit_dice.find(item => item.bonus === -1)?.to_hit;
    } else {
      toHit = record?.hit_dice.find(item => item.bonus === 1)?.to_hit;
    }
  } else {
    toHit = record?.hit_dice.find(item => item.dice === monster.hit_dice.dice)?.to_hit;
  }
  if (toHit == null) {
    throw new Error(`Could not find ${monster.hit_dice.dice} monster hit dice to hit ${charAc} AC character`);
  }
  return rollDice(1, 20) >= toHit;
};
