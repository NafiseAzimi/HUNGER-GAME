let containerWord = document.getElementById("containerWord")
let countlenghtWord = document.getElementById("countlenghtWord")
let oncorrectword = document.getElementById("oncorrectword")
let Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let WordGuess = ["apple", "banan", "orange", "cucumber", "watermelon", "starbery", "kivi", "mango"]
let LenghtarrayWordGuess = WordGuess.length
let SliceWord = []
let RandomNumber
let startGameButton = document.getElementById("startButton")
let REsetGameButton = document.getElementById("reset")
let setintervalstart = document.getElementById("setinterval")
let minute = 9
let secound = 59
var myVar;
REsetGameButton.addEventListener("click",resetgame)
function resetgame(){
   
}

function creatbutton() {
    for (let i = 0; i < 26; i++) {
        let Buttonalphabet = document.createElement("button")
        Buttonalphabet.classList.add("button")
        containerWord.append(Buttonalphabet)
        Buttonalphabet.innerHTML = Alphabet[i]
        Buttonalphabet.addEventListener("click", GuessWord)
    }
    oncorrectword.value = ""
}

function GussWordCreat() {
    let CreatRandom = Math.floor(Math.random() * LenghtarrayWordGuess)
    RandomNumber = WordGuess[CreatRandom]
    for (let i = 0; i < RandomNumber.length; i++) {
        SliceWord.push(RandomNumber[i])
    }
    console.log(SliceWord)
    for (let i = 0; i < SliceWord.length; i++) {
        let diwcreate = document.createElement("div")
        diwcreate.classList.add("corect")
        countlenghtWord.append(diwcreate)
        diwcreate.innerHTML = "-"
    }
}
function GuessWord(event) {
    let WordClick = event.target.textContent//Enter Word 
    console.log(SliceWord)
    let SearchWord = RandomNumber.search(WordClick)//search for word in random Word
    if (SearchWord === -1) {//if searchword ==-1 then 
        oncorrectword.value += WordClick
        if (oncorrectword.value.length > 10) {// if incorrect word > 10 then
            oncorrectword.disabled = true;
            diwcreate.disabled = true;
        }
    }
    else {
        let corectArray = document.querySelectorAll(".corect")//array div
         WordClick = event.target.textContent//Enter Word
        SliceWord.filter((item, index) => {
            if (item === WordClick) {
                corectArray[index].innerHTML = WordClick
            }

        })
    }

    return SliceWord
    return RandomNumber


}
GussWordCreat();

startGameButton.addEventListener("click", myFunction)
function myFunction() {
    myVar = setInterval(alertFunc, 1000);
}

function alertFunc() {
        setintervalstart.innerHTML = minute + ":" + secound
    secound--
    if (secound < 0) {
        minute--
        secound = 59
    }
    if (secound <= 0 && minute <= 0) {
        clearInterval(myVar)
        
    }

}
