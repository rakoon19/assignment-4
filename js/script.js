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

let jobcardContainer = getbyID('job-card-container');



// total cards
let lenofJobCards = jobcardContainer.children.length;
scoreofTotal.innerText = lenofJobCards;
