import state, {
    initialize, newPoll, vote, unVote
    // import dispatch functions
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('enter in form to get poll', (expect) => {
    // what is the initial expected state?
    expect.equal(state.game, null);
    // use the action
    newPoll('question', 'brown', 'orange');
    // what should the state be now?
    


    // remove this line when starting your test
    expect.deepEqual(state.poll, {
        pollQuestion: { name: 'question' },
        optionOne: { name: 'brown', vote: 0 },
        optionTwo: { name: 'orange', vote: 0 }
    });
});

test('poll votes added to options', (expect) => {
    newPoll('question', 'brown', 'orange');
    vote('Yes');
    expect.deepEqual(state.poll, {
        pollQuestion: { name: 'question' },
        optionOne: { name: 'brown', vote: 1 },
        optionTwo: { name: 'orange', vote: 0 }
    });
});

test('poll votes taken away from options', (expect) => {
    newPoll('question', 'brown', 'orange');
    unVote('No');
    unVote('Yes');
    vote('Yes');
    expect.deepEqual(state.poll, {
        pollQuestion: { name: 'question' },
        optionOne: { name: 'brown', vote: 0 },
        optionTwo: { name: 'orange', vote: -1 }
    });
});
