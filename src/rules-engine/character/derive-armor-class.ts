import { armorTable, dexterityTable } from "../tables";
import { CharacterType } from "../types";

/**
 * Derive Armor Class for a character based on equipped armor and shield
 * 
 * @param character 
 * @returns Armor Class 
 */
export const deriveArmorClass = (character: CharacterType) => { 
  const { equippedArmor } = character;
  const armor = equippedArmor ? armorTable[equippedArmor.type] : null;
  const ac = armor?.category === "armor" ? armor.armorClass : 10;
  const shield = character.equippedShield ? -1 : 0;
  const dexBonus = dexterityTable.find(item => item.score === character.dexterity)?.defense ?? 0;
  const magicBonus = equippedArmor?.magicBonus ?? 0;
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