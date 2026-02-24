let interviewBTN = document.querySelectorAll('.cardofInterview');
//active filter btns

interviewBTN.forEach( btn => {
    btn.addEventListener('click', function(){
        let card = this.closest('.jobCard');
        let statussEL = card.querySelector('.statuss');
        statussEL.innerText = 'Interviewed';
        statussEL.classList.remove('rejected-status');
        statussEL.classList.add('interviewed-status');
        
        statussEL.parentElement.parentElement.classList.remove('rejected-border');
        statussEL.parentElement.parentElement.classList.add('interviewed-border');
        
        updateScore();
        availJob(this);
        });
});
    

let RejectedBTN = document.querySelectorAll('.cardofRejected');

RejectedBTN.forEach( btn => {
    btn.addEventListener('click', function(){
        let card = this.closest('.jobCard');
        let statussEL = card.querySelector('.statuss');
        statussEL.innerText = 'Rejected';
        statussEL.classList.remove('interviewed-status');
        statussEL.classList.add('rejected-status');

        statussEL.parentElement.parentElement.classList.remove('interviewed-border');
        statussEL.parentElement.parentElement.classList.add('rejected-border');
        
        updateScore();
        availJob(this);
    });
});







