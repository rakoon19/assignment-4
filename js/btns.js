let interviewBTN = document.querySelectorAll('.cardofInterview');

interviewBTN.forEach( btn => {
    btn.addEventListener('click', function(){
    jobCardParent.forEach( card => {
       let statussEL = card.querySelector('.statuss');
        statussEL.innerText = 'Interviewed';
        });
        updateScore();
        });
});
    

let RejectedBTN = document.querySelectorAll('.cardofRejected');

RejectedBTN.forEach( btn => {
    btn.addEventListener('click', function(){
    jobCardParent.forEach( card => {
       let statussEL = card.querySelector('.statuss');
        statussEL.innerText = 'Rejected';
        });
        updateScore();
    });
});







