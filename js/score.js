function getbyID(x) {
    return document.getElementById(x);
}
// accessing variables
let scoreofTotal = getbyID('scoreofTotal');
let scoreofInterview = getbyID('scoreofInterview');
let scoreofRejected = getbyID('scoreofRejected');
let nojobsAvail = getbyID('nojobs');
let availablejobsCount = getbyID('availablejobsCount');

// total 

function updateScore() {
    //total
    let lenoftCards = getbyID('job-cards').children.length;
    scoreofTotal.innerText = lenoftCards;
    //interview and rejected
    interviewandRejectedUpdateScore();
    updateNoJob();
}

function interviewandRejectedUpdateScore() { 
    let countInterview = 0;
    document.querySelectorAll('.parentofstatus').forEach(card => {
        let statusEl = card.querySelector('.statuss');
        if(statusEl.innerText.includes('Interviewed')){
            countInterview++;   
        }
    });
    scoreofInterview.innerText = countInterview;
    let countRejected = 0;
    document.querySelectorAll('.parentofstatus').forEach(card => {
        let statusEl = card.querySelector('.statuss');
        if(statusEl.innerText.includes('Rejected')){
            countRejected++;
        }
    });
    scoreofRejected.innerText = countRejected;
}

function updateNoJob() {
    let visibleCards = document.querySelectorAll('.jobCard:not(.hidden)');
    
    if(visibleCards.length === 0) {
        nojobsAvail.classList.remove('hidden');
    } else {
        nojobsAvail.classList.add('hidden');
    }
}


updateScore();
interviewandRejectedUpdateScore();
