
export default function createStartingPoll(root) {
    
    const pollForm = root.querySector('form');

    return (props) => {

        const poll = props.poll;

        if (poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');
    };

}