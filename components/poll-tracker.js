

export default function createPollTracker(root) {
    // reference DOM

    // event listeners

    // should return its component render function
    // return ({ data }) => {
    return (props) => {
        
        const poll = props.poll;
        
        
 
        const div = document.createElement('div');
        div.classList.add('poll-box');

        const spanFive = document.createElement('span');
        spanFive.classList.value = 'poll question';
        spanFive.textContent = poll.question.name;

        const spanOne = document.createElement('span');
        spanOne.classList.value = 'option one';
        spanOne.textContent = poll.optionOne.name;
        const spanTwo = document.createElement('span');
        spanTwo.classList.value = 'votes optionOne';
        spanTwo.textContent = poll.optionOne.vote;

        const spanThree = document.createElement('span');
        spanThree.classList.value = 'option two';
        spanThree.textContent = poll.optionTwo.name;
        const spanFour = document.createElement('span');
        spanFour.classList.value = 'votes optionTwo';
        spanFour.textContent = poll.optionTwo.vote;

        

        div.append(spanOne);
        div.append(spanTwo);
        div.append(spanThree);
        div.append(spanFour);
        div.append(spanFive);

        root.append(div);
    };
}