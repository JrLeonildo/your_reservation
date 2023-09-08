import functions from './function.js'
import datas from './datas.js'

//variáveis de input e outras tags html
const form = document.querySelector("#form");
const reservationForName = document.querySelector("#reservationName");
const bookingDate = document.querySelector("#bookingDate");
const bookingStartTime = document.querySelector("#bookingStartTime"); 
const bookingEndTime = document.querySelector("#bookingEndTime");
const reserveProjector = document.querySelector("#reserveProjector");
const reserveLocation = document.querySelector("#reserveLocation");
const btnAddReserve = document.querySelector("#btnAddReserve");

//variáveis de abrir e fechar formulário
const btnOpenForm = document.querySelector("#openForm");
const btnCloseForm = document.querySelector("#closeForm");

//variáveis de abrir e fechar histórico
const btnMenuMobile = document.querySelector("#menuButton");
const menuMobileIcon = document.querySelector("#menuIcon");
const historicWindow = document.querySelector("#historic");

//abir e fechar histórico mobile


//criar o cartão de reserva 


functions.showProjectors(datas.projectors);//exibir opções de projetores

functions.showClassrooms(datas.locations);//exibir opções de localização

/*btnMenuMobile.addEventListener("click", ()=>{
  openAndCloseHistoricMobile
});*/

//exibir formulário
btnOpenForm.addEventListener("click", ()=>{
  functions.openForm()
});
//fechar fomulário
btnCloseForm.addEventListener("click", ()=>{
  functions.closeForm()
});



const start = () => {
  event.preventDefault();
  functions.createDataObject(
    reservationForName.value,
    bookingDate.value,
    bookingStartTime.value,
    bookingEndTime.value,
    reserveProjector.value,
    reserveLocation.value
  )
};

btnAddReserve.addEventListener("click", start); //função de criar cartão de reserva

console.log(functions.createBookingCard)