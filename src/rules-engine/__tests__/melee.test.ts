
import { toCombatant } from "../combat/to-combatant";
import { resolveAttack } from "../combat/resolve-attack";
import { MonsterType } from "../monster/monster-type";
import { rollDice } from "../utils/dice/roll";
import { ArmorType, CharacterType, Class, Language, Race } from "../types";

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
    hitPoints: 4,
    languages: [Language.COMMON],
    inventory: []
  };

  const monster: MonsterType = {
    name: "Test Monster",
    armorClass: -6,
    hitDice: {
      dice: 1,
      sides: 8
    },
    experience: 13,
    hitPoints: 8,
    numberOfAttacks: 1,
    damage: {
      dice: 1,
      sides: 6,
    },
    movement: 10,
    save: [],
    size: "M"
  };

  it("low level cleric misses low ac monster", () => {
    const result = resolveAttack(toCombatant(character), toCombatant(monster), rollDice(1, 20));
    expect(result.hit).toBe(false);
  });

  it("high level cleric hits high ac monster", () => {
    character.level = 16;
    monster.armorClass = 10;
    const result = resolveAttack(toCombatant(character), toCombatant(monster), rollDice(1, 20));
    expect(result.hit).toBe(true);
  });

  it("low level fighter misses low ac monster", () => {
    character.class = Class.FIGHTER;
    character.level = 1;
    monster.armorClass = -6;
    const result = resolveAttack(toCombatant(character), toCombatant(monster), rollDice(1, 20));
    expect(result.hit).toBe(false);
  });

  it("high level fighter hits high ac monster", () => {
    character.level = 11;
    monster.armorClass = 10;
    const result = resolveAttack(toCombatant(character), toCombatant(monster), rollDice(1, 20));
    expect(result.hit).toBe(true);
  });

  it("low level mage misses low ac monster", () => {
    character.class = Class.MAGICUSER;
    character.level = 1;
    monster.armorClass = -5;
    const result = resolveAttack(toCombatant(character), toCombatant(monster), rollDice(1, 20));
    expect(result.hit).toBe(false);
  });

  it("low level theif misses low ac monster", () => {
    character.class = Class.THIEF;
    const result = resolveAttack(toCombatant(character), toCombatant(monster), rollDice(1, 20));
    expect(result.hit).toBe(false);
  });

  it("high level thief hits high ac monster", () => {
    character.level = 21;
    monster.armorClass = 10;
    const result = resolveAttack(toCombatant(character), toCombatant(monster), rollDice(1, 20));
    expect(result.hit).toBe(true);
  });

  it("zero level human misses low ac monster", () => {
    character.level = 0;
    monster.armorClass = -5;
    const result = resolveAttack(toCombatant(character), toCombatant(monster), rollDice(1, 20));
    expect(result.hit).toBe(false);
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
    hitPoints: 4,
    languages: [Language.COMMON],
    inventory: []
  };

  const monster: MonsterType = {
    name: "Test Monster",
    armorClass: -6,
    hitDice: {
      dice: 10,
      sides: 8
    },
    experience: 13,
    hitPoints: 8,
    numberOfAttacks: 1,
    damage: {
      dice: 1,
      sides: 6,
    },
    movement: 10,
    save: [],
    size: "M"
  };

  it("high hit dice monster hits high ac character", () => {
    const result = resolveAttack(toCombatant(monster), toCombatant(character), rollDice(1, 20));
    expect(result.hit).toBe(true);
  });

  it("low hit dice monster misses low ac character", () => {
    monster.hitDice = { dice: 1, sides: 8, bonus: -2 };
    character.dexterity = 18;
    character.equippedArmor = {
      name: "Plate Mail",
      category: "armor",
      value: 400,
      weight: 400,
      armorType: ArmorType.PLATE_MAIL,
      magicBonus: +3
    };
    character.equippedShield = true;
    const result = resolveAttack(toCombatant(monster), toCombatant(character), rollDice(1, 20));
    expect(result.hit).toBe(false);
  });

  it("1 hit die misses low ac character", () => {
    monster.hitDice = { dice: 1, sides: 8 };
    character.dexterity = 18;
    character.equippedArmor = {
      name: "Plate Mail",
      category: "armor",
      value: 400,
      weight: 400,
      armorType: ArmorType.PLATE_MAIL,
      magicBonus: +5
    };
    character.equippedShield = true;
    const result = resolveAttack(toCombatant(monster), toCombatant(character), rollDice(1, 20));
    expect(result.hit).toBe(false);
  });

  it("1-1 hit die misses low ac character", () => {
    monster.hitDice = { dice: 1, sides: 8, bonus: -1 };
    character.dexterity = 18;
    character.equippedArmor = {
      name: "Plate Mail",
      category: "armor",
      value: 400,
      weight: 400,
      armorType: ArmorType.PLATE_MAIL,
      magicBonus: +4
    };
    character.equippedShield = true;
    const result = resolveAttack(toCombatant(monster), toCombatant(character), rollDice(1, 20));
    expect(result.hit).toBe(false);
  });

  it("1+1 hit die misses low ac character", () => {
    monster.hitDice = { dice: 1, sides: 8, bonus: 1 };
    character.dexterity = 18;
    character.equippedArmor = {
      name: "Plate Mail",
      category: "armor",
      value: 400,
      weight: 400,
      armorType: ArmorType.PLATE_MAIL,
      magicBonus: +6
    };
    character.equippedShield = true;
    const result = resolveAttack(toCombatant(monster), toCombatant(character), rollDice(1, 20));
    expect(result.hit).toBe(false);
  });
});