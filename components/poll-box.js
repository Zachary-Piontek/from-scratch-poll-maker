
// export default function ScoreBox({ game }) {
export default function PollBox(props) {

    const poll = props.poll;

    const div = document.createElement('div');
    div.classList.add('poll-box');

    const spanFive = document.createElement('span');
    spanFive.classList.value = 'poll question';
    spanFive.textContent = poll.pollQuestion.name;

    const spanOne = document.createElement('span');
    spanOne.classList.value = 'option one';
    spanOne.textContent = poll.optionOne.name;
    const spanTwo = document.createElement('span');
    spanTwo.classList.value = 'vote optionOne';
    spanTwo.textContent = poll.optionOne.vote;

    const spanThree = document.createElement('span');
    spanThree.classList.value = 'option two';
    spanThree.textContent = poll.optionTwo.name;
    const spanFour = document.createElement('span');
    spanFour.classList.value = 'vote optionTwo';
    spanFour.textContent = poll.optionTwo.vote;

        

    div.append(spanOne);
    div.append(spanTwo);
    div.append(spanThree);
    div.append(spanFour);
    div.append(spanFive);

    return div;
}