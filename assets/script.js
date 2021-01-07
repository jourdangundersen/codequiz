var allquestions = [
    {
        Question:"Which HTML tag creates a paragraph?",
        Option1: "<div>",
        Option2: "<p>",
        Option3: "<h1>",
        Option4: "<main>",
        Answer: "2"
    },
    {
        Question:"Which heading tag will have the biggest font?",
        Option1: "<h1>",
        Option2: "<h2>",
        Option3: "<h3>",
        Option4: "<h4>",
        Answer: "1"
    }, {
        Question:"Is bootstrap helpful?",
        Option1: "No",
        Option2: "Kinda",
        Option3: "Maybe",
        Option4: "Oh yeah",
        Answer: "4"
    }, {
        Question:"Can coding be frustrating?",
        Option1: "Not one single bit",
        Option2: "Not even a little",
        Option3: "Yes",
        Option4: "No it's not",
        Answer: "3"
    }, {
        Question:"How many HTML tags are there total?",
        Option1: "2",
        Option2: "1",
        Option3: "A lot",
        Option4: "10",
        Answer: "3"
    },
];
var startbutton =document.getElementById("start");
var firstcontainer = document.getElementById("firstcontainer");
var secondcontainer = document.getElementById("secondcontainer");
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var answer = document.getElementById("answer");
var userinitials = document.getElementById("userinitials");
var saveuser = document.getElementById("saveuser");
var userscore = document.getElementById("userscore");
var displayinitials = document.getElementById("displayinitials");
var currentquestion = 0;
var rightanswer = 0;
var wronganswer = 0;

firstcontainer.style.display="none";
secondcontainer.style.display="none";

startbutton.addEventListener("click", function() {
startbutton.style.display="none";
firstcontainer.style.display="block";
displayquestion();
});
saveuser.addEventListener("click", function() {
    var user = userinitials.value;
    var history = JSON.parse(localStorage.getItem("initials")) || [];
    history.push({
        user:user, 
        score:rightanswer
    });
    var htmldata = "";
    for (let i=0; i < history.length; i++){
        htmldata += `<h5>User : ${history[i].user}  Score:${history[i].score}</h5>`;
    }
    displayinitials.innerHTML=htmldata;
    localStorage.setItem("initials",JSON.stringify(history));
});
option1.addEventListener("click", checkuseranswer);
option2.addEventListener("click", checkuseranswer);
option3.addEventListener("click", checkuseranswer);
option4.addEventListener("click", checkuseranswer);
function displayquestion(){
question.innerText = allquestions[currentquestion].Question;
option1.innerText = allquestions[currentquestion].Option1;
option2.innerText = allquestions[currentquestion].Option2;
option3.innerText = allquestions[currentquestion].Option3;
option4.innerText = allquestions[currentquestion].Option4;

}
function checkuseranswer(){
    var userchoice = this.getAttribute("data-value");
    if (userchoice == allquestions[currentquestion].Answer){
        rightanswer ++ ;
        answer.textContent="Correct answer! Woohoo!";
    }
    else {
        wronganswer ++;
        answer.innerText="Sorry, that's incorrect.";
    }
    console.log(userchoice);
    if (currentquestion < allquestions.length-1) {
        currentquestion ++;
        displayquestion();
    }
    else {
        console.log(rightanswer, wronganswer);
        displayuserscore();
    }
}
function displayuserscore(){
    firstcontainer.style.display="none";
    secondcontainer.style.display="block";
    userscore.innerText="Correct Answers: " + rightanswer + " | Incorrect Answers:" + wronganswer;
    var history = JSON.parse(localStorage.getItem("initials")) || [];
    var htmldata = "";
    for (let i=0; i < history.length; i++){
        htmldata += `<h5>User: ${history[i].user}  | Score: ${history[i].score}</h5>`;
    }
    displayinitials.innerHTML=htmldata;
}
