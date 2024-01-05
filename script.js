var randomRoll1 = Math.floor(Math.random()*6+1);
dispalyRoll(randomRoll1);
var randomRoll2 = Math.floor(Math.random()*6+1);
dispalyRoll(randomRoll2);
declareWin(randomRoll1,randomRoll2);


function dispalyRoll(num){
  if(num==randomRoll1){
    var y = document.querySelector(".img1");
  }
  if(num==randomRoll2){
    var y = document.querySelector(".img2");
  }
  switch(num){
    case 1 :
      y.src = "https://github.com/kuruvapavani/Dice_Game/blob/main/images/one.jpg?raw=true";
    break;
    case 2 :
      y.src = "https://github.com/kuruvapavani/Dice_Game/blob/main/images/two.jpg?raw=true";
    break;
    case 3 :
      y.src = "https://github.com/kuruvapavani/Dice_Game/blob/main/images/three.jpg?raw=true";
    break;
    case 4 :
      y.src = "https://github.com/kuruvapavani/Dice_Game/blob/main/images/four.jpg?raw=true";
    break;
    case  5:
      y.src = "https://github.com/kuruvapavani/Dice_Game/blob/main/images/five.jpg?raw=true";
    break;
    case 6 :
      y.src = "https://github.com/kuruvapavani/Dice_Game/blob/main/images/six.jpg?raw=true";
    break;
  }
}


function declareWin(num1,num2){
  var x = document.querySelector("h2");
  if(num1>num2){
    x.innerHTML = "Player 1 Wins";
  }
  else if(num1<num2){
    x.innerHTML = "Player 2 Wins";
  }
  else if(num1 == num2){
    x.innerHTML = "Tie";
  }
  else{
    console.log(num1);
    console.log(num2);
  }
}
