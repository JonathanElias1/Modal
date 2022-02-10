let closeModal = document.getElementById(`close-modal`);
let contactMe = document.getElementById(`open-modal`);

contactMe.addEventListener(`click`, function () {
  document.getElementById(`overlay`).style.display = "block";
});

closeModal.addEventListener(`click`, function () {
  document.getElementById(`overlay`).style.display = "none";
});
