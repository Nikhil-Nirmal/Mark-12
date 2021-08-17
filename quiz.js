const input = document.querySelector('.n1');
const output = document.querySelector('.scoreis');
const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('.btn2');
const correctAns = ["Right_Angled_Triangle","Acute_Angled_Triangle","Obtuse_Angled_Triangle","Equilateral_Triangle","Isosceles_Triangle","Scalen_Triangle"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values() ) {
        if ( value === correctAns[index])
        {
            score+= 5;
        }
        index++;
    }
    if ( score === 30) {
        output.innerHTML = "Whoa you got all correct. Your score is "+score+"\nThank You guys for playing this Quiz!!! :)";
    }
    else {
        output.innerHTML = "Nice try! Your score is "+score+" out of 30. \nThank You guys for playing this Quiz!!! :)";
    }
}


submitBtn.addEventListener('click', calculateScore)

