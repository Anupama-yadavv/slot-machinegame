
function getRandomNumber() {
return Math.floor(Math.random() * 10) + 1;
}

function setDefaultValues() {
const reels = document.querySelectorAll('.reel');
reels.forEach(reel => {
reel.textContent = getRandomNumber();
  });
}

function spin() {
const reels = document.querySelectorAll('.reel');
const result = [];

reels.forEach((reel, index) => {
  const interval = setInterval(() => {
  reel.textContent = getRandomNumber();
  }, 100);

setTimeout(() => {
clearInterval(interval);
  result[index] = parseInt(reel.textContent);


  if(result.every(val => val === result[0])){
  document.getElementById('message').textContent = ' congratulation You win!';
  document.getElementById('bodyclr').style.backgroundColor = 'green';
        
        

      }else if (result[0] === result[1] || result[0] === result[2] || result[1] === result[2]) {
        document.getElementById('message').textContent = 'You are almost there!';
        document.getElementById('bodyclr').style.backgroundColor = 'blue';
       

      }else {
        document.getElementById('message').textContent = 'Try again!';
        document.getElementById('bodyclr').style.backgroundColor = 'red';
     
      }
    }, 5000);

  });
  
}

function start() {
  document.getElementById('message').textContent = 'Spinning...';
  spin();
}


window.onload = setDefaultValues();
