type TDamage = 'Damage';
type TAttackSpeed = 'AttackSpeed';
type TDefense = 'Defense';
type TStrength = 'Strength';
type TAgility = 'Agility';
type TEnergy = 'Energy';

type PlayerStats =
  | TDamage
  | TAttackSpeed
  | TDefense
  | TStrength
  | TAgility
  | TEnergy;

class BaseStats {
  name: PlayerStats;
  value: number;
  private description?: string;
}

interface IDamage extends BaseStats {
  get(): number;
}
interface IAgility extends BaseStats {
  get(): number;
}

class Damage extends BaseStats {
  constructor(value: number) {
    super();
    this.value = value;
  }

  get() {
    return this.value;
  }
}

class Agility extends BaseStats {
  constructor(value: number) {
    super();
    this.value = value;
  }

  get() {
    return this.value;
  }
}

interface IPlayerStats {
  Damage: IDamage;
  Agility: IAgility;
}

class Stats implements IPlayerStats {
  Damage: Damage;
  Agility: Agility;
  constructor(stats: IPlayerStats) {
    this.Damage = stats.Damage;
    this.Agility = stats.Agility;
  }
}

interface ICharacterStats {
  stats: Stats;
}

class Character {
  stats: Stats;
  constructor(stats: Stats) {
    this.stats = stats;
  }
}

export { Character, ICharacterStats, Stats, Agility, Damage };
