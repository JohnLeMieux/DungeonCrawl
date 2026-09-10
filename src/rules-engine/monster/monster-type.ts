import { Class, DieRoll, EquippedWeapon } from "../types";
import { Maybe } from "../utils/core/maybe";

export interface MonsterType {
  name: string;
  frequency: 4 | 11 | 20 | 65;
  numberAppearing: DieRoll;
  armorClass: number;
  movement: number;
  hitDice: DieRoll;
  hitPoints: number;
  percentInLair: number;
  treasureType: Maybe<string>;
  numberOfAttacks: number;
  damage: DieRoll;
  save: {
    class: Class;
    level: number;
  };
  morale: number;
  specialAttack: Maybe<string>;
  specialDefense: Maybe<string>;
  magicResistance: number;
  intelligence: number;
  alignment: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE";
  size: "S" | "M" | "L";
  psyonics: Maybe<string>;
  equippedWeapon: Maybe<EquippedWeapon>;
}