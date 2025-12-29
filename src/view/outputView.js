import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/message.js';

export function oneRoundPrint(round, posStates) {
  if (round === 1) Console.print(PROGRESS_MESSAGE.EXECUTION_RESULT_HEADER);
  Console.print(`${posStates}\n`);
}
