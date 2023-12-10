var guessList=["ichami","brandon","brain"];
var guessName=prompt("what is your name?");
if(guessList.includes(guessName)){
    console.log("Welcome "+guessName);
}else{
    console.log("Sorry "+guessName+" you where not invited");
}

