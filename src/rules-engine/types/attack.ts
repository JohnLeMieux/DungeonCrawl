import { WeaponType } from "./weapon";

export interface Attack {
  weapon: WeaponType;
  category: "melee" | "ranged" | "ranged-missile" | "ranged-melee" | "missile" | "unarmed" | "magic" | "natural";
  magicBonus: number;
  isSet: boolean;
};