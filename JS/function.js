import datas from './datas.js'

const reservationListUl = document.querySelector("#reservationList");

//exibir opções de projetores
function fShowProjectors(projectors){
  projectors.forEach((option) => {
    const createOption = document.createElement("option");
    createOption.innerText = option;
    reserveProjector.appendChild(createOption);
  });
};

//exibir opções de localização
function fShowClassrooms(room){
  room.forEach((option) => {
    const createOption = document.createElement("option");
    createOption.innerText = option;
    reserveLocation.appendChild(createOption);
  });
};

//abir formulário
function fOpenForm(){
  form.classList.remove("hidden");
  form.classList.add("on");
} 

//fechar formulário
function fCloseForm(){
  form.classList.remove("on");
  form.classList.add("hidden");
}

//cria novo objeto com dados da reserva e add no array principal
function fCreateDataObject(dataName, dataDate, dataInitialHour, dataEndHour, dataProjector, dataRoom){
  const obj = {
    owner: dataName,
    date: dataDate,
    initialHour: dataInitialHour,
    endHour: dataEndHour,
    projectorReference: dataProjector,
    roomReference: dataRoom
  };
  datas.reservationList.push(obj);
  
  const newArray = datas.reservationList;
  
  const uIndice = newArray.at(-1);
  
  fCreateCard(uIndice);
  
};

//criar card de reserva
function fCreateCard(obj){

    const liCard = document.createElement("li");
    liCard.innerHTML = `
    <p>Responsável: ${obj.owner}</p>
    <p>Data: ${obj.date}</p>
    <p>De: ${obj.initialHour} até: ${obj.endHour}</p>
    <p>Projetor: ${obj.projectorReference}</p>
    <p>Sala: ${obj.roomReference}</p>
    `;
    const createButton = document.createElement("button");
    const createSpan = document.createElement("span");
    createSpan.classList.add("material-symbols-outlined");
    const specifyingIcon = document.createTextNode("delete"); 
    createSpan.appendChild(specifyingIcon);
    createButton.appendChild(createSpan);
    liCard.appendChild(createButton);
    createButton.addEventListener("click", () => {
      deleteReservation(reservationListUl,liCard);
    });

    reservationListUl.appendChild(liCard);
  
};


//função deletar reserva
function deleteReservation(list, item){
  list.removeChild(item);
  reservationListUl.shift();
};

export default {
  showProjectors: fShowProjectors,
  showClassrooms: fShowClassrooms,
  openForm: fOpenForm,
  closeForm: fCloseForm,
  createDataObject: fCreateDataObject,
};