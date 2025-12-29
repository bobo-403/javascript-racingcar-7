import Car from '../model/Car.js';

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
    this.totalRound = Number(round);
  }
}

export default GameController;
