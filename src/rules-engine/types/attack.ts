import { Maybe } from "../utils/core/maybe";
import { EquippedWeapon, WeaponDefinition } from "./weapon";

export interface CharacterAttack {
  equippedWeapon?: Maybe<EquippedWeapon>;
  weapon: WeaponDefinition;
  strength: number;
  wisdom: number;
  dexterity: number;
};