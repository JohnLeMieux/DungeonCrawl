export type Maybe<T> = T | null;

export const enum Race {
  DWARF,
  ELF,
  GNOME,
  HALFELF,
  HALFLING,
  HALFORC,
  HUMAN
}

export const enum Class {
  CLERIC,
  DRUID,
  FIGHTER,
  PALADIN,
  RANGER,
  MAGICUSER,
  ILLUSIONIST,
  THIEF,
  ASSASSIN,
  MONK,
  BARD
}

interface Spell { }

export const enum Language {
  COMMON,
  CHAOTIC_EVIL,
  CHAOTIC_GOOD,
  CHAOTIC_NEUTRAL,
  LAWFUL_EVIL,
  LAWFUL_GOOD,
  LAWFUL_NEUTRAL,
  NEUTRAL_EVIL,
  NEUTRAL_GOOD,
  NEUTRALITY,
  DRUID,
  THIEVES_CANT,
  DWARVISH,
  ELVISH,
  GOBLIN,
  HALFLING,
  HOBGOBLIN,
  KOBOLD,
  LIZARDMAN,
  OGRISH,
  ORCISH
}

const enum Alignment {
  CHAOTIC_EVIL,
  CHAOTIC_GOOD,
  CHAOTIC_NEUTRAL,
  LAWFUL_EVIL,
  LAWFUL_GOOD,
  LAWFUL_NEUTRAL,
  NEUTRAL,
  NEUTRAL_EVIL,
  NEUTRAL_GOOD
}

export interface Item { 
  name: string;
  category: string;
  value: number;
  weight: number;
}

export interface Armor extends Item {
  armor_type: ArmorType;
};

export interface Weapon extends Item {
  effect: unknown;
};

export interface Combatant {
  name: string;
  hit_points: number;
};

export interface CharacterType extends Combatant {
  sex: "male" | "female";
  race: Race;
  age?: number;
  // TODO melee support for multiclass or classless human/halfling
  class: Class/* | Class[] | undefined*/;
  level: number;
  strength: number;
  exceptional_strength?: number;
  intelligence: number;
  wisdom: number;
  dexterity: number;
  constitution: number;
  charisma: number;
  experience?: number;
  spells?: Spell[];
  languages: Language[];
  alignment?: Alignment;
  money?: number;
  inventory: Item[];
  // TODO derive armor class from equipment
  // hardcode for now for the purposes of testing
  armor_class?: number;
  equipped_armor?: Maybe<Armor>;
  equipped_shield?: boolean;
  // TODO define Weapon type
  equipped_weapon?: Maybe<Weapon>;
};

export interface MonsterType extends Combatant {
  special_to_hit?: string;
  armor_class: number;
  hit_dice: {
    dice: number;
    sides: number;
    bonus?: number;
  };
  experience: number;
  number_of_attacks: number;
  damage: string | {
    dice: number;
    sides: number;
  };
  movement: number;
  save: Class[];
  morale?: number;
  size: "S" | "M" | "L";
}

export enum ArmorType {
  NONE,
  LEATHER,
  PADDED,
  STUDDED,
  RING_MAIL,
  SCALE_MAIL,
  CHAIN_MAIL,
  SPLINT,
  BANDED_MAIL,
  PLATE_MAIL
}