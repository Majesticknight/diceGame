//changing 1st img

var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

if (randomNumber1 == 1) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice1.png");
}
else if (randomNumber1 == 2) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice2.png");
}
else if (randomNumber1 == 3) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice3.png");
}
else if (randomNumber1 == 4) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice4.png");
}
else if (randomNumber1 == 5) {
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice5.png");
}

//changing 2nd img

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

if (randomNumber2 == 1) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice1.png");
}
else if (randomNumber2 == 2) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice2.png");
}
else if (randomNumber2 == 3) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice3.png");
}
else if (randomNumber2 == 4) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice4.png");
}
else if (randomNumber2 == 5) {
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice5.png");
}

//deciding the winner

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 wins!";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerText = "It's a Draw!";
}