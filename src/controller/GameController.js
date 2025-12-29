import { Random } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';
import validator from '../utils/validator.js';
import { oneRoundPrint } from '../view/outputView.js';

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

  startGame() {
    for (let i = 0; i < this.totalRound; i++) this.startRound();
  }

  startRound() {
    const posStates = [];

    for (const car of this.cars) {
      const random = Random.pickNumberInRange(0, 9);
      car.advance(random);
      posStates.push(car.getPosState());
    }

    oneRoundPrint(this.currentRound, posStates.join('\n'));
    this.currentRound++;
  }
}

export default GameController;
