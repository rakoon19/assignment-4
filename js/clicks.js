btnofAll.addEventListener('click', function (){

});
btnofInterview.addEventListener('click', function (){
    
});
btnofRejected.addEventListener('click', function (){

});


// delBtn

delBtn.addEventListener('click', function(){
    jobCard.innerHTML = '';
    lenofJobCards -= 1;
    if(lenofJobCards == 0){
        jobcardContainer.innerHTML = '';
        jobCards.innerHTML = '';
        nojobsAvail.classList.remove('hidden');
    }
});