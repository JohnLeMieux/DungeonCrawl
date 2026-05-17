import { ArmorType } from "./armor-type";
import { Item } from "./item";

export interface Armor extends Item {
  armorType: ArmorType;
  magicBonus: number;
};