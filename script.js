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

// Fonctionnalité 6

const reduced = document.createElement('style');
reduced.innerText = '.reduced img {width: 20%} .reduced .card-text {display: none}';
head.appendChild(reduced);

[...cards].forEach(c => {
  c.querySelector('.btn-success').addEventListener('mouseover', e => {
    e.composedPath()[4].classList.toggle('reduced');
  });
});

// Fonctionnalité 7

const nextBtn = document.querySelector('.jumbotron .btn-secondary');

nextBtn.addEventListener('click', () => {
  const cardCols = document.querySelectorAll('.album .col-md-4');

  cardCols[0].parentNode.insertBefore(cardCols[cardCols.length - 1], cardCols[0]);
});

// Fonctionnalité 8

const prevBtn = document.querySelector('.jumbotron .btn-primary');

prevBtn.addEventListener('click', e => {
  e.preventDefault();

  const cardCols = document.querySelectorAll('.album .col-md-4');

  cardCols[0].parentNode.appendChild(cardCols[0]);
});

// Fonctionnalité 9

const logo = document.querySelector('.navbar-brand');

logo.addEventListener('keypress', e => {
  switch (e.key) {
    case 'a':
      document.body.classList = 'col-4';
      break;
    case 'y':
      document.body.classList = 'col-4 offset-4';
      break;
    case 'p':
      document.body.classList = 'col-4 offset-8';
      break;
    case 'b':
      document.body.classList = '';
      break;
  }
})
