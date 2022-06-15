
export default function createPollCounter(root) {

    const [optionOneDisplay, optionTwoDisplay] = root.querySelectorAll('span');

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


