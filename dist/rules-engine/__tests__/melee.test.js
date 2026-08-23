"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const to_combatant_1 = require("../combat/to-combatant");
const resolve_attack_1 = require("../combat/resolve-attack");
const roll_1 = require("../utils/dice/roll");
const types_1 = require("../types");
describe("characterHit()", () => {
    const character = {
        name: "Test Character",
        sex: "male",
        race: 6 /* Race.HUMAN */,
        class: 0 /* Class.CLERIC */,
        level: 1,
        strength: 9,
        intelligence: 9,
        wisdom: 9,
        dexterity: 9,
        constitution: 9,
        charisma: 9,
        experience: 0,
        hitPoints: 4,
        languages: [0 /* Language.COMMON */],
        inventory: []
    };
    const monster = {
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
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(character), (0, to_combatant_1.toCombatant)(monster), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(false);
    });
    it("high level cleric hits high ac monster", () => {
        character.level = 16;
        monster.armorClass = 10;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(character), (0, to_combatant_1.toCombatant)(monster), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(true);
    });
    it("low level fighter misses low ac monster", () => {
        character.class = 2 /* Class.FIGHTER */;
        character.level = 1;
        monster.armorClass = -6;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(character), (0, to_combatant_1.toCombatant)(monster), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(false);
    });
    it("high level fighter hits high ac monster", () => {
        character.level = 11;
        monster.armorClass = 10;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(character), (0, to_combatant_1.toCombatant)(monster), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(true);
    });
    it("low level mage misses low ac monster", () => {
        character.class = 5 /* Class.MAGICUSER */;
        character.level = 1;
        monster.armorClass = -5;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(character), (0, to_combatant_1.toCombatant)(monster), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(false);
    });
    it("low level theif misses low ac monster", () => {
        character.class = 7 /* Class.THIEF */;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(character), (0, to_combatant_1.toCombatant)(monster), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(false);
    });
    it("high level thief hits high ac monster", () => {
        character.level = 21;
        monster.armorClass = 10;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(character), (0, to_combatant_1.toCombatant)(monster), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(true);
    });
    it("zero level human misses low ac monster", () => {
        character.level = 0;
        monster.armorClass = -5;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(character), (0, to_combatant_1.toCombatant)(monster), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(false);
    });
});
describe("monsterHit()", () => {
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
        experience: 0,
        hitPoints: 4,
        languages: [0 /* Language.COMMON */],
        inventory: []
    };
    const monster = {
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
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(monster), (0, to_combatant_1.toCombatant)(character), (0, roll_1.rollDice)(1, 20));
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
            armorType: types_1.ArmorType.PLATE_MAIL,
            magicBonus: +3
        };
        character.equippedShield = true;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(monster), (0, to_combatant_1.toCombatant)(character), (0, roll_1.rollDice)(1, 20));
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
            armorType: types_1.ArmorType.PLATE_MAIL,
            magicBonus: +5
        };
        character.equippedShield = true;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(monster), (0, to_combatant_1.toCombatant)(character), (0, roll_1.rollDice)(1, 20));
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
            armorType: types_1.ArmorType.PLATE_MAIL,
            magicBonus: +4
        };
        character.equippedShield = true;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(monster), (0, to_combatant_1.toCombatant)(character), (0, roll_1.rollDice)(1, 20));
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
            armorType: types_1.ArmorType.PLATE_MAIL,
            magicBonus: +6
        };
        character.equippedShield = true;
        const result = (0, resolve_attack_1.resolveAttack)((0, to_combatant_1.toCombatant)(monster), (0, to_combatant_1.toCombatant)(character), (0, roll_1.rollDice)(1, 20));
        expect(result.hit).toBe(false);
    });
});
