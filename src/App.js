import { inputCarName, inputRound } from './view/inputView.js';

class App {
  async run() {
    const carNames = await inputCarName();
    const round = await inputRound();
  }
}

export default App;
