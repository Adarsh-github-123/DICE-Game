//For dice 1
var n= Math.random();
n = n*6;
n = Math.floor(n)+1;
var newDiceImage= "images/dice"+n+".png";
var image1= document.querySelectorAll("img")[0].setAttribute("src",newDiceImage);

//For dice 2
var m= Math.floor(Math.random()*6)+1;
var newDiceImage2= "images/dice"+m+".png";
var image2= document.querySelectorAll("img")[1].setAttribute("src",newDiceImage2)

if(n>m)
{
    document.querySelectorAll("h1")[0].innerHTML="Player 1 Wins";
}
else if(m>n){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}