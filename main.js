var number ;
var clearInter;
const containerBody = document.getElementById('container');
const  turnNumber = document.getElementById('number-turn');
const  innerNumber = document.getElementById('result-number');
const  openNumber = document.getElementById('open-number');
const  modalReturn = document.getElementById('modal-return');


function randomNumber (){
     number = Math.floor(Math.random()*100);
     innerNumber.innerHTML= number ;
}
// Onclick Random Number and Return 
   turnNumber.onclick = function() {
    clearInter = setInterval(randomNumber,100);
    turnNumber.setAttribute('disabled', true);
    openNumber.removeAttribute("disabled");
   }
// Created element in DOM 
   openNumber.onclick = function() {
      clearInterval (clearInter)
      const modal = document.createElement('div');
      const modalOverlay = document.createElement('div');
      const modalReturn = document.createElement('div');
            modal.appendChild(modalOverlay);
            modalOverlay.appendChild(modalReturn);
            modal.className = 'modal';
           modalOverlay.className = 'modal-overlay' ;
            modalReturn.id = 'modal-return';
            modalReturn.className='modal-return';
            modalReturn.innerHTML = number
            containerBody.appendChild(modal)
            openNumber.setAttribute('disabled', true);
   }

