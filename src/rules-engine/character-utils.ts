// TODO rename this file to something more appropriate
import { ArmorType, CharacterType } from "../shared-data/types";

export const deriveArmorClass = (character: CharacterType) => { 
  //TODO include dex bonus when attribute tables are available
  const bonus = 0;
  let ac = 10;
  switch (character.equipped_armor?.armor_type) {
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
  if (character.equipped_shield) {
    ac--;
  }
  return ac + bonus;
};