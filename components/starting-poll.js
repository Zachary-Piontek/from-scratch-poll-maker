
export default function createStartingPoll(root, handlers) {
    
    const handleNewPoll = handlers.handleNewPoll;


    const pollForm = root.querySelector('form');


    pollForm.addEventListener('submit', (e) => {
        
        e.preventDefault();

        const formData = new FormData(pollForm);
        handleNewPoll(formData.get('pollQuestion'), formData.get('option1'), formData.get('option2'));
        pollForm.reset();

        // eslint-disable-next-line no-console
        //console.log(formData.get('pollQuestion'), formData.get('option1'), formData.get('option2'));
    });

    return (props) => {

        const poll = props.poll;

        if (poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');
    };

}