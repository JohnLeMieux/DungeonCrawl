import { Armor, Class, Race } from "./types";

export const armor_class = [
  {
    armor: Armor.PLATE_MAIL,
    shield: true,
    ac: 2
  },
  {
    armor: Armor.PLATE_MAIL,
    shield: false,
    ac: 3
  },
  {
    armor: Armor.SPLINT,
    shield: true,
    ac: 3
  },
  {
    armor: Armor.BANDED_MAIL,
    shield: true,
    ac: 3
  },
  {
    armor: Armor.SPLINT,
    shield: false,
    ac: 4
  },
  {
    armor: Armor.BANDED_MAIL,
    shield: false,
    ac: 4
  },
  {
    armor: Armor.CHAIN_MAIL,
    shield: true,
    ac: 4
  },
  {
    armor: Armor.CHAIN_MAIL,
    shield: false,
    ac: 5
  },
  {
    armor: Armor.SCALE_MAIL,
    shield: true,
    ac: 5
  },
  {
    armor: Armor.SCALE_MAIL,
    shield: false,
    ac: 6
  },
  {
    armor: Armor.STUDDED,
    shield: true,
    ac: 6
  },
  {
    armor: Armor.RING_MAIL,
    shield: true,
    ac: 6
  },
  {
    armor: Armor.STUDDED,
    shield: false,
    ac: 7
  },
  {
    armor: Armor.RING_MAIL,
    shield: false,
    ac: 7
  },
  {
    armor: Armor.LEATHER,
    shield: true,
    ac: 7
  },
  {
    armor: Armor.PADDED,
    shield: true,
    ac: 7
  },
  {
    armor: Armor.LEATHER,
    shield: false,
    ac: 8
  },
  {
    armor: Armor.PADDED,
    shield: false,
    ac: 8
  },
  {
    armor: Armor.NONE,
    shield: true,
    ac: 9
  },
  {
    armor: Armor.NONE,
    shield: false,
    ac: 10
  }
];

