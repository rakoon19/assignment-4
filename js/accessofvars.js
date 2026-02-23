// accessing variables
let scoreofTotal = getbyID('scoreofTotal');
let scoreofInterview = getbyID('scoreofInterview');
let scoreofRejected = getbyID('scoreofRejected');
let availablejobsCount = getbyID('availablejobsCount')

// accessing btns
let btnofAll = getbyID('btnofAll');
let btnofInterview = getbyID('btnofInterview');
let btnofRejected = getbyID('btnofRejected');

let delBtn = getbyID('delBtn');

let cardofInterview = getbyID('cardofInterview');
let cardofRejected = getbyID('cardofRejected');

let jobCards = getbyID('job-cards');
let jobCard = getbyID('job-card');

let nojobsAvail = getbyID('nojobs');

// status

const statuss = document.querySelectorAll('.statuss');

// total score
let allCards = document.querySelectorAll('.jobCard');
scoreofTotal.innerText = document.querySelectorAll('.jobCard').length;
// available jobs Count
// availablejobsCount.innerText = `${only in all section} of ${lenofJobCards}`

