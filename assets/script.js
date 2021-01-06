var allquestions = [
    {
        Question:"Which of the following is a plus sign?",
        Option1: "-",
        Option2: "+",
        Option3: "*",
        Option4: "!",
        Answer: "2"
    },
    {
        Question:"2 Which of the following is a plus sign?",
        Option1: "-",
        Option2: "+",
        Option3: "*",
        Option4: "!",
        Answer: "2"
    }, {
        Question:"3Which of the following is a plus sign?",
        Option1: "-",
        Option2: "+",
        Option3: "*",
        Option4: "!",
        Answer: "2"
    }, {
        Question:"4Which of the following is a plus sign?",
        Option1: "-",
        Option2: "+",
        Option3: "*",
        Option4: "!",
        Answer: "2"
    }, {
        Question:"5Which of the following is a plus sign?",
        Option1: "-",
        Option2: "+",
        Option3: "*",
        Option4: "!",
        Answer: "2"
    },
]
var startbutton =document.getElementById("start");
var firstcontainer = document.getElementById("firstcontainer");
var secondcontainer = document.getElementById("secondcontainer");
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var rightanswer = document.getElementById("rightanswer");
var userinitials = document.getElementById("userinitials");
var saveuser = document.getElementById("saveuser");
var currentquestion = 0
firstcontainer.style.display="none"
secondcontainer.style.display="none"

startbutton.addEventListener("click", function() {
startbutton.style.display="none"
firstcontainer.style.display="block"
displayquestion()
})
saveuser.addEventListener("click", function() {
    
})
option1.addEventListener("click", checkuseranswer)
option2.addEventListener("click", checkuseranswer)
option3.addEventListener("click", checkuseranswer)
option4.addEventListener("click", checkuseranswer)
function displayquestion(){
question.innerText = allquestions[currentquestion].Question
option1.innerText = allquestions[currentquestion].Option1
option2.innerText = allquestions[currentquestion].Option2
option3.innerText = allquestions[currentquestion].Option3
option4.innerText = allquestions[currentquestion].Option4

}