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
    rejectedUpdateScore();
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

    // no jobs available 
    //for total
    if( lenoftCards === 0 ){
        nojobsAvail.classList.remove('hidden')
    }else {
        nojobsAvail.classList.add('hidden')
    }
    //for interview
    btnofInterview.addEventListener('click', function(){
        if( scoreofInterview === 0 ){
            nojobsAvail.classList.remove('hidden')
        }else {
            nojobsAvail.classList.add('hidden')
        }
    })
    //for rejected
    btnofRejected.addEventListener('click', function(){
        if( scoreofRejected === 0 ){
            nojobsAvail.classList.remove('hidden')
        }else {
            nojobsAvail.classList.add('hidden')
        }
    })




}






updateScore();
interviewandRejectedUpdateScore();
rejectedUpdateScore();