export const combat = [
  {
    class: [Class.CLERIC, Class.DRUID, Class.MONK],
    to_hit: [
      {
        ac: -10,
        to_hit: [
          {
            level: 1,
            to_hit: 25
          },
          {
            level: 2,
            to_hit: 25
          },
          {
            level: 3,
            to_hit: 25
          },
          {
            level: 4,
            to_hit: 23
          },
          {
            level: 5,
            to_hit: 23
          },
          {
            level: 6,
            to_hit: 23
          },
          {
            level: 7,
            to_hit: 21
          },
          {
            level: 8,
            to_hit: 21
          },
          {
            level: 9,
            to_hit: 21
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 20
          },
          {
            level: 18,
            to_hit: 20
          },
          {
            level: 19,
            to_hit: 19
          },
          {
            level: 20,
            to_hit: 19
          },
          {
            level: 21,
            to_hit: 19
          }
        ]
      },
      {
        ac: -9,
        to_hit: [
          {
            level: 1,
            to_hit: 24
          },
          {
            level: 2,
            to_hit: 24
          },
          {
            level: 3,
            to_hit: 24
          },
          {
            level: 4,
            to_hit: 22
          },
          {
            level: 5,
            to_hit: 22
          },
          {
            level: 6,
            to_hit: 22
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 19
          },
          {
            level: 17,
            to_hit: 19
          },
          {
            level: 18,
            to_hit: 19
          },
          {
            level: 19,
            to_hit: 18
          },
          {
            level: 20,
            to_hit: 18
          },
          {
            level: 21,
            to_hit: 18
          }
        ]
      },
      {
        ac: -8,
        to_hit: [
          {
            level: 1,
            to_hit: 23
          },
          {
            level: 2,
            to_hit: 23
          },
          {
            level: 3,
            to_hit: 23
          },
          {
            level: 4,
            to_hit: 21
          },
          {
            level: 5,
            to_hit: 21
          },
          {
            level: 6,
            to_hit: 21
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 18
          },
          {
            level: 17,
            to_hit: 18
          },
          {
            level: 18,
            to_hit: 18
          },
          {
            level: 19,
            to_hit: 17
          },
          {
            level: 20,
            to_hit: 17
          },
          {
            level: 21,
            to_hit: 17
          }
        ]
      },
      {
        ac: -7,
        to_hit: [
          {
            level: 1,
            to_hit: 22
          },
          {
            level: 2,
            to_hit: 22
          },
          {
            level: 3,
            to_hit: 22
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 19
          },
          {
            level: 14,
            to_hit: 19
          },
          {
            level: 15,
            to_hit: 19
          },
          {
            level: 16,
            to_hit: 17
          },
          {
            level: 17,
            to_hit: 17
          },
          {
            level: 18,
            to_hit: 17
          },
          {
            level: 19,
            to_hit: 16
          },
          {
            level: 20,
            to_hit: 16
          },
          {
            level: 21,
            to_hit: 16
          }
        ]
      },
      {
        ac: -6,
        to_hit: [
          {
            level: 1,
            to_hit: 21
          },
          {
            level: 2,
            to_hit: 21
          },
          {
            level: 3,
            to_hit: 21
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 18
          },
          {
            level: 14,
            to_hit: 18
          },
          {
            level: 15,
            to_hit: 18
          },
          {
            level: 16,
            to_hit: 16
          },
          {
            level: 17,
            to_hit: 16
          },
          {
            level: 18,
            to_hit: 16
          },
          {
            level: 19,
            to_hit: 15
          },
          {
            level: 20,
            to_hit: 15
          },
          {
            level: 21,
            to_hit: 15
          }
        ]
      },
      {
        ac: -5,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 19
          },
          {
            level: 11,
            to_hit: 19
          },
          {
            level: 12,
            to_hit: 19
          },
          {
            level: 13,
            to_hit: 17
          },
          {
            level: 14,
            to_hit: 17
          },
          {
            level: 15,
            to_hit: 17
          },
          {
            level: 16,
            to_hit: 15
          },
          {
            level: 17,
            to_hit: 15
          },
          {
            level: 18,
            to_hit: 15
          },
          {
            level: 19,
            to_hit: 14
          },
          {
            level: 20,
            to_hit: 14
          },
          {
            level: 21,
            to_hit: 14
          }
        ]
      },
      {
        ac: -4,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 18
          },
          {
            level: 11,
            to_hit: 18
          },
          {
            level: 12,
            to_hit: 18
          },
          {
            level: 13,
            to_hit: 16
          },
          {
            level: 14,
            to_hit: 16
          },
          {
            level: 15,
            to_hit: 16
          },
          {
            level: 16,
            to_hit: 14
          },
          {
            level: 17,
            to_hit: 14
          },
          {
            level: 18,
            to_hit: 14
          },
          {
            level: 19,
            to_hit: 13
          },
          {
            level: 20,
            to_hit: 13
          },
          {
            level: 21,
            to_hit: 13
          }
        ]
      },
      {
        ac: -3,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 19
          },
          {
            level: 8,
            to_hit: 19
          },
          {
            level: 9,
            to_hit: 19
          },
          {
            level: 10,
            to_hit: 17
          },
          {
            level: 11,
            to_hit: 17
          },
          {
            level: 12,
            to_hit: 17
          },
          {
            level: 13,
            to_hit: 15
          },
          {
            level: 14,
            to_hit: 15
          },
          {
            level: 15,
            to_hit: 15
          },
          {
            level: 16,
            to_hit: 13
          },
          {
            level: 17,
            to_hit: 13
          },
          {
            level: 18,
            to_hit: 13
          },
          {
            level: 19,
            to_hit: 12
          },
          {
            level: 20,
            to_hit: 12
          },
          {
            level: 21,
            to_hit: 12
          }
        ]
      },
      {
        ac: -2,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 18
          },
          {
            level: 8,
            to_hit: 18
          },
          {
            level: 9,
            to_hit: 18
          },
          {
            level: 10,
            to_hit: 16
          },
          {
            level: 11,
            to_hit: 16
          },
          {
            level: 12,
            to_hit: 16
          },
          {
            level: 13,
            to_hit: 14
          },
          {
            level: 14,
            to_hit: 14
          },
          {
            level: 15,
            to_hit: 14
          },
          {
            level: 16,
            to_hit: 12
          },
          {
            level: 17,
            to_hit: 12
          },
          {
            level: 18,
            to_hit: 12
          },
          {
            level: 19,
            to_hit: 11
          },
          {
            level: 20,
            to_hit: 11
          },
          {
            level: 21,
            to_hit: 11
          }
        ]
      },
      {
        ac: -1,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 19
          },
          {
            level: 5,
            to_hit: 19
          },
          {
            level: 6,
            to_hit: 19
          },
          {
            level: 7,
            to_hit: 17
          },
          {
            level: 8,
            to_hit: 17
          },
          {
            level: 9,
            to_hit: 17
          },
          {
            level: 10,
            to_hit: 15
          },
          {
            level: 11,
            to_hit: 15
          },
          {
            level: 12,
            to_hit: 15
          },
          {
            level: 13,
            to_hit: 13
          },
          {
            level: 14,
            to_hit: 13
          },
          {
            level: 15,
            to_hit: 13
          },
          {
            level: 16,
            to_hit: 11
          },
          {
            level: 17,
            to_hit: 11
          },
          {
            level: 18,
            to_hit: 11
          },
          {
            level: 19,
            to_hit: 10
          },
          {
            level: 20,
            to_hit: 10
          },
          {
            level: 21,
            to_hit: 10
          }
        ]
      },
      {
        ac: 0,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 18
          },
          {
            level: 5,
            to_hit: 18
          },
          {
            level: 6,
            to_hit: 18
          },
          {
            level: 7,
            to_hit: 16
          },
          {
            level: 8,
            to_hit: 16
          },
          {
            level: 9,
            to_hit: 16
          },
          {
            level: 10,
            to_hit: 14
          },
          {
            level: 11,
            to_hit: 14
          },
          {
            level: 12,
            to_hit: 14
          },
          {
            level: 13,
            to_hit: 12
          },
          {
            level: 14,
            to_hit: 12
          },
          {
            level: 15,
            to_hit: 12
          },
          {
            level: 16,
            to_hit: 10
          },
          {
            level: 17,
            to_hit: 10
          },
          {
            level: 18,
            to_hit: 10
          },
          {
            level: 19,
            to_hit: 9
          },
          {
            level: 20,
            to_hit: 9
          },
          {
            level: 21,
            to_hit: 9
          }
        ]
      },
      {
        ac: 1,
        to_hit: [
          {
            level: 1,
            to_hit: 19
          },
          {
            level: 2,
            to_hit: 19
          },
          {
            level: 3,
            to_hit: 19
          },
          {
            level: 4,
            to_hit: 17
          },
          {
            level: 5,
            to_hit: 17
          },
          {
            level: 6,
            to_hit: 17
          },
          {
            level: 7,
            to_hit: 15
          },
          {
            level: 8,
            to_hit: 15
          },
          {
            level: 9,
            to_hit: 15
          },
          {
            level: 10,
            to_hit: 13
          },
          {
            level: 11,
            to_hit: 13
          },
          {
            level: 12,
            to_hit: 13
          },
          {
            level: 13,
            to_hit: 11
          },
          {
            level: 14,
            to_hit: 11
          },
          {
            level: 15,
            to_hit: 11
          },
          {
            level: 16,
            to_hit: 9
          },
          {
            level: 17,
            to_hit: 9
          },
          {
            level: 18,
            to_hit: 9
          },
          {
            level: 19,
            to_hit: 8
          },
          {
            level: 20,
            to_hit: 8
          },
          {
            level: 21,
            to_hit: 8
          }
        ]
      },
      {
        ac: 2,
        to_hit: [
          {
            level: 1,
            to_hit: 18
          },
          {
            level: 2,
            to_hit: 18
          },
          {
            level: 3,
            to_hit: 18
          },
          {
            level: 4,
            to_hit: 16
          },
          {
            level: 5,
            to_hit: 16
          },
          {
            level: 6,
            to_hit: 16
          },
          {
            level: 7,
            to_hit: 14
          },
          {
            level: 8,
            to_hit: 14
          },
          {
            level: 9,
            to_hit: 14
          },
          {
            level: 10,
            to_hit: 12
          },
          {
            level: 11,
            to_hit: 12
          },
          {
            level: 12,
            to_hit: 12
          },
          {
            level: 13,
            to_hit: 10
          },
          {
            level: 14,
            to_hit: 10
          },
          {
            level: 15,
            to_hit: 10
          },
          {
            level: 16,
            to_hit: 8
          },
          {
            level: 17,
            to_hit: 8
          },
          {
            level: 18,
            to_hit: 8
          },
          {
            level: 19,
            to_hit: 7
          },
          {
            level: 20,
            to_hit: 7
          },
          {
            level: 21,
            to_hit: 7
          }
        ]
      },
      {
        ac: 3,
        to_hit: [
          {
            level: 1,
            to_hit: 17
          },
          {
            level: 2,
            to_hit: 17
          },
          {
            level: 3,
            to_hit: 17
          },
          {
            level: 4,
            to_hit: 15
          },
          {
            level: 5,
            to_hit: 15
          },
          {
            level: 6,
            to_hit: 15
          },
          {
            level: 7,
            to_hit: 13
          },
          {
            level: 8,
            to_hit: 13
          },
          {
            level: 9,
            to_hit: 13
          },
          {
            level: 10,
            to_hit: 11
          },
          {
            level: 11,
            to_hit: 11
          },
          {
            level: 12,
            to_hit: 11
          },
          {
            level: 13,
            to_hit: 9
          },
          {
            level: 14,
            to_hit: 9
          },
          {
            level: 15,
            to_hit: 9
          },
          {
            level: 16,
            to_hit: 7
          },
          {
            level: 17,
            to_hit: 7
          },
          {
            level: 18,
            to_hit: 7
          },
          {
            level: 19,
            to_hit: 6
          },
          {
            level: 20,
            to_hit: 6
          },
          {
            level: 21,
            to_hit: 6
          }
        ]
      },
      {
        ac: 4,
        to_hit: [
          {
            level: 1,
            to_hit: 16
          },
          {
            level: 2,
            to_hit: 16
          },
          {
            level: 3,
            to_hit: 16
          },
          {
            level: 4,
            to_hit: 14
          },
          {
            level: 5,
            to_hit: 14
          },
          {
            level: 6,
            to_hit: 14
          },
          {
            level: 7,
            to_hit: 12
          },
          {
            level: 8,
            to_hit: 12
          },
          {
            level: 9,
            to_hit: 12
          },
          {
            level: 10,
            to_hit: 10
          },
          {
            level: 11,
            to_hit: 10
          },
          {
            level: 12,
            to_hit: 10
          },
          {
            level: 13,
            to_hit: 8
          },
          {
            level: 14,
            to_hit: 8
          },
          {
            level: 15,
            to_hit: 8
          },
          {
            level: 16,
            to_hit: 6
          },
          {
            level: 17,
            to_hit: 6
          },
          {
            level: 18,
            to_hit: 6
          },
          {
            level: 19,
            to_hit: 5
          },
          {
            level: 20,
            to_hit: 5
          },
          {
            level: 21,
            to_hit: 5
          }
        ]
      },
      {
        ac: 5,
        to_hit: [
          {
            level: 1,
            to_hit: 15
          },
          {
            level: 2,
            to_hit: 15
          },
          {
            level: 3,
            to_hit: 15
          },
          {
            level: 4,
            to_hit: 13
          },
          {
            level: 5,
            to_hit: 13
          },
          {
            level: 6,
            to_hit: 13
          },
          {
            level: 7,
            to_hit: 11
          },
          {
            level: 8,
            to_hit: 11
          },
          {
            level: 9,
            to_hit: 11
          },
          {
            level: 10,
            to_hit: 9
          },
          {
            level: 11,
            to_hit: 9
          },
          {
            level: 12,
            to_hit: 9
          },
          {
            level: 13,
            to_hit: 7
          },
          {
            level: 14,
            to_hit: 7
          },
          {
            level: 15,
            to_hit: 7
          },
          {
            level: 16,
            to_hit: 5
          },
          {
            level: 17,
            to_hit: 5
          },
          {
            level: 18,
            to_hit: 5
          },
          {
            level: 19,
            to_hit: 4
          },
          {
            level: 20,
            to_hit: 4
          },
          {
            level: 21,
            to_hit: 4
          }
        ]
      },
      {
        ac: 6,
        to_hit: [
          {
            level: 1,
            to_hit: 14
          },
          {
            level: 2,
            to_hit: 14
          },
          {
            level: 3,
            to_hit: 14
          },
          {
            level: 4,
            to_hit: 12
          },
          {
            level: 5,
            to_hit: 12
          },
          {
            level: 6,
            to_hit: 12
          },
          {
            level: 7,
            to_hit: 10
          },
          {
            level: 8,
            to_hit: 10
          },
          {
            level: 9,
            to_hit: 10
          },
          {
            level: 10,
            to_hit: 8
          },
          {
            level: 11,
            to_hit: 8
          },
          {
            level: 12,
            to_hit: 8
          },
          {
            level: 13,
            to_hit: 6
          },
          {
            level: 14,
            to_hit: 6
          },
          {
            level: 15,
            to_hit: 6
          },
          {
            level: 16,
            to_hit: 4
          },
          {
            level: 17,
            to_hit: 4
          },
          {
            level: 18,
            to_hit: 4
          },
          {
            level: 19,
            to_hit: 3
          },
          {
            level: 20,
            to_hit: 3
          },
          {
            level: 21,
            to_hit: 3
          }
        ]
      },
      {
        ac: 7,
        to_hit: [
          {
            level: 1,
            to_hit: 13
          },
          {
            level: 2,
            to_hit: 13
          },
          {
            level: 3,
            to_hit: 13
          },
          {
            level: 4,
            to_hit: 11
          },
          {
            level: 5,
            to_hit: 11
          },
          {
            level: 6,
            to_hit: 11
          },
          {
            level: 7,
            to_hit: 9
          },
          {
            level: 8,
            to_hit: 9
          },
          {
            level: 9,
            to_hit: 9
          },
          {
            level: 10,
            to_hit: 7
          },
          {
            level: 11,
            to_hit: 7
          },
          {
            level: 12,
            to_hit: 7
          },
          {
            level: 13,
            to_hit: 5
          },
          {
            level: 14,
            to_hit: 5
          },
          {
            level: 15,
            to_hit: 5
          },
          {
            level: 16,
            to_hit: 3
          },
          {
            level: 17,
            to_hit: 3
          },
          {
            level: 18,
            to_hit: 3
          },
          {
            level: 19,
            to_hit: 2
          },
          {
            level: 20,
            to_hit: 2
          },
          {
            level: 21,
            to_hit: 2
          }
        ]
      },
      {
        ac: 8,
        to_hit: [
          {
            level: 1,
            to_hit: 12
          },
          {
            level: 2,
            to_hit: 12
          },
          {
            level: 3,
            to_hit: 12
          },
          {
            level: 4,
            to_hit: 10
          },
          {
            level: 5,
            to_hit: 10
          },
          {
            level: 6,
            to_hit: 10
          },
          {
            level: 7,
            to_hit: 8
          },
          {
            level: 8,
            to_hit: 8
          },
          {
            level: 9,
            to_hit: 8
          },
          {
            level: 10,
            to_hit: 6
          },
          {
            level: 11,
            to_hit: 6
          },
          {
            level: 12,
            to_hit: 6
          },
          {
            level: 13,
            to_hit: 4
          },
          {
            level: 14,
            to_hit: 4
          },
          {
            level: 15,
            to_hit: 4
          },
          {
            level: 16,
            to_hit: 2
          },
          {
            level: 17,
            to_hit: 2
          },
          {
            level: 18,
            to_hit: 2
          },
          {
            level: 19,
            to_hit: 1
          },
          {
            level: 20,
            to_hit: 1
          },
          {
            level: 21,
            to_hit: 1
          }
        ]
      },
      {
        ac: 9,
        to_hit: [
          {
            level: 1,
            to_hit: 11
          },
          {
            level: 2,
            to_hit: 11
          },
          {
            level: 3,
            to_hit: 11
          },
          {
            level: 4,
            to_hit: 9
          },
          {
            level: 5,
            to_hit: 9
          },
          {
            level: 6,
            to_hit: 9
          },
          {
            level: 7,
            to_hit: 7
          },
          {
            level: 8,
            to_hit: 7
          },
          {
            level: 9,
            to_hit: 7
          },
          {
            level: 10,
            to_hit: 5
          },
          {
            level: 11,
            to_hit: 5
          },
          {
            level: 12,
            to_hit: 5
          },
          {
            level: 13,
            to_hit: 3
          },
          {
            level: 14,
            to_hit: 3
          },
          {
            level: 15,
            to_hit: 3
          },
          {
            level: 16,
            to_hit: 1
          },
          {
            level: 17,
            to_hit: 1
          },
          {
            level: 18,
            to_hit: 1
          },
          {
            level: 19,
            to_hit: 0
          },
          {
            level: 20,
            to_hit: 0
          },
          {
            level: 21,
            to_hit: 0
          }
        ]
      },
      {
        ac: 10,
        to_hit: [
          {
            level: 1,
            to_hit: 10
          },
          {
            level: 2,
            to_hit: 10
          },
          {
            level: 3,
            to_hit: 10
          },
          {
            level: 4,
            to_hit: 8
          },
          {
            level: 5,
            to_hit: 8
          },
          {
            level: 6,
            to_hit: 8
          },
          {
            level: 7,
            to_hit: 6
          },
          {
            level: 8,
            to_hit: 6
          },
          {
            level: 9,
            to_hit: 6
          },
          {
            level: 10,
            to_hit: 4
          },
          {
            level: 11,
            to_hit: 4
          },
          {
            level: 12,
            to_hit: 4
          },
          {
            level: 13,
            to_hit: 2
          },
          {
            level: 14,
            to_hit: 2
          },
          {
            level: 15,
            to_hit: 2
          },
          {
            level: 16,
            to_hit: 0
          },
          {
            level: 17,
            to_hit: 0
          },
          {
            level: 18,
            to_hit: 0
          },
          {
            level: 19,
            to_hit: -1
          },
          {
            level: 20,
            to_hit: -1
          },
          {
            level: 21,
            to_hit: -1
          }
        ]
      }
    ]
  }, {
    class: [Race.HALFLING, Race.HUMAN],
    to_hit: [
      {
        ac: -10,
        to_hit: [
          {
            level: 0,
            to_hit: 26
          }
        ]
      },
      {
        ac: -9,
        to_hit: [
          {
            level: 0,
            to_hit: 25
          }
        ]
      },
      {
        ac: -8,
        to_hit: [
          {
            level: 0,
            to_hit: 24
          }
        ]
      },
      {
        ac: -7,
        to_hit: [
          {
            level: 0,
            to_hit: 23
          }
        ]
      },
      {
        ac: -6,
        to_hit: [
          {
            level: 0,
            to_hit: 22
          }
        ]
      },
      {
        ac: -5,
        to_hit: [
          {
            level: 0,
            to_hit: 21
          }
        ]
      },
      {
        ac: -4,
        to_hit: [
          {
            level: 0,
            to_hit: 20
          }
        ]
      },
      {
        ac: -3,
        to_hit: [
          {
            level: 0,
            to_hit: 20
          }
        ]
      },
      {
        ac: -2,
        to_hit: [
          {
            level: 0,
            to_hit: 20
          }
        ]
      },
      {
        ac: -1,
        to_hit: [
          {
            level: 0,
            to_hit: 20
          }
        ]
      },
      {
        ac: 0,
        to_hit: [
          {
            level: 0,
            to_hit: 20
          }
        ]
      },
      {
        ac: 1,
        to_hit: [
          {
            level: 0,
            to_hit: 20
          }
        ]
      },
      {
        ac: 2,
        to_hit: [
          {
            level: 0,
            to_hit: 19
          }
        ]
      },
      {
        ac: 3,
        to_hit: [
          {
            level: 0,
            to_hit: 18
          }
        ]
      },
      {
        ac: 4,
        to_hit: [
          {
            level: 0,
            to_hit: 17
          }
        ]
      },
      {
        ac: 5,
        to_hit: [
          {
            level: 0,
            to_hit: 16
          }
        ]
      },
      {
        ac: 6,
        to_hit: [
          {
            level: 0,
            to_hit: 15
          }
        ]
      },
      {
        ac: 7,
        to_hit: [
          {
            level: 0,
            to_hit: 14
          }
        ]
      },
      {
        ac: 8,
        to_hit: [
          {
            level: 0,
            to_hit: 13
          }
        ]
      },
      {
        ac: 9,
        to_hit: [
          {
            level: 0,
            to_hit: 12
          }
        ]
      },
      {
        ac: 10,
        to_hit: [
          {
            level: 0,
            to_hit: 11
          }
        ]
      }
    ]
  },
  {
    class: [Class.FIGHTER, Class.PALADIN, Class.RANGER, Class.BARD],
    to_hit: [
      {
        ac: -10,
        to_hit: [
          {
            level: 1,
            to_hit: 25
          },
          {
            level: 2,
            to_hit: 25
          },
          {
            level: 3,
            to_hit: 23
          },
          {
            level: 4,
            to_hit: 23
          },
          {
            level: 5,
            to_hit: 21
          },
          {
            level: 6,
            to_hit: 21
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 18
          },
          {
            level: 14,
            to_hit: 18
          },
          {
            level: 15,
            to_hit: 16
          },
          {
            level: 16,
            to_hit: 16
          },
          {
            level: 17,
            to_hit: 14
          },
          {
            level: 18,
            to_hit: 14
          },
          {
            level: 19,
            to_hit: 14
          },
          {
            level: 20,
            to_hit: 14
          },
          {
            level: 21,
            to_hit: 14
          }
        ]
      },
      {
        ac: -9,
        to_hit: [
          {
            level: 1,
            to_hit: 24
          },
          {
            level: 2,
            to_hit: 24
          },
          {
            level: 3,
            to_hit: 22
          },
          {
            level: 4,
            to_hit: 22
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 19
          },
          {
            level: 12,
            to_hit: 19
          },
          {
            level: 13,
            to_hit: 17
          },
          {
            level: 14,
            to_hit: 17
          },
          {
            level: 15,
            to_hit: 15
          },
          {
            level: 16,
            to_hit: 15
          },
          {
            level: 17,
            to_hit: 13
          },
          {
            level: 18,
            to_hit: 13
          },
          {
            level: 19,
            to_hit: 13
          },
          {
            level: 20,
            to_hit: 13
          },
          {
            level: 21,
            to_hit: 13
          }
        ]
      },
      {
        ac: -8,
        to_hit: [
          {
            level: 1,
            to_hit: 23
          },
          {
            level: 2,
            to_hit: 23
          },
          {
            level: 3,
            to_hit: 21
          },
          {
            level: 4,
            to_hit: 21
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 18
          },
          {
            level: 12,
            to_hit: 18
          },
          {
            level: 13,
            to_hit: 16
          },
          {
            level: 14,
            to_hit: 16
          },
          {
            level: 15,
            to_hit: 14
          },
          {
            level: 16,
            to_hit: 14
          },
          {
            level: 17,
            to_hit: 12
          },
          {
            level: 18,
            to_hit: 12
          },
          {
            level: 19,
            to_hit: 12
          },
          {
            level: 20,
            to_hit: 12
          },
          {
            level: 21,
            to_hit: 12
          }
        ]
      },
      {
        ac: -7,
        to_hit: [
          {
            level: 1,
            to_hit: 22
          },
          {
            level: 2,
            to_hit: 22
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 19
          },
          {
            level: 10,
            to_hit: 19
          },
          {
            level: 11,
            to_hit: 17
          },
          {
            level: 12,
            to_hit: 17
          },
          {
            level: 13,
            to_hit: 15
          },
          {
            level: 14,
            to_hit: 15
          },
          {
            level: 15,
            to_hit: 13
          },
          {
            level: 16,
            to_hit: 13
          },
          {
            level: 17,
            to_hit: 11
          },
          {
            level: 18,
            to_hit: 11
          },
          {
            level: 19,
            to_hit: 11
          },
          {
            level: 20,
            to_hit: 11
          },
          {
            level: 21,
            to_hit: 11
          }
        ]
      },
      {
        ac: -6,
        to_hit: [
          {
            level: 1,
            to_hit: 21
          },
          {
            level: 2,
            to_hit: 21
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 18
          },
          {
            level: 10,
            to_hit: 18
          },
          {
            level: 11,
            to_hit: 16
          },
          {
            level: 12,
            to_hit: 16
          },
          {
            level: 13,
            to_hit: 14
          },
          {
            level: 14,
            to_hit: 14
          },
          {
            level: 15,
            to_hit: 12
          },
          {
            level: 16,
            to_hit: 12
          },
          {
            level: 17,
            to_hit: 10
          },
          {
            level: 18,
            to_hit: 10
          },
          {
            level: 19,
            to_hit: 10
          },
          {
            level: 20,
            to_hit: 10
          },
          {
            level: 21,
            to_hit: 10
          }
        ]
      },
      {
        ac: -5,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 19
          },
          {
            level: 8,
            to_hit: 19
          },
          {
            level: 9,
            to_hit: 17
          },
          {
            level: 10,
            to_hit: 17
          },
          {
            level: 11,
            to_hit: 15
          },
          {
            level: 12,
            to_hit: 15
          },
          {
            level: 13,
            to_hit: 13
          },
          {
            level: 14,
            to_hit: 13
          },
          {
            level: 15,
            to_hit: 11
          },
          {
            level: 16,
            to_hit: 11
          },
          {
            level: 17,
            to_hit: 9
          },
          {
            level: 18,
            to_hit: 9
          },
          {
            level: 19,
            to_hit: 9
          },
          {
            level: 20,
            to_hit: 9
          },
          {
            level: 21,
            to_hit: 9
          }
        ]
      },
      {
        ac: -4,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 18
          },
          {
            level: 8,
            to_hit: 18
          },
          {
            level: 9,
            to_hit: 16
          },
          {
            level: 10,
            to_hit: 16
          },
          {
            level: 11,
            to_hit: 14
          },
          {
            level: 12,
            to_hit: 14
          },
          {
            level: 13,
            to_hit: 12
          },
          {
            level: 14,
            to_hit: 12
          },
          {
            level: 15,
            to_hit: 10
          },
          {
            level: 16,
            to_hit: 10
          },
          {
            level: 17,
            to_hit: 8
          },
          {
            level: 18,
            to_hit: 8
          },
          {
            level: 19,
            to_hit: 8
          },
          {
            level: 20,
            to_hit: 8
          },
          {
            level: 21,
            to_hit: 8
          }
        ]
      },
      {
        ac: -3,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 19
          },
          {
            level: 6,
            to_hit: 19
          },
          {
            level: 7,
            to_hit: 17
          },
          {
            level: 8,
            to_hit: 17
          },
          {
            level: 9,
            to_hit: 15
          },
          {
            level: 10,
            to_hit: 15
          },
          {
            level: 11,
            to_hit: 13
          },
          {
            level: 12,
            to_hit: 13
          },
          {
            level: 13,
            to_hit: 11
          },
          {
            level: 14,
            to_hit: 11
          },
          {
            level: 15,
            to_hit: 9
          },
          {
            level: 16,
            to_hit: 9
          },
          {
            level: 17,
            to_hit: 7
          },
          {
            level: 18,
            to_hit: 7
          },
          {
            level: 19,
            to_hit: 7
          },
          {
            level: 20,
            to_hit: 7
          },
          {
            level: 21,
            to_hit: 7
          }
        ]
      },
      {
        ac: -2,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 18
          },
          {
            level: 6,
            to_hit: 18
          },
          {
            level: 7,
            to_hit: 16
          },
          {
            level: 8,
            to_hit: 16
          },
          {
            level: 9,
            to_hit: 14
          },
          {
            level: 10,
            to_hit: 14
          },
          {
            level: 11,
            to_hit: 12
          },
          {
            level: 12,
            to_hit: 12
          },
          {
            level: 13,
            to_hit: 10
          },
          {
            level: 14,
            to_hit: 10
          },
          {
            level: 15,
            to_hit: 8
          },
          {
            level: 16,
            to_hit: 8
          },
          {
            level: 17,
            to_hit: 6
          },
          {
            level: 18,
            to_hit: 6
          },
          {
            level: 19,
            to_hit: 6
          },
          {
            level: 20,
            to_hit: 6
          },
          {
            level: 21,
            to_hit: 6
          }
        ]
      },
      {
        ac: -1,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 19
          },
          {
            level: 4,
            to_hit: 19
          },
          {
            level: 5,
            to_hit: 17
          },
          {
            level: 6,
            to_hit: 17
          },
          {
            level: 7,
            to_hit: 15
          },
          {
            level: 8,
            to_hit: 15
          },
          {
            level: 9,
            to_hit: 13
          },
          {
            level: 10,
            to_hit: 13
          },
          {
            level: 11,
            to_hit: 11
          },
          {
            level: 12,
            to_hit: 11
          },
          {
            level: 13,
            to_hit: 9
          },
          {
            level: 14,
            to_hit: 9
          },
          {
            level: 15,
            to_hit: 7
          },
          {
            level: 16,
            to_hit: 7
          },
          {
            level: 17,
            to_hit: 5
          },
          {
            level: 18,
            to_hit: 5
          },
          {
            level: 19,
            to_hit: 5
          },
          {
            level: 20,
            to_hit: 5
          },
          {
            level: 21,
            to_hit: 5
          }
        ]
      },
      {
        ac: 0,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 18
          },
          {
            level: 4,
            to_hit: 18
          },
          {
            level: 5,
            to_hit: 16
          },
          {
            level: 6,
            to_hit: 16
          },
          {
            level: 7,
            to_hit: 14
          },
          {
            level: 8,
            to_hit: 14
          },
          {
            level: 9,
            to_hit: 12
          },
          {
            level: 10,
            to_hit: 12
          },
          {
            level: 11,
            to_hit: 10
          },
          {
            level: 12,
            to_hit: 10
          },
          {
            level: 13,
            to_hit: 8
          },
          {
            level: 14,
            to_hit: 8
          },
          {
            level: 15,
            to_hit: 6
          },
          {
            level: 16,
            to_hit: 6
          },
          {
            level: 17,
            to_hit: 4
          },
          {
            level: 18,
            to_hit: 4
          },
          {
            level: 19,
            to_hit: 4
          },
          {
            level: 20,
            to_hit: 4
          },
          {
            level: 21,
            to_hit: 4
          }
        ]
      },
      {
        ac: 1,
        to_hit: [
          {
            level: 1,
            to_hit: 19
          },
          {
            level: 2,
            to_hit: 19
          },
          {
            level: 3,
            to_hit: 17
          },
          {
            level: 4,
            to_hit: 17
          },
          {
            level: 5,
            to_hit: 15
          },
          {
            level: 6,
            to_hit: 15
          },
          {
            level: 7,
            to_hit: 13
          },
          {
            level: 8,
            to_hit: 13
          },
          {
            level: 9,
            to_hit: 11
          },
          {
            level: 10,
            to_hit: 11
          },
          {
            level: 11,
            to_hit: 9
          },
          {
            level: 12,
            to_hit: 9
          },
          {
            level: 13,
            to_hit: 7
          },
          {
            level: 14,
            to_hit: 7
          },
          {
            level: 15,
            to_hit: 5
          },
          {
            level: 16,
            to_hit: 5
          },
          {
            level: 17,
            to_hit: 3
          },
          {
            level: 18,
            to_hit: 3
          },
          {
            level: 19,
            to_hit: 3
          },
          {
            level: 20,
            to_hit: 3
          },
          {
            level: 21,
            to_hit: 3
          }
        ]
      },
      {
        ac: 2,
        to_hit: [
          {
            level: 1,
            to_hit: 18
          },
          {
            level: 2,
            to_hit: 18
          },
          {
            level: 3,
            to_hit: 16
          },
          {
            level: 4,
            to_hit: 16
          },
          {
            level: 5,
            to_hit: 14
          },
          {
            level: 6,
            to_hit: 14
          },
          {
            level: 7,
            to_hit: 12
          },
          {
            level: 8,
            to_hit: 12
          },
          {
            level: 9,
            to_hit: 10
          },
          {
            level: 10,
            to_hit: 10
          },
          {
            level: 11,
            to_hit: 8
          },
          {
            level: 12,
            to_hit: 8
          },
          {
            level: 13,
            to_hit: 6
          },
          {
            level: 14,
            to_hit: 6
          },
          {
            level: 15,
            to_hit: 4
          },
          {
            level: 16,
            to_hit: 4
          },
          {
            level: 17,
            to_hit: 2
          },
          {
            level: 18,
            to_hit: 2
          },
          {
            level: 19,
            to_hit: 2
          },
          {
            level: 20,
            to_hit: 2
          },
          {
            level: 21,
            to_hit: 2
          }
        ]
      },
      {
        ac: 3,
        to_hit: [
          {
            level: 1,
            to_hit: 17
          },
          {
            level: 2,
            to_hit: 17
          },
          {
            level: 3,
            to_hit: 15
          },
          {
            level: 4,
            to_hit: 15
          },
          {
            level: 5,
            to_hit: 13
          },
          {
            level: 6,
            to_hit: 13
          },
          {
            level: 7,
            to_hit: 11
          },
          {
            level: 8,
            to_hit: 11
          },
          {
            level: 9,
            to_hit: 9
          },
          {
            level: 10,
            to_hit: 9
          },
          {
            level: 11,
            to_hit: 7
          },
          {
            level: 12,
            to_hit: 7
          },
          {
            level: 13,
            to_hit: 5
          },
          {
            level: 14,
            to_hit: 5
          },
          {
            level: 15,
            to_hit: 3
          },
          {
            level: 16,
            to_hit: 3
          },
          {
            level: 17,
            to_hit: 1
          },
          {
            level: 18,
            to_hit: 1
          },
          {
            level: 19,
            to_hit: 1
          },
          {
            level: 20,
            to_hit: 1
          },
          {
            level: 21,
            to_hit: 1
          }
        ]
      },
      {
        ac: 4,
        to_hit: [
          {
            level: 1,
            to_hit: 16
          },
          {
            level: 2,
            to_hit: 16
          },
          {
            level: 3,
            to_hit: 14
          },
          {
            level: 4,
            to_hit: 14
          },
          {
            level: 5,
            to_hit: 12
          },
          {
            level: 6,
            to_hit: 12
          },
          {
            level: 7,
            to_hit: 10
          },
          {
            level: 8,
            to_hit: 10
          },
          {
            level: 9,
            to_hit: 8
          },
          {
            level: 10,
            to_hit: 8
          },
          {
            level: 11,
            to_hit: 6
          },
          {
            level: 12,
            to_hit: 6
          },
          {
            level: 13,
            to_hit: 4
          },
          {
            level: 14,
            to_hit: 4
          },
          {
            level: 15,
            to_hit: 2
          },
          {
            level: 16,
            to_hit: 2
          },
          {
            level: 17,
            to_hit: 0
          },
          {
            level: 18,
            to_hit: 0
          },
          {
            level: 19,
            to_hit: 0
          },
          {
            level: 20,
            to_hit: 0
          },
          {
            level: 21,
            to_hit: 0
          }
        ]
      },
      {
        ac: 5,
        to_hit: [
          {
            level: 1,
            to_hit: 15
          },
          {
            level: 2,
            to_hit: 15
          },
          {
            level: 3,
            to_hit: 13
          },
          {
            level: 4,
            to_hit: 13
          },
          {
            level: 5,
            to_hit: 11
          },
          {
            level: 6,
            to_hit: 11
          },
          {
            level: 7,
            to_hit: 9
          },
          {
            level: 8,
            to_hit: 9
          },
          {
            level: 9,
            to_hit: 7
          },
          {
            level: 10,
            to_hit: 7
          },
          {
            level: 11,
            to_hit: 5
          },
          {
            level: 12,
            to_hit: 5
          },
          {
            level: 13,
            to_hit: 3
          },
          {
            level: 14,
            to_hit: 3
          },
          {
            level: 15,
            to_hit: 1
          },
          {
            level: 16,
            to_hit: 1
          },
          {
            level: 17,
            to_hit: -1
          },
          {
            level: 18,
            to_hit: -1
          },
          {
            level: 19,
            to_hit: -1
          },
          {
            level: 20,
            to_hit: -1
          },
          {
            level: 21,
            to_hit: -1
          }
        ]
      },
      {
        ac: 6,
        to_hit: [
          {
            level: 1,
            to_hit: 14
          },
          {
            level: 2,
            to_hit: 14
          },
          {
            level: 3,
            to_hit: 12
          },
          {
            level: 4,
            to_hit: 12
          },
          {
            level: 5,
            to_hit: 10
          },
          {
            level: 6,
            to_hit: 10
          },
          {
            level: 7,
            to_hit: 8
          },
          {
            level: 8,
            to_hit: 8
          },
          {
            level: 9,
            to_hit: 6
          },
          {
            level: 10,
            to_hit: 6
          },
          {
            level: 11,
            to_hit: 4
          },
          {
            level: 12,
            to_hit: 4
          },
          {
            level: 13,
            to_hit: 2
          },
          {
            level: 14,
            to_hit: 2
          },
          {
            level: 15,
            to_hit: 0
          },
          {
            level: 16,
            to_hit: 0
          },
          {
            level: 17,
            to_hit: -2
          },
          {
            level: 18,
            to_hit: -2
          },
          {
            level: 19,
            to_hit: -2
          },
          {
            level: 20,
            to_hit: -2
          },
          {
            level: 21,
            to_hit: -2
          }
        ]
      },
      {
        ac: 7,
        to_hit: [
          {
            level: 1,
            to_hit: 13
          },
          {
            level: 2,
            to_hit: 13
          },
          {
            level: 3,
            to_hit: 11
          },
          {
            level: 4,
            to_hit: 11
          },
          {
            level: 5,
            to_hit: 9
          },
          {
            level: 6,
            to_hit: 9
          },
          {
            level: 7,
            to_hit: 7
          },
          {
            level: 8,
            to_hit: 7
          },
          {
            level: 9,
            to_hit: 5
          },
          {
            level: 10,
            to_hit: 5
          },
          {
            level: 11,
            to_hit: 3
          },
          {
            level: 12,
            to_hit: 3
          },
          {
            level: 13,
            to_hit: 1
          },
          {
            level: 14,
            to_hit: 1
          },
          {
            level: 15,
            to_hit: -1
          },
          {
            level: 16,
            to_hit: -1
          },
          {
            level: 17,
            to_hit: -3
          },
          {
            level: 18,
            to_hit: -3
          },
          {
            level: 19,
            to_hit: -3
          },
          {
            level: 20,
            to_hit: -3
          },
          {
            level: 21,
            to_hit: -3
          }
        ]
      },
      {
        ac: 8,
        to_hit: [
          {
            level: 1,
            to_hit: 12
          },
          {
            level: 2,
            to_hit: 12
          },
          {
            level: 3,
            to_hit: 10
          },
          {
            level: 4,
            to_hit: 10
          },
          {
            level: 5,
            to_hit: 8
          },
          {
            level: 6,
            to_hit: 8
          },
          {
            level: 7,
            to_hit: 6
          },
          {
            level: 8,
            to_hit: 6
          },
          {
            level: 9,
            to_hit: 4
          },
          {
            level: 10,
            to_hit: 4
          },
          {
            level: 11,
            to_hit: 2
          },
          {
            level: 12,
            to_hit: 2
          },
          {
            level: 13,
            to_hit: 0
          },
          {
            level: 14,
            to_hit: 0
          },
          {
            level: 15,
            to_hit: -2
          },
          {
            level: 16,
            to_hit: -2
          },
          {
            level: 17,
            to_hit: -4
          },
          {
            level: 18,
            to_hit: -4
          },
          {
            level: 19,
            to_hit: -4
          },
          {
            level: 20,
            to_hit: -4
          },
          {
            level: 21,
            to_hit: -4
          }
        ]
      },
      {
        ac: 9,
        to_hit: [
          {
            level: 1,
            to_hit: 11
          },
          {
            level: 2,
            to_hit: 11
          },
          {
            level: 3,
            to_hit: 9
          },
          {
            level: 4,
            to_hit: 9
          },
          {
            level: 5,
            to_hit: 7
          },
          {
            level: 6,
            to_hit: 7
          },
          {
            level: 7,
            to_hit: 5
          },
          {
            level: 8,
            to_hit: 5
          },
          {
            level: 9,
            to_hit: 3
          },
          {
            level: 10,
            to_hit: 3
          },
          {
            level: 11,
            to_hit: 1
          },
          {
            level: 12,
            to_hit: 1
          },
          {
            level: 13,
            to_hit: -1
          },
          {
            level: 14,
            to_hit: -1
          },
          {
            level: 15,
            to_hit: -3
          },
          {
            level: 16,
            to_hit: -3
          },
          {
            level: 17,
            to_hit: -5
          },
          {
            level: 18,
            to_hit: -5
          },
          {
            level: 19,
            to_hit: -5
          },
          {
            level: 20,
            to_hit: -5
          },
          {
            level: 21,
            to_hit: -5
          }
        ]
      },
      {
        ac: 10,
        to_hit: [
          {
            level: 1,
            to_hit: 10
          },
          {
            level: 2,
            to_hit: 10
          },
          {
            level: 3,
            to_hit: 8
          },
          {
            level: 4,
            to_hit: 8
          },
          {
            level: 5,
            to_hit: 6
          },
          {
            level: 6,
            to_hit: 6
          },
          {
            level: 7,
            to_hit: 4
          },
          {
            level: 8,
            to_hit: 4
          },
          {
            level: 9,
            to_hit: 2
          },
          {
            level: 10,
            to_hit: 2
          },
          {
            level: 11,
            to_hit: 0
          },
          {
            level: 12,
            to_hit: 0
          },
          {
            level: 13,
            to_hit: -2
          },
          {
            level: 14,
            to_hit: -2
          },
          {
            level: 15,
            to_hit: -4
          },
          {
            level: 16,
            to_hit: -4
          },
          {
            level: 17,
            to_hit: -6
          },
          {
            level: 18,
            to_hit: -6
          },
          {
            level: 19,
            to_hit: -6
          },
          {
            level: 20,
            to_hit: -6
          },
          {
            level: 21,
            to_hit: -6
          }
        ]
      }
    ]
  },
  {
    class: [Class.MAGICUSER, Class.ILLUSIONIST],
    to_hit: [
      {
        ac: -10,
        to_hit: [
          {
            level: 1,
            to_hit: 26
          },
          {
            level: 2,
            to_hit: 26
          },
          {
            level: 3,
            to_hit: 26
          },
          {
            level: 4,
            to_hit: 26
          },
          {
            level: 5,
            to_hit: 26
          },
          {
            level: 6,
            to_hit: 24
          },
          {
            level: 7,
            to_hit: 24
          },
          {
            level: 8,
            to_hit: 24
          },
          {
            level: 9,
            to_hit: 24
          },
          {
            level: 10,
            to_hit: 24
          },
          {
            level: 11,
            to_hit: 21
          },
          {
            level: 12,
            to_hit: 21
          },
          {
            level: 13,
            to_hit: 21
          },
          {
            level: 14,
            to_hit: 21
          },
          {
            level: 15,
            to_hit: 21
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 20
          },
          {
            level: 18,
            to_hit: 20
          },
          {
            level: 19,
            to_hit: 20
          },
          {
            level: 20,
            to_hit: 20
          },
          {
            level: 21,
            to_hit: 20
          }
        ]
      },
      {
        ac: -9,
        to_hit: [
          {
            level: 1,
            to_hit: 25
          },
          {
            level: 2,
            to_hit: 25
          },
          {
            level: 3,
            to_hit: 25
          },
          {
            level: 4,
            to_hit: 25
          },
          {
            level: 5,
            to_hit: 25
          },
          {
            level: 6,
            to_hit: 23
          },
          {
            level: 7,
            to_hit: 23
          },
          {
            level: 8,
            to_hit: 23
          },
          {
            level: 9,
            to_hit: 23
          },
          {
            level: 10,
            to_hit: 23
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 20
          },
          {
            level: 18,
            to_hit: 20
          },
          {
            level: 19,
            to_hit: 20
          },
          {
            level: 20,
            to_hit: 20
          },
          {
            level: 21,
            to_hit: 20
          }
        ]
      },
      {
        ac: -8,
        to_hit: [
          {
            level: 1,
            to_hit: 24
          },
          {
            level: 2,
            to_hit: 24
          },
          {
            level: 3,
            to_hit: 24
          },
          {
            level: 4,
            to_hit: 24
          },
          {
            level: 5,
            to_hit: 24
          },
          {
            level: 6,
            to_hit: 22
          },
          {
            level: 7,
            to_hit: 22
          },
          {
            level: 8,
            to_hit: 22
          },
          {
            level: 9,
            to_hit: 22
          },
          {
            level: 10,
            to_hit: 22
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 20
          },
          {
            level: 18,
            to_hit: 20
          },
          {
            level: 19,
            to_hit: 20
          },
          {
            level: 20,
            to_hit: 20
          },
          {
            level: 21,
            to_hit: 19
          }
        ]
      },
      {
        ac: -7,
        to_hit: [
          {
            level: 1,
            to_hit: 23
          },
          {
            level: 2,
            to_hit: 23
          },
          {
            level: 3,
            to_hit: 23
          },
          {
            level: 4,
            to_hit: 23
          },
          {
            level: 5,
            to_hit: 23
          },
          {
            level: 6,
            to_hit: 21
          },
          {
            level: 7,
            to_hit: 21
          },
          {
            level: 8,
            to_hit: 21
          },
          {
            level: 9,
            to_hit: 21
          },
          {
            level: 10,
            to_hit: 21
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 20
          },
          {
            level: 18,
            to_hit: 20
          },
          {
            level: 19,
            to_hit: 20
          },
          {
            level: 20,
            to_hit: 20
          },
          {
            level: 21,
            to_hit: 18
          }
        ]
      },
      {
        ac: -6,
        to_hit: [
          {
            level: 1,
            to_hit: 22
          },
          {
            level: 2,
            to_hit: 22
          },
          {
            level: 3,
            to_hit: 22
          },
          {
            level: 4,
            to_hit: 22
          },
          {
            level: 5,
            to_hit: 22
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 19
          },
          {
            level: 17,
            to_hit: 19
          },
          {
            level: 18,
            to_hit: 19
          },
          {
            level: 19,
            to_hit: 19
          },
          {
            level: 20,
            to_hit: 19
          },
          {
            level: 21,
            to_hit: 17
          }
        ]
      },
      {
        ac: -5,
        to_hit: [
          {
            level: 1,
            to_hit: 21
          },
          {
            level: 2,
            to_hit: 21
          },
          {
            level: 3,
            to_hit: 21
          },
          {
            level: 4,
            to_hit: 21
          },
          {
            level: 5,
            to_hit: 21
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 18
          },
          {
            level: 17,
            to_hit: 18
          },
          {
            level: 18,
            to_hit: 18
          },
          {
            level: 19,
            to_hit: 18
          },
          {
            level: 20,
            to_hit: 18
          },
          {
            level: 21,
            to_hit: 16
          }
        ]
      },
      {
        ac: -4,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 17
          },
          {
            level: 17,
            to_hit: 17
          },
          {
            level: 18,
            to_hit: 17
          },
          {
            level: 19,
            to_hit: 17
          },
          {
            level: 20,
            to_hit: 17
          },
          {
            level: 21,
            to_hit: 15
          }
        ]
      },
      {
        ac: -3,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 19
          },
          {
            level: 12,
            to_hit: 19
          },
          {
            level: 13,
            to_hit: 19
          },
          {
            level: 14,
            to_hit: 19
          },
          {
            level: 15,
            to_hit: 19
          },
          {
            level: 16,
            to_hit: 16
          },
          {
            level: 17,
            to_hit: 16
          },
          {
            level: 18,
            to_hit: 16
          },
          {
            level: 19,
            to_hit: 16
          },
          {
            level: 20,
            to_hit: 16
          },
          {
            level: 21,
            to_hit: 14
          }
        ]
      },
      {
        ac: -2,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 18
          },
          {
            level: 12,
            to_hit: 18
          },
          {
            level: 13,
            to_hit: 18
          },
          {
            level: 14,
            to_hit: 18
          },
          {
            level: 15,
            to_hit: 18
          },
          {
            level: 16,
            to_hit: 15
          },
          {
            level: 17,
            to_hit: 15
          },
          {
            level: 18,
            to_hit: 15
          },
          {
            level: 19,
            to_hit: 15
          },
          {
            level: 20,
            to_hit: 15
          },
          {
            level: 21,
            to_hit: 13
          }
        ]
      },
      {
        ac: -1,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 17
          },
          {
            level: 12,
            to_hit: 17
          },
          {
            level: 13,
            to_hit: 17
          },
          {
            level: 14,
            to_hit: 17
          },
          {
            level: 15,
            to_hit: 17
          },
          {
            level: 16,
            to_hit: 14
          },
          {
            level: 17,
            to_hit: 14
          },
          {
            level: 18,
            to_hit: 14
          },
          {
            level: 19,
            to_hit: 14
          },
          {
            level: 20,
            to_hit: 14
          },
          {
            level: 21,
            to_hit: 12
          }
        ]
      },
      {
        ac: 0,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 19
          },
          {
            level: 7,
            to_hit: 19
          },
          {
            level: 8,
            to_hit: 19
          },
          {
            level: 9,
            to_hit: 19
          },
          {
            level: 10,
            to_hit: 19
          },
          {
            level: 11,
            to_hit: 16
          },
          {
            level: 12,
            to_hit: 16
          },
          {
            level: 13,
            to_hit: 16
          },
          {
            level: 14,
            to_hit: 16
          },
          {
            level: 15,
            to_hit: 16
          },
          {
            level: 16,
            to_hit: 13
          },
          {
            level: 17,
            to_hit: 13
          },
          {
            level: 18,
            to_hit: 13
          },
          {
            level: 19,
            to_hit: 13
          },
          {
            level: 20,
            to_hit: 13
          },
          {
            level: 21,
            to_hit: 11
          }
        ]
      },
      {
        ac: 1,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 18
          },
          {
            level: 7,
            to_hit: 18
          },
          {
            level: 8,
            to_hit: 18
          },
          {
            level: 9,
            to_hit: 18
          },
          {
            level: 10,
            to_hit: 18
          },
          {
            level: 11,
            to_hit: 15
          },
          {
            level: 12,
            to_hit: 15
          },
          {
            level: 13,
            to_hit: 15
          },
          {
            level: 14,
            to_hit: 15
          },
          {
            level: 15,
            to_hit: 15
          },
          {
            level: 16,
            to_hit: 12
          },
          {
            level: 17,
            to_hit: 12
          },
          {
            level: 18,
            to_hit: 12
          },
          {
            level: 19,
            to_hit: 12
          },
          {
            level: 20,
            to_hit: 12
          },
          {
            level: 21,
            to_hit: 10
          }
        ]
      },
      {
        ac: 2,
        to_hit: [
          {
            level: 1,
            to_hit: 19
          },
          {
            level: 2,
            to_hit: 19
          },
          {
            level: 3,
            to_hit: 19
          },
          {
            level: 4,
            to_hit: 19
          },
          {
            level: 5,
            to_hit: 19
          },
          {
            level: 6,
            to_hit: 17
          },
          {
            level: 7,
            to_hit: 17
          },
          {
            level: 8,
            to_hit: 17
          },
          {
            level: 9,
            to_hit: 17
          },
          {
            level: 10,
            to_hit: 17
          },
          {
            level: 11,
            to_hit: 14
          },
          {
            level: 12,
            to_hit: 14
          },
          {
            level: 13,
            to_hit: 14
          },
          {
            level: 14,
            to_hit: 14
          },
          {
            level: 15,
            to_hit: 14
          },
          {
            level: 16,
            to_hit: 11
          },
          {
            level: 17,
            to_hit: 11
          },
          {
            level: 18,
            to_hit: 11
          },
          {
            level: 19,
            to_hit: 11
          },
          {
            level: 20,
            to_hit: 11
          },
          {
            level: 21,
            to_hit: 9
          }
        ]
      },
      {
        ac: 3,
        to_hit: [
          {
            level: 1,
            to_hit: 18
          },
          {
            level: 2,
            to_hit: 18
          },
          {
            level: 3,
            to_hit: 18
          },
          {
            level: 4,
            to_hit: 18
          },
          {
            level: 5,
            to_hit: 18
          },
          {
            level: 6,
            to_hit: 16
          },
          {
            level: 7,
            to_hit: 16
          },
          {
            level: 8,
            to_hit: 16
          },
          {
            level: 9,
            to_hit: 16
          },
          {
            level: 10,
            to_hit: 16
          },
          {
            level: 11,
            to_hit: 13
          },
          {
            level: 12,
            to_hit: 13
          },
          {
            level: 13,
            to_hit: 13
          },
          {
            level: 14,
            to_hit: 13
          },
          {
            level: 15,
            to_hit: 13
          },
          {
            level: 16,
            to_hit: 10
          },
          {
            level: 17,
            to_hit: 10
          },
          {
            level: 18,
            to_hit: 10
          },
          {
            level: 19,
            to_hit: 10
          },
          {
            level: 20,
            to_hit: 10
          },
          {
            level: 21,
            to_hit: 8
          }
        ]
      },
      {
        ac: 4,
        to_hit: [
          {
            level: 1,
            to_hit: 17
          },
          {
            level: 2,
            to_hit: 17
          },
          {
            level: 3,
            to_hit: 17
          },
          {
            level: 4,
            to_hit: 17
          },
          {
            level: 5,
            to_hit: 17
          },
          {
            level: 6,
            to_hit: 15
          },
          {
            level: 7,
            to_hit: 15
          },
          {
            level: 8,
            to_hit: 15
          },
          {
            level: 9,
            to_hit: 15
          },
          {
            level: 10,
            to_hit: 15
          },
          {
            level: 11,
            to_hit: 12
          },
          {
            level: 12,
            to_hit: 12
          },
          {
            level: 13,
            to_hit: 12
          },
          {
            level: 14,
            to_hit: 12
          },
          {
            level: 15,
            to_hit: 12
          },
          {
            level: 16,
            to_hit: 9
          },
          {
            level: 17,
            to_hit: 9
          },
          {
            level: 18,
            to_hit: 9
          },
          {
            level: 19,
            to_hit: 9
          },
          {
            level: 20,
            to_hit: 9
          },
          {
            level: 21,
            to_hit: 7
          }
        ]
      },
      {
        ac: 5,
        to_hit: [
          {
            level: 1,
            to_hit: 16
          },
          {
            level: 2,
            to_hit: 16
          },
          {
            level: 3,
            to_hit: 16
          },
          {
            level: 4,
            to_hit: 16
          },
          {
            level: 5,
            to_hit: 16
          },
          {
            level: 6,
            to_hit: 14
          },
          {
            level: 7,
            to_hit: 14
          },
          {
            level: 8,
            to_hit: 14
          },
          {
            level: 9,
            to_hit: 14
          },
          {
            level: 10,
            to_hit: 14
          },
          {
            level: 11,
            to_hit: 11
          },
          {
            level: 12,
            to_hit: 11
          },
          {
            level: 13,
            to_hit: 11
          },
          {
            level: 14,
            to_hit: 11
          },
          {
            level: 15,
            to_hit: 11
          },
          {
            level: 16,
            to_hit: 8
          },
          {
            level: 17,
            to_hit: 8
          },
          {
            level: 18,
            to_hit: 8
          },
          {
            level: 19,
            to_hit: 8
          },
          {
            level: 20,
            to_hit: 8
          },
          {
            level: 21,
            to_hit: 6
          }
        ]
      },
      {
        ac: 6,
        to_hit: [
          {
            level: 1,
            to_hit: 15
          },
          {
            level: 2,
            to_hit: 15
          },
          {
            level: 3,
            to_hit: 15
          },
          {
            level: 4,
            to_hit: 15
          },
          {
            level: 5,
            to_hit: 15
          },
          {
            level: 6,
            to_hit: 13
          },
          {
            level: 7,
            to_hit: 13
          },
          {
            level: 8,
            to_hit: 13
          },
          {
            level: 9,
            to_hit: 13
          },
          {
            level: 10,
            to_hit: 13
          },
          {
            level: 11,
            to_hit: 10
          },
          {
            level: 12,
            to_hit: 10
          },
          {
            level: 13,
            to_hit: 10
          },
          {
            level: 14,
            to_hit: 10
          },
          {
            level: 15,
            to_hit: 10
          },
          {
            level: 16,
            to_hit: 7
          },
          {
            level: 17,
            to_hit: 7
          },
          {
            level: 18,
            to_hit: 7
          },
          {
            level: 19,
            to_hit: 7
          },
          {
            level: 20,
            to_hit: 7
          },
          {
            level: 21,
            to_hit: 5
          }
        ]
      },
      {
        ac: 7,
        to_hit: [
          {
            level: 1,
            to_hit: 14
          },
          {
            level: 2,
            to_hit: 14
          },
          {
            level: 3,
            to_hit: 14
          },
          {
            level: 4,
            to_hit: 14
          },
          {
            level: 5,
            to_hit: 14
          },
          {
            level: 6,
            to_hit: 12
          },
          {
            level: 7,
            to_hit: 12
          },
          {
            level: 8,
            to_hit: 12
          },
          {
            level: 9,
            to_hit: 12
          },
          {
            level: 10,
            to_hit: 12
          },
          {
            level: 11,
            to_hit: 9
          },
          {
            level: 12,
            to_hit: 9
          },
          {
            level: 13,
            to_hit: 9
          },
          {
            level: 14,
            to_hit: 9
          },
          {
            level: 15,
            to_hit: 9
          },
          {
            level: 16,
            to_hit: 6
          },
          {
            level: 17,
            to_hit: 6
          },
          {
            level: 18,
            to_hit: 6
          },
          {
            level: 19,
            to_hit: 6
          },
          {
            level: 20,
            to_hit: 6
          },
          {
            level: 21,
            to_hit: 4
          }
        ]
      },
      {
        ac: 8,
        to_hit: [
          {
            level: 1,
            to_hit: 13
          },
          {
            level: 2,
            to_hit: 13
          },
          {
            level: 3,
            to_hit: 13
          },
          {
            level: 4,
            to_hit: 13
          },
          {
            level: 5,
            to_hit: 13
          },
          {
            level: 6,
            to_hit: 11
          },
          {
            level: 7,
            to_hit: 11
          },
          {
            level: 8,
            to_hit: 11
          },
          {
            level: 9,
            to_hit: 11
          },
          {
            level: 10,
            to_hit: 11
          },
          {
            level: 11,
            to_hit: 8
          },
          {
            level: 12,
            to_hit: 8
          },
          {
            level: 13,
            to_hit: 8
          },
          {
            level: 14,
            to_hit: 8
          },
          {
            level: 15,
            to_hit: 8
          },
          {
            level: 16,
            to_hit: 5
          },
          {
            level: 17,
            to_hit: 5
          },
          {
            level: 18,
            to_hit: 5
          },
          {
            level: 19,
            to_hit: 5
          },
          {
            level: 20,
            to_hit: 5
          },
          {
            level: 21,
            to_hit: 3
          }
        ]
      },
      {
        ac: 9,
        to_hit: [
          {
            level: 1,
            to_hit: 12
          },
          {
            level: 2,
            to_hit: 12
          },
          {
            level: 3,
            to_hit: 12
          },
          {
            level: 4,
            to_hit: 12
          },
          {
            level: 5,
            to_hit: 12
          },
          {
            level: 6,
            to_hit: 10
          },
          {
            level: 7,
            to_hit: 10
          },
          {
            level: 8,
            to_hit: 10
          },
          {
            level: 9,
            to_hit: 10
          },
          {
            level: 10,
            to_hit: 10
          },
          {
            level: 11,
            to_hit: 7
          },
          {
            level: 12,
            to_hit: 7
          },
          {
            level: 13,
            to_hit: 7
          },
          {
            level: 14,
            to_hit: 7
          },
          {
            level: 15,
            to_hit: 7
          },
          {
            level: 16,
            to_hit: 4
          },
          {
            level: 17,
            to_hit: 4
          },
          {
            level: 18,
            to_hit: 4
          },
          {
            level: 19,
            to_hit: 4
          },
          {
            level: 20,
            to_hit: 4
          },
          {
            level: 21,
            to_hit: 2
          }
        ]
      },
      {
        ac: 10,
        to_hit: [
          {
            level: 1,
            to_hit: 11
          },
          {
            level: 2,
            to_hit: 11
          },
          {
            level: 3,
            to_hit: 11
          },
          {
            level: 4,
            to_hit: 11
          },
          {
            level: 5,
            to_hit: 11
          },
          {
            level: 6,
            to_hit: 9
          },
          {
            level: 7,
            to_hit: 9
          },
          {
            level: 8,
            to_hit: 9
          },
          {
            level: 9,
            to_hit: 9
          },
          {
            level: 10,
            to_hit: 9
          },
          {
            level: 11,
            to_hit: 6
          },
          {
            level: 12,
            to_hit: 6
          },
          {
            level: 13,
            to_hit: 6
          },
          {
            level: 14,
            to_hit: 6
          },
          {
            level: 15,
            to_hit: 6
          },
          {
            level: 16,
            to_hit: 3
          },
          {
            level: 17,
            to_hit: 3
          },
          {
            level: 18,
            to_hit: 3
          },
          {
            level: 19,
            to_hit: 3
          },
          {
            level: 20,
            to_hit: 3
          },
          {
            level: 21,
            to_hit: 1
          }
        ]
      }
    ]
  },
  {
    class: [Class.THIEF, Class.ASSASSIN],
    to_hit: [
      {
        ac: -10,
        to_hit: [
          {
            level: 1,
            to_hit: 26
          },
          {
            level: 2,
            to_hit: 26
          },
          {
            level: 3,
            to_hit: 26
          },
          {
            level: 4,
            to_hit: 26
          },
          {
            level: 5,
            to_hit: 24
          },
          {
            level: 6,
            to_hit: 24
          },
          {
            level: 7,
            to_hit: 24
          },
          {
            level: 8,
            to_hit: 24
          },
          {
            level: 9,
            to_hit: 21
          },
          {
            level: 10,
            to_hit: 21
          },
          {
            level: 11,
            to_hit: 21
          },
          {
            level: 12,
            to_hit: 21
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 20
          },
          {
            level: 18,
            to_hit: 20
          },
          {
            level: 19,
            to_hit: 20
          },
          {
            level: 20,
            to_hit: 20
          },
          {
            level: 21,
            to_hit: 20
          }
        ]
      },
      {
        ac: -9,
        to_hit: [
          {
            level: 1,
            to_hit: 25
          },
          {
            level: 2,
            to_hit: 25
          },
          {
            level: 3,
            to_hit: 25
          },
          {
            level: 4,
            to_hit: 25
          },
          {
            level: 5,
            to_hit: 23
          },
          {
            level: 6,
            to_hit: 23
          },
          {
            level: 7,
            to_hit: 23
          },
          {
            level: 8,
            to_hit: 23
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 20
          },
          {
            level: 18,
            to_hit: 20
          },
          {
            level: 19,
            to_hit: 20
          },
          {
            level: 20,
            to_hit: 20
          },
          {
            level: 21,
            to_hit: 19
          }
        ]
      },
      {
        ac: -8,
        to_hit: [
          {
            level: 1,
            to_hit: 24
          },
          {
            level: 2,
            to_hit: 24
          },
          {
            level: 3,
            to_hit: 24
          },
          {
            level: 4,
            to_hit: 24
          },
          {
            level: 5,
            to_hit: 22
          },
          {
            level: 6,
            to_hit: 22
          },
          {
            level: 7,
            to_hit: 22
          },
          {
            level: 8,
            to_hit: 22
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 20
          },
          {
            level: 18,
            to_hit: 20
          },
          {
            level: 19,
            to_hit: 20
          },
          {
            level: 20,
            to_hit: 20
          },
          {
            level: 21,
            to_hit: 18
          }
        ]
      },
      {
        ac: -7,
        to_hit: [
          {
            level: 1,
            to_hit: 23
          },
          {
            level: 2,
            to_hit: 23
          },
          {
            level: 3,
            to_hit: 23
          },
          {
            level: 4,
            to_hit: 23
          },
          {
            level: 5,
            to_hit: 21
          },
          {
            level: 6,
            to_hit: 21
          },
          {
            level: 7,
            to_hit: 21
          },
          {
            level: 8,
            to_hit: 21
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 19
          },
          {
            level: 18,
            to_hit: 19
          },
          {
            level: 19,
            to_hit: 19
          },
          {
            level: 20,
            to_hit: 19
          },
          {
            level: 21,
            to_hit: 17
          }
        ]
      },
      {
        ac: -6,
        to_hit: [
          {
            level: 1,
            to_hit: 22
          },
          {
            level: 2,
            to_hit: 22
          },
          {
            level: 3,
            to_hit: 22
          },
          {
            level: 4,
            to_hit: 22
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 20
          },
          {
            level: 14,
            to_hit: 20
          },
          {
            level: 15,
            to_hit: 20
          },
          {
            level: 16,
            to_hit: 20
          },
          {
            level: 17,
            to_hit: 18
          },
          {
            level: 18,
            to_hit: 18
          },
          {
            level: 19,
            to_hit: 18
          },
          {
            level: 20,
            to_hit: 18
          },
          {
            level: 21,
            to_hit: 16
          }
        ]
      },
      {
        ac: -5,
        to_hit: [
          {
            level: 1,
            to_hit: 21
          },
          {
            level: 2,
            to_hit: 21
          },
          {
            level: 3,
            to_hit: 21
          },
          {
            level: 4,
            to_hit: 21
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 19
          },
          {
            level: 14,
            to_hit: 19
          },
          {
            level: 15,
            to_hit: 19
          },
          {
            level: 16,
            to_hit: 19
          },
          {
            level: 17,
            to_hit: 17
          },
          {
            level: 18,
            to_hit: 17
          },
          {
            level: 19,
            to_hit: 17
          },
          {
            level: 20,
            to_hit: 17
          },
          {
            level: 21,
            to_hit: 15
          }
        ]
      },
      {
        ac: -4,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 20
          },
          {
            level: 10,
            to_hit: 20
          },
          {
            level: 11,
            to_hit: 20
          },
          {
            level: 12,
            to_hit: 20
          },
          {
            level: 13,
            to_hit: 18
          },
          {
            level: 14,
            to_hit: 18
          },
          {
            level: 15,
            to_hit: 18
          },
          {
            level: 16,
            to_hit: 18
          },
          {
            level: 17,
            to_hit: 16
          },
          {
            level: 18,
            to_hit: 16
          },
          {
            level: 19,
            to_hit: 16
          },
          {
            level: 20,
            to_hit: 16
          },
          {
            level: 21,
            to_hit: 14
          }
        ]
      },
      {
        ac: -3,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 19
          },
          {
            level: 10,
            to_hit: 19
          },
          {
            level: 11,
            to_hit: 19
          },
          {
            level: 12,
            to_hit: 19
          },
          {
            level: 13,
            to_hit: 17
          },
          {
            level: 14,
            to_hit: 17
          },
          {
            level: 15,
            to_hit: 17
          },
          {
            level: 16,
            to_hit: 17
          },
          {
            level: 17,
            to_hit: 15
          },
          {
            level: 18,
            to_hit: 15
          },
          {
            level: 19,
            to_hit: 15
          },
          {
            level: 20,
            to_hit: 15
          },
          {
            level: 21,
            to_hit: 13
          }
        ]
      },
      {
        ac: -2,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 18
          },
          {
            level: 10,
            to_hit: 18
          },
          {
            level: 11,
            to_hit: 18
          },
          {
            level: 12,
            to_hit: 18
          },
          {
            level: 13,
            to_hit: 16
          },
          {
            level: 14,
            to_hit: 16
          },
          {
            level: 15,
            to_hit: 16
          },
          {
            level: 16,
            to_hit: 16
          },
          {
            level: 17,
            to_hit: 14
          },
          {
            level: 18,
            to_hit: 14
          },
          {
            level: 19,
            to_hit: 14
          },
          {
            level: 20,
            to_hit: 14
          },
          {
            level: 21,
            to_hit: 12
          }
        ]
      },
      {
        ac: -1,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 20
          },
          {
            level: 6,
            to_hit: 20
          },
          {
            level: 7,
            to_hit: 20
          },
          {
            level: 8,
            to_hit: 20
          },
          {
            level: 9,
            to_hit: 17
          },
          {
            level: 10,
            to_hit: 17
          },
          {
            level: 11,
            to_hit: 17
          },
          {
            level: 12,
            to_hit: 17
          },
          {
            level: 13,
            to_hit: 15
          },
          {
            level: 14,
            to_hit: 15
          },
          {
            level: 15,
            to_hit: 15
          },
          {
            level: 16,
            to_hit: 15
          },
          {
            level: 17,
            to_hit: 13
          },
          {
            level: 18,
            to_hit: 13
          },
          {
            level: 19,
            to_hit: 13
          },
          {
            level: 20,
            to_hit: 13
          },
          {
            level: 21,
            to_hit: 11
          }
        ]
      },
      {
        ac: 0,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 19
          },
          {
            level: 6,
            to_hit: 19
          },
          {
            level: 7,
            to_hit: 19
          },
          {
            level: 8,
            to_hit: 19
          },
          {
            level: 9,
            to_hit: 16
          },
          {
            level: 10,
            to_hit: 16
          },
          {
            level: 11,
            to_hit: 16
          },
          {
            level: 12,
            to_hit: 16
          },
          {
            level: 13,
            to_hit: 14
          },
          {
            level: 14,
            to_hit: 14
          },
          {
            level: 15,
            to_hit: 14
          },
          {
            level: 16,
            to_hit: 14
          },
          {
            level: 17,
            to_hit: 12
          },
          {
            level: 18,
            to_hit: 12
          },
          {
            level: 19,
            to_hit: 12
          },
          {
            level: 20,
            to_hit: 12
          },
          {
            level: 21,
            to_hit: 10
          }
        ]
      },
      {
        ac: 1,
        to_hit: [
          {
            level: 1,
            to_hit: 20
          },
          {
            level: 2,
            to_hit: 20
          },
          {
            level: 3,
            to_hit: 20
          },
          {
            level: 4,
            to_hit: 20
          },
          {
            level: 5,
            to_hit: 18
          },
          {
            level: 6,
            to_hit: 18
          },
          {
            level: 7,
            to_hit: 18
          },
          {
            level: 8,
            to_hit: 18
          },
          {
            level: 9,
            to_hit: 15
          },
          {
            level: 10,
            to_hit: 15
          },
          {
            level: 11,
            to_hit: 15
          },
          {
            level: 12,
            to_hit: 15
          },
          {
            level: 13,
            to_hit: 13
          },
          {
            level: 14,
            to_hit: 13
          },
          {
            level: 15,
            to_hit: 13
          },
          {
            level: 16,
            to_hit: 13
          },
          {
            level: 17,
            to_hit: 11
          },
          {
            level: 18,
            to_hit: 11
          },
          {
            level: 19,
            to_hit: 11
          },
          {
            level: 20,
            to_hit: 11
          },
          {
            level: 21,
            to_hit: 9
          }
        ]
      },
      {
        ac: 2,
        to_hit: [
          {
            level: 1,
            to_hit: 19
          },
          {
            level: 2,
            to_hit: 19
          },
          {
            level: 3,
            to_hit: 19
          },
          {
            level: 4,
            to_hit: 19
          },
          {
            level: 5,
            to_hit: 17
          },
          {
            level: 6,
            to_hit: 17
          },
          {
            level: 7,
            to_hit: 17
          },
          {
            level: 8,
            to_hit: 17
          },
          {
            level: 9,
            to_hit: 14
          },
          {
            level: 10,
            to_hit: 14
          },
          {
            level: 11,
            to_hit: 14
          },
          {
            level: 12,
            to_hit: 14
          },
          {
            level: 13,
            to_hit: 12
          },
          {
            level: 14,
            to_hit: 12
          },
          {
            level: 15,
            to_hit: 12
          },
          {
            level: 16,
            to_hit: 12
          },
          {
            level: 17,
            to_hit: 10
          },
          {
            level: 18,
            to_hit: 10
          },
          {
            level: 19,
            to_hit: 10
          },
          {
            level: 20,
            to_hit: 10
          },
          {
            level: 21,
            to_hit: 8
          }
        ]
      },
      {
        ac: 3,
        to_hit: [
          {
            level: 1,
            to_hit: 18
          },
          {
            level: 2,
            to_hit: 18
          },
          {
            level: 3,
            to_hit: 18
          },
          {
            level: 4,
            to_hit: 18
          },
          {
            level: 5,
            to_hit: 16
          },
          {
            level: 6,
            to_hit: 16
          },
          {
            level: 7,
            to_hit: 16
          },
          {
            level: 8,
            to_hit: 16
          },
          {
            level: 9,
            to_hit: 13
          },
          {
            level: 10,
            to_hit: 13
          },
          {
            level: 11,
            to_hit: 13
          },
          {
            level: 12,
            to_hit: 13
          },
          {
            level: 13,
            to_hit: 11
          },
          {
            level: 14,
            to_hit: 11
          },
          {
            level: 15,
            to_hit: 11
          },
          {
            level: 16,
            to_hit: 11
          },
          {
            level: 17,
            to_hit: 9
          },
          {
            level: 18,
            to_hit: 9
          },
          {
            level: 19,
            to_hit: 9
          },
          {
            level: 20,
            to_hit: 9
          },
          {
            level: 21,
            to_hit: 7
          }
        ]
      },
      {
        ac: 4,
        to_hit: [
          {
            level: 1,
            to_hit: 17
          },
          {
            level: 2,
            to_hit: 17
          },
          {
            level: 3,
            to_hit: 17
          },
          {
            level: 4,
            to_hit: 17
          },
          {
            level: 5,
            to_hit: 15
          },
          {
            level: 6,
            to_hit: 15
          },
          {
            level: 7,
            to_hit: 15
          },
          {
            level: 8,
            to_hit: 15
          },
          {
            level: 9,
            to_hit: 12
          },
          {
            level: 10,
            to_hit: 12
          },
          {
            level: 11,
            to_hit: 12
          },
          {
            level: 12,
            to_hit: 12
          },
          {
            level: 13,
            to_hit: 10
          },
          {
            level: 14,
            to_hit: 10
          },
          {
            level: 15,
            to_hit: 10
          },
          {
            level: 16,
            to_hit: 10
          },
          {
            level: 17,
            to_hit: 8
          },
          {
            level: 18,
            to_hit: 8
          },
          {
            level: 19,
            to_hit: 8
          },
          {
            level: 20,
            to_hit: 8
          },
          {
            level: 21,
            to_hit: 6
          }
        ]
      },
      {
        ac: 5,
        to_hit: [
          {
            level: 1,
            to_hit: 16
          },
          {
            level: 2,
            to_hit: 16
          },
          {
            level: 3,
            to_hit: 16
          },
          {
            level: 4,
            to_hit: 16
          },
          {
            level: 5,
            to_hit: 14
          },
          {
            level: 6,
            to_hit: 14
          },
          {
            level: 7,
            to_hit: 14
          },
          {
            level: 8,
            to_hit: 14
          },
          {
            level: 9,
            to_hit: 11
          },
          {
            level: 10,
            to_hit: 11
          },
          {
            level: 11,
            to_hit: 11
          },
          {
            level: 12,
            to_hit: 11
          },
          {
            level: 13,
            to_hit: 9
          },
          {
            level: 14,
            to_hit: 9
          },
          {
            level: 15,
            to_hit: 9
          },
          {
            level: 16,
            to_hit: 9
          },
          {
            level: 17,
            to_hit: 7
          },
          {
            level: 18,
            to_hit: 7
          },
          {
            level: 19,
            to_hit: 7
          },
          {
            level: 20,
            to_hit: 7
          },
          {
            level: 21,
            to_hit: 5
          }
        ]
      },
      {
        ac: 6,
        to_hit: [
          {
            level: 1,
            to_hit: 15
          },
          {
            level: 2,
            to_hit: 15
          },
          {
            level: 3,
            to_hit: 15
          },
          {
            level: 4,
            to_hit: 15
          },
          {
            level: 5,
            to_hit: 13
          },
          {
            level: 6,
            to_hit: 13
          },
          {
            level: 7,
            to_hit: 13
          },
          {
            level: 8,
            to_hit: 13
          },
          {
            level: 9,
            to_hit: 10
          },
          {
            level: 10,
            to_hit: 10
          },
          {
            level: 11,
            to_hit: 10
          },
          {
            level: 12,
            to_hit: 10
          },
          {
            level: 13,
            to_hit: 8
          },
          {
            level: 14,
            to_hit: 8
          },
          {
            level: 15,
            to_hit: 8
          },
          {
            level: 16,
            to_hit: 8
          },
          {
            level: 17,
            to_hit: 6
          },
          {
            level: 18,
            to_hit: 6
          },
          {
            level: 19,
            to_hit: 6
          },
          {
            level: 20,
            to_hit: 6
          },
          {
            level: 21,
            to_hit: 4
          }
        ]
      },
      {
        ac: 7,
        to_hit: [
          {
            level: 1,
            to_hit: 14
          },
          {
            level: 2,
            to_hit: 14
          },
          {
            level: 3,
            to_hit: 14
          },
          {
            level: 4,
            to_hit: 14
          },
          {
            level: 5,
            to_hit: 12
          },
          {
            level: 6,
            to_hit: 12
          },
          {
            level: 7,
            to_hit: 12
          },
          {
            level: 8,
            to_hit: 12
          },
          {
            level: 9,
            to_hit: 9
          },
          {
            level: 10,
            to_hit: 9
          },
          {
            level: 11,
            to_hit: 9
          },
          {
            level: 12,
            to_hit: 9
          },
          {
            level: 13,
            to_hit: 7
          },
          {
            level: 14,
            to_hit: 7
          },
          {
            level: 15,
            to_hit: 7
          },
          {
            level: 16,
            to_hit: 7
          },
          {
            level: 17,
            to_hit: 5
          },
          {
            level: 18,
            to_hit: 5
          },
          {
            level: 19,
            to_hit: 5
          },
          {
            level: 20,
            to_hit: 5
          },
          {
            level: 21,
            to_hit: 3
          }
        ]
      },
      {
        ac: 8,
        to_hit: [
          {
            level: 1,
            to_hit: 13
          },
          {
            level: 2,
            to_hit: 13
          },
          {
            level: 3,
            to_hit: 13
          },
          {
            level: 4,
            to_hit: 13
          },
          {
            level: 5,
            to_hit: 11
          },
          {
            level: 6,
            to_hit: 11
          },
          {
            level: 7,
            to_hit: 11
          },
          {
            level: 8,
            to_hit: 11
          },
          {
            level: 9,
            to_hit: 8
          },
          {
            level: 10,
            to_hit: 8
          },
          {
            level: 11,
            to_hit: 8
          },
          {
            level: 12,
            to_hit: 8
          },
          {
            level: 13,
            to_hit: 6
          },
          {
            level: 14,
            to_hit: 6
          },
          {
            level: 15,
            to_hit: 6
          },
          {
            level: 16,
            to_hit: 6
          },
          {
            level: 17,
            to_hit: 4
          },
          {
            level: 18,
            to_hit: 4
          },
          {
            level: 19,
            to_hit: 4
          },
          {
            level: 20,
            to_hit: 4
          },
          {
            level: 21,
            to_hit: 2
          }
        ]
      },
      {
        ac: 9,
        to_hit: [
          {
            level: 1,
            to_hit: 12
          },
          {
            level: 2,
            to_hit: 12
          },
          {
            level: 3,
            to_hit: 12
          },
          {
            level: 4,
            to_hit: 12
          },
          {
            level: 5,
            to_hit: 10
          },
          {
            level: 6,
            to_hit: 10
          },
          {
            level: 7,
            to_hit: 10
          },
          {
            level: 8,
            to_hit: 10
          },
          {
            level: 9,
            to_hit: 7
          },
          {
            level: 10,
            to_hit: 7
          },
          {
            level: 11,
            to_hit: 7
          },
          {
            level: 12,
            to_hit: 7
          },
          {
            level: 13,
            to_hit: 5
          },
          {
            level: 14,
            to_hit: 5
          },
          {
            level: 15,
            to_hit: 5
          },
          {
            level: 16,
            to_hit: 5
          },
          {
            level: 17,
            to_hit: 3
          },
          {
            level: 18,
            to_hit: 3
          },
          {
            level: 19,
            to_hit: 3
          },
          {
            level: 20,
            to_hit: 3
          },
          {
            level: 21,
            to_hit: 1
          }
        ]
      },
      {
        ac: 10,
        to_hit: [
          {
            level: 1,
            to_hit: 11
          },
          {
            level: 2,
            to_hit: 11
          },
          {
            level: 3,
            to_hit: 11
          },
          {
            level: 4,
            to_hit: 11
          },
          {
            level: 5,
            to_hit: 9
          },
          {
            level: 6,
            to_hit: 9
          },
          {
            level: 7,
            to_hit: 9
          },
          {
            level: 8,
            to_hit: 9
          },
          {
            level: 9,
            to_hit: 6
          },
          {
            level: 10,
            to_hit: 6
          },
          {
            level: 11,
            to_hit: 6
          },
          {
            level: 12,
            to_hit: 6
          },
          {
            level: 13,
            to_hit: 4
          },
          {
            level: 14,
            to_hit: 4
          },
          {
            level: 15,
            to_hit: 4
          },
          {
            level: 16,
            to_hit: 4
          },
          {
            level: 17,
            to_hit: 2
          },
          {
            level: 18,
            to_hit: 2
          },
          {
            level: 19,
            to_hit: 2
          },
          {
            level: 20,
            to_hit: 2
          },
          {
            level: 21,
            to_hit: 0
          }
        ]
      }
    ]
  }
];

