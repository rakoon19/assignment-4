let deleteBTN = document.querySelectorAll('.delBtn');

deleteBTN.forEach( del => {
    del.addEventListener('click', function(){
        // this.closest('.jobCard').remove();
        del.parentElement.parentElement.remove();
        updateScore();
        availJob();
    })
})