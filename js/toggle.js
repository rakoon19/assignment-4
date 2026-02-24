let jobCardParent = document.querySelectorAll('.jobCard');

let btnofInterview = getbyID('btnofInterview');


function availJob(clickedBTN) {
    if ( clickedBTN.innerText.includes('All')){
        availablejobsCount.innerText = `${getbyID('job-cards').children.length}`
    }else if( clickedBTN.innerText.includes('Interview')){
        availablejobsCount.innerText = `${scoreofInterview.innerText} of ${getbyID('job-cards').children.length}`;
    }else if( clickedBTN.innerText.includes('Rejected')){
        availablejobsCount.innerText = `${scoreofRejected.innerText} of ${getbyID('job-cards').children.length}`;
    }
}
function btnAttribute(clickedBTN) {
    let allBTN = [btnofALL, btnofInterview, btnofRejected];
    allBTN.forEach( btn => { 
    btn.firstElementChild.classList.remove('btn-primary');
    btn.classList.remove('btn-primary');
    })
    clickedBTN.firstElementChild.classList.add('btn-primary');
    clickedBTN.classList.add('btn-primary');
    availJob(clickedBTN);
}
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
    btnAttribute(this);
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
    btnAttribute(this);
});

let btnofALL = getbyID('btnofALL');

btnofALL.addEventListener('click', function(){
    jobCardParent.forEach( card => {    
        card.classList.remove('hidden');
    });
    updateNoJob();
    btnAttribute(this);
});
