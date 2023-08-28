const form = document.querySelector("#form");
const reserveName = document.querySelector("#reserveName");
const reserveDate = document.querySelector("#reserveDate");
const reserveHourInitial = document.querySelector("#reserveHourInitial"); 
const reserveHourFinal = document.querySelector("#reserveHourFinal");
const reserveProjector = document.querySelector("#reserveProjector");
const btnAddReserve = document.querySelector("#btnAddReserve");
const reservationList = document.querySelector("#reservationList");

const openForm = document.querySelector("#openForm");
const closeForm = document.querySelector("#closeForm");

function showForm(){
  form.classList.add("nada")
}

function noShowForm(){
  form.classList.add("hidden")
}
console.log(form)

function createBookingCard(name, date, initialHour, finalHour, projector){
  const liCard = document.createElement("div");
  
  liCard.innerHTML = `
  <p>${name}</p>
  <p>${date}</p>
  <p>${initialHour}</p>
  <p>${finalHour}</p>
  <p>${projector}</p>
  `;

  reservationList.appendChild(liCard);
  console.log(liCard);
};

const start = () => {
  event.preventDefault();
  createBookingCard(
    reserveName.value,
    reserveDate.value,
    reserveHourInitial.value,
    reserveHourFinal.value,
    reserveProjector.value
  )
};

btnAddReserve.addEventListener("click", start);