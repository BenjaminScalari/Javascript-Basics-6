// CAMBIARE TITOLO
let h1 = document.getElementById("titolo");

function cambiaTitolo() {
  if (h1.innerText === "Pokémon Market Online") {
    h1.innerText = "PMO";
  } else {
    h1.innerText = "Pokémon Market Online";
  }
}
h1.addEventListener("click", cambiaTitolo);

// DARK MODE
let darkModeButton = document.getElementById("darkModeButton");
function toggleDarkMode() {
  let isDarkMode = document.body.classList.contains("dark-mode");
  if (isDarkMode) {
    // DISATTIVA
    document.body.classList.remove("dark-mode");
    darkModeButton.textContent = "Attiva Dark Mode";
  } else {
    // ATTIVA
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "Disattiva Dark Mode";
  }
}
darkModeButton.addEventListener("click", toggleDarkMode);

// CAMBIARE FOOTER
function changeFooterAddress(newAddress) {
  let footerAddressElement = document.getElementById("footerAddress");
  footerAddressElement.textContent = newAddress;
}
changeFooterAddress("@ 2024 Devon S.p.A. Ferrugipoli.");

// AGGIUNGERE CLASSE AI LINK
let links = document.querySelectorAll("#cards-container a");
links.forEach(function(link) {
  link.classList.add("classe-x-esercizio");
});

// TASTO NASCONDI-IMMAGINI
function toggleImageVisibility() {
  let images = document.querySelectorAll("#cards-container img");
  images.forEach(function(image) {
    image.classList.toggle("hidden");
  });
}
document.getElementById("imgButton").addEventListener('click', toggleImageVisibility);

// PREZZI CHE CAMBIANO COLORE
// GENERATORE DI COLORI RGB
function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
}
let prices = document.querySelectorAll("h4");

prices.forEach(function(price) {
  // CAMBIA COLORE TESTO
  price.addEventListener("mouseenter", function() {
    price.style.color = getRandomRGB();
  });
  // RIPRISTINA COLORE TESTO
  price.addEventListener("mouseleave", function() {
    price.style.color = "black";
  });
});