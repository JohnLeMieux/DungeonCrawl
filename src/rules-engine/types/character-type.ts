import { Maybe } from "../utils/core/maybe";
import { Alignment } from "./alignment";
import { EquippedArmor, EquippedHelmet, EquippedShield } from "./armor-type";
import { Class } from "./class";
import { Item } from "./item";
import { Language } from "./language";
import { Race } from "./race";
import { Spell } from "./spell";
import { WeaponType } from "./weapon";

export interface CharacterType {
  name: string;
  hitPoints: number;
  sex: "male" | "female";
  race: Race;
  age?: number;
  // TODO melee support for multiclass
  class: Class/* | Class[]*/;
  level: number;
  strength: number;
  exceptionalStrength?: number;
  intelligence: number;
  wisdom: number;
  dexterity: number;
  constitution: number;
  charisma: number;
  experience?: number;
  spells?: Spell[];
  languages: Language[];
  alignment?: Alignment;
  money?: number;
  inventory: Item[];
  armorClass?: number;
  equippedArmor?: Maybe<EquippedArmor>;
  equippedShield?: Maybe<EquippedShield>;
  equippedHelmet?: Maybe<EquippedHelmet>;
  equippedWeapon?: Maybe<WeaponType>;
};