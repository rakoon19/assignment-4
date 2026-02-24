let jobCardParent = document.querySelectorAll('.jobCard');

let btnofInterview = getbyID('btnofInterview');
let btnofRejected = getbyID('btnofRejected');
let btnofALL = getbyID('btnofALL');

function availJob(clickedBTN) {
    let totalJobs = getbyID('job-cards').children.length;
    
    if (clickedBTN.innerText.includes('All')){
        availablejobsCount.innerText = totalJobs;
    } else if(clickedBTN.innerText.includes('Interview')){
        let count = parseInt(scoreofInterview.innerText);
        availablejobsCount.innerText = count >= 1 ? `${count} of ${totalJobs}` : count;
    } else if(clickedBTN.innerText.includes('Rejected')){
        let count = parseInt(scoreofRejected.innerText);
        availablejobsCount.innerText = count >= 1 ? `${count} of ${totalJobs}` : count;
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

function applyCurrentFilter() {
    if(btnofInterview.classList.contains('btn-primary')) {
        jobCardParent.forEach(card => {
            let statussEL = card.querySelector('.statuss');
            if( statussEL.innerText.includes('Interviewed') ){
                card.classList.remove('hidden');
            }else {
                card.classList.add('hidden');
            }
        });
    } else if(btnofRejected.classList.contains('btn-primary')) {
        jobCardParent.forEach(card => {
            let statussEL = card.querySelector('.statuss');
            if( statussEL.innerText.includes('Rejected') ){
                card.classList.remove('hidden');
            }else {
                card.classList.add('hidden');
            }
        });
    } else {
        jobCardParent.forEach( card => {    
            card.classList.remove('hidden');
        });
    }
    updateNoJob();
}

btnofInterview.addEventListener('click', function(){
    btnAttribute(this);
    applyCurrentFilter();
});

btnofRejected.addEventListener('click', function(){
    btnAttribute(this);
    applyCurrentFilter();
});

btnofALL.addEventListener('click', function(){
    btnAttribute(this);
    applyCurrentFilter();
});

btnAttribute(btnofALL);