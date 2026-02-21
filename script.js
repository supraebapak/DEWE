const humburger = document.querySelector("#humburger-menu");
const navbarNav = document.querySelector("#List");

humburger.addEventListener("click", function(e) {
  e.preventDefault();
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", function(e) {
  if (!navbarNav.contains(e.target) && !humburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function Exer(){
   windows.alert("OKE, Makasihhh Masukanya");
}
