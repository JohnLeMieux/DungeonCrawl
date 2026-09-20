import { weaponTable } from "../tables";
import { CharacterAttack, CharacterType, WeaponType } from "../types";

export const deriveCharacterAttack = (character: CharacterType): CharacterAttack => {
  const { equippedWeapon, strength, wisdom, dexterity } = character;
  const weaponType = equippedWeapon?.type ?? WeaponType.FIST;
  const weapon = weaponTable[weaponType];
  return {
    equippedWeapon,
    weapon,
    strength,
    wisdom,
    dexterity
  }
};