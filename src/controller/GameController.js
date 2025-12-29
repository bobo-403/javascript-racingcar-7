import { Random } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';
import validator from '../utils/validator.js';

class GameController {
  cars;
  totalRound;
  currentRound;

  constructor() {
    this.currentRound = 1;
    this.cars = [];
  }

  setCars(carNames) {
    for (const carName of carNames) this.cars.push(new Car(carName));
  }

  setRound(round) {
    validator.isPositiveInteger(round);
    this.totalRound = Number(round);
  }

  startRound() {
    for (const car of this.cars) {
      const random = Random.pickNumberInRange(0, 9);
      car.advance(random);
    }
  }
}

export default GameController;
