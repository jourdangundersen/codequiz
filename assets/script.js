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

firstcontainer.style.display="none"
secondcontainer.style.display="none"

startbutton.addEventListener("click", function() {
startbutton.style.display="none"
firstcontainer.style.display="block"
})
saveuser.addEventListener("click", function() {
    
})