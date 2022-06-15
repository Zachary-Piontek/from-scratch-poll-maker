

export default function createPollCounter(root, dispatch) {

    const handleVote = dispatch.handleVote;
    const handleUnVote = dispatch.handleUnVote;
    const handlePastResults = dispatch.handlePastResults;

    const [optionOneDisplay, optionTwoDisplay] = root.querySelectorAll('span');
    const [voteUpOptionOne, voteDownOptionOne, voteUpOptionTwo, voteDownOptionTwo, Results] = root.querySelectorAll('button');

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
    Results.addEventListener('click', () => {
        handlePastResults();
    });

    return (props) => {

        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');

        optionOneDisplay.textContent = poll.option1.name;
        optionTwoDisplay.textContent = poll.option2.name;

    };
}


