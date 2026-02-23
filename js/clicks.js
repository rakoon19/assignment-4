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

btnofInterview.forEach(btn => { 
  btn.addEventListener('click', function(){
    statuss.forEach(el => {
      if( el.innerText = 'Interviewed'){
        // allCards.classList.add('hidden');
        el.classList.remove('hidden');
      }
    })
  })
})


document.querySelectorAll('.cardofInterview').forEach(btn => {
  btn.addEventListener('click', function(){
    // this.closest('.statuss').innerText = 'Interviewed';
    statuss.forEach(el => {
      el.innerText = 'Interviewed';
    });
  });
});

document.querySelectorAll('.cardofRejected').forEach(btn => {
  btn.addEventListener('click', function(){
    // this.closest('.statuss').innerText = 'Interviewed';
    statuss.forEach(el => {
      el.innerText = 'Rejected';
    });
  });
});