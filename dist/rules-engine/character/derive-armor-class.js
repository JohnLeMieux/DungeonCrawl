"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveArmorClass = void 0;
const tables_1 = require("../tables");
/**
 * Derive Armor Class for a character based on equipped armor and shield
 *
 * @param character
 * @returns Armor Class
 */
const deriveArmorClass = (character) => {
    var _a, _b, _c;
    const { equippedArmor } = character;
    debugger;
    const armor = equippedArmor ? tables_1.armorTable[equippedArmor] : null;
    const ac = (armor === null || armor === void 0 ? void 0 : armor.category) === "armor" ? armor.armorClass : 10;
    const shield = character.equippedShield ? -1 : 0;
    const dexBonus = (_b = (_a = tables_1.dexterityTable.find(item => item.score === character.dexterity)) === null || _a === void 0 ? void 0 : _a.defense) !== null && _b !== void 0 ? _b : 0;
    const magicBonus = (_c = armor === null || armor === void 0 ? void 0 : armor.magicBonus) !== null && _c !== void 0 ? _c : 0;
    return {
        armorClass: ac + shield + dexBonus - magicBonus,
        breakdown: {
            baseAC: 10,
            armor: ac,
            shield,
            dexBonus,
            magicBonus
        }
    };
};
exports.deriveArmorClass = deriveArmorClass;
