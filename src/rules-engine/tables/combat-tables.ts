import { ArmorType, Class } from "../character/character-type";

export const armorClass = [
  {
    armor: ArmorType.PLATE_MAIL,
    shield: true,
    ac: 2
  },
  {
    armor: ArmorType.PLATE_MAIL,
    shield: false,
    ac: 3
  },
  {
    armor: ArmorType.SPLINT,
    shield: true,
    ac: 3
  },
  {
    armor: ArmorType.BANDED_MAIL,
    shield: true,
    ac: 3
  },
  {
    armor: ArmorType.SPLINT,
    shield: false,
    ac: 4
  },
  {
    armor: ArmorType.BANDED_MAIL,
    shield: false,
    ac: 4
  },
  {
    armor: ArmorType.CHAIN_MAIL,
    shield: true,
    ac: 4
  },
  {
    armor: ArmorType.CHAIN_MAIL,
    shield: false,
    ac: 5
  },
  {
    armor: ArmorType.SCALE_MAIL,
    shield: true,
    ac: 5
  },
  {
    armor: ArmorType.SCALE_MAIL,
    shield: false,
    ac: 6
  },
  {
    armor: ArmorType.STUDDED,
    shield: true,
    ac: 6
  },
  {
    armor: ArmorType.RING_MAIL,
    shield: true,
    ac: 6
  },
  {
    armor: ArmorType.STUDDED,
    shield: false,
    ac: 7
  },
  {
    armor: ArmorType.RING_MAIL,
    shield: false,
    ac: 7
  },
  {
    armor: ArmorType.LEATHER,
    shield: true,
    ac: 7
  },
  {
    armor: ArmorType.PADDED,
    shield: true,
    ac: 7
  },
  {
    armor: ArmorType.LEATHER,
    shield: false,
    ac: 8
  },
  {
    armor: ArmorType.PADDED,
    shield: false,
    ac: 8
  },
  {
    armor: ArmorType.NONE,
    shield: true,
    ac: 9
  },
  {
    armor: ArmorType.NONE,
    shield: false,
    ac: 10
  }
];

