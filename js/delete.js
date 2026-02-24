let deleteBTN = document.querySelectorAll('.delBtn');

function del() {
    deleteBTN.forEach( del => {
    del.addEventListener('click', function(){
        // this.closest('.jobCard').remove();
        del.parentElement.parentElement.remove();
        updateScore();
    if(btnofInterview.classList.contains('btn-primary')){
    availJob(btnofInterview);
    } else if(btnofRejected.classList.contains('btn-primary')){
    availJob(btnofRejected);
    } else {
    availJob(btnofALL);
    }

        })
    })
}
del();
