import midoriya from "../../assets/chars/midoriya.png";
import leena from "../../assets/chars/leena.png";

class Card {
  constructor(id, name, img, power, maxLife, life) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.power = power;
    this.maxLife = maxLife;
    this.life = life;
  }

  attack(card) {
    card.life -= this.power;
  }

  defend(power) {
    this.life -= power;
  }
}

export class Midoriya extends Card {
  constructor() {
    super("001", "Midoriya Izuku", midoriya, 10, 10, 10);
  }
}

export class Leena extends Card {
  constructor() {
    super("001", "Leena Inverse", leena, 20, 15, 15);
  }
}
