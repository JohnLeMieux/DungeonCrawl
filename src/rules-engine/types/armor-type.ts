export enum ArmorType {
  BANDED,
  CHAIN,
  ELVEN_CHAIN,
  LEATHER,
  PADDED,
  PLATE,
  RING,
  SCALE,
  SPLINT,
  STUDDED_LEATHER,
  SMALL_SHIELD,
  SMALL_WOODEN_SHIELD,
  MEDIUM_SHIELD,
  LARGE_SHIELD,
  SMALL_HELMET,
  GREAT_HELMET
}

export type BodyArmorType =
  | ArmorType.BANDED
  | ArmorType.CHAIN
  | ArmorType.ELVEN_CHAIN
  | ArmorType.LEATHER
  | ArmorType.PADDED
  | ArmorType.PLATE
  | ArmorType.RING
  | ArmorType.SCALE
  | ArmorType.SPLINT
  | ArmorType.STUDDED_LEATHER;

export type EquippedArmor = {
  type: BodyArmorType;
  magicBonus?: number;
};

export type ShieldType =
  | ArmorType.SMALL_SHIELD
  | ArmorType.SMALL_WOODEN_SHIELD
  | ArmorType.MEDIUM_SHIELD
  | ArmorType.LARGE_SHIELD;

export type EquippedShield = {
  type: ShieldType;
  magicBonus?: number;
};

export type HelmetType =
  | ArmorType.SMALL_HELMET
  | ArmorType.GREAT_HELMET;

export type EquippedHelmet = {
  type: HelmetType;
  magicBonus?: number;
};