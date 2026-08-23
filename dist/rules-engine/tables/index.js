"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weaponTable = exports.armorTable = exports.wisdomTable = exports.strengthTable = exports.intelligenceTable = exports.dexterityTable = exports.constitutionTable = exports.charismaTable = void 0;
var charisma_1 = require("./attributes/charisma");
Object.defineProperty(exports, "charismaTable", { enumerable: true, get: function () { return charisma_1.charismaTable; } });
var constitution_1 = require("./attributes/constitution");
Object.defineProperty(exports, "constitutionTable", { enumerable: true, get: function () { return constitution_1.constitutionTable; } });
var dexterity_1 = require("./attributes/dexterity");
Object.defineProperty(exports, "dexterityTable", { enumerable: true, get: function () { return dexterity_1.dexterityTable; } });
var intelligence_1 = require("./attributes/intelligence");
Object.defineProperty(exports, "intelligenceTable", { enumerable: true, get: function () { return intelligence_1.intelligenceTable; } });
var strength_1 = require("./attributes/strength");
Object.defineProperty(exports, "strengthTable", { enumerable: true, get: function () { return strength_1.strengthTable; } });
var wisdom_1 = require("./attributes/wisdom");
Object.defineProperty(exports, "wisdomTable", { enumerable: true, get: function () { return wisdom_1.wisdomTable; } });
var armor_table_1 = require("./combat/armor-table");
Object.defineProperty(exports, "armorTable", { enumerable: true, get: function () { return armor_table_1.armorTable; } });
__exportStar(require("./combat/combat-tables"), exports);
var weapon_table_1 = require("./combat/weapon-table");
Object.defineProperty(exports, "weaponTable", { enumerable: true, get: function () { return weapon_table_1.weaponTable; } });
