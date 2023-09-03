const projectors = ["001", "002", "003", "004", "005"]; //array de opções de projetores
const classrooms = [1,2,3,4,5,6,7,8,9,10,11,"biblioteca", "laboratório"];//array de opções de salas de localização

const reservationArray = [];//array de cartões de reserva

//variáveis de input e outras tags html
const form = document.querySelector("#form");
const reservationForName = document.querySelector("#reservationName");
const bookingDate = document.querySelector("#bookingDate");
const bookingStartTime = document.querySelector("#bookingStartTime"); 
const bookingEndTime = document.querySelector("#bookingEndTime");
const reserveProjector = document.querySelector("#reserveProjector");
const reserveLocation = document.querySelector("#reserveLocation");
const btnAddReserve = document.querySelector("#btnAddReserve");
const reservationList = document.querySelector("#reservationList");

//variáveis de abrir e fechar formulário
const btnOpenForm = document.querySelector("#openForm");
const btnCloseForm = document.querySelector("#closeForm");

//variáveis de abrir e fechar histórico
const btnMenuMobile = document.querySelector("#menuButton");
const menuMobileIcon = document.querySelector("#menuIcon");
const historicWindow = document.querySelector("#historic");

//exibir opções de projetores
function showProjectors(projectors){
  projectors.forEach((option) => {
    const createOption = document.createElement("option");
    createOption.innerText = option;
    reserveProjector.appendChild(createOption);
  });
};


//exibir opções de localização
function showClassrooms(room){
  room.forEach((option) => {
    const createOption = document.createElement("option");
    createOption.innerText = option;
    reserveLocation.appendChild(createOption);
  });
};


//abir formulário
function openForm(){
  form.classList.remove("hidden");
  form.classList.add("on");
} 

//fechar formulário
function closeForm(){
  form.classList.remove("on");
  form.classList.add("hidden");
}

//abir e fechar histórico mobile


//criar o cartão de reserva 
function createBookingCard(name, date, initialHour, endlHour, projector, room){
  const liCard = document.createElement("li");
  liCard.innerHTML = `
  <p>Professor: ${name}</p>
  <p>Data: ${date}</p>
  <p>De: ${initialHour} até: ${endlHour}</p>
  <p>Referência do projetor: ${projector}</p>
  <p>Referência da localização: ${room}</p>
  `;
  const createButton = document.createElement("button");
  const createSpan = document.createElement("span");
  createSpan.classList.add("material-symbols-outlined");
  const specifyingIcon = document.createTextNode("delete"); 
  createSpan.appendChild(specifyingIcon);
  createButton.appendChild(createSpan);
  liCard.appendChild(createButton);
  createButton.addEventListener("click", () => {
    deleteReservation(reservationList,liCard);
  });

  reservationList.appendChild(liCard);
};

showProjectors(projectors);//exibir opções de projetores

showClassrooms(classrooms);//exibir opções de localização

btnMenuMobile.addEventListener("click", ()=>{
  openAndCloseHistoricMobile
});

//exibir formulário
btnOpenForm.addEventListener("click", ()=>{
  openForm()
});
//fechar fomulário
btnCloseForm.addEventListener("click", ()=>{
  closeForm()
});

//função deletar reserva
function deleteReservation(item, li){
  item.removeChild(li);
  reservationList.shift();
}

const start = () => {
  event.preventDefault();
  createBookingCard(
    reservationForName.value,
    bookingDate.value,
    bookingStartTime.value,
    bookingEndTime.value,
    reserveProjector.value,
    reserveLocation.value
  )
};

btnAddReserve.addEventListener("click", start); //função de criar cartão de reserva