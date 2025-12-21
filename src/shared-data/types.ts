enum Race {
  DWARF,
  ELF,
  GNOME,
  HALFELF,
  HALFLING,
  HALFORC,
  HUMAN
}

enum Class {
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

enum Language {
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
  class: Class | Class[];
  strength: number;
  exceptional_strength?: number;
  intelligence: number;
  wisdom: number;
  dexterity: number;
  constitution: number;
  charisma: number;
  experience: number;
  hit_points: number;
  spells?: Spell[];
  languages: Language[];
  alignment: Alignment;
  money: number;
  equipment: Equipment[];
};