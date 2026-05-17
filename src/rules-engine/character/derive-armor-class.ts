import { armorClass, dexterityTable } from "../tables";
import { CharacterType } from "../types";

/**
 * Derive Armor Class for a character based on equipped armor and shield
 * 
 * @param character 
 * @returns Armor Class 
 */
export const deriveArmorClass = (character: CharacterType) => { 
  const ac = armorClass.find(item => item.armor === character.equippedArmor?.armorType)?.ac ?? 10;
  const shield = character.equippedShield ? -1 : 0;
  const dexBonus = dexterityTable.find(item => item.score === character.dexterity)?.defense ?? 0;
  const magicBonus = character.equippedArmor?.magicBonus ?? 0;
  return {
    armorClass: ac + shield + dexBonus - magicBonus,
    breakdown: {
      baseAC: 10,
      armor: ac,
      shield,
      dexBonus,
      magicBonus
    }
  };
};