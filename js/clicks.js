btnofAll.addEventListener('click', function (){

});
btnofInterview.addEventListener('click', function (){
    
});
btnofRejected.addEventListener('click', function (){

});


// delBtn
document.querySelectorAll('.delBtn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.jobCard').remove();
    let remaining = document.querySelectorAll('.jobCard').length;
    scoreofTotal.innerText = remaining;
    if(remaining === 0){
        nojobsAvail.classList.remove('hidden');
    }
  });
});

// all

btnofAll.addEventListener('click', function(){
    allCards.forEach(card => {
        card.classList.remove('hidden');
    })
})