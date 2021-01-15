// CHALLENGE #1

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const favorite = Number(
      prompt(
        'What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)'
      )
    );
    if (favorite >= 0 && favorite <= 3) this.answers[favorite]++;
    this.displayResults('string');
  },
  displayResults(type = 'array', answer = this.answers) {
    if (type === 'array') {
      console.log(answer);
    } else if (type === 'string') {
      console.log(`Poll results are ${answer.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

let answers = [5, 2, 3];
poll.displayResults.bind(null)('string', answers);
poll.displayResults.bind(null)('array', answers);
answers = [1, 5, 3, 9, 6, 1];
poll.displayResults.bind(null)('string', answers);
poll.displayResults.bind(null)('array', answers); */

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const favorite = Number(
      prompt(
        'What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)'
      )
    );
    if (favorite >= 0 && favorite <= 3) this.answers[favorite]++;
    this.displayResults('string');
  },
  displayResults(type = 'array', answer = this.answers) {
    if (type === 'array') {
      console.log(answer);
    } else if (type === 'string') {
      console.log(`Poll results are ${answer.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.bind({ answers: data1 })('string');
poll.displayResults.bind({ answers: data1 })('array');
poll.displayResults.bind({ answers: data2 })('string');
poll.displayResults.bind({ answers: data2 })('array');
 */

// CHALLENGE #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
