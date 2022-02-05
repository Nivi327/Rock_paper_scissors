function rpsGame(yourChoice){
  // console.log(yourChoice);
  var humanChoice,botChoice;
  humanChoice=yourChoice.id;
  console.log(humanChoice)
  botChoice=numberToChoice(rpsToInt());
  console.log(botChoice);
  results=decideWinner(humanChoice,botChoice);
  message=finalMessage(results);
  rpsFrontEnd(message);
}

function rpsToInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
  return ['Rock','Paper','Scissors'][number];
}

function decideWinner(humanChoice, botChoice){
  if (humanChoice == botChoice){
    return 'draw';
  }
  else if(humanChoice=='Rock' && botChoice=='Paper'){
    return 'bot'
  }
  else if(humanChoice=='Paper' && botChoice=='Scissors'){
    return 'bot'
  }
  else if(humanChoice=='Scissors' && botChoice=='Rock'){
    return 'bot'
  }
  else{
    return 'human'
  }
}

function finalMessage(results){
  if(results == 'draw'){
    return "Hey,It's a draw";
  }
  if(results=='bot'){
    return 'Computer Won!';
  }
  if(results=='human'){
    return 'You Won!'
  }
}

function rpsFrontEnd(message){
  console.log(message)
  var img_div = document.getElementsByClassName("container-3")[0]
  var h5 = document.createElement("h5")
  var attr = document.createAttribute("class")
  if (message=="Hey,It's a draw"){
    attr.value="yellow"
    h5.setAttributeNode(attr)
    text = document.createTextNode(message)
    h5.appendChild(text)
    img_div.appendChild(h5)
  }
  else if(message=='Computer Won!'){
    attr.value='red'
    h5.setAttributeNode(attr)
    text = document.createTextNode(message)
    h5.appendChild(text)
    img_div.appendChild(h5)
  }
  else{
    attr.value='green'
    h5.setAttributeNode(attr)
    text = document.createTextNode(message)
    h5.appendChild(text)
    img_div.appendChild(h5)
  }
}

function reset(){
  reset_h5 = document.getElementsByTagName("h5")
  len = reset_h5.length
  console.log(reset_h5)
    for(let i=0;i<len;i++){
      reset_h5[i].remove();
    }
}