import { combat, monsterCombat } from "../shared-data/combat-tables";
import { CharacterType, Combatant, MonsterType } from "../shared-data/types";
import { deriveArmorClass } from "./character-utils";
import { rollDice } from "./utils";

const isCharacter = (combatant: Combatant): combatant is CharacterType => {
  return "level" in combatant;
};

/**
 * Determines whether a character hits its target
 * 
 * @param character the attacking character
 * @param monster the defending target
 * @returns true if the character hit, false if not
 */
export const characterHit = (character: CharacterType, monster: MonsterType) => {
  const table = combat.find(item => item.class.includes(character.class));
  const monsterAc = table?.toHit.find(item => item.ac === monster.armorClass);
  const toHit = monsterAc?.toHit.find(item => item.level === character.level)?.toHit;
  /* istanbul ignore next */
  if (toHit == null) {
    throw new Error(`Could not find ${character.level} level ${character.class} to hit ${monster.armorClass} AC monster`);
  }
  return rollDice(1, 20) >= toHit;
};

/**
 * Determines whether a monster hit a character
 * 
 * @param monster the attacking monster
 * @param character the defending character
 * @returns true if the monster hit the character, false if not
 */
export const monsterHit = (monster: MonsterType, character: CharacterType) => {
  // TODO remove hardcoded ac when no longer necessary for testing
  const charAc = character.armorClass ?? deriveArmorClass(character);
  const record = monsterCombat.find(item => item.ac === charAc);
  let toHit;
  if (monster.hitDice.dice === 1) {
    if (!monster.hitDice.bonus) {
      toHit = record?.hitDice.find(item => item.dice === 1 && item.bonus === undefined)?.toHit;
    } else if (monster.hitDice.bonus < -1) {
      toHit = record?.hitDice.find(item => item.bonus === -2)?.toHit;
    } else if (monster.hitDice.bonus === -1) {
      toHit = record?.hitDice.find(item => item.bonus === -1)?.toHit;
    } else {
      toHit = record?.hitDice.find(item => item.bonus === 1)?.toHit;
    }
  } else {
    toHit = record?.hitDice.find(item => item.dice === monster.hitDice.dice)?.toHit;
  }
  /* istanbul ignore next */
  if (toHit == null) {
    throw new Error(`Could not find ${monster.hitDice.dice} monster hit dice to hit ${charAc} AC character`);
  }
  return rollDice(1, 20) >= toHit;
};
