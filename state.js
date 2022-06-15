// set state to an empty object


const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    //////////------ needed for testing part of state
   // state.poll = null;

    /* state.poll = {
        question:  { name: 'question' },
        optionOne: { name: 'option one', vote: 'green' },
        optionTwo: { name: 'option two', vote: 'yellow' },

    */

    state.poll = null;
    
    state.pastResults = [];
}


// call initialize


initialize();
// export state as primary (default) export

export default state;


// export dispatch functions that modify state

export function newPoll(pollQuestion, optionOne, optionTwo) { 
    state.poll = {
        pollQuestion: { name: pollQuestion },
        optionOne: { name: optionOne, vote: 0 },
        optionTwo: { name: optionTwo, vote: 0 }
    };
}

export function vote(voting) {
    if (voting === 'Yes') {
        state.poll.optionOne.vote = vote + 1;
    }
    if (voting === 'No') {
        state.poll.optionTwo.vote = vote + 1;
    }
}

export function unVote(voting) {
    if (voting === 'Yes') {
        state.poll.optionOne.vote = vote - 1;
    }
    if (voting === 'No') {
        state.poll.optionTwo.vote = vote - 1;
    } 
}

export function Results() {
    state.pastResults.push(state.poll);
    state.poll = null;
}