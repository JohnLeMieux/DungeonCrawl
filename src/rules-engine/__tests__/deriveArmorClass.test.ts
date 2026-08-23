import { deriveArmorClass } from "../character/derive-armor-class";
import { ArmorType, CharacterType, Class, Race } from "../types";

describe("deriveArmorClass()", () => {
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
    languages: [],
    inventory: [],
    hitPoints: 1
  };

  it("should return ac 10 for no armor", () => {
    expect(deriveArmorClass(character).armorClass).toBe(10);
  });

  it("should return ac 9 for only shield", () => { 
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(9);

    character.equippedShield = null;
  });

  it("should return ac 8 for leather armor", () => {
    character.equippedArmor = { type: ArmorType.LEATHER };

    expect(deriveArmorClass(character).armorClass).toBe(8);
  });

  it("should return ac 7 for leather armor and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };


    expect(deriveArmorClass(character).armorClass).toBe(7);

    character.equippedShield = null;
  });

  it("should return ac 8 for padded armor", () => {
    character.equippedArmor = { type: ArmorType.PADDED };

    expect(deriveArmorClass(character).armorClass).toBe(8);
  });

  it("should return ac 7 for padded armor and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(7);

    character.equippedShield = null;
  });

  it("should return ac 7 for studded leather armor", () => {
    character.equippedArmor = { type: ArmorType.STUDDED_LEATHER };

    expect(deriveArmorClass(character).armorClass).toBe(7);
  });

  it("should return ac 6 for studded leather armor and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(6);

    character.equippedShield = null;
  });

  it("should return ac 7 for ring mail", () => {
    character.equippedArmor = { type: ArmorType.RING };

    expect(deriveArmorClass(character).armorClass).toBe(7);
  });

  it("should return ac 6 for ring mail and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(6);

    character.equippedShield = null;
  });

  it("should return ac 6 for scale mail", () => {
    character.equippedArmor = { type: ArmorType.SCALE };

    expect(deriveArmorClass(character).armorClass).toBe(6);
  });

  it("should return ac 5 for scale mail and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(5);

    character.equippedShield = null;
  });

  it("should return ac 5 for chain mail", () => {
    character.equippedArmor = { type: ArmorType.CHAIN };

    expect(deriveArmorClass(character).armorClass).toBe(5);
  });

  it("should return ac 4 for chain mail and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(4);

    character.equippedShield = null;
  });

  it("should return ac 4 for splint mail", () => {
    character.equippedArmor = { type: ArmorType.SPLINT };

    expect(deriveArmorClass(character).armorClass).toBe(4);
  });

  it("should return ac 3 for splint mail and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(3);

    character.equippedShield = null;
  });

  it("should return ac 4 for banded mail", () => {
    character.equippedArmor = { type: ArmorType.BANDED };

    expect(deriveArmorClass(character).armorClass).toBe(4);
  });

  it("should return ac 3 for banded mail and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(3);

    character.equippedShield = null;
  });

  it("should return ac 3 for plate mail", () => {
    character.equippedArmor = { type: ArmorType.PLATE };

    expect(deriveArmorClass(character).armorClass).toBe(3);
  });

  it("should return ac 2 for plate mail and shield", () => {
    character.equippedShield = { type: ArmorType.SMALL_SHIELD };

    expect(deriveArmorClass(character).armorClass).toBe(2);
  });
});