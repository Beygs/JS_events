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
  .addEventListener("click", () => {
    cards[0].setAttribute("style", "color: red");
  });

// Fonctionnalité 4

cards[1]
  .querySelector('.btn-outline-secondary')
  .addEventListener('click', () => {
    if (cards[1].getAttribute('style')) {
      cards[1].removeAttribute('style');
    } else {
      cards[1].setAttribute('style', 'color: green');
    }
  });

// Fonctionnalité 5

const header = document.querySelector('header');
const head = document.querySelector('head');
const bootstrapCDN = head.querySelector('link');

header.addEventListener('dblclick', () => {
  if (head.contains(bootstrapCDN)) {
    bootstrapCDN.remove();
  } else {
    head.appendChild(bootstrapCDN);
  }
});