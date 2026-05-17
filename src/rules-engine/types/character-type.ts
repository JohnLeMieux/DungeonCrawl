import { Maybe } from "../utils/core/maybe";
import { Alignment } from "./alignment";
import { Armor } from "./armor";
import { Class } from "./class";
import { Item } from "./item";
import { Language } from "./language";
import { Race } from "./race";
import { Spell } from "./spell";
import { Weapon } from "./weapon";

export interface CharacterType {
  name: string;
  hitPoints: number;
  sex: "male" | "female";
  race: Race;
  age?: number;
  // TODO melee support for multiclass or classless human/halfling
  class: Class/* | Class[] | undefined*/;
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
  equippedArmor?: Maybe<Armor>;
  equippedShield?: boolean;
  // TODO define Weapon type
  equippedWeapon?: Maybe<Weapon>;
};