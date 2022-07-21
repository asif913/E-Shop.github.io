//initilation some value
let totalAttempts=5;
let attempts=0;
let totalwons=0;
let totallosts=0;

//selecting elements

const form=document.querySelector("form");

const cardBody=document.querySelector(".card-body");

const guessingNumber=form.querySelector("#guessingNumber");
const checkButton=form.querySelector("#check");

const resultText=cardBody.querySelector(".result-text");

const lostWonMessage=document.createElement("p");

const remainingAttempts=cardBody.querySelector(".remainingAttempts");


form.addEventListener("submit",function(event){
    event.preventDefault();
  
    attempts++;
    if(attempts===5){

        guessingNumber.Disabled=true;
        checkButton.Disabled=true;
    }
    if(attempts<6){
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML=`RemainingAttempts: ${totalAttempts-attempts}`;

    }
    guessingNumber.value="";
});


function checkResult(guessingNumber){
    
    const randomNumber=getRandomNumber(5)

if(guessingNumber == randomNumber){
    resultText.innerHTML=`you have won`;
    totalwons++;



}else{

    resultText.innerHTML=`you have lost; random number was: ${randomNumber}`;
    totallosts++;
}

lostWonMessage.innerHTML=`Won: ${totalwons},Lost: ${totallosts}`;
lostWonMessage.classList.add("large-text");
cardBody.appendChild(lostWonMessage);

}



function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}
