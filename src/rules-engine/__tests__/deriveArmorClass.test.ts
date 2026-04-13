import exp from "constants";
import { ArmorType, CharacterType, Class, Race } from "../../shared-data/types";
import { deriveArmorClass } from "../character/derive-armor-class";

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
    expect(deriveArmorClass(character)).toBe(10);
  });

  it("should return ac 9 for only shield", () => { 
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(9);

    character.equippedShield = false;
  });

  it("should return ac 8 for leather armor", () => {
    character.equippedArmor = {
      name: "Leather Armor",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.LEATHER
    };

    expect(deriveArmorClass(character)).toBe(8);
  });

  it("should return ac 7 for leather armor and shield", () => {
    character.equippedShield = true;


    expect(deriveArmorClass(character)).toBe(7);

    character.equippedShield = false;
  });

  it("should return ac 8 for padded armor", () => {
    character.equippedArmor = {
      name: "Padded Armor",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.PADDED
    };

    expect(deriveArmorClass(character)).toBe(8);
  });

  it("should return ac 7 for padded armor and shield", () => {
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(7);

    character.equippedShield = false;
  });

  it("should return ac 7 for studded leather armor", () => {
    character.equippedArmor = {
      name: "Studded Leather Armor",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.STUDDED
    };

    expect(deriveArmorClass(character)).toBe(7);
  });

  it("should return ac 6 for studded leather armor and shield", () => {
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(6);

    character.equippedShield = false;
  });

  it("should return ac 7 for ring mail", () => {
    character.equippedArmor = {
      name: "Ring Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.RING_MAIL
    };

    expect(deriveArmorClass(character)).toBe(7);
  });

  it("should return ac 6 for ring mail and shield", () => {
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(6);

    character.equippedShield = false;
  });

  it("should return ac 6 for scale mail", () => {
    character.equippedArmor = {
      name: "Scale Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.SCALE_MAIL
    };

    expect(deriveArmorClass(character)).toBe(6);
  });

  it("should return ac 5 for scale mail and shield", () => {
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(5);

    character.equippedShield = false;
  });

  it("should return ac 5 for chain mail", () => {
    character.equippedArmor = {
      name: "Chain Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.CHAIN_MAIL
    };

    expect(deriveArmorClass(character)).toBe(5);
  });

  it("should return ac 4 for chain mail and shield", () => {
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(4);

    character.equippedShield = false;
  });

  it("should return ac 4 for splint mail", () => {
    character.equippedArmor = {
      name: "Splint Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.SPLINT
    };

    expect(deriveArmorClass(character)).toBe(4);
  });

  it("should return ac 3 for splint mail and shield", () => {
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(3);

    character.equippedShield = false;
  });

  it("should return ac 4 for banded mail", () => {
    character.equippedArmor = {
      name: "Banded Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.BANDED_MAIL
    };

    expect(deriveArmorClass(character)).toBe(4);
  });

  it("should return ac 3 for banded mail and shield", () => {
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(3);

    character.equippedShield = false;
  });

  it("should return ac 3 for plate mail", () => {
    character.equippedArmor = {
      name: "Plate Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armorType: ArmorType.PLATE_MAIL
    };

    expect(deriveArmorClass(character)).toBe(3);
  });

  it("should return ac 2 for plate mail and shield", () => {
    character.equippedShield = true;

    expect(deriveArmorClass(character)).toBe(2);
  });
});