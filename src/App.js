import { inputCarName } from './view/inputView.js';

class App {
  async run() {
    const carnames = await inputCarName();
    console.log(carnames);
  }
}

export default App;
