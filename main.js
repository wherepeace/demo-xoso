var number ;
var clearInter;
const  containerBody = document.getElementById('container');
const  turnNumber = document.getElementById('number-turn');
const  innerNumber = document.getElementById('result-number');
const  openNumber = document.getElementById('open-number');
const  modalReturn = document.getElementById('modal-return');
const  nameTurn = document.getElementById('name-turn');
const autoPlay =  document.getElementById('auto-play') ;


function randomNumber (){
     number = Math.floor(Math.random()*100);
     innerNumber.innerHTML= number ;
     console.log(number)
};
function returnRamdom () {
     godless = Math.floor(Math.random()*100);
};
// Onclick Random Number and Return 
     turnNumber.onclick = function() {
     play()
     clearInter = setInterval(randomNumber,100);
     turnNumber.setAttribute('disabled', true);
     openNumber.removeAttribute("disabled");
     nameTurn.setAttribute('disabled', true);
 };

// Created element in DOM 
   openNumber.onclick = function() {
      pause()
      returnRamdom ();
      clearInterval (clearInter)
      const modal = document.createElement('div');
      const modalOverlay = document.createElement('div');
      const modalReturn = document.createElement('div');
            modal.appendChild(modalOverlay);
            modalOverlay.appendChild(modalReturn);
            modal.className = 'modal';
            modal.id = 'modal';
            modalOverlay.className = 'modal-overlay' ;
            modalReturn.id = 'modal-return';
            modalReturn.className='modal-return';
            modalReturn.innerHTML = godless ; 
            containerBody.appendChild(modal)
            openNumber.setAttribute('disabled', true);
            nameTurn.removeAttribute("disabled");
   } ;
   // Onchange selection name 
  nameTurn.onchange = function () {
            turnNumber.removeAttribute("disabled");
            containerBody.removeChild(modal);
            innerNumber.innerHTML= 'START' ;
         } ;
  // Autoplay mp3 play and pause
  function play() {
     autoPlay.play();
   }
   function pause() {
     autoPlay.pause()
   }
