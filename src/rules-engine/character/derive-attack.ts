import { weaponTable } from "../tables";
import { CharacterType, WeaponType } from "../types";

export const deriveAttack = (character: CharacterType) => {
  const { equippedWeapon } = character;
  const {
    type: weapon = WeaponType.FIST,
    magicBonus = 0,
    isSet = false
  } = equippedWeapon ?? {};
  const { category } = weaponTable[weapon];
  return {
    weapon,
    category,
    magicBonus,
    isSet
  };
};