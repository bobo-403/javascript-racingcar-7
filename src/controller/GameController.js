import { Random } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';
import validator from '../utils/validator.js';
import { oneRoundPrint, winnerPrint } from '../view/outputView.js';

class GameController {
  cars;
  totalRound;
  bestRecord;

  constructor() {
    this.cars = [];
    this.bestRecord = 0;
  }

  setCars(carNames) {
    for (const carName of carNames) this.cars.push(new Car(carName));
  }

  setRound(round) {
    validator.isPositiveInteger(round);
    this.totalRound = Number(round);
  }

  startGame() {
    for (let round = 1; round <= this.totalRound; round++)
      this.startRound(round);

    const winners = this.findWinner();
    winnerPrint(winners);
  }

  startRound(round) {
    const posStates = [];

    for (const car of this.cars) {
      const random = Random.pickNumberInRange(0, 9);
      car.advance(random);
      posStates.push(car.getPosState());
      if (car.getPos() > this.bestRecord) this.bestRecord = car.getPos();
    }

    oneRoundPrint(round, posStates.join('\n'));
  }

  findWinner() {
    const winners = [];

    for (const car of this.cars) {
      if (car.getPos() !== this.bestRecord) continue;
      winners.push(car.getName());
    }

    return winners;
  }
}

export default GameController;
