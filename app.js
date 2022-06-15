// import utilities

// import component creators
import createPollCounter from './components/poll-counter.js';
import createPollTracker from './components/poll-tracker.js';
import createStartingPoll from './components/starting-poll.js';
//import state and dispatch functions
import state, { newPoll, unVote, vote } from './state.js';
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const pollTracker = createPollTracker(document.querySelector('#poll-tracker'));
const pollCounter = createPollCounter(document.querySelector('#poll-counter'), {
    handleVote: (name) => {
        vote(name);
        display();
    },
    handleUnVote: (name) => {
        unVote(name);
        display();
    }
});
const startingPoll = createStartingPoll(document.querySelector('#starting-poll'), {
    handleNewPoll: (optionOne, optionTwo) => {
        newPoll(optionOne, optionTwo);
        display();
    }
});

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    //const pollTrackerProps = { poll: state.poll };
    //pollTracker(pollTrackerProps);
    pollTracker({ poll: state.poll });
    pollCounter({ poll: state.poll });
    startingPoll({ poll: state.poll });


}






// Call display on page load
display();
