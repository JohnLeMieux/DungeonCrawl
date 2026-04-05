// TODO rename this file to something more appropriate
import { ArmorType, CharacterType } from "../shared-data/types";

/**
 * Derive Armor Class for a character based on equipped armor and shield
 * 
 * @param character 
 * @returns Armor Class 
 */
export const deriveArmorClass = (character: CharacterType) => { 
  //TODO include dex bonus when attribute tables are available
  const bonus = 0;
  let ac = 10;
  switch (character.equippedArmor?.armorType) {
    case ArmorType.LEATHER:
    case ArmorType.PADDED:
      ac = 8;
      break;
    case ArmorType.STUDDED:
    case ArmorType.RING_MAIL:
      ac = 7;
      break;
    case ArmorType.SCALE_MAIL:
      ac = 6;
      break;
    case ArmorType.CHAIN_MAIL:
      ac = 5;
      break;
    case ArmorType.SPLINT:
    case ArmorType.BANDED_MAIL:
      ac = 4;
      break;
    case ArmorType.PLATE_MAIL:
      ac = 3;
      break;
    default:
      ac = 10;
  }
  if (character.equippedShield) {
    ac--;
  }
  return ac + bonus;
};