export const combat = [
  {
    class: [Class.CLERIC, Class.DRUID, Class.MONK],
    toHit: [
      {
        ac: -10,
        toHit: [
          {
            level: 1,
            toHit: 25
          },
          {
            level: 2,
            toHit: 25
          },
          {
            level: 3,
            toHit: 25
          },
          {
            level: 4,
            toHit: 23
          },
          {
            level: 5,
            toHit: 23
          },
          {
            level: 6,
            toHit: 23
          },
          {
            level: 7,
            toHit: 21
          },
          {
            level: 8,
            toHit: 21
          },
          {
            level: 9,
            toHit: 21
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 20
          },
          {
            level: 18,
            toHit: 20
          },
          {
            level: 19,
            toHit: 19
          },
          {
            level: 20,
            toHit: 19
          },
          {
            level: 21,
            toHit: 19
          }
        ]
      },
      {
        ac: -9,
        toHit: [
          {
            level: 1,
            toHit: 24
          },
          {
            level: 2,
            toHit: 24
          },
          {
            level: 3,
            toHit: 24
          },
          {
            level: 4,
            toHit: 22
          },
          {
            level: 5,
            toHit: 22
          },
          {
            level: 6,
            toHit: 22
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 19
          },
          {
            level: 17,
            toHit: 19
          },
          {
            level: 18,
            toHit: 19
          },
          {
            level: 19,
            toHit: 18
          },
          {
            level: 20,
            toHit: 18
          },
          {
            level: 21,
            toHit: 18
          }
        ]
      },
      {
        ac: -8,
        toHit: [
          {
            level: 1,
            toHit: 23
          },
          {
            level: 2,
            toHit: 23
          },
          {
            level: 3,
            toHit: 23
          },
          {
            level: 4,
            toHit: 21
          },
          {
            level: 5,
            toHit: 21
          },
          {
            level: 6,
            toHit: 21
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 18
          },
          {
            level: 17,
            toHit: 18
          },
          {
            level: 18,
            toHit: 18
          },
          {
            level: 19,
            toHit: 17
          },
          {
            level: 20,
            toHit: 17
          },
          {
            level: 21,
            toHit: 17
          }
        ]
      },
      {
        ac: -7,
        toHit: [
          {
            level: 1,
            toHit: 22
          },
          {
            level: 2,
            toHit: 22
          },
          {
            level: 3,
            toHit: 22
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 19
          },
          {
            level: 14,
            toHit: 19
          },
          {
            level: 15,
            toHit: 19
          },
          {
            level: 16,
            toHit: 17
          },
          {
            level: 17,
            toHit: 17
          },
          {
            level: 18,
            toHit: 17
          },
          {
            level: 19,
            toHit: 16
          },
          {
            level: 20,
            toHit: 16
          },
          {
            level: 21,
            toHit: 16
          }
        ]
      },
      {
        ac: -6,
        toHit: [
          {
            level: 1,
            toHit: 21
          },
          {
            level: 2,
            toHit: 21
          },
          {
            level: 3,
            toHit: 21
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 18
          },
          {
            level: 14,
            toHit: 18
          },
          {
            level: 15,
            toHit: 18
          },
          {
            level: 16,
            toHit: 16
          },
          {
            level: 17,
            toHit: 16
          },
          {
            level: 18,
            toHit: 16
          },
          {
            level: 19,
            toHit: 15
          },
          {
            level: 20,
            toHit: 15
          },
          {
            level: 21,
            toHit: 15
          }
        ]
      },
      {
        ac: -5,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 19
          },
          {
            level: 11,
            toHit: 19
          },
          {
            level: 12,
            toHit: 19
          },
          {
            level: 13,
            toHit: 17
          },
          {
            level: 14,
            toHit: 17
          },
          {
            level: 15,
            toHit: 17
          },
          {
            level: 16,
            toHit: 15
          },
          {
            level: 17,
            toHit: 15
          },
          {
            level: 18,
            toHit: 15
          },
          {
            level: 19,
            toHit: 14
          },
          {
            level: 20,
            toHit: 14
          },
          {
            level: 21,
            toHit: 14
          }
        ]
      },
      {
        ac: -4,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 18
          },
          {
            level: 11,
            toHit: 18
          },
          {
            level: 12,
            toHit: 18
          },
          {
            level: 13,
            toHit: 16
          },
          {
            level: 14,
            toHit: 16
          },
          {
            level: 15,
            toHit: 16
          },
          {
            level: 16,
            toHit: 14
          },
          {
            level: 17,
            toHit: 14
          },
          {
            level: 18,
            toHit: 14
          },
          {
            level: 19,
            toHit: 13
          },
          {
            level: 20,
            toHit: 13
          },
          {
            level: 21,
            toHit: 13
          }
        ]
      },
      {
        ac: -3,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 19
          },
          {
            level: 8,
            toHit: 19
          },
          {
            level: 9,
            toHit: 19
          },
          {
            level: 10,
            toHit: 17
          },
          {
            level: 11,
            toHit: 17
          },
          {
            level: 12,
            toHit: 17
          },
          {
            level: 13,
            toHit: 15
          },
          {
            level: 14,
            toHit: 15
          },
          {
            level: 15,
            toHit: 15
          },
          {
            level: 16,
            toHit: 13
          },
          {
            level: 17,
            toHit: 13
          },
          {
            level: 18,
            toHit: 13
          },
          {
            level: 19,
            toHit: 12
          },
          {
            level: 20,
            toHit: 12
          },
          {
            level: 21,
            toHit: 12
          }
        ]
      },
      {
        ac: -2,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 18
          },
          {
            level: 8,
            toHit: 18
          },
          {
            level: 9,
            toHit: 18
          },
          {
            level: 10,
            toHit: 16
          },
          {
            level: 11,
            toHit: 16
          },
          {
            level: 12,
            toHit: 16
          },
          {
            level: 13,
            toHit: 14
          },
          {
            level: 14,
            toHit: 14
          },
          {
            level: 15,
            toHit: 14
          },
          {
            level: 16,
            toHit: 12
          },
          {
            level: 17,
            toHit: 12
          },
          {
            level: 18,
            toHit: 12
          },
          {
            level: 19,
            toHit: 11
          },
          {
            level: 20,
            toHit: 11
          },
          {
            level: 21,
            toHit: 11
          }
        ]
      },
      {
        ac: -1,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 19
          },
          {
            level: 5,
            toHit: 19
          },
          {
            level: 6,
            toHit: 19
          },
          {
            level: 7,
            toHit: 17
          },
          {
            level: 8,
            toHit: 17
          },
          {
            level: 9,
            toHit: 17
          },
          {
            level: 10,
            toHit: 15
          },
          {
            level: 11,
            toHit: 15
          },
          {
            level: 12,
            toHit: 15
          },
          {
            level: 13,
            toHit: 13
          },
          {
            level: 14,
            toHit: 13
          },
          {
            level: 15,
            toHit: 13
          },
          {
            level: 16,
            toHit: 11
          },
          {
            level: 17,
            toHit: 11
          },
          {
            level: 18,
            toHit: 11
          },
          {
            level: 19,
            toHit: 10
          },
          {
            level: 20,
            toHit: 10
          },
          {
            level: 21,
            toHit: 10
          }
        ]
      },
      {
        ac: 0,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 18
          },
          {
            level: 5,
            toHit: 18
          },
          {
            level: 6,
            toHit: 18
          },
          {
            level: 7,
            toHit: 16
          },
          {
            level: 8,
            toHit: 16
          },
          {
            level: 9,
            toHit: 16
          },
          {
            level: 10,
            toHit: 14
          },
          {
            level: 11,
            toHit: 14
          },
          {
            level: 12,
            toHit: 14
          },
          {
            level: 13,
            toHit: 12
          },
          {
            level: 14,
            toHit: 12
          },
          {
            level: 15,
            toHit: 12
          },
          {
            level: 16,
            toHit: 10
          },
          {
            level: 17,
            toHit: 10
          },
          {
            level: 18,
            toHit: 10
          },
          {
            level: 19,
            toHit: 9
          },
          {
            level: 20,
            toHit: 9
          },
          {
            level: 21,
            toHit: 9
          }
        ]
      },
      {
        ac: 1,
        toHit: [
          {
            level: 1,
            toHit: 19
          },
          {
            level: 2,
            toHit: 19
          },
          {
            level: 3,
            toHit: 19
          },
          {
            level: 4,
            toHit: 17
          },
          {
            level: 5,
            toHit: 17
          },
          {
            level: 6,
            toHit: 17
          },
          {
            level: 7,
            toHit: 15
          },
          {
            level: 8,
            toHit: 15
          },
          {
            level: 9,
            toHit: 15
          },
          {
            level: 10,
            toHit: 13
          },
          {
            level: 11,
            toHit: 13
          },
          {
            level: 12,
            toHit: 13
          },
          {
            level: 13,
            toHit: 11
          },
          {
            level: 14,
            toHit: 11
          },
          {
            level: 15,
            toHit: 11
          },
          {
            level: 16,
            toHit: 9
          },
          {
            level: 17,
            toHit: 9
          },
          {
            level: 18,
            toHit: 9
          },
          {
            level: 19,
            toHit: 8
          },
          {
            level: 20,
            toHit: 8
          },
          {
            level: 21,
            toHit: 8
          }
        ]
      },
      {
        ac: 2,
        toHit: [
          {
            level: 1,
            toHit: 18
          },
          {
            level: 2,
            toHit: 18
          },
          {
            level: 3,
            toHit: 18
          },
          {
            level: 4,
            toHit: 16
          },
          {
            level: 5,
            toHit: 16
          },
          {
            level: 6,
            toHit: 16
          },
          {
            level: 7,
            toHit: 14
          },
          {
            level: 8,
            toHit: 14
          },
          {
            level: 9,
            toHit: 14
          },
          {
            level: 10,
            toHit: 12
          },
          {
            level: 11,
            toHit: 12
          },
          {
            level: 12,
            toHit: 12
          },
          {
            level: 13,
            toHit: 10
          },
          {
            level: 14,
            toHit: 10
          },
          {
            level: 15,
            toHit: 10
          },
          {
            level: 16,
            toHit: 8
          },
          {
            level: 17,
            toHit: 8
          },
          {
            level: 18,
            toHit: 8
          },
          {
            level: 19,
            toHit: 7
          },
          {
            level: 20,
            toHit: 7
          },
          {
            level: 21,
            toHit: 7
          }
        ]
      },
      {
        ac: 3,
        toHit: [
          {
            level: 1,
            toHit: 17
          },
          {
            level: 2,
            toHit: 17
          },
          {
            level: 3,
            toHit: 17
          },
          {
            level: 4,
            toHit: 15
          },
          {
            level: 5,
            toHit: 15
          },
          {
            level: 6,
            toHit: 15
          },
          {
            level: 7,
            toHit: 13
          },
          {
            level: 8,
            toHit: 13
          },
          {
            level: 9,
            toHit: 13
          },
          {
            level: 10,
            toHit: 11
          },
          {
            level: 11,
            toHit: 11
          },
          {
            level: 12,
            toHit: 11
          },
          {
            level: 13,
            toHit: 9
          },
          {
            level: 14,
            toHit: 9
          },
          {
            level: 15,
            toHit: 9
          },
          {
            level: 16,
            toHit: 7
          },
          {
            level: 17,
            toHit: 7
          },
          {
            level: 18,
            toHit: 7
          },
          {
            level: 19,
            toHit: 6
          },
          {
            level: 20,
            toHit: 6
          },
          {
            level: 21,
            toHit: 6
          }
        ]
      },
      {
        ac: 4,
        toHit: [
          {
            level: 1,
            toHit: 16
          },
          {
            level: 2,
            toHit: 16
          },
          {
            level: 3,
            toHit: 16
          },
          {
            level: 4,
            toHit: 14
          },
          {
            level: 5,
            toHit: 14
          },
          {
            level: 6,
            toHit: 14
          },
          {
            level: 7,
            toHit: 12
          },
          {
            level: 8,
            toHit: 12
          },
          {
            level: 9,
            toHit: 12
          },
          {
            level: 10,
            toHit: 10
          },
          {
            level: 11,
            toHit: 10
          },
          {
            level: 12,
            toHit: 10
          },
          {
            level: 13,
            toHit: 8
          },
          {
            level: 14,
            toHit: 8
          },
          {
            level: 15,
            toHit: 8
          },
          {
            level: 16,
            toHit: 6
          },
          {
            level: 17,
            toHit: 6
          },
          {
            level: 18,
            toHit: 6
          },
          {
            level: 19,
            toHit: 5
          },
          {
            level: 20,
            toHit: 5
          },
          {
            level: 21,
            toHit: 5
          }
        ]
      },
      {
        ac: 5,
        toHit: [
          {
            level: 1,
            toHit: 15
          },
          {
            level: 2,
            toHit: 15
          },
          {
            level: 3,
            toHit: 15
          },
          {
            level: 4,
            toHit: 13
          },
          {
            level: 5,
            toHit: 13
          },
          {
            level: 6,
            toHit: 13
          },
          {
            level: 7,
            toHit: 11
          },
          {
            level: 8,
            toHit: 11
          },
          {
            level: 9,
            toHit: 11
          },
          {
            level: 10,
            toHit: 9
          },
          {
            level: 11,
            toHit: 9
          },
          {
            level: 12,
            toHit: 9
          },
          {
            level: 13,
            toHit: 7
          },
          {
            level: 14,
            toHit: 7
          },
          {
            level: 15,
            toHit: 7
          },
          {
            level: 16,
            toHit: 5
          },
          {
            level: 17,
            toHit: 5
          },
          {
            level: 18,
            toHit: 5
          },
          {
            level: 19,
            toHit: 4
          },
          {
            level: 20,
            toHit: 4
          },
          {
            level: 21,
            toHit: 4
          }
        ]
      },
      {
        ac: 6,
        toHit: [
          {
            level: 1,
            toHit: 14
          },
          {
            level: 2,
            toHit: 14
          },
          {
            level: 3,
            toHit: 14
          },
          {
            level: 4,
            toHit: 12
          },
          {
            level: 5,
            toHit: 12
          },
          {
            level: 6,
            toHit: 12
          },
          {
            level: 7,
            toHit: 10
          },
          {
            level: 8,
            toHit: 10
          },
          {
            level: 9,
            toHit: 10
          },
          {
            level: 10,
            toHit: 8
          },
          {
            level: 11,
            toHit: 8
          },
          {
            level: 12,
            toHit: 8
          },
          {
            level: 13,
            toHit: 6
          },
          {
            level: 14,
            toHit: 6
          },
          {
            level: 15,
            toHit: 6
          },
          {
            level: 16,
            toHit: 4
          },
          {
            level: 17,
            toHit: 4
          },
          {
            level: 18,
            toHit: 4
          },
          {
            level: 19,
            toHit: 3
          },
          {
            level: 20,
            toHit: 3
          },
          {
            level: 21,
            toHit: 3
          }
        ]
      },
      {
        ac: 7,
        toHit: [
          {
            level: 1,
            toHit: 13
          },
          {
            level: 2,
            toHit: 13
          },
          {
            level: 3,
            toHit: 13
          },
          {
            level: 4,
            toHit: 11
          },
          {
            level: 5,
            toHit: 11
          },
          {
            level: 6,
            toHit: 11
          },
          {
            level: 7,
            toHit: 9
          },
          {
            level: 8,
            toHit: 9
          },
          {
            level: 9,
            toHit: 9
          },
          {
            level: 10,
            toHit: 7
          },
          {
            level: 11,
            toHit: 7
          },
          {
            level: 12,
            toHit: 7
          },
          {
            level: 13,
            toHit: 5
          },
          {
            level: 14,
            toHit: 5
          },
          {
            level: 15,
            toHit: 5
          },
          {
            level: 16,
            toHit: 3
          },
          {
            level: 17,
            toHit: 3
          },
          {
            level: 18,
            toHit: 3
          },
          {
            level: 19,
            toHit: 2
          },
          {
            level: 20,
            toHit: 2
          },
          {
            level: 21,
            toHit: 2
          }
        ]
      },
      {
        ac: 8,
        toHit: [
          {
            level: 1,
            toHit: 12
          },
          {
            level: 2,
            toHit: 12
          },
          {
            level: 3,
            toHit: 12
          },
          {
            level: 4,
            toHit: 10
          },
          {
            level: 5,
            toHit: 10
          },
          {
            level: 6,
            toHit: 10
          },
          {
            level: 7,
            toHit: 8
          },
          {
            level: 8,
            toHit: 8
          },
          {
            level: 9,
            toHit: 8
          },
          {
            level: 10,
            toHit: 6
          },
          {
            level: 11,
            toHit: 6
          },
          {
            level: 12,
            toHit: 6
          },
          {
            level: 13,
            toHit: 4
          },
          {
            level: 14,
            toHit: 4
          },
          {
            level: 15,
            toHit: 4
          },
          {
            level: 16,
            toHit: 2
          },
          {
            level: 17,
            toHit: 2
          },
          {
            level: 18,
            toHit: 2
          },
          {
            level: 19,
            toHit: 1
          },
          {
            level: 20,
            toHit: 1
          },
          {
            level: 21,
            toHit: 1
          }
        ]
      },
      {
        ac: 9,
        toHit: [
          {
            level: 1,
            toHit: 11
          },
          {
            level: 2,
            toHit: 11
          },
          {
            level: 3,
            toHit: 11
          },
          {
            level: 4,
            toHit: 9
          },
          {
            level: 5,
            toHit: 9
          },
          {
            level: 6,
            toHit: 9
          },
          {
            level: 7,
            toHit: 7
          },
          {
            level: 8,
            toHit: 7
          },
          {
            level: 9,
            toHit: 7
          },
          {
            level: 10,
            toHit: 5
          },
          {
            level: 11,
            toHit: 5
          },
          {
            level: 12,
            toHit: 5
          },
          {
            level: 13,
            toHit: 3
          },
          {
            level: 14,
            toHit: 3
          },
          {
            level: 15,
            toHit: 3
          },
          {
            level: 16,
            toHit: 1
          },
          {
            level: 17,
            toHit: 1
          },
          {
            level: 18,
            toHit: 1
          },
          {
            level: 19,
            toHit: 0
          },
          {
            level: 20,
            toHit: 0
          },
          {
            level: 21,
            toHit: 0
          }
        ]
      },
      {
        ac: 10,
        toHit: [
          {
            level: 1,
            toHit: 10
          },
          {
            level: 2,
            toHit: 10
          },
          {
            level: 3,
            toHit: 10
          },
          {
            level: 4,
            toHit: 8
          },
          {
            level: 5,
            toHit: 8
          },
          {
            level: 6,
            toHit: 8
          },
          {
            level: 7,
            toHit: 6
          },
          {
            level: 8,
            toHit: 6
          },
          {
            level: 9,
            toHit: 6
          },
          {
            level: 10,
            toHit: 4
          },
          {
            level: 11,
            toHit: 4
          },
          {
            level: 12,
            toHit: 4
          },
          {
            level: 13,
            toHit: 2
          },
          {
            level: 14,
            toHit: 2
          },
          {
            level: 15,
            toHit: 2
          },
          {
            level: 16,
            toHit: 0
          },
          {
            level: 17,
            toHit: 0
          },
          {
            level: 18,
            toHit: 0
          },
          {
            level: 19,
            toHit: -1
          },
          {
            level: 20,
            toHit: -1
          },
          {
            level: 21,
            toHit: -1
          }
        ]
      }
    ]
  },
  /*{
    class: [Race.HALFLING, Race.HUMAN],
    toHit: [
      {
        ac: -10,
        toHit: [
          {
            level: 0,
            toHit: 26
          }
        ]
      },
      {
        ac: -9,
        toHit: [
          {
            level: 0,
            toHit: 25
          }
        ]
      },
      {
        ac: -8,
        toHit: [
          {
            level: 0,
            toHit: 24
          }
        ]
      },
      {
        ac: -7,
        toHit: [
          {
            level: 0,
            toHit: 23
          }
        ]
      },
      {
        ac: -6,
        toHit: [
          {
            level: 0,
            toHit: 22
          }
        ]
      },
      {
        ac: -5,
        toHit: [
          {
            level: 0,
            toHit: 21
          }
        ]
      },
      {
        ac: -4,
        toHit: [
          {
            level: 0,
            toHit: 20
          }
        ]
      },
      {
        ac: -3,
        toHit: [
          {
            level: 0,
            toHit: 20
          }
        ]
      },
      {
        ac: -2,
        toHit: [
          {
            level: 0,
            toHit: 20
          }
        ]
      },
      {
        ac: -1,
        toHit: [
          {
            level: 0,
            toHit: 20
          }
        ]
      },
      {
        ac: 0,
        toHit: [
          {
            level: 0,
            toHit: 20
          }
        ]
      },
      {
        ac: 1,
        toHit: [
          {
            level: 0,
            toHit: 20
          }
        ]
      },
      {
        ac: 2,
        toHit: [
          {
            level: 0,
            toHit: 19
          }
        ]
      },
      {
        ac: 3,
        toHit: [
          {
            level: 0,
            toHit: 18
          }
        ]
      },
      {
        ac: 4,
        toHit: [
          {
            level: 0,
            toHit: 17
          }
        ]
      },
      {
        ac: 5,
        toHit: [
          {
            level: 0,
            toHit: 16
          }
        ]
      },
      {
        ac: 6,
        toHit: [
          {
            level: 0,
            toHit: 15
          }
        ]
      },
      {
        ac: 7,
        toHit: [
          {
            level: 0,
            toHit: 14
          }
        ]
      },
      {
        ac: 8,
        toHit: [
          {
            level: 0,
            toHit: 13
          }
        ]
      },
      {
        ac: 9,
        toHit: [
          {
            level: 0,
            toHit: 12
          }
        ]
      },
      {
        ac: 10,
        toHit: [
          {
            level: 0,
            toHit: 11
          }
        ]
      }
    ]
  },*/
  {
    class: [Class.FIGHTER, Class.PALADIN, Class.RANGER, Class.BARD],
    toHit: [
      {
        ac: -10,
        toHit: [
          {
            level: 1,
            toHit: 25
          },
          {
            level: 2,
            toHit: 25
          },
          {
            level: 3,
            toHit: 23
          },
          {
            level: 4,
            toHit: 23
          },
          {
            level: 5,
            toHit: 21
          },
          {
            level: 6,
            toHit: 21
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 18
          },
          {
            level: 14,
            toHit: 18
          },
          {
            level: 15,
            toHit: 16
          },
          {
            level: 16,
            toHit: 16
          },
          {
            level: 17,
            toHit: 14
          },
          {
            level: 18,
            toHit: 14
          },
          {
            level: 19,
            toHit: 14
          },
          {
            level: 20,
            toHit: 14
          },
          {
            level: 21,
            toHit: 14
          }
        ]
      },
      {
        ac: -9,
        toHit: [
          {
            level: 1,
            toHit: 24
          },
          {
            level: 2,
            toHit: 24
          },
          {
            level: 3,
            toHit: 22
          },
          {
            level: 4,
            toHit: 22
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 19
          },
          {
            level: 12,
            toHit: 19
          },
          {
            level: 13,
            toHit: 17
          },
          {
            level: 14,
            toHit: 17
          },
          {
            level: 15,
            toHit: 15
          },
          {
            level: 16,
            toHit: 15
          },
          {
            level: 17,
            toHit: 13
          },
          {
            level: 18,
            toHit: 13
          },
          {
            level: 19,
            toHit: 13
          },
          {
            level: 20,
            toHit: 13
          },
          {
            level: 21,
            toHit: 13
          }
        ]
      },
      {
        ac: -8,
        toHit: [
          {
            level: 1,
            toHit: 23
          },
          {
            level: 2,
            toHit: 23
          },
          {
            level: 3,
            toHit: 21
          },
          {
            level: 4,
            toHit: 21
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 18
          },
          {
            level: 12,
            toHit: 18
          },
          {
            level: 13,
            toHit: 16
          },
          {
            level: 14,
            toHit: 16
          },
          {
            level: 15,
            toHit: 14
          },
          {
            level: 16,
            toHit: 14
          },
          {
            level: 17,
            toHit: 12
          },
          {
            level: 18,
            toHit: 12
          },
          {
            level: 19,
            toHit: 12
          },
          {
            level: 20,
            toHit: 12
          },
          {
            level: 21,
            toHit: 12
          }
        ]
      },
      {
        ac: -7,
        toHit: [
          {
            level: 1,
            toHit: 22
          },
          {
            level: 2,
            toHit: 22
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 19
          },
          {
            level: 10,
            toHit: 19
          },
          {
            level: 11,
            toHit: 17
          },
          {
            level: 12,
            toHit: 17
          },
          {
            level: 13,
            toHit: 15
          },
          {
            level: 14,
            toHit: 15
          },
          {
            level: 15,
            toHit: 13
          },
          {
            level: 16,
            toHit: 13
          },
          {
            level: 17,
            toHit: 11
          },
          {
            level: 18,
            toHit: 11
          },
          {
            level: 19,
            toHit: 11
          },
          {
            level: 20,
            toHit: 11
          },
          {
            level: 21,
            toHit: 11
          }
        ]
      },
      {
        ac: -6,
        toHit: [
          {
            level: 1,
            toHit: 21
          },
          {
            level: 2,
            toHit: 21
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 18
          },
          {
            level: 10,
            toHit: 18
          },
          {
            level: 11,
            toHit: 16
          },
          {
            level: 12,
            toHit: 16
          },
          {
            level: 13,
            toHit: 14
          },
          {
            level: 14,
            toHit: 14
          },
          {
            level: 15,
            toHit: 12
          },
          {
            level: 16,
            toHit: 12
          },
          {
            level: 17,
            toHit: 10
          },
          {
            level: 18,
            toHit: 10
          },
          {
            level: 19,
            toHit: 10
          },
          {
            level: 20,
            toHit: 10
          },
          {
            level: 21,
            toHit: 10
          }
        ]
      },
      {
        ac: -5,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 19
          },
          {
            level: 8,
            toHit: 19
          },
          {
            level: 9,
            toHit: 17
          },
          {
            level: 10,
            toHit: 17
          },
          {
            level: 11,
            toHit: 15
          },
          {
            level: 12,
            toHit: 15
          },
          {
            level: 13,
            toHit: 13
          },
          {
            level: 14,
            toHit: 13
          },
          {
            level: 15,
            toHit: 11
          },
          {
            level: 16,
            toHit: 11
          },
          {
            level: 17,
            toHit: 9
          },
          {
            level: 18,
            toHit: 9
          },
          {
            level: 19,
            toHit: 9
          },
          {
            level: 20,
            toHit: 9
          },
          {
            level: 21,
            toHit: 9
          }
        ]
      },
      {
        ac: -4,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 18
          },
          {
            level: 8,
            toHit: 18
          },
          {
            level: 9,
            toHit: 16
          },
          {
            level: 10,
            toHit: 16
          },
          {
            level: 11,
            toHit: 14
          },
          {
            level: 12,
            toHit: 14
          },
          {
            level: 13,
            toHit: 12
          },
          {
            level: 14,
            toHit: 12
          },
          {
            level: 15,
            toHit: 10
          },
          {
            level: 16,
            toHit: 10
          },
          {
            level: 17,
            toHit: 8
          },
          {
            level: 18,
            toHit: 8
          },
          {
            level: 19,
            toHit: 8
          },
          {
            level: 20,
            toHit: 8
          },
          {
            level: 21,
            toHit: 8
          }
        ]
      },
      {
        ac: -3,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 19
          },
          {
            level: 6,
            toHit: 19
          },
          {
            level: 7,
            toHit: 17
          },
          {
            level: 8,
            toHit: 17
          },
          {
            level: 9,
            toHit: 15
          },
          {
            level: 10,
            toHit: 15
          },
          {
            level: 11,
            toHit: 13
          },
          {
            level: 12,
            toHit: 13
          },
          {
            level: 13,
            toHit: 11
          },
          {
            level: 14,
            toHit: 11
          },
          {
            level: 15,
            toHit: 9
          },
          {
            level: 16,
            toHit: 9
          },
          {
            level: 17,
            toHit: 7
          },
          {
            level: 18,
            toHit: 7
          },
          {
            level: 19,
            toHit: 7
          },
          {
            level: 20,
            toHit: 7
          },
          {
            level: 21,
            toHit: 7
          }
        ]
      },
      {
        ac: -2,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 18
          },
          {
            level: 6,
            toHit: 18
          },
          {
            level: 7,
            toHit: 16
          },
          {
            level: 8,
            toHit: 16
          },
          {
            level: 9,
            toHit: 14
          },
          {
            level: 10,
            toHit: 14
          },
          {
            level: 11,
            toHit: 12
          },
          {
            level: 12,
            toHit: 12
          },
          {
            level: 13,
            toHit: 10
          },
          {
            level: 14,
            toHit: 10
          },
          {
            level: 15,
            toHit: 8
          },
          {
            level: 16,
            toHit: 8
          },
          {
            level: 17,
            toHit: 6
          },
          {
            level: 18,
            toHit: 6
          },
          {
            level: 19,
            toHit: 6
          },
          {
            level: 20,
            toHit: 6
          },
          {
            level: 21,
            toHit: 6
          }
        ]
      },
      {
        ac: -1,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 19
          },
          {
            level: 4,
            toHit: 19
          },
          {
            level: 5,
            toHit: 17
          },
          {
            level: 6,
            toHit: 17
          },
          {
            level: 7,
            toHit: 15
          },
          {
            level: 8,
            toHit: 15
          },
          {
            level: 9,
            toHit: 13
          },
          {
            level: 10,
            toHit: 13
          },
          {
            level: 11,
            toHit: 11
          },
          {
            level: 12,
            toHit: 11
          },
          {
            level: 13,
            toHit: 9
          },
          {
            level: 14,
            toHit: 9
          },
          {
            level: 15,
            toHit: 7
          },
          {
            level: 16,
            toHit: 7
          },
          {
            level: 17,
            toHit: 5
          },
          {
            level: 18,
            toHit: 5
          },
          {
            level: 19,
            toHit: 5
          },
          {
            level: 20,
            toHit: 5
          },
          {
            level: 21,
            toHit: 5
          }
        ]
      },
      {
        ac: 0,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 18
          },
          {
            level: 4,
            toHit: 18
          },
          {
            level: 5,
            toHit: 16
          },
          {
            level: 6,
            toHit: 16
          },
          {
            level: 7,
            toHit: 14
          },
          {
            level: 8,
            toHit: 14
          },
          {
            level: 9,
            toHit: 12
          },
          {
            level: 10,
            toHit: 12
          },
          {
            level: 11,
            toHit: 10
          },
          {
            level: 12,
            toHit: 10
          },
          {
            level: 13,
            toHit: 8
          },
          {
            level: 14,
            toHit: 8
          },
          {
            level: 15,
            toHit: 6
          },
          {
            level: 16,
            toHit: 6
          },
          {
            level: 17,
            toHit: 4
          },
          {
            level: 18,
            toHit: 4
          },
          {
            level: 19,
            toHit: 4
          },
          {
            level: 20,
            toHit: 4
          },
          {
            level: 21,
            toHit: 4
          }
        ]
      },
      {
        ac: 1,
        toHit: [
          {
            level: 1,
            toHit: 19
          },
          {
            level: 2,
            toHit: 19
          },
          {
            level: 3,
            toHit: 17
          },
          {
            level: 4,
            toHit: 17
          },
          {
            level: 5,
            toHit: 15
          },
          {
            level: 6,
            toHit: 15
          },
          {
            level: 7,
            toHit: 13
          },
          {
            level: 8,
            toHit: 13
          },
          {
            level: 9,
            toHit: 11
          },
          {
            level: 10,
            toHit: 11
          },
          {
            level: 11,
            toHit: 9
          },
          {
            level: 12,
            toHit: 9
          },
          {
            level: 13,
            toHit: 7
          },
          {
            level: 14,
            toHit: 7
          },
          {
            level: 15,
            toHit: 5
          },
          {
            level: 16,
            toHit: 5
          },
          {
            level: 17,
            toHit: 3
          },
          {
            level: 18,
            toHit: 3
          },
          {
            level: 19,
            toHit: 3
          },
          {
            level: 20,
            toHit: 3
          },
          {
            level: 21,
            toHit: 3
          }
        ]
      },
      {
        ac: 2,
        toHit: [
          {
            level: 1,
            toHit: 18
          },
          {
            level: 2,
            toHit: 18
          },
          {
            level: 3,
            toHit: 16
          },
          {
            level: 4,
            toHit: 16
          },
          {
            level: 5,
            toHit: 14
          },
          {
            level: 6,
            toHit: 14
          },
          {
            level: 7,
            toHit: 12
          },
          {
            level: 8,
            toHit: 12
          },
          {
            level: 9,
            toHit: 10
          },
          {
            level: 10,
            toHit: 10
          },
          {
            level: 11,
            toHit: 8
          },
          {
            level: 12,
            toHit: 8
          },
          {
            level: 13,
            toHit: 6
          },
          {
            level: 14,
            toHit: 6
          },
          {
            level: 15,
            toHit: 4
          },
          {
            level: 16,
            toHit: 4
          },
          {
            level: 17,
            toHit: 2
          },
          {
            level: 18,
            toHit: 2
          },
          {
            level: 19,
            toHit: 2
          },
          {
            level: 20,
            toHit: 2
          },
          {
            level: 21,
            toHit: 2
          }
        ]
      },
      {
        ac: 3,
        toHit: [
          {
            level: 1,
            toHit: 17
          },
          {
            level: 2,
            toHit: 17
          },
          {
            level: 3,
            toHit: 15
          },
          {
            level: 4,
            toHit: 15
          },
          {
            level: 5,
            toHit: 13
          },
          {
            level: 6,
            toHit: 13
          },
          {
            level: 7,
            toHit: 11
          },
          {
            level: 8,
            toHit: 11
          },
          {
            level: 9,
            toHit: 9
          },
          {
            level: 10,
            toHit: 9
          },
          {
            level: 11,
            toHit: 7
          },
          {
            level: 12,
            toHit: 7
          },
          {
            level: 13,
            toHit: 5
          },
          {
            level: 14,
            toHit: 5
          },
          {
            level: 15,
            toHit: 3
          },
          {
            level: 16,
            toHit: 3
          },
          {
            level: 17,
            toHit: 1
          },
          {
            level: 18,
            toHit: 1
          },
          {
            level: 19,
            toHit: 1
          },
          {
            level: 20,
            toHit: 1
          },
          {
            level: 21,
            toHit: 1
          }
        ]
      },
      {
        ac: 4,
        toHit: [
          {
            level: 1,
            toHit: 16
          },
          {
            level: 2,
            toHit: 16
          },
          {
            level: 3,
            toHit: 14
          },
          {
            level: 4,
            toHit: 14
          },
          {
            level: 5,
            toHit: 12
          },
          {
            level: 6,
            toHit: 12
          },
          {
            level: 7,
            toHit: 10
          },
          {
            level: 8,
            toHit: 10
          },
          {
            level: 9,
            toHit: 8
          },
          {
            level: 10,
            toHit: 8
          },
          {
            level: 11,
            toHit: 6
          },
          {
            level: 12,
            toHit: 6
          },
          {
            level: 13,
            toHit: 4
          },
          {
            level: 14,
            toHit: 4
          },
          {
            level: 15,
            toHit: 2
          },
          {
            level: 16,
            toHit: 2
          },
          {
            level: 17,
            toHit: 0
          },
          {
            level: 18,
            toHit: 0
          },
          {
            level: 19,
            toHit: 0
          },
          {
            level: 20,
            toHit: 0
          },
          {
            level: 21,
            toHit: 0
          }
        ]
      },
      {
        ac: 5,
        toHit: [
          {
            level: 1,
            toHit: 15
          },
          {
            level: 2,
            toHit: 15
          },
          {
            level: 3,
            toHit: 13
          },
          {
            level: 4,
            toHit: 13
          },
          {
            level: 5,
            toHit: 11
          },
          {
            level: 6,
            toHit: 11
          },
          {
            level: 7,
            toHit: 9
          },
          {
            level: 8,
            toHit: 9
          },
          {
            level: 9,
            toHit: 7
          },
          {
            level: 10,
            toHit: 7
          },
          {
            level: 11,
            toHit: 5
          },
          {
            level: 12,
            toHit: 5
          },
          {
            level: 13,
            toHit: 3
          },
          {
            level: 14,
            toHit: 3
          },
          {
            level: 15,
            toHit: 1
          },
          {
            level: 16,
            toHit: 1
          },
          {
            level: 17,
            toHit: -1
          },
          {
            level: 18,
            toHit: -1
          },
          {
            level: 19,
            toHit: -1
          },
          {
            level: 20,
            toHit: -1
          },
          {
            level: 21,
            toHit: -1
          }
        ]
      },
      {
        ac: 6,
        toHit: [
          {
            level: 1,
            toHit: 14
          },
          {
            level: 2,
            toHit: 14
          },
          {
            level: 3,
            toHit: 12
          },
          {
            level: 4,
            toHit: 12
          },
          {
            level: 5,
            toHit: 10
          },
          {
            level: 6,
            toHit: 10
          },
          {
            level: 7,
            toHit: 8
          },
          {
            level: 8,
            toHit: 8
          },
          {
            level: 9,
            toHit: 6
          },
          {
            level: 10,
            toHit: 6
          },
          {
            level: 11,
            toHit: 4
          },
          {
            level: 12,
            toHit: 4
          },
          {
            level: 13,
            toHit: 2
          },
          {
            level: 14,
            toHit: 2
          },
          {
            level: 15,
            toHit: 0
          },
          {
            level: 16,
            toHit: 0
          },
          {
            level: 17,
            toHit: -2
          },
          {
            level: 18,
            toHit: -2
          },
          {
            level: 19,
            toHit: -2
          },
          {
            level: 20,
            toHit: -2
          },
          {
            level: 21,
            toHit: -2
          }
        ]
      },
      {
        ac: 7,
        toHit: [
          {
            level: 1,
            toHit: 13
          },
          {
            level: 2,
            toHit: 13
          },
          {
            level: 3,
            toHit: 11
          },
          {
            level: 4,
            toHit: 11
          },
          {
            level: 5,
            toHit: 9
          },
          {
            level: 6,
            toHit: 9
          },
          {
            level: 7,
            toHit: 7
          },
          {
            level: 8,
            toHit: 7
          },
          {
            level: 9,
            toHit: 5
          },
          {
            level: 10,
            toHit: 5
          },
          {
            level: 11,
            toHit: 3
          },
          {
            level: 12,
            toHit: 3
          },
          {
            level: 13,
            toHit: 1
          },
          {
            level: 14,
            toHit: 1
          },
          {
            level: 15,
            toHit: -1
          },
          {
            level: 16,
            toHit: -1
          },
          {
            level: 17,
            toHit: -3
          },
          {
            level: 18,
            toHit: -3
          },
          {
            level: 19,
            toHit: -3
          },
          {
            level: 20,
            toHit: -3
          },
          {
            level: 21,
            toHit: -3
          }
        ]
      },
      {
        ac: 8,
        toHit: [
          {
            level: 1,
            toHit: 12
          },
          {
            level: 2,
            toHit: 12
          },
          {
            level: 3,
            toHit: 10
          },
          {
            level: 4,
            toHit: 10
          },
          {
            level: 5,
            toHit: 8
          },
          {
            level: 6,
            toHit: 8
          },
          {
            level: 7,
            toHit: 6
          },
          {
            level: 8,
            toHit: 6
          },
          {
            level: 9,
            toHit: 4
          },
          {
            level: 10,
            toHit: 4
          },
          {
            level: 11,
            toHit: 2
          },
          {
            level: 12,
            toHit: 2
          },
          {
            level: 13,
            toHit: 0
          },
          {
            level: 14,
            toHit: 0
          },
          {
            level: 15,
            toHit: -2
          },
          {
            level: 16,
            toHit: -2
          },
          {
            level: 17,
            toHit: -4
          },
          {
            level: 18,
            toHit: -4
          },
          {
            level: 19,
            toHit: -4
          },
          {
            level: 20,
            toHit: -4
          },
          {
            level: 21,
            toHit: -4
          }
        ]
      },
      {
        ac: 9,
        toHit: [
          {
            level: 1,
            toHit: 11
          },
          {
            level: 2,
            toHit: 11
          },
          {
            level: 3,
            toHit: 9
          },
          {
            level: 4,
            toHit: 9
          },
          {
            level: 5,
            toHit: 7
          },
          {
            level: 6,
            toHit: 7
          },
          {
            level: 7,
            toHit: 5
          },
          {
            level: 8,
            toHit: 5
          },
          {
            level: 9,
            toHit: 3
          },
          {
            level: 10,
            toHit: 3
          },
          {
            level: 11,
            toHit: 1
          },
          {
            level: 12,
            toHit: 1
          },
          {
            level: 13,
            toHit: -1
          },
          {
            level: 14,
            toHit: -1
          },
          {
            level: 15,
            toHit: -3
          },
          {
            level: 16,
            toHit: -3
          },
          {
            level: 17,
            toHit: -5
          },
          {
            level: 18,
            toHit: -5
          },
          {
            level: 19,
            toHit: -5
          },
          {
            level: 20,
            toHit: -5
          },
          {
            level: 21,
            toHit: -5
          }
        ]
      },
      {
        ac: 10,
        toHit: [
          {
            level: 1,
            toHit: 10
          },
          {
            level: 2,
            toHit: 10
          },
          {
            level: 3,
            toHit: 8
          },
          {
            level: 4,
            toHit: 8
          },
          {
            level: 5,
            toHit: 6
          },
          {
            level: 6,
            toHit: 6
          },
          {
            level: 7,
            toHit: 4
          },
          {
            level: 8,
            toHit: 4
          },
          {
            level: 9,
            toHit: 2
          },
          {
            level: 10,
            toHit: 2
          },
          {
            level: 11,
            toHit: 0
          },
          {
            level: 12,
            toHit: 0
          },
          {
            level: 13,
            toHit: -2
          },
          {
            level: 14,
            toHit: -2
          },
          {
            level: 15,
            toHit: -4
          },
          {
            level: 16,
            toHit: -4
          },
          {
            level: 17,
            toHit: -6
          },
          {
            level: 18,
            toHit: -6
          },
          {
            level: 19,
            toHit: -6
          },
          {
            level: 20,
            toHit: -6
          },
          {
            level: 21,
            toHit: -6
          }
        ]
      }
    ]
  },
  {
    class: [Class.MAGICUSER, Class.ILLUSIONIST],
    toHit: [
      {
        ac: -10,
        toHit: [
          {
            level: 1,
            toHit: 26
          },
          {
            level: 2,
            toHit: 26
          },
          {
            level: 3,
            toHit: 26
          },
          {
            level: 4,
            toHit: 26
          },
          {
            level: 5,
            toHit: 26
          },
          {
            level: 6,
            toHit: 24
          },
          {
            level: 7,
            toHit: 24
          },
          {
            level: 8,
            toHit: 24
          },
          {
            level: 9,
            toHit: 24
          },
          {
            level: 10,
            toHit: 24
          },
          {
            level: 11,
            toHit: 21
          },
          {
            level: 12,
            toHit: 21
          },
          {
            level: 13,
            toHit: 21
          },
          {
            level: 14,
            toHit: 21
          },
          {
            level: 15,
            toHit: 21
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 20
          },
          {
            level: 18,
            toHit: 20
          },
          {
            level: 19,
            toHit: 20
          },
          {
            level: 20,
            toHit: 20
          },
          {
            level: 21,
            toHit: 20
          }
        ]
      },
      {
        ac: -9,
        toHit: [
          {
            level: 1,
            toHit: 25
          },
          {
            level: 2,
            toHit: 25
          },
          {
            level: 3,
            toHit: 25
          },
          {
            level: 4,
            toHit: 25
          },
          {
            level: 5,
            toHit: 25
          },
          {
            level: 6,
            toHit: 23
          },
          {
            level: 7,
            toHit: 23
          },
          {
            level: 8,
            toHit: 23
          },
          {
            level: 9,
            toHit: 23
          },
          {
            level: 10,
            toHit: 23
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 20
          },
          {
            level: 18,
            toHit: 20
          },
          {
            level: 19,
            toHit: 20
          },
          {
            level: 20,
            toHit: 20
          },
          {
            level: 21,
            toHit: 20
          }
        ]
      },
      {
        ac: -8,
        toHit: [
          {
            level: 1,
            toHit: 24
          },
          {
            level: 2,
            toHit: 24
          },
          {
            level: 3,
            toHit: 24
          },
          {
            level: 4,
            toHit: 24
          },
          {
            level: 5,
            toHit: 24
          },
          {
            level: 6,
            toHit: 22
          },
          {
            level: 7,
            toHit: 22
          },
          {
            level: 8,
            toHit: 22
          },
          {
            level: 9,
            toHit: 22
          },
          {
            level: 10,
            toHit: 22
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 20
          },
          {
            level: 18,
            toHit: 20
          },
          {
            level: 19,
            toHit: 20
          },
          {
            level: 20,
            toHit: 20
          },
          {
            level: 21,
            toHit: 19
          }
        ]
      },
      {
        ac: -7,
        toHit: [
          {
            level: 1,
            toHit: 23
          },
          {
            level: 2,
            toHit: 23
          },
          {
            level: 3,
            toHit: 23
          },
          {
            level: 4,
            toHit: 23
          },
          {
            level: 5,
            toHit: 23
          },
          {
            level: 6,
            toHit: 21
          },
          {
            level: 7,
            toHit: 21
          },
          {
            level: 8,
            toHit: 21
          },
          {
            level: 9,
            toHit: 21
          },
          {
            level: 10,
            toHit: 21
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 20
          },
          {
            level: 18,
            toHit: 20
          },
          {
            level: 19,
            toHit: 20
          },
          {
            level: 20,
            toHit: 20
          },
          {
            level: 21,
            toHit: 18
          }
        ]
      },
      {
        ac: -6,
        toHit: [
          {
            level: 1,
            toHit: 22
          },
          {
            level: 2,
            toHit: 22
          },
          {
            level: 3,
            toHit: 22
          },
          {
            level: 4,
            toHit: 22
          },
          {
            level: 5,
            toHit: 22
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 19
          },
          {
            level: 17,
            toHit: 19
          },
          {
            level: 18,
            toHit: 19
          },
          {
            level: 19,
            toHit: 19
          },
          {
            level: 20,
            toHit: 19
          },
          {
            level: 21,
            toHit: 17
          }
        ]
      },
      {
        ac: -5,
        toHit: [
          {
            level: 1,
            toHit: 21
          },
          {
            level: 2,
            toHit: 21
          },
          {
            level: 3,
            toHit: 21
          },
          {
            level: 4,
            toHit: 21
          },
          {
            level: 5,
            toHit: 21
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 18
          },
          {
            level: 17,
            toHit: 18
          },
          {
            level: 18,
            toHit: 18
          },
          {
            level: 19,
            toHit: 18
          },
          {
            level: 20,
            toHit: 18
          },
          {
            level: 21,
            toHit: 16
          }
        ]
      },
      {
        ac: -4,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 17
          },
          {
            level: 17,
            toHit: 17
          },
          {
            level: 18,
            toHit: 17
          },
          {
            level: 19,
            toHit: 17
          },
          {
            level: 20,
            toHit: 17
          },
          {
            level: 21,
            toHit: 15
          }
        ]
      },
      {
        ac: -3,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 19
          },
          {
            level: 12,
            toHit: 19
          },
          {
            level: 13,
            toHit: 19
          },
          {
            level: 14,
            toHit: 19
          },
          {
            level: 15,
            toHit: 19
          },
          {
            level: 16,
            toHit: 16
          },
          {
            level: 17,
            toHit: 16
          },
          {
            level: 18,
            toHit: 16
          },
          {
            level: 19,
            toHit: 16
          },
          {
            level: 20,
            toHit: 16
          },
          {
            level: 21,
            toHit: 14
          }
        ]
      },
      {
        ac: -2,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 18
          },
          {
            level: 12,
            toHit: 18
          },
          {
            level: 13,
            toHit: 18
          },
          {
            level: 14,
            toHit: 18
          },
          {
            level: 15,
            toHit: 18
          },
          {
            level: 16,
            toHit: 15
          },
          {
            level: 17,
            toHit: 15
          },
          {
            level: 18,
            toHit: 15
          },
          {
            level: 19,
            toHit: 15
          },
          {
            level: 20,
            toHit: 15
          },
          {
            level: 21,
            toHit: 13
          }
        ]
      },
      {
        ac: -1,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 17
          },
          {
            level: 12,
            toHit: 17
          },
          {
            level: 13,
            toHit: 17
          },
          {
            level: 14,
            toHit: 17
          },
          {
            level: 15,
            toHit: 17
          },
          {
            level: 16,
            toHit: 14
          },
          {
            level: 17,
            toHit: 14
          },
          {
            level: 18,
            toHit: 14
          },
          {
            level: 19,
            toHit: 14
          },
          {
            level: 20,
            toHit: 14
          },
          {
            level: 21,
            toHit: 12
          }
        ]
      },
      {
        ac: 0,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 19
          },
          {
            level: 7,
            toHit: 19
          },
          {
            level: 8,
            toHit: 19
          },
          {
            level: 9,
            toHit: 19
          },
          {
            level: 10,
            toHit: 19
          },
          {
            level: 11,
            toHit: 16
          },
          {
            level: 12,
            toHit: 16
          },
          {
            level: 13,
            toHit: 16
          },
          {
            level: 14,
            toHit: 16
          },
          {
            level: 15,
            toHit: 16
          },
          {
            level: 16,
            toHit: 13
          },
          {
            level: 17,
            toHit: 13
          },
          {
            level: 18,
            toHit: 13
          },
          {
            level: 19,
            toHit: 13
          },
          {
            level: 20,
            toHit: 13
          },
          {
            level: 21,
            toHit: 11
          }
        ]
      },
      {
        ac: 1,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 18
          },
          {
            level: 7,
            toHit: 18
          },
          {
            level: 8,
            toHit: 18
          },
          {
            level: 9,
            toHit: 18
          },
          {
            level: 10,
            toHit: 18
          },
          {
            level: 11,
            toHit: 15
          },
          {
            level: 12,
            toHit: 15
          },
          {
            level: 13,
            toHit: 15
          },
          {
            level: 14,
            toHit: 15
          },
          {
            level: 15,
            toHit: 15
          },
          {
            level: 16,
            toHit: 12
          },
          {
            level: 17,
            toHit: 12
          },
          {
            level: 18,
            toHit: 12
          },
          {
            level: 19,
            toHit: 12
          },
          {
            level: 20,
            toHit: 12
          },
          {
            level: 21,
            toHit: 10
          }
        ]
      },
      {
        ac: 2,
        toHit: [
          {
            level: 1,
            toHit: 19
          },
          {
            level: 2,
            toHit: 19
          },
          {
            level: 3,
            toHit: 19
          },
          {
            level: 4,
            toHit: 19
          },
          {
            level: 5,
            toHit: 19
          },
          {
            level: 6,
            toHit: 17
          },
          {
            level: 7,
            toHit: 17
          },
          {
            level: 8,
            toHit: 17
          },
          {
            level: 9,
            toHit: 17
          },
          {
            level: 10,
            toHit: 17
          },
          {
            level: 11,
            toHit: 14
          },
          {
            level: 12,
            toHit: 14
          },
          {
            level: 13,
            toHit: 14
          },
          {
            level: 14,
            toHit: 14
          },
          {
            level: 15,
            toHit: 14
          },
          {
            level: 16,
            toHit: 11
          },
          {
            level: 17,
            toHit: 11
          },
          {
            level: 18,
            toHit: 11
          },
          {
            level: 19,
            toHit: 11
          },
          {
            level: 20,
            toHit: 11
          },
          {
            level: 21,
            toHit: 9
          }
        ]
      },
      {
        ac: 3,
        toHit: [
          {
            level: 1,
            toHit: 18
          },
          {
            level: 2,
            toHit: 18
          },
          {
            level: 3,
            toHit: 18
          },
          {
            level: 4,
            toHit: 18
          },
          {
            level: 5,
            toHit: 18
          },
          {
            level: 6,
            toHit: 16
          },
          {
            level: 7,
            toHit: 16
          },
          {
            level: 8,
            toHit: 16
          },
          {
            level: 9,
            toHit: 16
          },
          {
            level: 10,
            toHit: 16
          },
          {
            level: 11,
            toHit: 13
          },
          {
            level: 12,
            toHit: 13
          },
          {
            level: 13,
            toHit: 13
          },
          {
            level: 14,
            toHit: 13
          },
          {
            level: 15,
            toHit: 13
          },
          {
            level: 16,
            toHit: 10
          },
          {
            level: 17,
            toHit: 10
          },
          {
            level: 18,
            toHit: 10
          },
          {
            level: 19,
            toHit: 10
          },
          {
            level: 20,
            toHit: 10
          },
          {
            level: 21,
            toHit: 8
          }
        ]
      },
      {
        ac: 4,
        toHit: [
          {
            level: 1,
            toHit: 17
          },
          {
            level: 2,
            toHit: 17
          },
          {
            level: 3,
            toHit: 17
          },
          {
            level: 4,
            toHit: 17
          },
          {
            level: 5,
            toHit: 17
          },
          {
            level: 6,
            toHit: 15
          },
          {
            level: 7,
            toHit: 15
          },
          {
            level: 8,
            toHit: 15
          },
          {
            level: 9,
            toHit: 15
          },
          {
            level: 10,
            toHit: 15
          },
          {
            level: 11,
            toHit: 12
          },
          {
            level: 12,
            toHit: 12
          },
          {
            level: 13,
            toHit: 12
          },
          {
            level: 14,
            toHit: 12
          },
          {
            level: 15,
            toHit: 12
          },
          {
            level: 16,
            toHit: 9
          },
          {
            level: 17,
            toHit: 9
          },
          {
            level: 18,
            toHit: 9
          },
          {
            level: 19,
            toHit: 9
          },
          {
            level: 20,
            toHit: 9
          },
          {
            level: 21,
            toHit: 7
          }
        ]
      },
      {
        ac: 5,
        toHit: [
          {
            level: 1,
            toHit: 16
          },
          {
            level: 2,
            toHit: 16
          },
          {
            level: 3,
            toHit: 16
          },
          {
            level: 4,
            toHit: 16
          },
          {
            level: 5,
            toHit: 16
          },
          {
            level: 6,
            toHit: 14
          },
          {
            level: 7,
            toHit: 14
          },
          {
            level: 8,
            toHit: 14
          },
          {
            level: 9,
            toHit: 14
          },
          {
            level: 10,
            toHit: 14
          },
          {
            level: 11,
            toHit: 11
          },
          {
            level: 12,
            toHit: 11
          },
          {
            level: 13,
            toHit: 11
          },
          {
            level: 14,
            toHit: 11
          },
          {
            level: 15,
            toHit: 11
          },
          {
            level: 16,
            toHit: 8
          },
          {
            level: 17,
            toHit: 8
          },
          {
            level: 18,
            toHit: 8
          },
          {
            level: 19,
            toHit: 8
          },
          {
            level: 20,
            toHit: 8
          },
          {
            level: 21,
            toHit: 6
          }
        ]
      },
      {
        ac: 6,
        toHit: [
          {
            level: 1,
            toHit: 15
          },
          {
            level: 2,
            toHit: 15
          },
          {
            level: 3,
            toHit: 15
          },
          {
            level: 4,
            toHit: 15
          },
          {
            level: 5,
            toHit: 15
          },
          {
            level: 6,
            toHit: 13
          },
          {
            level: 7,
            toHit: 13
          },
          {
            level: 8,
            toHit: 13
          },
          {
            level: 9,
            toHit: 13
          },
          {
            level: 10,
            toHit: 13
          },
          {
            level: 11,
            toHit: 10
          },
          {
            level: 12,
            toHit: 10
          },
          {
            level: 13,
            toHit: 10
          },
          {
            level: 14,
            toHit: 10
          },
          {
            level: 15,
            toHit: 10
          },
          {
            level: 16,
            toHit: 7
          },
          {
            level: 17,
            toHit: 7
          },
          {
            level: 18,
            toHit: 7
          },
          {
            level: 19,
            toHit: 7
          },
          {
            level: 20,
            toHit: 7
          },
          {
            level: 21,
            toHit: 5
          }
        ]
      },
      {
        ac: 7,
        toHit: [
          {
            level: 1,
            toHit: 14
          },
          {
            level: 2,
            toHit: 14
          },
          {
            level: 3,
            toHit: 14
          },
          {
            level: 4,
            toHit: 14
          },
          {
            level: 5,
            toHit: 14
          },
          {
            level: 6,
            toHit: 12
          },
          {
            level: 7,
            toHit: 12
          },
          {
            level: 8,
            toHit: 12
          },
          {
            level: 9,
            toHit: 12
          },
          {
            level: 10,
            toHit: 12
          },
          {
            level: 11,
            toHit: 9
          },
          {
            level: 12,
            toHit: 9
          },
          {
            level: 13,
            toHit: 9
          },
          {
            level: 14,
            toHit: 9
          },
          {
            level: 15,
            toHit: 9
          },
          {
            level: 16,
            toHit: 6
          },
          {
            level: 17,
            toHit: 6
          },
          {
            level: 18,
            toHit: 6
          },
          {
            level: 19,
            toHit: 6
          },
          {
            level: 20,
            toHit: 6
          },
          {
            level: 21,
            toHit: 4
          }
        ]
      },
      {
        ac: 8,
        toHit: [
          {
            level: 1,
            toHit: 13
          },
          {
            level: 2,
            toHit: 13
          },
          {
            level: 3,
            toHit: 13
          },
          {
            level: 4,
            toHit: 13
          },
          {
            level: 5,
            toHit: 13
          },
          {
            level: 6,
            toHit: 11
          },
          {
            level: 7,
            toHit: 11
          },
          {
            level: 8,
            toHit: 11
          },
          {
            level: 9,
            toHit: 11
          },
          {
            level: 10,
            toHit: 11
          },
          {
            level: 11,
            toHit: 8
          },
          {
            level: 12,
            toHit: 8
          },
          {
            level: 13,
            toHit: 8
          },
          {
            level: 14,
            toHit: 8
          },
          {
            level: 15,
            toHit: 8
          },
          {
            level: 16,
            toHit: 5
          },
          {
            level: 17,
            toHit: 5
          },
          {
            level: 18,
            toHit: 5
          },
          {
            level: 19,
            toHit: 5
          },
          {
            level: 20,
            toHit: 5
          },
          {
            level: 21,
            toHit: 3
          }
        ]
      },
      {
        ac: 9,
        toHit: [
          {
            level: 1,
            toHit: 12
          },
          {
            level: 2,
            toHit: 12
          },
          {
            level: 3,
            toHit: 12
          },
          {
            level: 4,
            toHit: 12
          },
          {
            level: 5,
            toHit: 12
          },
          {
            level: 6,
            toHit: 10
          },
          {
            level: 7,
            toHit: 10
          },
          {
            level: 8,
            toHit: 10
          },
          {
            level: 9,
            toHit: 10
          },
          {
            level: 10,
            toHit: 10
          },
          {
            level: 11,
            toHit: 7
          },
          {
            level: 12,
            toHit: 7
          },
          {
            level: 13,
            toHit: 7
          },
          {
            level: 14,
            toHit: 7
          },
          {
            level: 15,
            toHit: 7
          },
          {
            level: 16,
            toHit: 4
          },
          {
            level: 17,
            toHit: 4
          },
          {
            level: 18,
            toHit: 4
          },
          {
            level: 19,
            toHit: 4
          },
          {
            level: 20,
            toHit: 4
          },
          {
            level: 21,
            toHit: 2
          }
        ]
      },
      {
        ac: 10,
        toHit: [
          {
            level: 1,
            toHit: 11
          },
          {
            level: 2,
            toHit: 11
          },
          {
            level: 3,
            toHit: 11
          },
          {
            level: 4,
            toHit: 11
          },
          {
            level: 5,
            toHit: 11
          },
          {
            level: 6,
            toHit: 9
          },
          {
            level: 7,
            toHit: 9
          },
          {
            level: 8,
            toHit: 9
          },
          {
            level: 9,
            toHit: 9
          },
          {
            level: 10,
            toHit: 9
          },
          {
            level: 11,
            toHit: 6
          },
          {
            level: 12,
            toHit: 6
          },
          {
            level: 13,
            toHit: 6
          },
          {
            level: 14,
            toHit: 6
          },
          {
            level: 15,
            toHit: 6
          },
          {
            level: 16,
            toHit: 3
          },
          {
            level: 17,
            toHit: 3
          },
          {
            level: 18,
            toHit: 3
          },
          {
            level: 19,
            toHit: 3
          },
          {
            level: 20,
            toHit: 3
          },
          {
            level: 21,
            toHit: 1
          }
        ]
      }
    ]
  },
  {
    class: [Class.THIEF, Class.ASSASSIN],
    toHit: [
      {
        ac: -10,
        toHit: [
          {
            level: 1,
            toHit: 26
          },
          {
            level: 2,
            toHit: 26
          },
          {
            level: 3,
            toHit: 26
          },
          {
            level: 4,
            toHit: 26
          },
          {
            level: 5,
            toHit: 24
          },
          {
            level: 6,
            toHit: 24
          },
          {
            level: 7,
            toHit: 24
          },
          {
            level: 8,
            toHit: 24
          },
          {
            level: 9,
            toHit: 21
          },
          {
            level: 10,
            toHit: 21
          },
          {
            level: 11,
            toHit: 21
          },
          {
            level: 12,
            toHit: 21
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 20
          },
          {
            level: 18,
            toHit: 20
          },
          {
            level: 19,
            toHit: 20
          },
          {
            level: 20,
            toHit: 20
          },
          {
            level: 21,
            toHit: 20
          }
        ]
      },
      {
        ac: -9,
        toHit: [
          {
            level: 1,
            toHit: 25
          },
          {
            level: 2,
            toHit: 25
          },
          {
            level: 3,
            toHit: 25
          },
          {
            level: 4,
            toHit: 25
          },
          {
            level: 5,
            toHit: 23
          },
          {
            level: 6,
            toHit: 23
          },
          {
            level: 7,
            toHit: 23
          },
          {
            level: 8,
            toHit: 23
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 20
          },
          {
            level: 18,
            toHit: 20
          },
          {
            level: 19,
            toHit: 20
          },
          {
            level: 20,
            toHit: 20
          },
          {
            level: 21,
            toHit: 19
          }
        ]
      },
      {
        ac: -8,
        toHit: [
          {
            level: 1,
            toHit: 24
          },
          {
            level: 2,
            toHit: 24
          },
          {
            level: 3,
            toHit: 24
          },
          {
            level: 4,
            toHit: 24
          },
          {
            level: 5,
            toHit: 22
          },
          {
            level: 6,
            toHit: 22
          },
          {
            level: 7,
            toHit: 22
          },
          {
            level: 8,
            toHit: 22
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 20
          },
          {
            level: 18,
            toHit: 20
          },
          {
            level: 19,
            toHit: 20
          },
          {
            level: 20,
            toHit: 20
          },
          {
            level: 21,
            toHit: 18
          }
        ]
      },
      {
        ac: -7,
        toHit: [
          {
            level: 1,
            toHit: 23
          },
          {
            level: 2,
            toHit: 23
          },
          {
            level: 3,
            toHit: 23
          },
          {
            level: 4,
            toHit: 23
          },
          {
            level: 5,
            toHit: 21
          },
          {
            level: 6,
            toHit: 21
          },
          {
            level: 7,
            toHit: 21
          },
          {
            level: 8,
            toHit: 21
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 19
          },
          {
            level: 18,
            toHit: 19
          },
          {
            level: 19,
            toHit: 19
          },
          {
            level: 20,
            toHit: 19
          },
          {
            level: 21,
            toHit: 17
          }
        ]
      },
      {
        ac: -6,
        toHit: [
          {
            level: 1,
            toHit: 22
          },
          {
            level: 2,
            toHit: 22
          },
          {
            level: 3,
            toHit: 22
          },
          {
            level: 4,
            toHit: 22
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 20
          },
          {
            level: 14,
            toHit: 20
          },
          {
            level: 15,
            toHit: 20
          },
          {
            level: 16,
            toHit: 20
          },
          {
            level: 17,
            toHit: 18
          },
          {
            level: 18,
            toHit: 18
          },
          {
            level: 19,
            toHit: 18
          },
          {
            level: 20,
            toHit: 18
          },
          {
            level: 21,
            toHit: 16
          }
        ]
      },
      {
        ac: -5,
        toHit: [
          {
            level: 1,
            toHit: 21
          },
          {
            level: 2,
            toHit: 21
          },
          {
            level: 3,
            toHit: 21
          },
          {
            level: 4,
            toHit: 21
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 19
          },
          {
            level: 14,
            toHit: 19
          },
          {
            level: 15,
            toHit: 19
          },
          {
            level: 16,
            toHit: 19
          },
          {
            level: 17,
            toHit: 17
          },
          {
            level: 18,
            toHit: 17
          },
          {
            level: 19,
            toHit: 17
          },
          {
            level: 20,
            toHit: 17
          },
          {
            level: 21,
            toHit: 15
          }
        ]
      },
      {
        ac: -4,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 20
          },
          {
            level: 10,
            toHit: 20
          },
          {
            level: 11,
            toHit: 20
          },
          {
            level: 12,
            toHit: 20
          },
          {
            level: 13,
            toHit: 18
          },
          {
            level: 14,
            toHit: 18
          },
          {
            level: 15,
            toHit: 18
          },
          {
            level: 16,
            toHit: 18
          },
          {
            level: 17,
            toHit: 16
          },
          {
            level: 18,
            toHit: 16
          },
          {
            level: 19,
            toHit: 16
          },
          {
            level: 20,
            toHit: 16
          },
          {
            level: 21,
            toHit: 14
          }
        ]
      },
      {
        ac: -3,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 19
          },
          {
            level: 10,
            toHit: 19
          },
          {
            level: 11,
            toHit: 19
          },
          {
            level: 12,
            toHit: 19
          },
          {
            level: 13,
            toHit: 17
          },
          {
            level: 14,
            toHit: 17
          },
          {
            level: 15,
            toHit: 17
          },
          {
            level: 16,
            toHit: 17
          },
          {
            level: 17,
            toHit: 15
          },
          {
            level: 18,
            toHit: 15
          },
          {
            level: 19,
            toHit: 15
          },
          {
            level: 20,
            toHit: 15
          },
          {
            level: 21,
            toHit: 13
          }
        ]
      },
      {
        ac: -2,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 18
          },
          {
            level: 10,
            toHit: 18
          },
          {
            level: 11,
            toHit: 18
          },
          {
            level: 12,
            toHit: 18
          },
          {
            level: 13,
            toHit: 16
          },
          {
            level: 14,
            toHit: 16
          },
          {
            level: 15,
            toHit: 16
          },
          {
            level: 16,
            toHit: 16
          },
          {
            level: 17,
            toHit: 14
          },
          {
            level: 18,
            toHit: 14
          },
          {
            level: 19,
            toHit: 14
          },
          {
            level: 20,
            toHit: 14
          },
          {
            level: 21,
            toHit: 12
          }
        ]
      },
      {
        ac: -1,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 20
          },
          {
            level: 6,
            toHit: 20
          },
          {
            level: 7,
            toHit: 20
          },
          {
            level: 8,
            toHit: 20
          },
          {
            level: 9,
            toHit: 17
          },
          {
            level: 10,
            toHit: 17
          },
          {
            level: 11,
            toHit: 17
          },
          {
            level: 12,
            toHit: 17
          },
          {
            level: 13,
            toHit: 15
          },
          {
            level: 14,
            toHit: 15
          },
          {
            level: 15,
            toHit: 15
          },
          {
            level: 16,
            toHit: 15
          },
          {
            level: 17,
            toHit: 13
          },
          {
            level: 18,
            toHit: 13
          },
          {
            level: 19,
            toHit: 13
          },
          {
            level: 20,
            toHit: 13
          },
          {
            level: 21,
            toHit: 11
          }
        ]
      },
      {
        ac: 0,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 19
          },
          {
            level: 6,
            toHit: 19
          },
          {
            level: 7,
            toHit: 19
          },
          {
            level: 8,
            toHit: 19
          },
          {
            level: 9,
            toHit: 16
          },
          {
            level: 10,
            toHit: 16
          },
          {
            level: 11,
            toHit: 16
          },
          {
            level: 12,
            toHit: 16
          },
          {
            level: 13,
            toHit: 14
          },
          {
            level: 14,
            toHit: 14
          },
          {
            level: 15,
            toHit: 14
          },
          {
            level: 16,
            toHit: 14
          },
          {
            level: 17,
            toHit: 12
          },
          {
            level: 18,
            toHit: 12
          },
          {
            level: 19,
            toHit: 12
          },
          {
            level: 20,
            toHit: 12
          },
          {
            level: 21,
            toHit: 10
          }
        ]
      },
      {
        ac: 1,
        toHit: [
          {
            level: 1,
            toHit: 20
          },
          {
            level: 2,
            toHit: 20
          },
          {
            level: 3,
            toHit: 20
          },
          {
            level: 4,
            toHit: 20
          },
          {
            level: 5,
            toHit: 18
          },
          {
            level: 6,
            toHit: 18
          },
          {
            level: 7,
            toHit: 18
          },
          {
            level: 8,
            toHit: 18
          },
          {
            level: 9,
            toHit: 15
          },
          {
            level: 10,
            toHit: 15
          },
          {
            level: 11,
            toHit: 15
          },
          {
            level: 12,
            toHit: 15
          },
          {
            level: 13,
            toHit: 13
          },
          {
            level: 14,
            toHit: 13
          },
          {
            level: 15,
            toHit: 13
          },
          {
            level: 16,
            toHit: 13
          },
          {
            level: 17,
            toHit: 11
          },
          {
            level: 18,
            toHit: 11
          },
          {
            level: 19,
            toHit: 11
          },
          {
            level: 20,
            toHit: 11
          },
          {
            level: 21,
            toHit: 9
          }
        ]
      },
      {
        ac: 2,
        toHit: [
          {
            level: 1,
            toHit: 19
          },
          {
            level: 2,
            toHit: 19
          },
          {
            level: 3,
            toHit: 19
          },
          {
            level: 4,
            toHit: 19
          },
          {
            level: 5,
            toHit: 17
          },
          {
            level: 6,
            toHit: 17
          },
          {
            level: 7,
            toHit: 17
          },
          {
            level: 8,
            toHit: 17
          },
          {
            level: 9,
            toHit: 14
          },
          {
            level: 10,
            toHit: 14
          },
          {
            level: 11,
            toHit: 14
          },
          {
            level: 12,
            toHit: 14
          },
          {
            level: 13,
            toHit: 12
          },
          {
            level: 14,
            toHit: 12
          },
          {
            level: 15,
            toHit: 12
          },
          {
            level: 16,
            toHit: 12
          },
          {
            level: 17,
            toHit: 10
          },
          {
            level: 18,
            toHit: 10
          },
          {
            level: 19,
            toHit: 10
          },
          {
            level: 20,
            toHit: 10
          },
          {
            level: 21,
            toHit: 8
          }
        ]
      },
      {
        ac: 3,
        toHit: [
          {
            level: 1,
            toHit: 18
          },
          {
            level: 2,
            toHit: 18
          },
          {
            level: 3,
            toHit: 18
          },
          {
            level: 4,
            toHit: 18
          },
          {
            level: 5,
            toHit: 16
          },
          {
            level: 6,
            toHit: 16
          },
          {
            level: 7,
            toHit: 16
          },
          {
            level: 8,
            toHit: 16
          },
          {
            level: 9,
            toHit: 13
          },
          {
            level: 10,
            toHit: 13
          },
          {
            level: 11,
            toHit: 13
          },
          {
            level: 12,
            toHit: 13
          },
          {
            level: 13,
            toHit: 11
          },
          {
            level: 14,
            toHit: 11
          },
          {
            level: 15,
            toHit: 11
          },
          {
            level: 16,
            toHit: 11
          },
          {
            level: 17,
            toHit: 9
          },
          {
            level: 18,
            toHit: 9
          },
          {
            level: 19,
            toHit: 9
          },
          {
            level: 20,
            toHit: 9
          },
          {
            level: 21,
            toHit: 7
          }
        ]
      },
      {
        ac: 4,
        toHit: [
          {
            level: 1,
            toHit: 17
          },
          {
            level: 2,
            toHit: 17
          },
          {
            level: 3,
            toHit: 17
          },
          {
            level: 4,
            toHit: 17
          },
          {
            level: 5,
            toHit: 15
          },
          {
            level: 6,
            toHit: 15
          },
          {
            level: 7,
            toHit: 15
          },
          {
            level: 8,
            toHit: 15
          },
          {
            level: 9,
            toHit: 12
          },
          {
            level: 10,
            toHit: 12
          },
          {
            level: 11,
            toHit: 12
          },
          {
            level: 12,
            toHit: 12
          },
          {
            level: 13,
            toHit: 10
          },
          {
            level: 14,
            toHit: 10
          },
          {
            level: 15,
            toHit: 10
          },
          {
            level: 16,
            toHit: 10
          },
          {
            level: 17,
            toHit: 8
          },
          {
            level: 18,
            toHit: 8
          },
          {
            level: 19,
            toHit: 8
          },
          {
            level: 20,
            toHit: 8
          },
          {
            level: 21,
            toHit: 6
          }
        ]
      },
      {
        ac: 5,
        toHit: [
          {
            level: 1,
            toHit: 16
          },
          {
            level: 2,
            toHit: 16
          },
          {
            level: 3,
            toHit: 16
          },
          {
            level: 4,
            toHit: 16
          },
          {
            level: 5,
            toHit: 14
          },
          {
            level: 6,
            toHit: 14
          },
          {
            level: 7,
            toHit: 14
          },
          {
            level: 8,
            toHit: 14
          },
          {
            level: 9,
            toHit: 11
          },
          {
            level: 10,
            toHit: 11
          },
          {
            level: 11,
            toHit: 11
          },
          {
            level: 12,
            toHit: 11
          },
          {
            level: 13,
            toHit: 9
          },
          {
            level: 14,
            toHit: 9
          },
          {
            level: 15,
            toHit: 9
          },
          {
            level: 16,
            toHit: 9
          },
          {
            level: 17,
            toHit: 7
          },
          {
            level: 18,
            toHit: 7
          },
          {
            level: 19,
            toHit: 7
          },
          {
            level: 20,
            toHit: 7
          },
          {
            level: 21,
            toHit: 5
          }
        ]
      },
      {
        ac: 6,
        toHit: [
          {
            level: 1,
            toHit: 15
          },
          {
            level: 2,
            toHit: 15
          },
          {
            level: 3,
            toHit: 15
          },
          {
            level: 4,
            toHit: 15
          },
          {
            level: 5,
            toHit: 13
          },
          {
            level: 6,
            toHit: 13
          },
          {
            level: 7,
            toHit: 13
          },
          {
            level: 8,
            toHit: 13
          },
          {
            level: 9,
            toHit: 10
          },
          {
            level: 10,
            toHit: 10
          },
          {
            level: 11,
            toHit: 10
          },
          {
            level: 12,
            toHit: 10
          },
          {
            level: 13,
            toHit: 8
          },
          {
            level: 14,
            toHit: 8
          },
          {
            level: 15,
            toHit: 8
          },
          {
            level: 16,
            toHit: 8
          },
          {
            level: 17,
            toHit: 6
          },
          {
            level: 18,
            toHit: 6
          },
          {
            level: 19,
            toHit: 6
          },
          {
            level: 20,
            toHit: 6
          },
          {
            level: 21,
            toHit: 4
          }
        ]
      },
      {
        ac: 7,
        toHit: [
          {
            level: 1,
            toHit: 14
          },
          {
            level: 2,
            toHit: 14
          },
          {
            level: 3,
            toHit: 14
          },
          {
            level: 4,
            toHit: 14
          },
          {
            level: 5,
            toHit: 12
          },
          {
            level: 6,
            toHit: 12
          },
          {
            level: 7,
            toHit: 12
          },
          {
            level: 8,
            toHit: 12
          },
          {
            level: 9,
            toHit: 9
          },
          {
            level: 10,
            toHit: 9
          },
          {
            level: 11,
            toHit: 9
          },
          {
            level: 12,
            toHit: 9
          },
          {
            level: 13,
            toHit: 7
          },
          {
            level: 14,
            toHit: 7
          },
          {
            level: 15,
            toHit: 7
          },
          {
            level: 16,
            toHit: 7
          },
          {
            level: 17,
            toHit: 5
          },
          {
            level: 18,
            toHit: 5
          },
          {
            level: 19,
            toHit: 5
          },
          {
            level: 20,
            toHit: 5
          },
          {
            level: 21,
            toHit: 3
          }
        ]
      },
      {
        ac: 8,
        toHit: [
          {
            level: 1,
            toHit: 13
          },
          {
            level: 2,
            toHit: 13
          },
          {
            level: 3,
            toHit: 13
          },
          {
            level: 4,
            toHit: 13
          },
          {
            level: 5,
            toHit: 11
          },
          {
            level: 6,
            toHit: 11
          },
          {
            level: 7,
            toHit: 11
          },
          {
            level: 8,
            toHit: 11
          },
          {
            level: 9,
            toHit: 8
          },
          {
            level: 10,
            toHit: 8
          },
          {
            level: 11,
            toHit: 8
          },
          {
            level: 12,
            toHit: 8
          },
          {
            level: 13,
            toHit: 6
          },
          {
            level: 14,
            toHit: 6
          },
          {
            level: 15,
            toHit: 6
          },
          {
            level: 16,
            toHit: 6
          },
          {
            level: 17,
            toHit: 4
          },
          {
            level: 18,
            toHit: 4
          },
          {
            level: 19,
            toHit: 4
          },
          {
            level: 20,
            toHit: 4
          },
          {
            level: 21,
            toHit: 2
          }
        ]
      },
      {
        ac: 9,
        toHit: [
          {
            level: 1,
            toHit: 12
          },
          {
            level: 2,
            toHit: 12
          },
          {
            level: 3,
            toHit: 12
          },
          {
            level: 4,
            toHit: 12
          },
          {
            level: 5,
            toHit: 10
          },
          {
            level: 6,
            toHit: 10
          },
          {
            level: 7,
            toHit: 10
          },
          {
            level: 8,
            toHit: 10
          },
          {
            level: 9,
            toHit: 7
          },
          {
            level: 10,
            toHit: 7
          },
          {
            level: 11,
            toHit: 7
          },
          {
            level: 12,
            toHit: 7
          },
          {
            level: 13,
            toHit: 5
          },
          {
            level: 14,
            toHit: 5
          },
          {
            level: 15,
            toHit: 5
          },
          {
            level: 16,
            toHit: 5
          },
          {
            level: 17,
            toHit: 3
          },
          {
            level: 18,
            toHit: 3
          },
          {
            level: 19,
            toHit: 3
          },
          {
            level: 20,
            toHit: 3
          },
          {
            level: 21,
            toHit: 1
          }
        ]
      },
      {
        ac: 10,
        toHit: [
          {
            level: 1,
            toHit: 11
          },
          {
            level: 2,
            toHit: 11
          },
          {
            level: 3,
            toHit: 11
          },
          {
            level: 4,
            toHit: 11
          },
          {
            level: 5,
            toHit: 9
          },
          {
            level: 6,
            toHit: 9
          },
          {
            level: 7,
            toHit: 9
          },
          {
            level: 8,
            toHit: 9
          },
          {
            level: 9,
            toHit: 6
          },
          {
            level: 10,
            toHit: 6
          },
          {
            level: 11,
            toHit: 6
          },
          {
            level: 12,
            toHit: 6
          },
          {
            level: 13,
            toHit: 4
          },
          {
            level: 14,
            toHit: 4
          },
          {
            level: 15,
            toHit: 4
          },
          {
            level: 16,
            toHit: 4
          },
          {
            level: 17,
            toHit: 2
          },
          {
            level: 18,
            toHit: 2
          },
          {
            level: 19,
            toHit: 2
          },
          {
            level: 20,
            toHit: 2
          },
          {
            level: 21,
            toHit: 0
          }
        ]
      }
    ]
  }
];

