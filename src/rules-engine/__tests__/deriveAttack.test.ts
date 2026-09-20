import { deriveCharacterAttack } from "../combat";
import { weaponTable } from "../tables";
import { CharacterType, Class, Race, WeaponType } from "../types";

describe("deriveCharacterAttack()", () => {
  const character: CharacterType = {
    name: "Test Character",
    sex: "male",
    race: Race.HUMAN,
    class: Class.FIGHTER,
    level: 1,
    strength: 9,
    intelligence: 9,
    wisdom: 9,
    dexterity: 9,
    constitution: 9,
    charisma: 9,
    languages: [],
    inventory: [],
    hitPoints: 1,
    equippedWeapon: {
      type: WeaponType.LONGSWORD,
      magicBonus: 2,
      isSet: false
    }
  };

  it("should correctly identify a weapon", () => {
    const attack = deriveCharacterAttack(character);
    expect(attack.weapon).toEqual(weaponTable[WeaponType.LONGSWORD]);
    expect(attack.strength).toEqual(9);
    expect(attack.wisdom).toEqual(9);
    expect(attack.dexterity).toEqual(9);
    expect(attack.equippedWeapon?.magicBonus).toEqual(2);
  });

  it("should correctly identify an unarmed attack", () => {
    character.equippedWeapon = undefined;
    const attack = deriveCharacterAttack(character);
    expect(attack.weapon).toEqual(weaponTable[WeaponType.FIST]);
    expect(attack.strength).toEqual(9);
    expect(attack.wisdom).toEqual(9);
    expect(attack.dexterity).toEqual(9);
    expect(attack.equippedWeapon).toBeUndefined();
  });
});