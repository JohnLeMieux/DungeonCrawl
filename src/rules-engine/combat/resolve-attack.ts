import { combat, monsterCombat } from "../tables/combat-tables";
import { Combatant, ToHitSource } from "./to-combatant";
import { Class } from "../character/character-type";
import { HitDice } from "../monster/monster-type";

const lookupCharacterTable = (characterClass: Class, level: number, armorClass: number) => {
  const table = combat.find(item => item.class.includes(characterClass));
  const monsterAc = table?.toHit.find(item => item.ac === armorClass);
  const toHit = monsterAc?.toHit.find(item => item.level === level)?.toHit;
  /* istanbul ignore next */
  if (toHit == null) {
    throw new Error(`Could not find ${level} level ${characterClass} to hit ${armorClass} AC monster`);
  }
  return toHit;
};

const lookupMonsterTable = (hitDice: HitDice, armorClass: number) => {
  const record = monsterCombat.find(item => item.ac === armorClass);
  let toHit;
  if (hitDice.dice === 1) {
    if (!hitDice.bonus) {
      toHit = record?.hitDice.find(item => item.dice === 1 && item.bonus === undefined)?.toHit;
    } else if (hitDice.bonus < -1) {
      toHit = record?.hitDice.find(item => item.bonus === -2)?.toHit;
    } else if (hitDice.bonus === -1) {
      toHit = record?.hitDice.find(item => item.bonus === -1)?.toHit;
    } else {
      toHit = record?.hitDice.find(item => item.bonus === 1)?.toHit;
    }
  } else {
    toHit = record?.hitDice.find(item => item.dice === hitDice.dice)?.toHit;
  }
  /* istanbul ignore next */
  if (toHit == null) {
    throw new Error(`Could not find ${hitDice.dice} monster hit dice to hit ${armorClass} AC character`);
  }
  return toHit;
};

const getRequiredRoll = (source: ToHitSource, armorClass: number) => {
  switch (source.type) {
    case "character":
      return lookupCharacterTable(source.class, source.level, armorClass);
    case "monster":
      return lookupMonsterTable(source.hitDice, armorClass);
    /* istanbul ignore next */
    default:
      return 0;
  }
};

/**
 * Use toCombatant() to convert attacker and defender before passing them to this function.
 * 
 * @param attacker 
 * @param defender 
 * @param roll 
 * @returns 
 */
export const resolveAttack = (attacker: Combatant, defender: Combatant, roll: number) => {
  const needed = getRequiredRoll(attacker.toHitSource, defender.armorClass);
  return {
    hit: roll >= needed,
    needed,
    roll
  };
};