let myElement; let myFake1; let myFake2; let myFake3

function tempArray(n) {
    const tempArray = []; let randomIndex; let myElement; let objectString=''

    for (i = 1; i < couples.length; i++) { tempArray.push(i) };

    // const activeCouples = tempArray.slice()                           // eine metode Array zu Clonen
    // const activeCouples = JSON.parse('['+Array.of(tempArray)+']')     // eine metode Array zu Clonen
    // const activeCouples = JSON.parse(JSON.stringify(tempArray))       // eine metode Array zu Clonen
    // const activeCouples = Object.assign([], tempArray)                // eine metode Array zu Clonen
    // const activeCouples = Array.from(tempArray)                       // eine metode Array zu Clonen
    // const activeCouples = Array.from(tempArray, x => x)               // eine metode Array zu Clonen
    // const activeCouples = [].concat(tempArray)                        // eine metode Array zu Clonen  my Favorite ;)
    // const activeCouples = [...tempArray]                              // eine metode Array zu Clonen
    
    const activeCouples = [...tempArray]
    for (i = 0; i < couples.length; i++) {
        randomIndex = Math.floor(Math.random() * activeCouples.length); // generiere eine zufällige Zahl die den Index Eines Elements aus der activeCouples Array entspricht
        myElement = activeCouples[randomIndex];
        activeCouples.splice(randomIndex, 1);    //löscht den element aus der activeCouples Array

        //console.log(i + '    ' + myElement + '   ' + activeCouples);

        const forFakeCouples = [...tempArray]

        forFakeCouples.splice(forFakeCouples.indexOf(myElement), 1),
            randomIndex = Math.floor(Math.random() * forFakeCouples.length);
        myFake1 = forFakeCouples[randomIndex];
        forFakeCouples.splice(forFakeCouples.indexOf(myFake1), 1),
            randomIndex = Math.floor(Math.random() * forFakeCouples.length);
        myFake2 = forFakeCouples[randomIndex];
        forFakeCouples.splice(forFakeCouples.indexOf(myFake2), 1),
            randomIndex = Math.floor(Math.random() * forFakeCouples.length);
        myFake3 = forFakeCouples[randomIndex];

        const randomQuestionArry = [myElement, myFake1, myFake2, myFake3]
        randomQuestionArry.sort(() => Math.random() - 0.5)   // sortiertt zufälig inhalt der Array

        //console.log(myElement + ' ' + myFake1 + ' ' + myFake2 + ' ' + myFake3)
        //console.log(randomQuestionArry[0], randomQuestionArry[1], randomQuestionArry[2], randomQuestionArry[3],)
        
        console.log(couples[randomQuestionArry[0]][2])


        if (i < n) {
            objectString += `
   {
        "question": "Frage ${i+1}: <b>${couples[myElement][0]}</b> ist die Hauptstadt welchen Landes?",
        "answer_1": "<img class='flagL' src='./img/flags/${couples[randomQuestionArry[0]][2]}.svg'><b>${couples[randomQuestionArry[0]][1]}</b><img class='flagR' src='./img/flags/${couples[randomQuestionArry[0]][2]}.svg'>",
        "answer_2": "<img class='flagL' src='./img/flags/${couples[randomQuestionArry[1]][2]}.svg'><b>${couples[randomQuestionArry[1]][1]}</b><img class='flagR' src='./img/flags/${couples[randomQuestionArry[1]][2]}.svg'>",
        "answer_3": "<img class='flagL' src='./img/flags/${couples[randomQuestionArry[2]][2]}.svg'><b>${couples[randomQuestionArry[2]][1]}</b><img class='flagR' src='./img/flags/${couples[randomQuestionArry[2]][2]}.svg'>",
        "answer_4": "<img class='flagL' src='./img/flags/${couples[randomQuestionArry[3]][2]}.svg'><b>${couples[randomQuestionArry[3]][1]}</b><img class='flagR' src='./img/flags/${couples[randomQuestionArry[3]][2]}.svg'>",
        "right_answer": "${randomQuestionArry.indexOf(myElement) + 1}"
    },`}

    }
    objectString = objectString.slice(0, -1)
    //console.log(objectString)
    questions = JSON.parse('[' + objectString + ']')
    //console.log(questions)
    allQuestions = questions.length

}


