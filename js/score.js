// accessing variables
let scoreofTotal = getbyID('scoreofTotal');
let scoreofInterview = getbyID('scoreofInterview');
let scoreofRejected = getbyID('scoreofRejected');
let availablejobsCount = getbyID('availablejobsCount');

// total 

function updateScore() {
    //total
    let lenofCards = getbyID('job-cards').children.length;
    scoreofTotal.innerText = lenofCards;
    //interview
    
    scoreofInterview.innerText = '';
    //rejected
}

updateScore();