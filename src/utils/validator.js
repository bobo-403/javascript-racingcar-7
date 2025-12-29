import { ERROR_MESSAGE } from '../constants/message.js';

const validator = {
  isValidNameLength(name) {
    if (name.length > 5) throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  },
  isPositiveInteger(num) {
    if (!Number.isInteger(Number(num)) || Number(num) <= 0)
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_NUMBER);
  },
};

export default validator;
