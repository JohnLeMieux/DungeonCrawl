"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCombatant = void 0;
const derive_armor_class_1 = require("../character/derive-armor-class");
;
const toCombatant = (entity) => {
    if ("level" in entity) {
        const ac = (0, derive_armor_class_1.deriveArmorClass)(entity);
        if (entity.level === 0 && [6 /* Race.HUMAN */, 4 /* Race.HALFLING */].includes(entity.race)) {
            return {
                toHitSource: {
                    type: "zero-level",
                    race: entity.race
                },
                armorClass: ac.armorClass
            };
        }
        const level = entity.level;
        const characterClass = entity.class;
        return {
            toHitSource: {
                type: "character",
                class: characterClass,
                level: level
            },
            armorClass: ac.armorClass
        };
    }
    else if ("hitDice" in entity) {
        const { armorClass, hitDice } = entity;
        return {
            toHitSource: {
                type: "monster",
                hitDice
            },
            armorClass
        };
    }
    /* istanbul ignore next */
    throw new Error(`Unsupported argument type ${JSON.stringify(entity)}`);
};
exports.toCombatant = toCombatant;
