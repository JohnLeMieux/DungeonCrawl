"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weaponTable = void 0;
/**
 * +2 vs defender's back
 * +4 vs prone defender
 * -2 medium range
 * -5 long range
 */
exports.weaponTable = {
    [0 /* WeaponType.ARROW */]: {
        name: "arrow",
        category: "missile",
        weight: 2,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 6
        }
    },
    [1 /* WeaponType.COMPOSITE_LONGBOW */]: {
        name: "composite longbow",
        value: 100,
        category: "ranged",
        fireRate: 2,
        shortRange: 6,
        mediumRange: 12,
        longRange: 21,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -1,
            ac4: 0,
            ac5: 0,
            ac6: 1,
            ac7: 2,
            ac8: 2,
            ac9: 3,
            ac10: 3
        }
    },
    [2 /* WeaponType.COMPOSITE_SHORTBOW */]: {
        name: "composite shortbow",
        value: 75,
        category: "ranged",
        fireRate: 2,
        shortRange: 5,
        mediumRange: 10,
        longRange: 18,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -3,
            ac4: -1,
            ac5: 0,
            ac6: 1,
            ac7: 2,
            ac8: 2,
            ac9: 2,
            ac10: 3
        }
    },
    [3 /* WeaponType.LONGBOW */]: {
        name: "longbow",
        value: 60,
        category: "ranged",
        fireRate: 2,
        shortRange: 7,
        mediumRange: 14,
        longRange: 21,
        armorClassAdjustment: {
            ac2: -1,
            ac3: 0,
            ac4: 0,
            ac5: 1,
            ac6: 2,
            ac7: 3,
            ac8: 3,
            ac9: 3,
            ac10: 3
        }
    },
    [4 /* WeaponType.SHORTBOW */]: {
        name: "shortbow",
        value: 15,
        category: "ranged",
        fireRate: 2,
        shortRange: 5,
        mediumRange: 10,
        longRange: 15,
        armorClassAdjustment: {
            ac2: -5,
            ac3: -4,
            ac4: -1,
            ac5: 0,
            ac6: 0,
            ac7: 1,
            ac8: 2,
            ac9: 2,
            ac10: 2
        }
    },
    [5 /* WeaponType.BATTLE_AXE */]: {
        name: "battle axe",
        value: 5,
        category: "melee",
        weight: 75,
        damageVsSmall: {
            dice: 1,
            sides: 8
        },
        damageVsLarge: {
            dice: 1,
            sides: 8
        },
        length: 4,
        spaceRequired: 4,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -2,
            ac4: -1,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 1,
            ac10: 2
        }
    },
    [6 /* WeaponType.HAND_AXE */]: {
        name: "hand axe",
        value: 1,
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        },
        length: 1.5,
        spaceRequired: 1,
        speedFactor: 4,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -2,
            ac4: -2,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 1,
            ac10: 1
        }
    },
    [7 /* WeaponType.THROWING_AXE */]: {
        name: "thrown axe",
        value: 1,
        category: "ranged-melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        },
        length: 1.5,
        spaceRequired: 1,
        speedFactor: 4,
        fireRate: 1,
        shortRange: 1,
        mediumRange: 2,
        longRange: 3,
        armorClassAdjustment: {
            ac2: -4,
            ac3: -3,
            ac4: -2,
            ac5: -1,
            ac6: -1,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 1
        }
    },
    [8 /* WeaponType.BARDICHE */]: {
        name: "bardiche",
        value: 7,
        category: "melee",
        weight: 125,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 3,
            sides: 4
        },
        length: 5,
        spaceRequired: 5,
        speedFactor: 9,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -1,
            ac4: 0,
            ac5: 0,
            ac6: 1,
            ac7: 1,
            ac8: 2,
            ac9: 2,
            ac10: 3
        }
    },
    [9 /* WeaponType.BEC_DE_CORBIN */]: {
        name: "bec de corbin",
        value: 6,
        category: "melee",
        weight: 100,
        damageVsSmall: {
            dice: 1,
            sides: 8
        },
        damageVsLarge: {
            dice: 1,
            sides: 6
        },
        length: 6,
        spaceRequired: 6,
        speedFactor: 9,
        armorClassAdjustment: {
            ac2: 2,
            ac3: 2,
            ac4: 2,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: -1
        }
    },
    [10 /* WeaponType.BILL_GUISARME */]: {
        name: "bill-guisarme",
        value: 6,
        category: "melee",
        weight: 150,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 10
        },
        length: 8,
        spaceRequired: 2,
        speedFactor: 10,
        armorClassAdjustment: {
            ac2: 0,
            ac3: 0,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 0,
            ac10: 0
        }
    },
    [11 /* WeaponType.BO_STICK */]: {
        name: "bo stick",
        category: "melee",
        weight: 15,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 3
        },
        length: 5,
        spaceRequired: 3,
        speedFactor: 3,
        armorClassAdjustment: {
            ac2: -9,
            ac3: -7,
            ac4: -5,
            ac5: -3,
            ac6: -1,
            ac7: 0,
            ac8: 1,
            ac9: 0,
            ac10: 3
        }
    },
    [12 /* WeaponType.CLUB */]: {
        name: "club",
        category: "melee",
        weight: 30,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 3
        },
        length: 3,
        spaceRequired: 3,
        speedFactor: 4,
        armorClassAdjustment: {
            ac2: -5,
            ac3: -4,
            ac4: -3,
            ac5: -2,
            ac6: -1,
            ac7: -1,
            ac8: 0,
            ac9: 0,
            ac10: 1
        }
    },
    [13 /* WeaponType.THROWN_CLUB */]: {
        name: "thrown club",
        category: "ranged-melee",
        weight: 30,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 3
        },
        length: 3,
        spaceRequired: 3,
        speedFactor: 4,
        fireRate: 1,
        shortRange: 1,
        mediumRange: 2,
        longRange: 3,
        armorClassAdjustment: {
            ac2: -7,
            ac3: -5,
            ac4: -3,
            ac5: -2,
            ac6: -1,
            ac7: -1,
            ac8: -1,
            ac9: 0,
            ac10: 0
        }
    },
    [14 /* WeaponType.DAGGER */]: {
        name: "dagger",
        value: 2,
        category: "melee",
        weight: 10,
        damageVsSmall: {
            dice: 1,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 3
        },
        length: 1.25,
        spaceRequired: 1,
        speedFactor: 2,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -3,
            ac4: -2,
            ac5: -2,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 1,
            ac10: 3
        }
    },
    [15 /* WeaponType.THROWING_DAGGER */]: {
        name: "thrown dagger",
        value: 2,
        category: "ranged-melee",
        weight: 10,
        damageVsSmall: {
            dice: 1,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 3
        },
        length: 1.25,
        spaceRequired: 1,
        speedFactor: 2,
        fireRate: 2,
        shortRange: 1,
        mediumRange: 12,
        longRange: 3,
        armorClassAdjustment: {
            ac2: -5,
            ac3: -4,
            ac4: -3,
            ac5: -2,
            ac6: -1,
            ac7: -1,
            ac8: 0,
            ac9: 0,
            ac10: 1
        }
    },
    [16 /* WeaponType.DART */]: {
        name: "dart",
        value: .25,
        category: "ranged-missile",
        weight: 5,
        damageVsSmall: {
            dice: 1,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 3
        },
        fireRate: 3,
        shortRange: 1.5,
        mediumRange: 3,
        longRange: 4.5,
        armorClassAdjustment: {
            ac2: -5,
            ac3: -4,
            ac4: -3,
            ac5: -2,
            ac6: -1,
            ac7: 0,
            ac8: 1,
            ac9: 0,
            ac10: 1
        }
    },
    [17 /* WeaponType.FAUCHARD */]: {
        name: "fauchard",
        value: 3,
        category: "melee",
        weight: 60,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 8
        },
        length: 8,
        spaceRequired: 2,
        speedFactor: 8,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -2,
            ac4: -1,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: -1,
            ac10: -1
        },
        dismountRider: true
    },
    [18 /* WeaponType.FAUCHARD_FORK */]: {
        name: "fauchard fork",
        value: 8,
        category: "melee",
        weight: 80,
        damageVsSmall: {
            dice: 1,
            sides: 8
        },
        damageVsLarge: {
            dice: 1,
            sides: 10
        },
        length: 8,
        spaceRequired: 2,
        speedFactor: 8,
        armorClassAdjustment: {
            ac2: -1,
            ac3: -1,
            ac4: -1,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 0,
            ac10: 1
        },
        dismountRider: true
    },
    [19 /* WeaponType.FIST */]: {
        name: "fist",
        category: "unarmed",
        length: 2,
        speedFactor: 1,
        armorClassAdjustment: {
            ac2: -7,
            ac3: -5,
            ac4: -3,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 2,
            ac9: 0,
            ac10: 4
        }
    },
    [20 /* WeaponType.FOOTMANS_FLAIL */]: {
        name: "footman's flail",
        value: 3,
        category: "melee",
        weight: 150,
        damageVsSmall: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        damageVsLarge: {
            dice: 2,
            sides: 4
        },
        length: 4,
        spaceRequired: 6,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: 2,
            ac3: 2,
            ac4: 1,
            ac5: 2,
            ac6: 1,
            ac7: 1,
            ac8: 1,
            ac9: 1,
            ac10: -1
        }
    },
    [21 /* WeaponType.HORSEMANS_FLAIL */]: {
        name: "horseman's flail",
        value: 8,
        category: "melee",
        weight: 35,
        damageVsSmall: {
            dice: 1,
            sides: 4,
            bonus: 1
        },
        damageVsLarge: {
            dice: 1,
            sides: 4,
            bonus: 1
        },
        length: 2,
        spaceRequired: 4,
        speedFactor: 6,
        armorClassAdjustment: {
            ac2: 0,
            ac3: 0,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 1,
            ac8: 1,
            ac9: 1,
            ac10: 0
        }
    },
    [22 /* WeaponType.MILITARY_FORK */]: {
        name: "military fork",
        value: 4,
        category: "melee",
        weight: 75,
        damageVsSmall: {
            dice: 1,
            sides: 8
        },
        damageVsLarge: {
            dice: 2,
            sides: 4
        },
        doubleDamageVsLargeWhenSet: true,
        length: 7,
        spaceRequired: 1,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -2,
            ac4: -1,
            ac5: 0,
            ac6: 0,
            ac7: 1,
            ac8: 1,
            ac9: 0,
            ac10: 1
        },
        dismountRider: true
    },
    [23 /* WeaponType.GLAIVE */]: {
        name: "glaive",
        value: 6,
        category: "melee",
        weight: 75,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 10
        },
        doubleDamageVsLargeWhenSet: true,
        length: 8,
        spaceRequired: 1,
        speedFactor: 8,
        armorClassAdjustment: {
            ac2: -1,
            ac3: -1,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    },
    [24 /* WeaponType.GLAIVE_GUISARME */]: {
        name: "glaive guisarme",
        value: 10,
        category: "melee",
        weight: 100,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 2,
            sides: 6
        },
        doubleDamageVsLargeWhenSet: true,
        length: 8,
        spaceRequired: 1,
        speedFactor: 9,
        armorClassAdjustment: {
            ac2: -1,
            ac3: -1,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        },
        dismountRider: true
    },
    [25 /* WeaponType.GUISARME */]: {
        name: "guisarme",
        value: 5,
        category: "melee",
        weight: 80,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 8
        },
        length: 6,
        spaceRequired: 2,
        speedFactor: 8,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -2,
            ac4: -1,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: -1,
            ac10: -1
        },
        dismountRider: true
    },
    [26 /* WeaponType.GUISARME_VOULGE */]: {
        name: "guisarme-voulge",
        value: 7,
        category: "melee",
        weight: 150,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 2,
            sides: 4
        },
        length: 7,
        spaceRequired: 2,
        speedFactor: 10,
        armorClassAdjustment: {
            ac2: -1,
            ac3: -1,
            ac4: 0,
            ac5: 1,
            ac6: 1,
            ac7: 1,
            ac8: 0,
            ac9: 0,
            ac10: 0
        },
        dismountRider: true
    },
    [27 /* WeaponType.HALBERD */]: {
        name: "halberd",
        value: 9,
        category: "melee",
        weight: 175,
        damageVsSmall: {
            dice: 1,
            sides: 10
        },
        damageVsLarge: {
            dice: 2,
            sides: 6
        },
        length: 5,
        spaceRequired: 5,
        speedFactor: 9,
        armorClassAdjustment: {
            ac2: 1,
            ac3: 1,
            ac4: 1,
            ac5: 2,
            ac6: 2,
            ac7: 2,
            ac8: 1,
            ac9: 1,
            ac10: 0
        }
    },
    [28 /* WeaponType.LUCERNE_HAMMER */]: {
        name: "lucerne hammer",
        value: 7,
        category: "melee",
        weight: 150,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 6
        },
        length: 5,
        spaceRequired: 5,
        speedFactor: 9,
        armorClassAdjustment: {
            ac2: 1,
            ac3: 1,
            ac4: 2,
            ac5: 2,
            ac6: 2,
            ac7: 1,
            ac8: 1,
            ac9: 0,
            ac10: 0
        },
        dismountRider: true
    },
    [29 /* WeaponType.HAMMER */]: {
        name: "hammer",
        value: 1,
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 4,
            bonus: 1
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        },
        length: 1.5,
        spaceRequired: 2,
        speedFactor: 4,
        armorClassAdjustment: {
            ac2: 0,
            ac3: 1,
            ac4: 0,
            ac5: 1,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    },
    [30 /* WeaponType.THROWN_HAMMER */]: {
        name: "thrown hammer",
        value: 1,
        category: "ranged-melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 4,
            bonus: 1
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        },
        length: 1.5,
        spaceRequired: 2,
        speedFactor: 4,
        fireRate: 1,
        shortRange: 1,
        mediumRange: 2,
        longRange: 3,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -1,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 1
        }
    },
    [31 /* WeaponType.JAVELIN */]: {
        name: "javelin",
        value: .5,
        category: "ranged-missile",
        weight: 20,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 6
        },
        doubleDamageVsLargeWhenSet: true,
        fireRate: 1,
        shortRange: 2,
        mediumRange: 4,
        longRange: 6,
        armorClassAdjustment: {
            ac2: -5,
            ac3: -4,
            ac4: -3,
            ac5: -2,
            ac6: -1,
            ac7: 0,
            ac8: 1,
            ac9: 0,
            ac10: 1
        }
    },
    [32 /* WeaponType.JO_STICK */]: {
        name: "jo stick",
        category: "melee",
        weight: 40,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        },
        length: 3,
        spaceRequired: 2,
        speedFactor: 2,
        armorClassAdjustment: {
            ac2: -8,
            ac3: -6,
            ac4: -4,
            ac5: -2,
            ac6: -1,
            ac7: 0,
            ac8: 1,
            ac9: 0,
            ac10: 2
        }
    },
    [33 /* WeaponType.LIGHT_HORSE_LANCE */]: {
        name: "light horse lance",
        value: 6,
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 8
        },
        doubleDamageVsChargingMount: true,
        length: 10,
        spaceRequired: 1,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -2,
            ac4: -1,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    },
    [34 /* WeaponType.MEDIUM_HORSE_LANCE */]: {
        name: "medium horse lance",
        value: 6,
        category: "melee",
        weight: 100,
        damageVsSmall: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        damageVsLarge: {
            dice: 2,
            sides: 6
        },
        doubleDamageVsChargingMount: true,
        length: 12,
        spaceRequired: 1,
        speedFactor: 6,
        armorClassAdjustment: {
            ac2: 0,
            ac3: 1,
            ac4: 1,
            ac5: 1,
            ac6: 1,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    },
    [35 /* WeaponType.HEAVY_HORSE_LANCE */]: {
        name: "heavy horse lance",
        value: 6,
        category: "melee",
        weight: 150,
        damageVsSmall: {
            dice: 2,
            sides: 4,
            bonus: 1
        },
        damageVsLarge: {
            dice: 3,
            sides: 6
        },
        doubleDamageVsChargingMount: true,
        length: 14,
        spaceRequired: 1,
        speedFactor: 8,
        armorClassAdjustment: {
            ac2: 3,
            ac3: 3,
            ac4: 2,
            ac5: 2,
            ac6: 2,
            ac7: 1,
            ac8: 1,
            ac9: 0,
            ac10: 0
        }
    },
    [36 /* WeaponType.FOOTMANS_MACE */]: {
        name: "footman's mace",
        value: 8,
        category: "melee",
        weight: 100,
        damageVsSmall: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        damageVsLarge: {
            dice: 1,
            sides: 6
        },
        length: 2.5,
        spaceRequired: 4,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: 1,
            ac3: 1,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 1,
            ac10: -1
        }
    },
    [37 /* WeaponType.HORSEMANS_MACE */]: {
        name: "horseman's mace",
        value: 4,
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        },
        length: 1.5,
        spaceRequired: 2,
        speedFactor: 6,
        armorClassAdjustment: {
            ac2: 1,
            ac3: 1,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    },
    [38 /* WeaponType.MORNING_STAR */]: {
        name: "morning star",
        value: 5,
        category: "melee",
        weight: 125,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        length: 4,
        spaceRequired: 5,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: 0,
            ac3: 1,
            ac4: 1,
            ac5: 1,
            ac6: 1,
            ac7: 1,
            ac8: 1,
            ac9: 2,
            ac10: 2
        }
    },
    [39 /* WeaponType.PARTISAN */]: {
        name: "partisan",
        value: 10,
        category: "melee",
        weight: 80,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        length: 7,
        spaceRequired: 3,
        speedFactor: 9,
        armorClassAdjustment: {
            ac2: 0,
            ac3: 0,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    },
    [40 /* WeaponType.FOOTMANS_MILITARY_PICK */]: {
        name: "footman's military pick",
        value: 8,
        category: "melee",
        weight: 60,
        damageVsSmall: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        damageVsLarge: {
            dice: 2,
            sides: 4
        },
        length: 4,
        spaceRequired: 4,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: 2,
            ac3: 2,
            ac4: 1,
            ac5: 1,
            ac6: 0,
            ac7: -1,
            ac8: -1,
            ac9: -1,
            ac10: -2
        }
    },
    [41 /* WeaponType.HORSEMANS_MILITARY_PICK */]: {
        name: "horseman's military pick",
        value: 5,
        category: "melee",
        weight: 40,
        damageVsSmall: {
            dice: 1,
            sides: 4,
            bonus: 1
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        },
        length: 2,
        spaceRequired: 2,
        speedFactor: 5,
        armorClassAdjustment: {
            ac2: 1,
            ac3: 1,
            ac4: 1,
            ac5: 1,
            ac6: 0,
            ac7: 0,
            ac8: -1,
            ac9: -1,
            ac10: -1
        }
    },
    [42 /* WeaponType.AWL_PIKE */]: {
        name: "awl pike",
        value: 3,
        category: "melee",
        weight: 80,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 12
        },
        length: 18,
        spaceRequired: 1,
        speedFactor: 13,
        armorClassAdjustment: {
            ac2: -1,
            ac3: 0,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: -1,
            ac10: -2
        }
    },
    [43 /* WeaponType.LIGHT_QUARREL */]: {
        name: "light quarrel",
        value: .05,
        category: "missile",
        weight: 1,
        damageVsSmall: {
            dice: 1,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        }
    },
    [44 /* WeaponType.HEAVY_QUARREL */]: {
        name: "heavy quarrel",
        value: 2,
        category: "missile",
        weight: 2,
        damageVsSmall: {
            dice: 1,
            sides: 4,
            bonus: 1
        },
        damageVsLarge: {
            dice: 1,
            sides: 6,
            bonus: 1
        }
    },
    [45 /* WeaponType.HEAVY_CROSSBOW */]: {
        name: "heavy crossbow",
        value: 20,
        category: "ranged",
        fireRate: .5,
        shortRange: 8,
        mediumRange: 16,
        longRange: 24,
        armorClassAdjustment: {
            ac2: -1,
            ac3: 0,
            ac4: 1,
            ac5: 2,
            ac6: 3,
            ac7: 3,
            ac8: 4,
            ac9: 4,
            ac10: 4
        }
    },
    [46 /* WeaponType.LIGHT_CROSSBOW */]: {
        name: "light crossbow",
        value: 12,
        category: "ranged",
        fireRate: 1,
        shortRange: 6,
        mediumRange: 12,
        longRange: 18,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -1,
            ac4: 0,
            ac5: 0,
            ac6: 1,
            ac7: 2,
            ac8: 3,
            ac9: 3,
            ac10: 3
        }
    },
    [47 /* WeaponType.RANSEUR */]: {
        name: "ranseur",
        value: 4,
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 2,
            sides: 4
        },
        length: 8,
        spaceRequired: 1,
        speedFactor: 8,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -1,
            ac4: -1,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 1
        },
        dismountRider: true
    },
    [48 /* WeaponType.SCIMITAR */]: {
        name: "scimitar",
        value: 15,
        category: "melee",
        weight: 40,
        damageVsSmall: {
            dice: 1,
            sides: 8
        },
        damageVsLarge: {
            dice: 1,
            sides: 8
        },
        length: 3,
        spaceRequired: 2,
        speedFactor: 4,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -2,
            ac4: -2,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 1,
            ac10: 3
        }
    },
    [49 /* WeaponType.SLING_BULLET */]: {
        name: "sling bullet",
        category: "ranged-missile",
        weight: 2,
        damageVsSmall: {
            dice: 1,
            sides: 4,
            bonus: 1
        },
        damageVsLarge: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        fireRate: 1,
        shortRange: 5,
        mediumRange: 10,
        longRange: 20,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -2,
            ac4: -1,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 2,
            ac9: 1,
            ac10: 3
        }
    },
    [50 /* WeaponType.SLING_STONE */]: {
        name: "sling stone",
        category: "ranged-missile",
        weight: 1,
        damageVsSmall: {
            dice: 1,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 4
        },
        fireRate: 1,
        shortRange: 4,
        mediumRange: 8,
        longRange: 16,
        armorClassAdjustment: {
            ac2: -5,
            ac3: -4,
            ac4: -2,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 2,
            ac9: 1,
            ac10: 3
        }
    },
    [51 /* WeaponType.SPEAR */]: {
        name: "spear",
        value: 1,
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 8
        },
        doubleDamageWhenSet: true,
        length: 9,
        spaceRequired: 1,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -1,
            ac4: -1,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    },
    [52 /* WeaponType.THROWN_SPEAR */]: {
        name: "thrown spear",
        value: 1,
        category: "ranged-melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 8
        },
        doubleDamageWhenSet: true,
        length: 9,
        spaceRequired: 1,
        speedFactor: 7,
        fireRate: 1,
        shortRange: 1,
        mediumRange: 2,
        longRange: 3,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -3,
            ac4: -2,
            ac5: -2,
            ac6: -1,
            ac7: 0,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    },
    [53 /* WeaponType.SPETUM */]: {
        name: "spetum",
        value: 3,
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        damageVsLarge: {
            dice: 2,
            sides: 6
        },
        length: 8,
        spaceRequired: 1,
        speedFactor: 8,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -1,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 1,
            ac10: 2
        },
        disarmVsAc8: true
    },
    [54 /* WeaponType.QUARTERSTAFF */]: {
        name: "quarterstaff",
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 6
        },
        length: 7,
        spaceRequired: 3,
        speedFactor: 4,
        armorClassAdjustment: {
            ac2: -7,
            ac3: -5,
            ac4: -3,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 1,
            ac10: 1
        }
    },
    [55 /* WeaponType.BASTARD_SWORD */]: {
        name: "bastard sword",
        value: 25,
        category: "melee",
        weight: 100,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 2,
            sides: 8
        },
        length: 4.5,
        spaceRequired: 4,
        speedFactor: 6,
        armorClassAdjustment: {
            ac2: 0,
            ac3: 0,
            ac4: 1,
            ac5: 1,
            ac6: 1,
            ac7: 1,
            ac8: 1,
            ac9: 1,
            ac10: 0
        },
    },
    [56 /* WeaponType.BROADSWORD */]: {
        name: "broadsword",
        value: 10,
        category: "melee",
        weight: 75,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        length: 3.5,
        spaceRequired: 4,
        speedFactor: 5,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -2,
            ac4: -1,
            ac5: 0,
            ac6: 0,
            ac7: 1,
            ac8: 1,
            ac9: 1,
            ac10: 2
        }
    },
    [57 /* WeaponType.LONGSWORD */]: {
        name: "longsword",
        value: 15,
        category: "melee",
        weight: 60,
        damageVsSmall: {
            dice: 1,
            sides: 8
        },
        damageVsLarge: {
            dice: 1,
            sides: 12
        },
        length: 3.5,
        spaceRequired: 3,
        speedFactor: 5,
        armorClassAdjustment: {
            ac2: -2,
            ac3: -1,
            ac4: 0,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 0,
            ac9: 1,
            ac10: 2
        }
    },
    [58 /* WeaponType.SHORTSWORD */]: {
        name: "shortsword",
        value: 8,
        category: "melee",
        weight: 35,
        damageVsSmall: {
            dice: 1,
            sides: 6
        },
        damageVsLarge: {
            dice: 1,
            sides: 8
        },
        length: 2,
        spaceRequired: 1,
        speedFactor: 3,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -2,
            ac4: -1,
            ac5: 0,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 0,
            ac10: 2
        }
    },
    [59 /* WeaponType.TWO_HANDED_SWORD */]: {
        name: "two handed sword",
        value: 30,
        category: "melee",
        weight: 250,
        damageVsSmall: {
            dice: 1,
            sides: 10
        },
        damageVsLarge: {
            dice: 3,
            sides: 6
        },
        length: 6,
        spaceRequired: 6,
        speedFactor: 10,
        armorClassAdjustment: {
            ac2: 2,
            ac3: 2,
            ac4: 2,
            ac5: 2,
            ac6: 3,
            ac7: 3,
            ac8: 3,
            ac9: 1,
            ac10: 0
        }
    },
    [60 /* WeaponType.TRIDENT */]: {
        name: "trident",
        value: 4,
        category: "melee",
        weight: 50,
        damageVsSmall: {
            dice: 1,
            sides: 6,
            bonus: 1
        },
        damageVsLarge: {
            dice: 3,
            sides: 4
        },
        length: 6,
        spaceRequired: 1,
        speedFactor: 7,
        armorClassAdjustment: {
            ac2: -3,
            ac3: -2,
            ac4: -1,
            ac5: -1,
            ac6: 0,
            ac7: 0,
            ac8: 1,
            ac9: 0,
            ac10: 1
        }
    },
    [61 /* WeaponType.VOULGE */]: {
        name: "voulge",
        value: 2,
        category: "melee",
        weight: 125,
        damageVsSmall: {
            dice: 2,
            sides: 4
        },
        damageVsLarge: {
            dice: 2,
            sides: 4
        },
        length: 8,
        spaceRequired: 2,
        speedFactor: 10,
        armorClassAdjustment: {
            ac2: -1,
            ac3: -1,
            ac4: 0,
            ac5: 1,
            ac6: 1,
            ac7: 1,
            ac8: 0,
            ac9: 0,
            ac10: 0
        }
    }
};
