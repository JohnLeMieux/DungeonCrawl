import { Class } from "../character/character-type";

export interface HitDice {
  dice: number;
  sides: number;
  bonus?: number;
};

export interface MonsterType {
  name: string;
  hitPoints: number;
  specialToHit?: string;
  armorClass: number;
  hitDice: HitDice;
  experience: number;
  numberOfAttacks: number;
  damage: string | {
    dice: number;
    sides: number;
  };
  movement: number;
  save: Class[];
  morale?: number;
  size: "S" | "M" | "L";
}