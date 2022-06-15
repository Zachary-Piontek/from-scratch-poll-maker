import PollBox from './poll-box.js';

export default function createPollTracker(root) {
    // reference DOM

    // event listeners

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        
        const poll = props.poll;

        if (!poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');

        root.innerHTML = '';
        const pollBox = PollBox({ poll });
        root.append(pollBox);
        
 
        
    };
}