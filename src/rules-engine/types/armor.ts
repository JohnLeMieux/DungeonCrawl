import { Item } from "./item";

export interface Armor extends Item {
  category: "armor";
  bulk: "bulky" | "fairly" | "non";
  weight: number;
  baseMovement: number;
  armorClass: number;
};

export interface Shield extends Item { 
  category: "shield";
  size: "small" | "medium" | "large";
  attacksCountered: number;
};

export interface Helmet extends Item {
  category: "helmet";
  armorClass?: number;
}

export type ArmorDefinition = Armor | Shield | Helmet;