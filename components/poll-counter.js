
export default function createPollCounter(root) {

    const [optionOneDisplay, optionTwoDisplay] = root.querySelectorAll('span');

    return (props) => {

        const poll = props.poll;
        

        optionOneDisplay.textContent = poll.optionOne.name;
        optionTwoDisplay.textContent = poll.optionTwo.name;

    };
}


