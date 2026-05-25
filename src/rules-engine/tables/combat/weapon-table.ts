import { WeaponDefinition, WeaponType } from "../../types"

/**
 * +2 vs defender's back
 * +4 vs prone defender
 * -2 medium range
 * -5 long range
 */
export const weaponTable: Record<WeaponType, WeaponDefinition> = {
  [WeaponType.ARROW]: {
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
  [WeaponType.COMPOSITE_LONGBOW]: {
    name: "composite longbow",
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
  [WeaponType.COMPOSITE_SHORTBOW]: {
    name: "composite shortbow",
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
  [WeaponType.LONGBOW]: {
    name: "longbow",
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
  [WeaponType.SHORTBOW]: {
    name: "shortbow",
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
  [WeaponType.BATTLE_AXE]: {
    name: "battle axe",
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
  [WeaponType.HAND_AXE]: {
    name: "hand axe",
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
  [WeaponType.THROWING_AXE]: {
    name: "thrown axe",
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
  [WeaponType.BARDICHE]: {
    name: "bardiche",
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
  [WeaponType.BEC_DE_CORBIN]: {
    name: "bec de corbin",
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
  [WeaponType.BILL_GUISARME]: {
    name: "bill-guisarme",
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
  [WeaponType.BO_STICK]: {
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
  [WeaponType.CLUB]: {
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
  [WeaponType.THROWN_CLUB]: {
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
  [WeaponType.DAGGER]: {
    name: "dagger",
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
  [WeaponType.THROWING_DAGGER]: {
    name: "thrown dagger",
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
  [WeaponType.DART]: {
    name: "dart",
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
  [WeaponType.FAUCHARD]: {
    name: "fauchard",
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
  [WeaponType.FAUCHARD_FORK]: {
    name: "fauchard fork",
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
  [WeaponType.FIST]: {
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
  [WeaponType.FOOTMANS_FLAIL]: {
    name: "footman's flail",
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
  [WeaponType.HORSEMANS_FLAIL]: {
    name: "horseman's flail",
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
  [WeaponType.MILITARY_FORK]: {
    name: "military fork",
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
  [WeaponType.GLAIVE]: {
    name: "glaive",
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
  [WeaponType.GLAIVE_GUISARME]: {
    name: "glaive guisarme",
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
  [WeaponType.GUISARME]: {
    name: "guisarme",
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
  [WeaponType.GUISARME_VOULGE]: {
    name: "guisarme-voulge",
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
  [WeaponType.HALBERD]: {
    name: "halberd",
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
  [WeaponType.LUCERNE_HAMMER]: {
    name: "lucerne hammer",
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
  [WeaponType.HAMMER]: {
    name: "hammer",
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
  [WeaponType.THROWN_HAMMER]: {
    name: "thrown hammer",
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
  [WeaponType.JAVELIN]: {
    name: "javelin",
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
  [WeaponType.JO_STICK]: {
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
  [WeaponType.LIGHT_HORSE_LANCE]: {
    name: "light horse lance",
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
  [WeaponType.MEDIUM_HORSE_LANCE]: {
    name: "medium horse lance",
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
  [WeaponType.HEAVY_HORSE_LANCE]: {
    name: "heavy horse lance",
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
  [WeaponType.FOOTMANS_MACE]: {
    name: "footman's mace",
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
  [WeaponType.HORSEMANS_MACE]: {
    name: "horseman's mace",
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
  [WeaponType.MORNING_STAR]: {
    name: "morning star",
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
  [WeaponType.PARTISAN]: {
    name: "partisan",
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
  [WeaponType.FOOTMANS_MILITARY_PICK]: {
    name: "footman's military pick",
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
  [WeaponType.HORSEMANS_MILITARY_PICK]: {
    name: "horseman's military pick",
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
  [WeaponType.AWL_PIKE]: {
    name: "awl pike",
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
  [WeaponType.LIGHT_QUARREL]: {
    name: "light quarrel",
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
  [WeaponType.HEAVY_QUARREL]: {
    name: "heavy quarrel",
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
  [WeaponType.HEAVY_CROSSBOW]: {
    name: "heavy crossbow",
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
  [WeaponType.LIGHT_CROSSBOW]: {
    name: "light crossbow",
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
  [WeaponType.RANSEUR]: {
    name: "ranseur",
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
  [WeaponType.SCIMITAR]: {
    name: "scimitar",
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
  [WeaponType.SLING_BULLET]: {
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
  [WeaponType.SLING_STONE]: {
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
  [WeaponType.SPEAR]: {
    name: "spear",
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
  [WeaponType.THROWN_SPEAR]: {
    name: "thrown spear",
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
  [WeaponType.SPETUM]: {
    name: "spetum",
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
  [WeaponType.QUARTERSTAFF]: {
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
  [WeaponType.BASTARD_SWORD]: {// treat as long sword if used one-handed
    name: "bastard sword",
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
  [WeaponType.BROADSWORD]: {
    name: "broadsword",
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
  [WeaponType.LONGSWORD]: {
    name: "longsword",
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
  [WeaponType.SHORTSWORD]: {
    name: "shortsword",
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
  [WeaponType.TWO_HANDED_SWORD]: {
    name: "two handed sword",
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
  [WeaponType.TRIDENT]: {
    name: "trident",
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
  [WeaponType.VOULGE]: {
    name: "voulge",
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