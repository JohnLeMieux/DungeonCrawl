"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const derive_armor_class_1 = require("../character/derive-armor-class");
const types_1 = require("../types");
describe("deriveArmorClass()", () => {
    const character = {
        name: "Test Character",
        sex: "male",
        race: 6 /* Race.HUMAN */,
        class: 2 /* Class.FIGHTER */,
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
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(10);
    });
    it("should return ac 9 for only shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(9);
        character.equippedShield = null;
    });
    it("should return ac 8 for leather armor", () => {
        character.equippedArmor = types_1.ArmorType.LEATHER;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(8);
    });
    it("should return ac 7 for leather armor and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(7);
        character.equippedShield = null;
    });
    it("should return ac 8 for padded armor", () => {
        character.equippedArmor = types_1.ArmorType.PADDED;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(8);
    });
    it("should return ac 7 for padded armor and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(7);
        character.equippedShield = null;
    });
    it("should return ac 7 for studded leather armor", () => {
        character.equippedArmor = types_1.ArmorType.STUDDED_LEATHER;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(7);
    });
    it("should return ac 6 for studded leather armor and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(6);
        character.equippedShield = null;
    });
    it("should return ac 7 for ring mail", () => {
        character.equippedArmor = types_1.ArmorType.RING;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(7);
    });
    it("should return ac 6 for ring mail and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(6);
        character.equippedShield = null;
    });
    it("should return ac 6 for scale mail", () => {
        character.equippedArmor = types_1.ArmorType.SCALE;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(6);
    });
    it("should return ac 5 for scale mail and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(5);
        character.equippedShield = null;
    });
    it("should return ac 5 for chain mail", () => {
        character.equippedArmor = types_1.ArmorType.CHAIN;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(5);
    });
    it("should return ac 4 for chain mail and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(4);
        character.equippedShield = null;
    });
    it("should return ac 4 for splint mail", () => {
        character.equippedArmor = types_1.ArmorType.SPLINT;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(4);
    });
    it("should return ac 3 for splint mail and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(3);
        character.equippedShield = null;
    });
    it.only("should return ac 4 for banded mail", () => {
        character.equippedArmor = types_1.ArmorType.BANDED;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(4);
    });
    it("should return ac 3 for banded mail and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(3);
        character.equippedShield = null;
    });
    it("should return ac 3 for plate mail", () => {
        character.equippedArmor = types_1.ArmorType.PLATE;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(3);
    });
    it("should return ac 2 for plate mail and shield", () => {
        character.equippedShield = types_1.ArmorType.SMALL_SHIELD;
        expect((0, derive_armor_class_1.deriveArmorClass)(character).armorClass).toBe(2);
    });
});
