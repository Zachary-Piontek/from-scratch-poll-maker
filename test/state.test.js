import state, {
    initialize, startingPoll,
    // import dispatch functions
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('enter in form to get poll', (expect) => {
    // what is the initial expected state?
    expect.equal(state.game, null);
    // use the action
    startingPoll('topic', 'brown', 'orange');
    // what should the state be now?
    


    // remove this line when starting your test
    expect.deepEqual(state.poll, {
        question: { name: 'topic' },
        optionOne: { name: 'brown', vote: 0 },
        optionTwo: { name: 'orange', vote: 0 }
    });
});
