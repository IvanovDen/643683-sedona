var modal = document.querySelector(".open-modal-window");
var popup = document.querySelector(".modal-book");

modal.addEventListener("click", function (env) {
  env.preventDefault();
  popup.classList.toggle("modal-book-show");
});
