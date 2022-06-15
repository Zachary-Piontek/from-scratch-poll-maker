
export default function createPollCounter(root, dispatch) {

    const handleVote = dispatch.handleVote;
    const handleUnVote = dispatch.handleUnVote;

    const [optionOneDisplay, optionTwoDisplay] = root.querySelectorAll('span');
    const [voteUpOptionOne, voteDownOptionOne, voteUpOptionTwo, voteDownOptionTwo] = root.querySelectorAll('button');

    voteUpOptionOne.addEventListener('click', () => {
        handleVote('Yes');
    });
    voteUpOptionTwo.addEventListener('click', () => {
        handleVote('Yes');
    });
    voteDownOptionOne.addEventListener('click', () => {
        handleUnVote('No');
    });
    voteDownOptionTwo.addEventListener('click', () => {
        handleUnVote('No');
    });

    return (props) => {

        const poll = props.poll;
        if (poll === false) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');

        optionOneDisplay.textContent = poll.option1.name;
        optionTwoDisplay.textContent = poll.option2.name;

    };
}


