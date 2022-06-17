

export default function createPollCounter(root, dispatch) {

    const handleVote = dispatch.handleVote;
    const handleUnVote = dispatch.handleUnVote;
    const handlePastResults = dispatch.handlePastResults;

    const [optionOneDisplay, optionTwoDisplay] = root.querySelectorAll('span');
    const [voteUpOptionOne, voteDownOptionOne, voteUpOptionTwo, voteDownOptionTwo, Results] = root.querySelectorAll('button');

    voteUpOptionOne.addEventListener('click', () => {
        handleVote('A');
    });
    voteUpOptionTwo.addEventListener('click', () => {
        handleVote('B');
    });
    voteDownOptionOne.addEventListener('click', () => {
        handleUnVote('A');
    });
    voteDownOptionTwo.addEventListener('click', () => {
        handleUnVote('B');
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


        optionOneDisplay.textContent = poll.optionOne.name;
        optionTwoDisplay.textContent = poll.optionTwo.name;

    };
}


