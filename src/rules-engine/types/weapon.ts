import { DieRoll } from "./die-roll";
import { Item } from "./item";

export const enum WeaponType { 
  ARROW,
  COMPOSITE_LONGBOW,
  COMPOSITE_SHORTBOW,
  LONGBOW,
  SHORTBOW,
  BATTLE_AXE,
  HAND_AXE,
  THROWING_AXE,
  BARDICHE,
  BEC_DE_CORBIN,
  BILL_GUISARME,
  BO_STICK,
  CLUB,
  THROWN_CLUB,
  DAGGER,
  THROWING_DAGGER,
  DART,
  FAUCHARD,
  FAUCHARD_FORK,
  FIST,
  FOOTMANS_FLAIL,
  HORSEMANS_FLAIL,
  MILITARY_FORK,
  GLAIVE,
  GLAIVE_GUISARME,
  GUISARME,
  GUISARME_VOULGE,
  HALBERD,
  LUCERNE_HAMMER,
  HAMMER,
  THROWN_HAMMER,
  JAVELIN,
  JO_STICK,
  LIGHT_HORSE_LANCE,
  MEDIUM_HORSE_LANCE,
  HEAVY_HORSE_LANCE,
  FOOTMANS_MACE,
  HORSEMANS_MACE,
  MORNING_STAR,
  PARTISAN,
  FOOTMANS_MILITARY_PICK,
  HORSEMANS_MILITARY_PICK,
  AWL_PIKE,
  LIGHT_QUARREL,
  HEAVY_QUARREL,
  HEAVY_CROSSBOW,
  LIGHT_CROSSBOW,
  RANSEUR,
  SCIMITAR,
  SLING_BULLET,
  SLING_STONE,
  SPEAR,
  THROWN_SPEAR,
  SPETUM,
  QUARTERSTAFF,
  BASTARD_SWORD,
  BROADSWORD,
  LONGSWORD,
  SHORTSWORD,
  TWO_HANDED_SWORD,
  TRIDENT,
  VOULGE
};

interface ArmorClassAdjustment {
  ac2: number;
  ac3: number;
  ac4: number;
  ac5: number;
  ac6: number;
  ac7: number;
  ac8: number;
  ac9: number;
  ac10: number;
};

interface WeaponWithDamage extends Item {
  damageVsSmall: DieRoll;
  damageVsLarge: DieRoll;
  doubleDamageVsLargeWhenSet?: boolean;
  doubleDamageVsChargingMount?: boolean;
  doubleDamageWhenSet?: boolean;
};

interface WeaponWithArmorClassAdjustment extends Item {
  length: number;
  speedFactor: number;
  armorClassAdjustment: ArmorClassAdjustment;
};

interface WeaponWithRange extends Item {
  fireRate: number;
  shortRange: number;
  mediumRange: number;
  longRange: number;
  armorClassAdjustment: ArmorClassAdjustment;
};

interface MissileWeapon extends WeaponWithDamage { 
  category: "missile";
};

interface Unarmed extends WeaponWithArmorClassAdjustment {
  category: "unarmed";
};

type MeleeWeapon = WeaponWithDamage & WeaponWithArmorClassAdjustment & {
  category: "melee";
  spaceRequired: number;
  dismountRider?: boolean;
  disarmVsAc8?: boolean;
};

type RangedWeapon = WeaponWithRange & {
  category: "ranged";
};

type RangedMissleWeapon = WeaponWithDamage & WeaponWithRange & {
  category: "ranged-missile";
};

type RangedMeleeWeapon = WeaponWithDamage & WeaponWithArmorClassAdjustment & WeaponWithRange & {
  category: "ranged-melee";
  spaceRequired: number;
  dismountRider?: boolean;
  disarmVsAc8?: boolean;
};

export type WeaponDefinition = MissileWeapon | Unarmed | MeleeWeapon | RangedWeapon | RangedMissleWeapon | RangedMeleeWeapon;