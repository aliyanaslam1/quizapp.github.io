var showQuestion = document.getElementById('showQuestion')
var questionbtn = document.getElementById('questionbtn')
var totalNumber = document.getElementById('totalNumber')
var currentNumber = document.getElementById('currentNumber')
// var btnQuestions = document.getElementById('btnQuestion')
var resultPage = document.getElementById('resultPage')
var showpercent = document.getElementById('percentage')
var indexval = 0;
var marks = 0;
var questions = [
{
    question: 'SIM_____________',
    options: ['Subscriber identification number','Subscriber identifical number','Subscriber identifically number','Subscriber identificatioly number'],
    correctAnswer: 'Subscriber identification number',
},
{
    question: 'GIF_____________',
    options: ['Graphic interchange format','Graphical interchange format','Graphic intercharge format','Graphic interchange formatic'],
    correctAnswer: 'Graphic interchange format',
},
{
    question: 'FAQ______________',
    options: ['Frequently asked question','Frequent asked question','Frequently ask question','Frequented asked question'],
    correctAnswer: 'Frequently asked question',
},
{
    question: 'MPH______________',
    options: ['Miles per hour','Miles pers hours','Miles per hourly','Miles per power'],
     correctAnswer: 'Miles per hour',
}
]


function renderScreen(){
  showQuestion.innerHTML = questions[indexval].question;
  for(i=0; i<questions[indexval].options.length;i++){
      var optval = questions[indexval].options[i];
      var corVal = questions[indexval].correctAnswer[i];
      questionbtn.innerHTML += `<div class="col-md-6 p-2"><button onclick="chkAns('${ questions[indexval].options[i]}','${questions[indexval].correctAnswer}')" class="btn btn-light w-100 shadow p-3 px-5 rounded-pill ">${optval}</button></div>`
    // questionbtn.innerHTML =  questions[indexval].options[i];
  }
  totalNumber.innerHTML = questions.length;
  currentNumber.innerHTML = indexval + 1;
}

renderScreen()

function nextQues(){
    questionbtn.innerHTML = "";
    if(indexval + 0 == questions.length){
        resultPage.style.display = 'block';
        showpercent.innerHTML = (marks/questions.length) * 100;
        showpercent.tofixed(2)
    }else{
        indexval++;
        renderScreen();
    }
}

function chkAns(optionvalue , correctvalue){
    if(optionvalue == correctvalue){
        marks++;
        console.log(marks)
        
    }
    nextQues();

}


