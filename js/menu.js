const menuH = document.querySelector('.menu');
const menuN = document.querySelector('.menu-navegacion');

//console.log(menuH)
//console.log(menuN)
menuH.addEventListener('click', ()=>{
     menuN.classList.toggle("spread")/*oculta y muestra la clase el menu*/

})

window.addEventListener('click', e=>{
     if(menuN.classList.contains('spread')
          && e.target != menuN && e.target !=menuH ){
               menuN.classList.toggle("spread")
          }
})


