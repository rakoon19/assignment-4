let interviewBTN = document.querySelectorAll('.cardofInterview');
//active filter btns

interviewBTN.forEach( btn => {
    btn.addEventListener('click', function(){
        let card = this.closest('.jobCard');
        let statussEL = card.querySelector('.statuss');
        statussEL.innerText = 'Interviewed';

        updateScore();
        });
});
    

let RejectedBTN = document.querySelectorAll('.cardofRejected');

RejectedBTN.forEach( btn => {
    btn.addEventListener('click', function(){
        let card = this.closest('.jobCard');
        let statussEL = card.querySelector('.statuss');
        statussEL.innerText = 'Rejected';

        updateScore();
    });
});







