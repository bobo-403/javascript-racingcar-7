import { ERROR_MESSAGE } from '../constants/message.js';

const validator = {
  isValidNameLength(name) {
    if (name.length > 5) throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  },
};

export default validator;
