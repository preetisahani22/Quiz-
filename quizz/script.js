const quiz = [
  {
    question: "1. What will be the output of: console.log(typeof null);",
    options: [" null", " object", " undefined", " number"],
    answer: "B"
  },
  {
    question: "2. Which keyword is used to declare a constant in JavaScript?",
    options: [" var", " let", " const", " static"],
    answer: "C"
  },
  {
    question: "3. What does '===' do in JavaScript?",
    options: [
      " Compares values only",
      " Compares types only",
      " Compares both value and type",
      " Assigns value"
    ],
    answer: "C"
  },
  {
    question: "4. What will [1, 2, 3].map(x => x * 2) return?",
    options: [" [1, 2, 3]", " [2, 4, 6]", " [1, 4, 9]", " undefined"],
    answer: "B"
  },
  {
    question: "5. Which function converts JSON into a JavaScript object?",
    options: [
      " JSON.parse()",
      " JSON.stringify()",
      " JSON.convert()",
      " JSON.toObject()"
    ],
    answer: "A"
  },
  {
    question: "6. What is the output of the code with let inside function scope?",
    options: [" 5", " 10", " undefined", " ReferenceError"],
    answer: "D"
  },
  {
    question: "7. Which method adds an element to the end of an array?",
    options: [" push()", " pop()", " shift()", " unshift()"],
    answer: "A"
  },
  {
    question: "8. What will console.log(0 == false) output?",
    options: [" true", " false", " undefined", " Error"],
    answer: "A"
  },
  {
    question: "9. What is a closure?",
    options: [
      " A function with no parameters",
      " A function inside another function that accesses outer variables",
      " A loop",
      " An object"
    ],
    answer: "B"
  },
  {
    question: "10. Which is NOT a JavaScript data type?",
    options: [" String", " Boolean", " Float", " Undefined"],
    answer: "C"
  }
];

const startQuiz = document.querySelector('.start-quiz');
const Quizqus = document.querySelector('.quiz-qus');
const optionQuiz = document.querySelector('.quiz-option');
 let currentqus=0;
 
 const handleshort =()=>{
    startQuiz.classList.add('d-none');

 }

 const handlenext=()=>{
    Quizqus.textContent= quiz[currentqus].question;

    optionQuiz.innerHTML = ''
    quiz[currentqus].options.forEach((option)=>{
        let li =document.createElement('li');

        li.innerHTML=`<span>${option}</span>`

        optionQuiz.append(li)
    })

    currentqus++;
 }
