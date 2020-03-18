import midoriya from "../../assets/chars/midoriya.png";
import leena from "../../assets/chars/leena.png";
import clash from "../../assets/clash.wav";
class Card {
  constructor(id, name, img, power, maxLife, life) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.power = power;
    this.maxLife = maxLife;
    this.life = life;
    this._clashSound = new Audio(clash);
  }

  _playSound(sound) {
    sound.time = 0;
    sound.play();
  }

  attack(card) {
    card.life -= this.power;
    this._playSound(this._clashSound);
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

export const deck01 = [new Midoriya(), new Leena(), new Midoriya(), new Leena(), new Midoriya(), new Leena()];
