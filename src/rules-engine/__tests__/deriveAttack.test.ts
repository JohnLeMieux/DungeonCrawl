import { deriveAttack } from "../combat";
import { CharacterType, Class, Race, WeaponType } from "../types";

describe("driveAttack()", () => {
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
    const attack = deriveAttack(character);
    expect(attack.weapon).toEqual(WeaponType.LONGSWORD);
    expect(attack.category).toEqual("melee");
    expect(attack.magicBonus).toEqual(2);
    expect(attack.isSet).toEqual(false);
  });

  it("should correctly identify an unarmed attack", () => {
    character.equippedWeapon = undefined;
    const attack = deriveAttack(character);
    expect(attack.weapon).toEqual(WeaponType.FIST);
    expect(attack.category).toEqual("unarmed");
    expect(attack.magicBonus).toEqual(0);
    expect(attack.isSet).toEqual(false);
  });
});