export const monsterCombat = [
  {
    ac: -10,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 26
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 25
      },
      {
        dice: 1,
        toHit: 24
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 23
      },
      {
        dice: 2,
        toHit: 21
      },
      {
        dice: 3,
        toHit: 21
      },
      {
        dice: 4,
        toHit: 20
      },
      {
        dice: 5,
        toHit: 20
      },
      {
        dice: 6,
        toHit: 20
      },
      {
        dice: 7,
        toHit: 20
      },
      {
        dice: 8,
        toHit: 20
      },
      {
        dice: 9,
        toHit: 20
      },
      {
        dice: 10,
        toHit: 20
      },
      {
        dice: 11,
        toHit: 20
      },
      {
        dice: 12,
        toHit: 19
      },
      {
        dice: 13,
        toHit: 19
      },
      {
        dice: 14,
        toHit: 18
      },
      {
        dice: 15,
        toHit: 18
      },
      {
        dice: 16,
        toHit: 17
      }
    ]
  },
  {
    ac: -9,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 25
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 24
      },
      {
        dice: 1,
        toHit: 23
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 22
      },
      {
        dice: 2,
        toHit: 20
      },
      {
        dice: 3,
        toHit: 20
      },
      {
        dice: 4,
        toHit: 20
      },
      {
        dice: 5,
        toHit: 20
      },
      {
        dice: 6,
        toHit: 20
      },
      {
        dice: 7,
        toHit: 20
      },
      {
        dice: 8,
        toHit: 20
      },
      {
        dice: 9,
        toHit: 20
      },
      {
        dice: 10,
        toHit: 19
      },
      {
        dice: 11,
        toHit: 19
      },
      {
        dice: 12,
        toHit: 18
      },
      {
        dice: 13,
        toHit: 18
      },
      {
        dice: 14,
        toHit: 17
      },
      {
        dice: 15,
        toHit: 17
      },
      {
        dice: 16,
        toHit: 16
      }
    ]
  },
  {
    ac: -8,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 24
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 23
      },
      {
        dice: 1,
        toHit: 22
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 21
      },
      {
        dice: 2,
        toHit: 20
      },
      {
        dice: 3,
        toHit: 20
      },
      {
        dice: 4,
        toHit: 20
      },
      {
        dice: 5,
        toHit: 20
      },
      {
        dice: 6,
        toHit: 20
      },
      {
        dice: 7,
        toHit: 20
      },
      {
        dice: 8,
        toHit: 20
      },
      {
        dice: 9,
        toHit: 20
      },
      {
        dice: 10,
        toHit: 18
      },
      {
        dice: 11,
        toHit: 18
      },
      {
        dice: 12,
        toHit: 17
      },
      {
        dice: 13,
        toHit: 17
      },
      {
        dice: 14,
        toHit: 16
      },
      {
        dice: 15,
        toHit: 16
      },
      {
        dice: 16,
        toHit: 15
      }
    ]
  },
  {
    ac: -7,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 23
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 22
      },
      {
        dice: 1,
        toHit: 21
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 20
      },
      {
        dice: 2,
        toHit: 20
      },
      {
        dice: 3,
        toHit: 20
      },
      {
        dice: 4,
        toHit: 20
      },
      {
        dice: 5,
        toHit: 20
      },
      {
        dice: 6,
        toHit: 20
      },
      {
        dice: 7,
        toHit: 20
      },
      {
        dice: 8,
        toHit: 19
      },
      {
        dice: 9,
        toHit: 19
      },
      {
        dice: 10,
        toHit: 17
      },
      {
        dice: 11,
        toHit: 17
      },
      {
        dice: 12,
        toHit: 16
      },
      {
        dice: 13,
        toHit: 16
      },
      {
        dice: 14,
        toHit: 15
      },
      {
        dice: 15,
        toHit: 15
      },
      {
        dice: 16,
        toHit: 14
      }
    ]
  },

  {
    ac: -6,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 22
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 21
      },
      {
        dice: 1,
        toHit: 20
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 20
      },
      {
        dice: 2,
        toHit: 20
      },
      {
        dice: 3,
        toHit: 20
      },
      {
        dice: 4,
        toHit: 20
      },
      {
        dice: 5,
        toHit: 20
      },
      {
        dice: 6,
        toHit: 19
      },
      {
        dice: 7,
        toHit: 19
      },
      {
        dice: 8,
        toHit: 18
      },
      {
        dice: 9,
        toHit: 18
      },
      {
        dice: 10,
        toHit: 16
      },
      {
        dice: 11,
        toHit: 16
      },
      {
        dice: 12,
        toHit: 15
      },
      {
        dice: 13,
        toHit: 15
      },
      {
        dice: 14,
        toHit: 14
      },
      {
        dice: 15,
        toHit: 14
      },
      {
        dice: 16,
        toHit: 13
      }
    ]
  },
  {
    ac: -5,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 21
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 20
      },
      {
        dice: 1,
        toHit: 20
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 20
      },
      {
        dice: 2,
        toHit: 20
      },
      {
        dice: 3,
        toHit: 20
      },
      {
        dice: 4,
        toHit: 20
      },
      {
        dice: 5,
        toHit: 20
      },
      {
        dice: 6,
        toHit: 18
      },
      {
        dice: 7,
        toHit: 18
      },
      {
        dice: 8,
        toHit: 17
      },
      {
        dice: 9,
        toHit: 17
      },
      {
        dice: 10,
        toHit: 15
      },
      {
        dice: 11,
        toHit: 15
      },
      {
        dice: 12,
        toHit: 14
      },
      {
        dice: 13,
        toHit: 14
      },
      {
        dice: 14,
        toHit: 13
      },
      {
        dice: 15,
        toHit: 13
      },
      {
        dice: 16,
        toHit: 12
      }
    ]
  },
  {
    ac: -4,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 20
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 20
      },
      {
        dice: 1,
        toHit: 20
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 20
      },
      {
        dice: 2,
        toHit: 20
      },
      {
        dice: 3,
        toHit: 20
      },
      {
        dice: 4,
        toHit: 19
      },
      {
        dice: 5,
        toHit: 19
      },
      {
        dice: 6,
        toHit: 17
      },
      {
        dice: 7,
        toHit: 17
      },
      {
        dice: 8,
        toHit: 16
      },
      {
        dice: 9,
        toHit: 16
      },
      {
        dice: 10,
        toHit: 14
      },
      {
        dice: 11,
        toHit: 14
      },
      {
        dice: 12,
        toHit: 13
      },
      {
        dice: 13,
        toHit: 13
      },
      {
        dice: 14,
        toHit: 12
      },
      {
        dice: 15,
        toHit: 12
      },
      {
        dice: 16,
        toHit: 11
      }
    ]
  },
  {
    ac: -3,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 20
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 20
      },
      {
        dice: 1,
        toHit: 20
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 20
      },
      {
        dice: 2,
        toHit: 19
      },
      {
        dice: 3,
        toHit: 19
      },
      {
        dice: 4,
        toHit: 18
      },
      {
        dice: 5,
        toHit: 18
      },
      {
        dice: 6,
        toHit: 16
      },
      {
        dice: 7,
        toHit: 16
      },
      {
        dice: 8,
        toHit: 15
      },
      {
        dice: 9,
        toHit: 15
      },
      {
        dice: 10,
        toHit: 13
      },
      {
        dice: 11,
        toHit: 13
      },
      {
        dice: 12,
        toHit: 12
      },
      {
        dice: 13,
        toHit: 12
      },
      {
        dice: 14,
        toHit: 11
      },
      {
        dice: 15,
        toHit: 11
      },
      {
        dice: 16,
        toHit: 10
      }
    ]
  },
  {
    ac: -2,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 20
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 20
      },
      {
        dice: 1,
        toHit: 20
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 20
      },
      {
        dice: 2,
        toHit: 18
      },
      {
        dice: 3,
        toHit: 18
      },
      {
        dice: 4,
        toHit: 17
      },
      {
        dice: 5,
        toHit: 17
      },
      {
        dice: 6,
        toHit: 15
      },
      {
        dice: 7,
        toHit: 15
      },
      {
        dice: 8,
        toHit: 14
      },
      {
        dice: 9,
        toHit: 14
      },
      {
        dice: 10,
        toHit: 12
      },
      {
        dice: 11,
        toHit: 12
      },
      {
        dice: 12,
        toHit: 11
      },
      {
        dice: 13,
        toHit: 11
      },
      {
        dice: 14,
        toHit: 10
      },
      {
        dice: 15,
        toHit: 10
      },
      {
        dice: 16,
        toHit: 9
      }
    ]
  },
  {
    ac: -1,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 20
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 20
      },
      {
        dice: 1,
        toHit: 20
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 19
      },
      {
        dice: 2,
        toHit: 17
      },
      {
        dice: 3,
        toHit: 17
      },
      {
        dice: 4,
        toHit: 16
      },
      {
        dice: 5,
        toHit: 16
      },
      {
        dice: 6,
        toHit: 14
      },
      {
        dice: 7,
        toHit: 14
      },
      {
        dice: 8,
        toHit: 13
      },
      {
        dice: 9,
        toHit: 13
      },
      {
        dice: 10,
        toHit: 11
      },
      {
        dice: 11,
        toHit: 11
      },
      {
        dice: 12,
        toHit: 10
      },
      {
        dice: 13,
        toHit: 10
      },
      {
        dice: 14,
        toHit: 9
      },
      {
        dice: 15,
        toHit: 9
      },
      {
        dice: 16,
        toHit: 8
      }
    ]
  },
  {
    ac: 0,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 20
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 20
      },
      {
        dice: 1,
        toHit: 19
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 18
      },
      {
        dice: 2,
        toHit: 16
      },
      {
        dice: 3,
        toHit: 16
      },
      {
        dice: 4,
        toHit: 15
      },
      {
        dice: 5,
        toHit: 15
      },
      {
        dice: 6,
        toHit: 13
      },
      {
        dice: 7,
        toHit: 13
      },
      {
        dice: 8,
        toHit: 12
      },
      {
        dice: 9,
        toHit: 12
      },
      {
        dice: 10,
        toHit: 10
      },
      {
        dice: 11,
        toHit: 10
      },
      {
        dice: 12,
        toHit: 9
      },
      {
        dice: 13,
        toHit: 9
      },
      {
        dice: 14,
        toHit: 8
      },
      {
        dice: 15,
        toHit: 8
      },
      {
        dice: 16,
        toHit: 7
      }
    ]
  },
  {
    ac: 1,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 20
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 19
      },
      {
        dice: 1,
        toHit: 18
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 17
      },
      {
        dice: 2,
        toHit: 15
      },
      {
        dice: 3,
        toHit: 15
      },
      {
        dice: 4,
        toHit: 14
      },
      {
        dice: 5,
        toHit: 14
      },
      {
        dice: 6,
        toHit: 12
      },
      {
        dice: 7,
        toHit: 12
      },
      {
        dice: 8,
        toHit: 11
      },
      {
        dice: 9,
        toHit: 11
      },
      {
        dice: 10,
        toHit: 9
      },
      {
        dice: 11,
        toHit: 9
      },
      {
        dice: 12,
        toHit: 8
      },
      {
        dice: 13,
        toHit: 8
      },
      {
        dice: 14,
        toHit: 7
      },
      {
        dice: 15,
        toHit: 7
      },
      {
        dice: 16,
        toHit: 6
      }
    ]
  },
  {
    ac: 2,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 19
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 18
      },
      {
        dice: 1,
        toHit: 17
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 16
      },
      {
        dice: 2,
        toHit: 14
      },
      {
        dice: 3,
        toHit: 14
      },
      {
        dice: 4,
        toHit: 13
      },
      {
        dice: 5,
        toHit: 13
      },
      {
        dice: 6,
        toHit: 11
      },
      {
        dice: 7,
        toHit: 11
      },
      {
        dice: 8,
        toHit: 10
      },
      {
        dice: 9,
        toHit: 10
      },
      {
        dice: 10,
        toHit: 8
      },
      {
        dice: 11,
        toHit: 8
      },
      {
        dice: 12,
        toHit: 7
      },
      {
        dice: 13,
        toHit: 7
      },
      {
        dice: 14,
        toHit: 6
      },
      {
        dice: 15,
        toHit: 6
      },
      {
        dice: 16,
        toHit: 5
      }
    ]
  },
  {
    ac: 3,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 18
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 17
      },
      {
        dice: 1,
        toHit: 16
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 15
      },
      {
        dice: 2,
        toHit: 13
      },
      {
        dice: 3,
        toHit: 13
      },
      {
        dice: 4,
        toHit: 12
      },
      {
        dice: 5,
        toHit: 12
      },
      {
        dice: 6,
        toHit: 10
      },
      {
        dice: 7,
        toHit: 10
      },
      {
        dice: 8,
        toHit: 9
      },
      {
        dice: 9,
        toHit: 9
      },
      {
        dice: 10,
        toHit: 7
      },
      {
        dice: 11,
        toHit: 7
      },
      {
        dice: 12,
        toHit: 6
      },
      {
        dice: 13,
        toHit: 6
      },
      {
        dice: 14,
        toHit: 5
      },
      {
        dice: 15,
        toHit: 5
      },
      {
        dice: 16,
        toHit: 4
      }
    ]
  },
  {
    ac: 4,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 17
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 16
      },
      {
        dice: 1,
        toHit: 15
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 14
      },
      {
        dice: 2,
        toHit: 12
      },
      {
        dice: 3,
        toHit: 12
      },
      {
        dice: 4,
        toHit: 11
      },
      {
        dice: 5,
        toHit: 11
      },
      {
        dice: 6,
        toHit: 9
      },
      {
        dice: 7,
        toHit: 9
      },
      {
        dice: 8,
        toHit: 8
      },
      {
        dice: 9,
        toHit: 8
      },
      {
        dice: 10,
        toHit: 6
      },
      {
        dice: 11,
        toHit: 6
      },
      {
        dice: 12,
        toHit: 5
      },
      {
        dice: 13,
        toHit: 5
      },
      {
        dice: 14,
        toHit: 4
      },
      {
        dice: 15,
        toHit: 4
      },
      {
        dice: 16,
        toHit: 3
      }
    ]
  },
  {
    ac: 5,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 16
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 15
      },
      {
        dice: 1,
        toHit: 14
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 13
      },
      {
        dice: 2,
        toHit: 11
      },
      {
        dice: 3,
        toHit: 11
      },
      {
        dice: 4,
        toHit: 10
      },
      {
        dice: 5,
        toHit: 10
      },
      {
        dice: 6,
        toHit: 8
      },
      {
        dice: 7,
        toHit: 8
      },
      {
        dice: 8,
        toHit: 7
      },
      {
        dice: 9,
        toHit: 7
      },
      {
        dice: 10,
        toHit: 5
      },
      {
        dice: 11,
        toHit: 5
      },
      {
        dice: 12,
        toHit: 4
      },
      {
        dice: 13,
        toHit: 4
      },
      {
        dice: 14,
        toHit: 3
      },
      {
        dice: 15,
        toHit: 3
      },
      {
        dice: 16,
        toHit: 2
      }
    ]
  },
  {
    ac: 6,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 15
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 14
      },
      {
        dice: 1,
        toHit: 13
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 12
      },
      {
        dice: 2,
        toHit: 10
      },
      {
        dice: 3,
        toHit: 10
      },
      {
        dice: 4,
        toHit: 9
      },
      {
        dice: 5,
        toHit: 9
      },
      {
        dice: 6,
        toHit: 7
      },
      {
        dice: 7,
        toHit: 7
      },
      {
        dice: 8,
        toHit: 6
      },
      {
        dice: 9,
        toHit: 6
      },
      {
        dice: 10,
        toHit: 4
      },
      {
        dice: 11,
        toHit: 4
      },
      {
        dice: 12,
        toHit: 3
      },
      {
        dice: 13,
        toHit: 3
      },
      {
        dice: 14,
        toHit: 2
      },
      {
        dice: 15,
        toHit: 2
      },
      {
        dice: 16,
        toHit: 1
      }
    ]
  },
  {
    ac: 7,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 14
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 13
      },
      {
        dice: 1,
        toHit: 12
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 11
      },
      {
        dice: 2,
        toHit: 9
      },
      {
        dice: 3,
        toHit: 9
      },
      {
        dice: 4,
        toHit: 8
      },
      {
        dice: 5,
        toHit: 8
      },
      {
        dice: 6,
        toHit: 6
      },
      {
        dice: 7,
        toHit: 6
      },
      {
        dice: 8,
        toHit: 5
      },
      {
        dice: 9,
        toHit: 5
      },
      {
        dice: 10,
        toHit: 3
      },
      {
        dice: 11,
        toHit: 3
      },
      {
        dice: 12,
        toHit: 2
      },
      {
        dice: 13,
        toHit: 2
      },
      {
        dice: 14,
        toHit: 1
      },
      {
        dice: 15,
        toHit: 1
      },
      {
        dice: 16,
        toHit: 0
      }
    ]
  },
  {
    ac: 8,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 13
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 12
      },
      {
        dice: 1,
        toHit: 11
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 10
      },
      {
        dice: 2,
        toHit: 8
      },
      {
        dice: 3,
        toHit: 8
      },
      {
        dice: 4,
        toHit: 7
      },
      {
        dice: 5,
        toHit: 7
      },
      {
        dice: 6,
        toHit: 5
      },
      {
        dice: 7,
        toHit: 5
      },
      {
        dice: 8,
        toHit: 4
      },
      {
        dice: 9,
        toHit: 4
      },
      {
        dice: 10,
        toHit: 2
      },
      {
        dice: 11,
        toHit: 2
      },
      {
        dice: 12,
        toHit: 1
      },
      {
        dice: 13,
        toHit: 1
      },
      {
        dice: 14,
        toHit: 0
      },
      {
        dice: 15,
        toHit: 0
      },
      {
        dice: 16,
        toHit: -1
      }
    ]
  },
  {
    ac: 9,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 12
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 11
      },
      {
        dice: 1,
        toHit: 10
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 9
      },
      {
        dice: 2,
        toHit: 7
      },
      {
        dice: 3,
        toHit: 7
      },
      {
        dice: 4,
        toHit: 6
      },
      {
        dice: 5,
        toHit: 6
      },
      {
        dice: 6,
        toHit: 4
      },
      {
        dice: 7,
        toHit: 4
      },
      {
        dice: 8,
        toHit: 3
      },
      {
        dice: 9,
        toHit: 3
      },
      {
        dice: 10,
        toHit: 1
      },
      {
        dice: 11,
        toHit: 1
      },
      {
        dice: 12,
        toHit: 0
      },
      {
        dice: 13,
        toHit: 0
      },
      {
        dice: 14,
        toHit: -1
      },
      {
        dice: 15,
        toHit: -1
      },
      {
        dice: 16,
        toHit: -2
      }
    ]
  },
  {
    ac: 10,
    hitDice: [
      {
        dice: 1,
        bonus: -2,
        toHit: 11
      },
      {
        dice: 1,
        bonus: -1,
        toHit: 10
      },
      {
        dice: 1,
        toHit: 9
      },
      {
        dice: 1,
        bonus: 1,
        toHit: 8
      },
      {
        dice: 2,
        toHit: 6
      },
      {
        dice: 3,
        toHit: 6
      },
      {
        dice: 4,
        toHit: 5
      },
      {
        dice: 5,
        toHit: 5
      },
      {
        dice: 6,
        toHit: 3
      },
      {
        dice: 7,
        toHit: 3
      },
      {
        dice: 8,
        toHit: 2
      },
      {
        dice: 9,
        toHit: 2
      },
      {
        dice: 10,
        toHit: 0
      },
      {
        dice: 11,
        toHit: 0
      },
      {
        dice: 12,
        toHit: -1
      },
      {
        dice: 13,
        toHit: -1
      },
      {
        dice: 14,
        toHit: -2
      },
      {
        dice: 15,
        toHit: -2
      },
      {
        dice: 16,
        toHit: -3
      }
    ]
  }
];
