const quizData = [
    {
        question: "How much cost of Lambo Aventador?",
        a: "1 billion $",
        b: "2 billion $",
        c: "800k $",
        d: "600k $",
        correct: "d",
        },
        {
        question: "Who is founder company of Apple?",
        a: "Stive Jobs",
        b: "Jef Bezos",
        c: "Elon Mask",
        d: "Bill Gates",
        correct: "a",
        },
        {
        question: "Calculate it : ((1*5/4+9*4)^3)^2 = ?",
        a: "67155248222.21",
        b: "87151527973.75",
        c: "76717635279.93",
        d: "86671445574.45",
        correct: "c",
        },
        {
        question: "Hoe many tates have in USA?",
        a: "28",
        b: "50",
        c: "45",
        d: "60",
        correct: "b",
        },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})