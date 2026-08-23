import { ArmorDefinition, ArmorType } from "../../types";

export const armorTable: Record<ArmorType, ArmorDefinition> = {
  [ArmorType.BANDED]: {
    name: "Banded Mail",
    category: "armor",
    value: 90,
    bulk: "bulky",
    weight: 35,
    baseMovement: 9,
    armorClass: 4
  },
  [ArmorType.CHAIN]: {
    name: "Chain Mail",
    category: "armor",
    value: 75,
    bulk: "fairly",
    weight: 30,
    baseMovement: 9,
    armorClass: 5
  },
  [ArmorType.ELVEN_CHAIN]: {
    name: "Elven Chain",
    category: "armor",
    bulk: "non",
    weight: 15,
    baseMovement: 12,
    armorClass: 5
  },
  [ArmorType.LEATHER]: {
    name: "Leather Armor",
    category: "armor",
    value: 5,
    bulk: "non",
    weight: 15,
    baseMovement: 12,
    armorClass: 8
  },
  [ArmorType.PADDED]: {
    name: "Padded Armor",
    category: "armor",
    value: 4,
    bulk: "fairly",
    weight: 10,
    baseMovement: 9,
    armorClass: 8
  },
  [ArmorType.PLATE]: {
    name: "Plate Mail",
    category: "armor",
    value: 400,
    bulk: "bulky",
    weight: 45,
    baseMovement: 6,
    armorClass: 3
  },
  [ArmorType.RING]: {
    name: "Ring Mail",
    category: "armor",
    value: 30,
    bulk: "fairly",
    weight: 25,
    baseMovement: 9,
    armorClass: 7
  },
  [ArmorType.SCALE]: {
    name: "Scale Mail",
    category: "armor",
    value: 45,
    bulk: "fairly",
    weight: 40,
    baseMovement: 6,
    armorClass: 6
  },
  [ArmorType.SPLINT]: {
    name: "Splint Mail",
    category: "armor",  
    value: 80,
    bulk: "bulky",
    weight: 40,
    baseMovement: 6,
    armorClass: 4
  },
  [ArmorType.STUDDED_LEATHER]: {
    name: "Studded Leather",
    category: "armor",
    value: 15,
    bulk: "fairly",
    weight: 20,
    baseMovement: 9,
    armorClass: 7
  },
  [ArmorType.SMALL_SHIELD]: {
    name: "Small Shield",
    category: "shield",
    value: 10,
    size: "small",
    attacksCountered: 1
  },
  [ArmorType.SMALL_WOODEN_SHIELD]: {
    name: "Small Wooden Shield",
    category: "shield",
    value: 1,
    size: "small",
    attacksCountered: 1
  },
  [ArmorType.MEDIUM_SHIELD]: {
    name: "Medium Shield",
    category: "shield",
    size: "medium",
    attacksCountered: 2
  },
  [ArmorType.LARGE_SHIELD]: {
    name: "Large Shield",
    category: "shield",
    size: "large",
    attacksCountered: 3
  },
  [ArmorType.SMALL_HELMET]: {
    name: "Small Helmet",
    category: "helmet",
    value: 10
  },
  [ArmorType.GREAT_HELMET]: {
    name: "Great Helmet",
    category: "helmet",
    value: 15,
    armorClass: 1
  }
};