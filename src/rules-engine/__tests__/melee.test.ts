import { characterHit, monsterHit } from "../melee";
import { CharacterType, Class, Language, MonsterType, Race } from "../../shared-data/types";

describe("characterHit()", () => {
  const character: CharacterType = {
    name: "Test Character",
    sex: "male",
    race: Race.HUMAN,
    class: Class.CLERIC,
    level: 1,
    strength: 9,
    intelligence: 9,
    wisdom: 9,
    dexterity: 9,
    constitution: 9,
    charisma: 9,
    experience: 0,
    hit_points: 4,
    languages: [Language.COMMON],
    equipment: []
  };

  const monster: MonsterType = {
    name: "Test Monster",
    armor_class: -6,
    hit_dice: {
      dice: 1,
      sides: 8
    },
    experience: 13,
    hit_points: 8,
    number_of_attacks: 1,
    damage: {
      dice: 1,
      sides: 6,
    },
    movement: 10,
    save: []
  };

  it("low level cleric misses low ac monster", () => {
    expect(characterHit(character, monster)).toBe(false);
  });

  it("high level cleric hits high ac monster", () => {
    character.level = 16;
    monster.armor_class = 10;
    expect(characterHit(character, monster)).toBe(true);
  });

  it("low level fighter misses low ac monster", () => {
    character.class = Class.FIGHTER;
    character.level = 1;
    monster.armor_class = -6;
    expect(characterHit(character, monster)).toBe(false);
  });

  it("high level fighter hits high ac monster", () => {
    character.level = 11;
    monster.armor_class = 10;
    expect(characterHit(character, monster)).toBe(true);
  });

  it("low level mage misses low ac monster", () => {
    character.class = Class.MAGICUSER;
    character.level = 1;
    monster.armor_class = -5;
    expect(characterHit(character, monster)).toBe(false);
  });

  it("low level theif misses low ac monster", () => {
    character.class = Class.THIEF;
    expect(characterHit(character, monster)).toBe(false);
  });

  it("high level thief hits high ac monster", () => {
    character.level = 21;
    monster.armor_class = 10;
    expect(characterHit(character, monster)).toBe(true);
  });
});

describe("monsterHit()", () => {
  const character: CharacterType = {
    name: "Test Character",
    sex: "male",
    race: Race.HUMAN,
    class: Class.FIGHTER,
    level: 1,
    strength: 9,
    intelligence: 9,
    wisdom: 9,
    dexterity: 9,
    constitution: 9,
    charisma: 9,
    experience: 0,
    hit_points: 4,
    languages: [Language.COMMON],
    equipment: [],
    armor_class: 10
  };

  const monster: MonsterType = {
    name: "Test Monster",
    armor_class: -6,
    hit_dice: {
      dice: 10,
      sides: 8
    },
    experience: 13,
    hit_points: 8,
    number_of_attacks: 1,
    damage: {
      dice: 1,
      sides: 6,
    },
    movement: 10,
    save: []
  };

  it("high hit dice monster hits high ac character", () => {
    expect(monsterHit(monster, character)).toBe(true);
  });

  it("low hit dice monster misses low ac character", () => {
    monster.hit_dice = { dice: 1, sides: 8, bonus: -2 };
    character.armor_class = -5;
    expect(monsterHit(monster, character)).toBe(false);
  });
});