import validator from '../utils/validator.js';

class Car {
  name;
  pos;

  constructor(name) {
    validator.isValidNameLength(name);
    this.name = name;
    this.pos = 0;
  }

  advance(random) {
    if (random >= 4) this.pos += 1;
  }
}

export default Car;
