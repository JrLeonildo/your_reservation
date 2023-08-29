const projectors = ["001", "002", "003", "004", "005"];
const classrooms = [1,2,3,4,5,6,7,8,9,10,11,"biblioteca", "laboratório"];

const reservationArray = [];

const form = document.querySelector("#form");
const reservationForName = document.querySelector("#reservationName");
const bookingDate = document.querySelector("#bookingDate");
const bookingStartTime = document.querySelector("#bookingStartTime"); 
const bookingEndTime = document.querySelector("#bookingEndTime");
const reserveProjector = document.querySelector("#reserveProjector");
const reserveLocation = document.querySelector("#reserveLocation");
const btnAddReserve = document.querySelector("#btnAddReserve");
const reservationList = document.querySelector("#reservationList");

const openForm = document.querySelector("#openForm");
const closeForm = document.querySelector("#closeForm");

function showProjectors(projectors){
  projectors.forEach((option) => {
    const createOption = document.createElement("option");
    createOption.innerText = option;
    reserveProjector.appendChild(createOption);
  });
};
showProjectors(projectors);

function showClassrooms(room){
  room.forEach((option) => {
    const createOption = document.createElement("option");
    createOption.innerText = option;
    reserveLocation.appendChild(createOption);
  });
};
showClassrooms(classrooms);

function showForm(){
  form.classList.remove("hidden");
  form.classList.add("on");
} 
function noShowForm(){
  form.classList.remove("on");
  form.classList.add("hidden");
}

openForm.addEventListener("click", ()=>{
  showForm()
});
closeForm.addEventListener("click", ()=>{
  noShowForm()
});

function createBookingCard(name, date, initialHour, finalHour, projector, room){
  const liCard = document.createElement("div");
  liCard.innerHTML = `
  <p>Professor: ${name}</p>
  <p>Data: ${date}</p>
  <p>De: ${initialHour} até: ${finalHour}</p>
  <p>Referência do projetor: ${projector}</p>
  <p>Referência da localização: ${room}</p>
  `;

  reservationList.appendChild(liCard);
  console.log(liCard);
};

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

btnAddReserve.addEventListener("click", start);