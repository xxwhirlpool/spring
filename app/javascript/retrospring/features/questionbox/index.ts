import registerEvents from 'utilities/registerEvents';
import { questionboxAllHandler, questionboxAllInputHandler } from './all';
import { questionboxPromoteHandler, questionboxUserHandler, questionboxUserInputHandler } from './user';

export default (): void => {
  registerEvents([
    { type: 'click', target: '[name=qb-ask]', handler: questionboxUserHandler, global: true },
    { type: 'click', target: '#new-question', handler: questionboxPromoteHandler, global: true },
    { type: 'click', target: '[name=qb-all-ask]', handler: questionboxAllHandler, global: true },
    { type: 'keydown', target: '[name=qb-question]', handler: questionboxUserInputHandler, global: true },
    { type: 'keydown', target: '[name=qb-all-question]', handler: questionboxAllInputHandler, global: true }
  ]);
}