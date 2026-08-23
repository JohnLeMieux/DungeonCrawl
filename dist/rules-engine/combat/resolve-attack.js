"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAttack = void 0;
const tables_1 = require("../tables");
const lookupCharacterTable = (characterClass, level, armorClass) => {
    var _a;
    const table = tables_1.combat.find(item => item.class.includes(characterClass));
    const defenderAc = table === null || table === void 0 ? void 0 : table.toHit.find(item => item.ac === armorClass);
    const toHit = (_a = defenderAc === null || defenderAc === void 0 ? void 0 : defenderAc.toHit.find(item => item.level === level)) === null || _a === void 0 ? void 0 : _a.toHit;
    /* istanbul ignore next */
    if (toHit == null) {
        throw new Error(`Could not find ${level} level ${characterClass} to hit ${armorClass} AC defender`);
    }
    return toHit;
};
const lookupMonsterTable = (hitDice, armorClass) => {
    var _a, _b, _c, _d, _e;
    const record = tables_1.monsterCombat.find(item => item.ac === armorClass);
    let toHit;
    if (hitDice.dice === 1) {
        if (!hitDice.bonus) {
            toHit = (_a = record === null || record === void 0 ? void 0 : record.hitDice.find(item => item.dice === 1 && item.bonus === undefined)) === null || _a === void 0 ? void 0 : _a.toHit;
        }
        else if (hitDice.bonus < -1) {
            toHit = (_b = record === null || record === void 0 ? void 0 : record.hitDice.find(item => item.bonus === -2)) === null || _b === void 0 ? void 0 : _b.toHit;
        }
        else if (hitDice.bonus === -1) {
            toHit = (_c = record === null || record === void 0 ? void 0 : record.hitDice.find(item => item.bonus === -1)) === null || _c === void 0 ? void 0 : _c.toHit;
        }
        else {
            toHit = (_d = record === null || record === void 0 ? void 0 : record.hitDice.find(item => item.bonus === 1)) === null || _d === void 0 ? void 0 : _d.toHit;
        }
    }
    else {
        toHit = (_e = record === null || record === void 0 ? void 0 : record.hitDice.find(item => item.dice === hitDice.dice)) === null || _e === void 0 ? void 0 : _e.toHit;
    }
    /* istanbul ignore next */
    if (toHit == null) {
        throw new Error(`Could not find ${hitDice.dice} monster hit dice to hit ${armorClass} AC defender`);
    }
    return toHit;
};
const lookupZeroLevelTable = (armorClass) => {
    var _a;
    const toHit = (_a = tables_1.zeroLevelCombat.find(item => item.ac === armorClass)) === null || _a === void 0 ? void 0 : _a.toHit;
    /* istanbul ignore next */
    if (toHit == null) {
        throw new Error(`Could not find zero level attacker to hit ${armorClass} AC defender`);
    }
    return toHit;
};
const getRequiredRoll = (source, armorClass) => {
    switch (source.type) {
        case "character":
            return lookupCharacterTable(source.class, source.level, armorClass);
        case "monster":
            return lookupMonsterTable(source.hitDice, armorClass);
        case "zero-level":
            return lookupZeroLevelTable(armorClass);
        /* istanbul ignore next */
        default:
            return 0;
    }
};
/**
 * Use toCombatant() to convert attacker and defender before passing them to this function.
 *
 * @param attacker
 * @param defender
 * @param roll
 * @returns
 */
const resolveAttack = (attacker, defender, roll) => {
    const needed = getRequiredRoll(attacker.toHitSource, defender.armorClass);
    return {
        hit: roll >= needed,
        needed,
        roll
    };
};
exports.resolveAttack = resolveAttack;
