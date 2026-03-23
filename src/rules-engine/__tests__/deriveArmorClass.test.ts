import exp from "constants";
import { ArmorType, CharacterType, Class, Race } from "../../shared-data/types";
import { deriveArmorClass } from "../character-utils";

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
    hit_points: 1
  };

  it("should return ac 10 for no armor", () => {
    expect(deriveArmorClass(character)).toBe(10);
  });

  it("should return ac 9 for only shield", () => { 
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(9);

    character.equipped_shield = false;
  });

  it("should return ac 8 for leather armor", () => {
    character.equipped_armor = {
      name: "Leather Armor",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.LEATHER
    };

    expect(deriveArmorClass(character)).toBe(8);
  });

  it("should return ac 7 for leather armor and shield", () => {
    character.equipped_shield = true;


    expect(deriveArmorClass(character)).toBe(7);

    character.equipped_shield = false;
  });

  it("should return ac 8 for padded armor", () => {
    character.equipped_armor = {
      name: "Padded Armor",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.PADDED
    };

    expect(deriveArmorClass(character)).toBe(8);
  });

  it("should return ac 7 for padded armor and shield", () => {
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(7);

    character.equipped_shield = false;
  });

  it("should return ac 7 for studded leather armor", () => {
    character.equipped_armor = {
      name: "Studded Leather Armor",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.STUDDED
    };

    expect(deriveArmorClass(character)).toBe(7);
  });

  it("should return ac 6 for studded leather armor and shield", () => {
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(6);

    character.equipped_shield = false;
  });

  it("should return ac 7 for ring mail", () => {
    character.equipped_armor = {
      name: "Ring Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.RING_MAIL
    };

    expect(deriveArmorClass(character)).toBe(7);
  });

  it("should return ac 6 for ring mail and shield", () => {
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(6);

    character.equipped_shield = false;
  });

  it("should return ac 6 for scale mail", () => {
    character.equipped_armor = {
      name: "Scale Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.SCALE_MAIL
    };

    expect(deriveArmorClass(character)).toBe(6);
  });

  it("should return ac 5 for scale mail and shield", () => {
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(5);

    character.equipped_shield = false;
  });

  it("should return ac 5 for chain mail", () => {
    character.equipped_armor = {
      name: "Chain Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.CHAIN_MAIL
    };

    expect(deriveArmorClass(character)).toBe(5);
  });

  it("should return ac 4 for chain mail and shield", () => {
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(4);

    character.equipped_shield = false;
  });

  it("should return ac 4 for splint mail", () => {
    character.equipped_armor = {
      name: "Splint Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.SPLINT
    };

    expect(deriveArmorClass(character)).toBe(4);
  });

  it("should return ac 3 for splint mail and shield", () => {
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(3);

    character.equipped_shield = false;
  });

  it("should return ac 4 for banded mail", () => {
    character.equipped_armor = {
      name: "Banded Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.BANDED_MAIL
    };

    expect(deriveArmorClass(character)).toBe(4);
  });

  it("should return ac 3 for banded mail and shield", () => {
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(3);

    character.equipped_shield = false;
  });

  it("should return ac 3 for plate mail", () => {
    character.equipped_armor = {
      name: "Plate Mail",
      category: "Armor",
      value: 0,
      weight: 0,
      armor_type: ArmorType.PLATE_MAIL
    };

    expect(deriveArmorClass(character)).toBe(3);
  });

  it("should return ac 2 for plate mail and shield", () => {
    character.equipped_shield = true;

    expect(deriveArmorClass(character)).toBe(2);
  });
});