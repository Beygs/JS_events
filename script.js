// Fonctionnalité 1 (et 1 bis)

const footer = document.querySelector("footer");

footer.addEventListener("click", (e) => {
  console.group("👆 Clique");
  console.count("Clic numéro");
  console.groupEnd();
});

// Fonctionnalité 2

const hamburgerMenu = document.querySelector(".navbar-toggler");
const navbarHeader = document.getElementById("navbarHeader");

hamburgerMenu.addEventListener("click", () => {
  navbarHeader.classList.toggle("collapse");
});

// Fonctionnalité 3

const cards = document.getElementsByClassName("card");

cards[0]
  .querySelector(".btn-outline-secondary")
  .addEventListener("click", (e) => {
    cards[0].setAttribute("style", "color: red");
  });

// Fonctionnalité 4

