import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/message.js';

export async function inputCarName() {
  const carNames = await Console.readLineAsync(PROGRESS_MESSAGE.INPUT_CAR_NAME);
  return carNames.split(',');
}
