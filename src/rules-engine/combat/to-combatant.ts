import { CharacterType, Class } from "../character/character-type";
import { deriveArmorClass } from "../character/derive-armor-class";
import { HitDice, MonsterType } from "../monster/monster-type";

export type ToHitSource = {
  type: "character";
  class: Class;
  level: number;
} | {
  type: "monster";
  hitDice: HitDice;
  special?: string;
};

export interface Combatant {
  toHitSource: ToHitSource;
  armorClass: number;
};

 export const toCombatant = (combatant: CharacterType | MonsterType): Combatant => {
  if ("level" in combatant) {
    const ac = deriveArmorClass(combatant);
    const level = combatant.level;
    const characterClass = combatant.class;
    return {
      toHitSource: {
        type: "character",
        class: characterClass,
        level: level
      },
      armorClass: ac.armorClass
    };
  } else if ("hitDice" in combatant) {
    const { armorClass, hitDice } = combatant;
    return {
      toHitSource: {
        type: "monster",
        hitDice
      },
      armorClass
    };
   }
   throw new Error(`Unsupported argument type ${JSON.stringify(combatant)}`);
};


