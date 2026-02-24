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
    //interview and rejected
    iAndrUpdateScore();

}

function iAndrUpdateScore() { 
    let countInterview = 0;
    let countRejected = 0;
    document.querySelectorAll('.parentofstatus').forEach( card => {
        let statussEL = card.querySelector('.statuss');
        if( statussEL.innerText.includes('Interviewed')){
            countInterview++;   
        }
    });
    document.querySelectorAll('.parentofstatus').forEach( stat => {
        let statussEL = stat.querySelector('.statuss');
        if( statussEL.innerText.includes('Rejected')){
            countRejected++;
        }
});
    console.log('i:', countInterview);
    console.log('r:', countRejected);
    scoreofInterview.innerText = countInterview;
    scoreofRejected.innerText = countRejected;
}
updateScore();
iAndrUpdateScore();