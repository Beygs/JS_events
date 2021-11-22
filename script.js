// Fonctionnalité 1 (et 1 bis)

const footer = document.querySelector('footer');

footer.addEventListener('click', e => {
  console.group('👆 Clique');
  console.count('Clic numéro');
  console.groupEnd();
});
