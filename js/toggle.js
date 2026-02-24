let jobCardParent = document.querySelectorAll('.jobCard');

let btnofInterview = getbyID('btnofInterview');

btnofInterview.addEventListener('click', function(){
    jobCardParent.forEach(card => {
        let statussEL = card.querySelector('.statuss');
        if( statussEL.innerText.includes('Interviewed') ){
            card.classList.remove('hidden');
        }else {
            card.classList.add('hidden');
        }
    });
    updateNoJob();
});
let btnofRejected = getbyID('btnofRejected');

btnofRejected.addEventListener('click', function(){
    jobCardParent.forEach(card => {
        let statussEL = card.querySelector('.statuss');
        if( statussEL.innerText.includes('Rejected') ){
            card.classList.remove('hidden');
        }else {
            card.classList.add('hidden');
        }
    });
    updateNoJob();
});

let btnofALL = getbyID('btnofALL');

btnofALL.addEventListener('click', function(){
    jobCardParent.forEach( card => {    
        card.classList.remove('hidden');
    });
    updateNoJob();
});
