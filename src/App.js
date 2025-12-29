import GameController from './controller/GameController.js';
import { inputCarName, inputRound } from './view/inputView.js';

class App {
  gameController;

  constructor() {
    this.gameController = new GameController();
  }

  async run() {
    const carNames = await inputCarName();
    this.gameController.setCars(carNames);

    const round = await inputRound();
    this.gameController.setRound(round);

    this.gameController.startRound();
  }
}

export default App;
