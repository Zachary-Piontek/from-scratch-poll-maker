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
    // state.pastGames = [];
}


// call initialize


initialize();
// export state as primary (default) export

export default state;


// export dispatch functions that modify state

export function startingPoll(question, optionOne, optionTwo) {
    state.poll = {
        question: { name: question },
        optionOne: { name: optionOne, vote: 0 },
        optionTwo: { name: optionTwo, vote: 0 }
    };
}