import PollBox from './poll-box.js';


export default function createPastPolls(root) {
    
    // reference DOM
    const container = root.querySelector('.past-results');

    // event listeners

    // should return its component render function

    // return ({ games }) => {

    return (props) => {
        const polls = props.games;

        container.innerHTML = '';

        for (const poll of polls) {
            const pollBox = PollBox({ poll });
            container.append(pollBox);
        }
    };
}