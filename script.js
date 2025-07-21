let currentQuestion = 0
let allQuestions
let questions = []
let goodAnswers = 0
let idOfRightAnswer

function myStart() {
    let askValue = document.getElementById('startInput')
    if (askValue.value < 1) { tempArray(1) }
    else {
        if (askValue.value > 101) { tempArray(101) } else { tempArray(askValue.value) }
    }
    document.getElementById('startBody').style = 'display: none';
    document.getElementById('questBody').style = ''
    goodAnswers = 0
    document.getElementById('all-questions').innerHTML = allQuestions;
    idOfRightAnswer = questions[currentQuestion].right_answer
    document.getElementById('nextButton').disabled = true
    showQuestion()
}

function showQuestion() {

    if (currentQuestion >= allQuestions) {
        currentQuestion = 0
        document.getElementById('questBody').style = 'display: none'
        document.getElementById('endBody').style = ''
        document.getElementById('allAnswersId').innerHTML = allQuestions
        document.getElementById('goodAnswersId').innerHTML = goodAnswers
        document.getElementById('imageId').src = "./img/trophy.png"
        document.getElementById('progress-bar').style = 'display: none'

    } else {
        let question = questions[currentQuestion]
        //document.getElementById('current-question').innerHTML = currentQuestion + 1
        document.getElementById('current-question').innerHTML = goodAnswers
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    idOfRightAnswer = questions[currentQuestion].right_answer
    console.log(selection + '    ' + questions[currentQuestion].right_answer);
    let selectedQuestionNomber = selection.slice(-1)
    if (selectedQuestionNomber == questions[currentQuestion].right_answer) {
        document.getElementById(selection).classList.add('bg-success')
        goodAnswers++
    } else {
        document.getElementById(selection).classList.add('bg-danger')
        document.getElementById(`answer_${idOfRightAnswer}`).classList.add('bg-success')
    }
    document.getElementById('nextButton').disabled = false
    let progressBar = Math.round(100 * (currentQuestion + 1) / allQuestions)
    document.getElementById('progress-bar').innerHTML = currentQuestion + 1
    document.getElementById('progress-bar').style = 'width: ' + progressBar + '%'
}

function nextQuestion() {
    currentQuestion++
    document.getElementById('nextButton').disabled = true
    resetAnswerButtons()
    showQuestion()
}

function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('bg-success')
    document.getElementById('answer_1').classList.remove('bg-danger')
    document.getElementById('answer_2').classList.remove('bg-success')
    document.getElementById('answer_2').classList.remove('bg-danger')
    document.getElementById('answer_3').classList.remove('bg-success')
    document.getElementById('answer_3').classList.remove('bg-danger')
    document.getElementById('answer_4').classList.remove('bg-success')
    document.getElementById('answer_4').classList.remove('bg-danger')
}

function newInit(n) {
    currentQuestion = 0
    goodAnswers = 0
    document.getElementById('imageId').src = "./img/quiz-time.jpg"
    document.getElementById('startBody').style = ""
    document.getElementById('questBody').style = 'display: none'
    document.getElementById('endBody').style = "display: none;"
}

