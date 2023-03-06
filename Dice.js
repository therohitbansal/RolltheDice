function refresh(){
var radnomnumber1=Math.random()*6;
radnomnumber1=Math.floor(radnomnumber1)+1;
var randomdiceImage1="dice"+radnomnumber1+".png";
var radomiamgesource1="images/"+randomdiceImage1;
document.querySelectorAll("img")[0].setAttribute("src",radomiamgesource1);
var radnomnumber2=Math.random()*6;
radnomnumber2=Math.floor(radnomnumber2)+1;
var randomdiceImage2="dice"+radnomnumber2+".png";
var radomimagesource2="images/"+randomdiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",radomimagesource2);

if(radnomnumber1>radnomnumber2)
document.querySelector("h1").innerHTML="🚩Player1 Wins!"
else if(radnomnumber1<radnomnumber2)
document.querySelector("h1").innerHTML="🚩Player2 Wins!"
else if(radnomnumber1==radnomnumber2)
document.querySelector("h1").innerHTML="Draw!"
}