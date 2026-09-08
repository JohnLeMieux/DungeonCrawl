import { weaponTable } from "../tables";
import { Attack, CharacterType, WeaponType } from "../types";

/**
 * What attack is this character capable of making with the thing they're wielding?
 * 
 * @param character 
 * @returns Attack
 */
export const deriveAttack = (character: CharacterType): Attack  => {
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