export const monsterCombat = [
  {
    ac: -10,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 26
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 25
      },
      {
        dice: 1,
        to_hit: 24
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 23
      },
      {
        dice: 2,
        to_hit: 21
      },
      {
        dice: 3,
        to_hit: 21
      },
      {
        dice: 4,
        to_hit: 20
      },
      {
        dice: 5,
        to_hit: 20
      },
      {
        dice: 6,
        to_hit: 20
      },
      {
        dice: 7,
        to_hit: 20
      },
      {
        dice: 8,
        to_hit: 20
      },
      {
        dice: 9,
        to_hit: 20
      },
      {
        dice: 10,
        to_hit: 20
      },
      {
        dice: 11,
        to_hit: 20
      },
      {
        dice: 12,
        to_hit: 19
      },
      {
        dice: 13,
        to_hit: 19
      },
      {
        dice: 14,
        to_hit: 18
      },
      {
        dice: 15,
        to_hit: 18
      },
      {
        dice: 16,
        to_hit: 17
      }
    ]
  },
  {
    ac: -9,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 25
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 24
      },
      {
        dice: 1,
        to_hit: 23
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 22
      },
      {
        dice: 2,
        to_hit: 20
      },
      {
        dice: 3,
        to_hit: 20
      },
      {
        dice: 4,
        to_hit: 20
      },
      {
        dice: 5,
        to_hit: 20
      },
      {
        dice: 6,
        to_hit: 20
      },
      {
        dice: 7,
        to_hit: 20
      },
      {
        dice: 8,
        to_hit: 20
      },
      {
        dice: 9,
        to_hit: 20
      },
      {
        dice: 10,
        to_hit: 19
      },
      {
        dice: 11,
        to_hit: 19
      },
      {
        dice: 12,
        to_hit: 18
      },
      {
        dice: 13,
        to_hit: 18
      },
      {
        dice: 14,
        to_hit: 17
      },
      {
        dice: 15,
        to_hit: 17
      },
      {
        dice: 16,
        to_hit: 16
      }
    ]
  },
  {
    ac: -8,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 24
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 23
      },
      {
        dice: 1,
        to_hit: 22
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 21
      },
      {
        dice: 2,
        to_hit: 20
      },
      {
        dice: 3,
        to_hit: 20
      },
      {
        dice: 4,
        to_hit: 20
      },
      {
        dice: 5,
        to_hit: 20
      },
      {
        dice: 6,
        to_hit: 20
      },
      {
        dice: 7,
        to_hit: 20
      },
      {
        dice: 8,
        to_hit: 20
      },
      {
        dice: 9,
        to_hit: 20
      },
      {
        dice: 10,
        to_hit: 18
      },
      {
        dice: 11,
        to_hit: 18
      },
      {
        dice: 12,
        to_hit: 17
      },
      {
        dice: 13,
        to_hit: 17
      },
      {
        dice: 14,
        to_hit: 16
      },
      {
        dice: 15,
        to_hit: 16
      },
      {
        dice: 16,
        to_hit: 15
      }
    ]
  },
  {
    ac: -7,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 23
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 22
      },
      {
        dice: 1,
        to_hit: 21
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 20
      },
      {
        dice: 2,
        to_hit: 20
      },
      {
        dice: 3,
        to_hit: 20
      },
      {
        dice: 4,
        to_hit: 20
      },
      {
        dice: 5,
        to_hit: 20
      },
      {
        dice: 6,
        to_hit: 20
      },
      {
        dice: 7,
        to_hit: 20
      },
      {
        dice: 8,
        to_hit: 19
      },
      {
        dice: 9,
        to_hit: 19
      },
      {
        dice: 10,
        to_hit: 17
      },
      {
        dice: 11,
        to_hit: 17
      },
      {
        dice: 12,
        to_hit: 16
      },
      {
        dice: 13,
        to_hit: 16
      },
      {
        dice: 14,
        to_hit: 15
      },
      {
        dice: 15,
        to_hit: 15
      },
      {
        dice: 16,
        to_hit: 14
      }
    ]
  },

  {
    ac: -6,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 22
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 21
      },
      {
        dice: 1,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 20
      },
      {
        dice: 2,
        to_hit: 20
      },
      {
        dice: 3,
        to_hit: 20
      },
      {
        dice: 4,
        to_hit: 20
      },
      {
        dice: 5,
        to_hit: 20
      },
      {
        dice: 6,
        to_hit: 19
      },
      {
        dice: 7,
        to_hit: 19
      },
      {
        dice: 8,
        to_hit: 18
      },
      {
        dice: 9,
        to_hit: 18
      },
      {
        dice: 10,
        to_hit: 16
      },
      {
        dice: 11,
        to_hit: 16
      },
      {
        dice: 12,
        to_hit: 15
      },
      {
        dice: 13,
        to_hit: 15
      },
      {
        dice: 14,
        to_hit: 14
      },
      {
        dice: 15,
        to_hit: 14
      },
      {
        dice: 16,
        to_hit: 13
      }
    ]
  },
  {
    ac: -5,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 21
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 20
      },
      {
        dice: 1,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 20
      },
      {
        dice: 2,
        to_hit: 20
      },
      {
        dice: 3,
        to_hit: 20
      },
      {
        dice: 4,
        to_hit: 20
      },
      {
        dice: 5,
        to_hit: 20
      },
      {
        dice: 6,
        to_hit: 18
      },
      {
        dice: 7,
        to_hit: 18
      },
      {
        dice: 8,
        to_hit: 17
      },
      {
        dice: 9,
        to_hit: 17
      },
      {
        dice: 10,
        to_hit: 15
      },
      {
        dice: 11,
        to_hit: 15
      },
      {
        dice: 12,
        to_hit: 14
      },
      {
        dice: 13,
        to_hit: 14
      },
      {
        dice: 14,
        to_hit: 13
      },
      {
        dice: 15,
        to_hit: 13
      },
      {
        dice: 16,
        to_hit: 12
      }
    ]
  },
  {
    ac: -4,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 20
      },
      {
        dice: 1,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 20
      },
      {
        dice: 2,
        to_hit: 20
      },
      {
        dice: 3,
        to_hit: 20
      },
      {
        dice: 4,
        to_hit: 19
      },
      {
        dice: 5,
        to_hit: 19
      },
      {
        dice: 6,
        to_hit: 17
      },
      {
        dice: 7,
        to_hit: 17
      },
      {
        dice: 8,
        to_hit: 16
      },
      {
        dice: 9,
        to_hit: 16
      },
      {
        dice: 10,
        to_hit: 14
      },
      {
        dice: 11,
        to_hit: 14
      },
      {
        dice: 12,
        to_hit: 13
      },
      {
        dice: 13,
        to_hit: 13
      },
      {
        dice: 14,
        to_hit: 12
      },
      {
        dice: 15,
        to_hit: 12
      },
      {
        dice: 16,
        to_hit: 11
      }
    ]
  },
  {
    ac: -3,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 20
      },
      {
        dice: 1,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 20
      },
      {
        dice: 2,
        to_hit: 19
      },
      {
        dice: 3,
        to_hit: 19
      },
      {
        dice: 4,
        to_hit: 18
      },
      {
        dice: 5,
        to_hit: 18
      },
      {
        dice: 6,
        to_hit: 16
      },
      {
        dice: 7,
        to_hit: 16
      },
      {
        dice: 8,
        to_hit: 15
      },
      {
        dice: 9,
        to_hit: 15
      },
      {
        dice: 10,
        to_hit: 13
      },
      {
        dice: 11,
        to_hit: 13
      },
      {
        dice: 12,
        to_hit: 12
      },
      {
        dice: 13,
        to_hit: 12
      },
      {
        dice: 14,
        to_hit: 11
      },
      {
        dice: 15,
        to_hit: 11
      },
      {
        dice: 16,
        to_hit: 10
      }
    ]
  },
  {
    ac: -2,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 20
      },
      {
        dice: 1,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 20
      },
      {
        dice: 2,
        to_hit: 18
      },
      {
        dice: 3,
        to_hit: 18
      },
      {
        dice: 4,
        to_hit: 17
      },
      {
        dice: 5,
        to_hit: 17
      },
      {
        dice: 6,
        to_hit: 15
      },
      {
        dice: 7,
        to_hit: 15
      },
      {
        dice: 8,
        to_hit: 14
      },
      {
        dice: 9,
        to_hit: 14
      },
      {
        dice: 10,
        to_hit: 12
      },
      {
        dice: 11,
        to_hit: 12
      },
      {
        dice: 12,
        to_hit: 11
      },
      {
        dice: 13,
        to_hit: 11
      },
      {
        dice: 14,
        to_hit: 10
      },
      {
        dice: 15,
        to_hit: 10
      },
      {
        dice: 16,
        to_hit: 9
      }
    ]
  },
  {
    ac: -1,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 20
      },
      {
        dice: 1,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 19
      },
      {
        dice: 2,
        to_hit: 17
      },
      {
        dice: 3,
        to_hit: 17
      },
      {
        dice: 4,
        to_hit: 16
      },
      {
        dice: 5,
        to_hit: 16
      },
      {
        dice: 6,
        to_hit: 14
      },
      {
        dice: 7,
        to_hit: 14
      },
      {
        dice: 8,
        to_hit: 13
      },
      {
        dice: 9,
        to_hit: 13
      },
      {
        dice: 10,
        to_hit: 11
      },
      {
        dice: 11,
        to_hit: 11
      },
      {
        dice: 12,
        to_hit: 10
      },
      {
        dice: 13,
        to_hit: 10
      },
      {
        dice: 14,
        to_hit: 9
      },
      {
        dice: 15,
        to_hit: 9
      },
      {
        dice: 16,
        to_hit: 8
      }
    ]
  },
  {
    ac: 0,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 20
      },
      {
        dice: 1,
        to_hit: 19
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 18
      },
      {
        dice: 2,
        to_hit: 16
      },
      {
        dice: 3,
        to_hit: 16
      },
      {
        dice: 4,
        to_hit: 15
      },
      {
        dice: 5,
        to_hit: 15
      },
      {
        dice: 6,
        to_hit: 13
      },
      {
        dice: 7,
        to_hit: 13
      },
      {
        dice: 8,
        to_hit: 12
      },
      {
        dice: 9,
        to_hit: 12
      },
      {
        dice: 10,
        to_hit: 10
      },
      {
        dice: 11,
        to_hit: 10
      },
      {
        dice: 12,
        to_hit: 9
      },
      {
        dice: 13,
        to_hit: 9
      },
      {
        dice: 14,
        to_hit: 8
      },
      {
        dice: 15,
        to_hit: 8
      },
      {
        dice: 16,
        to_hit: 7
      }
    ]
  },
  {
    ac: 1,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 20
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 19
      },
      {
        dice: 1,
        to_hit: 18
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 17
      },
      {
        dice: 2,
        to_hit: 15
      },
      {
        dice: 3,
        to_hit: 15
      },
      {
        dice: 4,
        to_hit: 14
      },
      {
        dice: 5,
        to_hit: 14
      },
      {
        dice: 6,
        to_hit: 12
      },
      {
        dice: 7,
        to_hit: 12
      },
      {
        dice: 8,
        to_hit: 11
      },
      {
        dice: 9,
        to_hit: 11
      },
      {
        dice: 10,
        to_hit: 9
      },
      {
        dice: 11,
        to_hit: 9
      },
      {
        dice: 12,
        to_hit: 8
      },
      {
        dice: 13,
        to_hit: 8
      },
      {
        dice: 14,
        to_hit: 7
      },
      {
        dice: 15,
        to_hit: 7
      },
      {
        dice: 16,
        to_hit: 6
      }
    ]
  },
  {
    ac: 2,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 19
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 18
      },
      {
        dice: 1,
        to_hit: 17
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 16
      },
      {
        dice: 2,
        to_hit: 14
      },
      {
        dice: 3,
        to_hit: 14
      },
      {
        dice: 4,
        to_hit: 13
      },
      {
        dice: 5,
        to_hit: 13
      },
      {
        dice: 6,
        to_hit: 11
      },
      {
        dice: 7,
        to_hit: 11
      },
      {
        dice: 8,
        to_hit: 10
      },
      {
        dice: 9,
        to_hit: 10
      },
      {
        dice: 10,
        to_hit: 8
      },
      {
        dice: 11,
        to_hit: 8
      },
      {
        dice: 12,
        to_hit: 7
      },
      {
        dice: 13,
        to_hit: 7
      },
      {
        dice: 14,
        to_hit: 6
      },
      {
        dice: 15,
        to_hit: 6
      },
      {
        dice: 16,
        to_hit: 5
      }
    ]
  },
  {
    ac: 3,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 18
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 17
      },
      {
        dice: 1,
        to_hit: 16
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 15
      },
      {
        dice: 2,
        to_hit: 13
      },
      {
        dice: 3,
        to_hit: 13
      },
      {
        dice: 4,
        to_hit: 12
      },
      {
        dice: 5,
        to_hit: 12
      },
      {
        dice: 6,
        to_hit: 10
      },
      {
        dice: 7,
        to_hit: 10
      },
      {
        dice: 8,
        to_hit: 9
      },
      {
        dice: 9,
        to_hit: 9
      },
      {
        dice: 10,
        to_hit: 7
      },
      {
        dice: 11,
        to_hit: 7
      },
      {
        dice: 12,
        to_hit: 6
      },
      {
        dice: 13,
        to_hit: 6
      },
      {
        dice: 14,
        to_hit: 5
      },
      {
        dice: 15,
        to_hit: 5
      },
      {
        dice: 16,
        to_hit: 4
      }
    ]
  },
  {
    ac: 4,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 17
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 16
      },
      {
        dice: 1,
        to_hit: 15
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 14
      },
      {
        dice: 2,
        to_hit: 12
      },
      {
        dice: 3,
        to_hit: 12
      },
      {
        dice: 4,
        to_hit: 11
      },
      {
        dice: 5,
        to_hit: 11
      },
      {
        dice: 6,
        to_hit: 9
      },
      {
        dice: 7,
        to_hit: 9
      },
      {
        dice: 8,
        to_hit: 8
      },
      {
        dice: 9,
        to_hit: 8
      },
      {
        dice: 10,
        to_hit: 6
      },
      {
        dice: 11,
        to_hit: 6
      },
      {
        dice: 12,
        to_hit: 5
      },
      {
        dice: 13,
        to_hit: 5
      },
      {
        dice: 14,
        to_hit: 4
      },
      {
        dice: 15,
        to_hit: 4
      },
      {
        dice: 16,
        to_hit: 3
      }
    ]
  },
  {
    ac: 5,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 16
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 15
      },
      {
        dice: 1,
        to_hit: 14
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 13
      },
      {
        dice: 2,
        to_hit: 11
      },
      {
        dice: 3,
        to_hit: 11
      },
      {
        dice: 4,
        to_hit: 10
      },
      {
        dice: 5,
        to_hit: 10
      },
      {
        dice: 6,
        to_hit: 8
      },
      {
        dice: 7,
        to_hit: 8
      },
      {
        dice: 8,
        to_hit: 7
      },
      {
        dice: 9,
        to_hit: 7
      },
      {
        dice: 10,
        to_hit: 5
      },
      {
        dice: 11,
        to_hit: 5
      },
      {
        dice: 12,
        to_hit: 4
      },
      {
        dice: 13,
        to_hit: 4
      },
      {
        dice: 14,
        to_hit: 3
      },
      {
        dice: 15,
        to_hit: 3
      },
      {
        dice: 16,
        to_hit: 2
      }
    ]
  },
  {
    ac: 6,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 15
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 14
      },
      {
        dice: 1,
        to_hit: 13
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 12
      },
      {
        dice: 2,
        to_hit: 10
      },
      {
        dice: 3,
        to_hit: 10
      },
      {
        dice: 4,
        to_hit: 9
      },
      {
        dice: 5,
        to_hit: 9
      },
      {
        dice: 6,
        to_hit: 7
      },
      {
        dice: 7,
        to_hit: 7
      },
      {
        dice: 8,
        to_hit: 6
      },
      {
        dice: 9,
        to_hit: 6
      },
      {
        dice: 10,
        to_hit: 4
      },
      {
        dice: 11,
        to_hit: 4
      },
      {
        dice: 12,
        to_hit: 3
      },
      {
        dice: 13,
        to_hit: 3
      },
      {
        dice: 14,
        to_hit: 2
      },
      {
        dice: 15,
        to_hit: 2
      },
      {
        dice: 16,
        to_hit: 1
      }
    ]
  },
  {
    ac: 7,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 14
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 13
      },
      {
        dice: 1,
        to_hit: 12
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 11
      },
      {
        dice: 2,
        to_hit: 9
      },
      {
        dice: 3,
        to_hit: 9
      },
      {
        dice: 4,
        to_hit: 8
      },
      {
        dice: 5,
        to_hit: 8
      },
      {
        dice: 6,
        to_hit: 6
      },
      {
        dice: 7,
        to_hit: 6
      },
      {
        dice: 8,
        to_hit: 5
      },
      {
        dice: 9,
        to_hit: 5
      },
      {
        dice: 10,
        to_hit: 3
      },
      {
        dice: 11,
        to_hit: 3
      },
      {
        dice: 12,
        to_hit: 2
      },
      {
        dice: 13,
        to_hit: 2
      },
      {
        dice: 14,
        to_hit: 1
      },
      {
        dice: 15,
        to_hit: 1
      },
      {
        dice: 16,
        to_hit: 0
      }
    ]
  },
  {
    ac: 8,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 13
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 12
      },
      {
        dice: 1,
        to_hit: 11
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 10
      },
      {
        dice: 2,
        to_hit: 8
      },
      {
        dice: 3,
        to_hit: 8
      },
      {
        dice: 4,
        to_hit: 7
      },
      {
        dice: 5,
        to_hit: 7
      },
      {
        dice: 6,
        to_hit: 5
      },
      {
        dice: 7,
        to_hit: 5
      },
      {
        dice: 8,
        to_hit: 4
      },
      {
        dice: 9,
        to_hit: 4
      },
      {
        dice: 10,
        to_hit: 2
      },
      {
        dice: 11,
        to_hit: 2
      },
      {
        dice: 12,
        to_hit: 1
      },
      {
        dice: 13,
        to_hit: 1
      },
      {
        dice: 14,
        to_hit: 0
      },
      {
        dice: 15,
        to_hit: 0
      },
      {
        dice: 16,
        to_hit: -1
      }
    ]
  },
  {
    ac: 9,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 12
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 11
      },
      {
        dice: 1,
        to_hit: 10
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 9
      },
      {
        dice: 2,
        to_hit: 7
      },
      {
        dice: 3,
        to_hit: 7
      },
      {
        dice: 4,
        to_hit: 6
      },
      {
        dice: 5,
        to_hit: 6
      },
      {
        dice: 6,
        to_hit: 4
      },
      {
        dice: 7,
        to_hit: 4
      },
      {
        dice: 8,
        to_hit: 3
      },
      {
        dice: 9,
        to_hit: 3
      },
      {
        dice: 10,
        to_hit: 1
      },
      {
        dice: 11,
        to_hit: 1
      },
      {
        dice: 12,
        to_hit: 0
      },
      {
        dice: 13,
        to_hit: 0
      },
      {
        dice: 14,
        to_hit: -1
      },
      {
        dice: 15,
        to_hit: -1
      },
      {
        dice: 16,
        to_hit: -2
      }
    ]
  },
  {
    ac: 10,
    hit_dice: [
      {
        dice: 1,
        bonus: -2,
        to_hit: 11
      },
      {
        dice: 1,
        bonus: -1,
        to_hit: 10
      },
      {
        dice: 1,
        to_hit: 9
      },
      {
        dice: 1,
        bonus: 1,
        to_hit: 8
      },
      {
        dice: 2,
        to_hit: 6
      },
      {
        dice: 3,
        to_hit: 6
      },
      {
        dice: 4,
        to_hit: 5
      },
      {
        dice: 5,
        to_hit: 5
      },
      {
        dice: 6,
        to_hit: 3
      },
      {
        dice: 7,
        to_hit: 3
      },
      {
        dice: 8,
        to_hit: 2
      },
      {
        dice: 9,
        to_hit: 2
      },
      {
        dice: 10,
        to_hit: 0
      },
      {
        dice: 11,
        to_hit: 0
      },
      {
        dice: 12,
        to_hit: -1
      },
      {
        dice: 13,
        to_hit: -1
      },
      {
        dice: 14,
        to_hit: -2
      },
      {
        dice: 15,
        to_hit: -2
      },
      {
        dice: 16,
        to_hit: -3
      }
    ]
  }
];