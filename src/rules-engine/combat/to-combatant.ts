
import { deriveArmorClass } from "../character/derive-armor-class";
import { HitDice, MonsterType } from "../monster/monster-type";
import { CharacterType, Class, Race } from "../types";

export type ToHitSource = {
  type: "character";
  class: Class;
  level: number;
} | {
  type: "monster";
  hitDice: HitDice;
  special?: string;
} | {
  type: "zero-level",
  race: Race
};

export interface Combatant {
  toHitSource: ToHitSource;
  armorClass: number;
};

 export const toCombatant = (entity: CharacterType | MonsterType): Combatant => {
  if ("level" in entity) {
    const ac = deriveArmorClass(entity);
    if (entity.level === 0 && [Race.HUMAN, Race.HALFLING].includes(entity.race)) {
      return {
        toHitSource: {
          type: "zero-level",
          race: entity.race
        },
        armorClass: ac.armorClass
      };
    }
    const level = entity.level;
    const characterClass = entity.class;
    return {
      toHitSource: {
        type: "character",
        class: characterClass,
        level: level
      },
      armorClass: ac.armorClass
    };
  } else if ("hitDice" in entity) {
    const { armorClass, hitDice } = entity;
    return {
      toHitSource: {
        type: "monster",
        hitDice
      },
      armorClass
    };
   }
   /* istanbul ignore next */
   throw new Error(`Unsupported argument type ${JSON.stringify(entity)}`);
};


