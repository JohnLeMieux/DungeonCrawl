export enum Race {
  DWARF,
  ELF,
  GNOME,
  HALFELF,
  HALFLING,
  HALFORC,
  HUMAN
}

export enum Class {
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

export enum Language {
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

enum Alignment {
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

interface Equipment {}

export interface CharacterType {
  name: string;
  sex: "male" | "female";
  race: Race;
  age?: number;
  class: Class;
  level: number;
  strength: number;
  exceptional_strength?: number;
  intelligence: number;
  wisdom: number;
  dexterity: number;
  constitution: number;
  charisma: number;
  experience?: number;
  hit_points: number;
  spells?: Spell[];
  languages: Language[];
  alignment?: Alignment;
  money?: number;
  equipment: Equipment[];
};

export interface MonsterType {
  name: string;
  special_to_hit?: string;
  armor_class: number;
  hit_dice: {
    dice: number;
    sides: number;
    bonus?: number;
  };
  experience: number;
  hit_points: number;
  number_of_attacks: number;
  damage: string | {
    dice: number;
    sides: number;
  };
  movement: number;
  save: Class[];
  morale?: number;
}

export enum Armor {
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