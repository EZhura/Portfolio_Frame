// меню слева
document.addEventListener("DOMContentLoaded", function () {
  var Sidenav = document.querySelectorAll(".sidenav");
  var instances_Sidenav = M.Sidenav.init(Sidenav);
  // Модальное окно
  var modal = document.querySelectorAll(".modal");
  var instances_modal = M.Modal.init(modal);
  // Material box
  var gallery = document.querySelectorAll(".materialboxed");
  var instances_gallery = M.Materialbox.init(gallery);
});
// для копии, проба всего
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems);
});
