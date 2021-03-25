export default class Critter {
  hatched: bool;
  hatchTicksRemaining: int;

  hunger: int;
  hungerTickAmount: int;
  sprite: string;

  constructor() {
    this.sprite = 'test_critter'
    this.hatched = false
    this.hatchTicksRemaining = 3

    this.maxHunger = 100
    this.hunger = this.maxHunger
    this.hungerTickAmount = 5
  }

  hungerTick() {
    this.hunger -= this.hungerTickAmount
  }

  hatchTick() {
    this.hatchTicksRemaining--;

    if (this.hatchTicksRemaining <= 0) {
      this.hatched = true
      this.sprite = 'bunny'
    }
  }

  feed() {
    this.hunger += 30
  }

  tick() {
    this.hunger = Math.min(Math.max(this.hunger, 0), 100)

    if (!this.hatched) {
      this.hatchTick()
    }

    this.hungerTick()
  }
}
