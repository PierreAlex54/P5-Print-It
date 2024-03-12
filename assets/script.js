const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlide = 0;
leftclick();
rightclick();
createDot();
selectedDot();

// création eventlistener flèches carrousel
function leftclick() {
  const leftarrowclick = document.querySelector("#banner .arrow_left");
  // console.log(leftarrowclick);
  leftarrowclick.addEventListener("click", () => {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide--;
    }
    showslide(currentSlide);
    selectedDot();
    // console.log("le click gauche fonctionne");
    // console.log(currentSlide);
  });
}

function rightclick() {
  const rightarrowclick = document.querySelector("#banner .arrow_right");
  // console.log(rightarrowclick);
  rightarrowclick.addEventListener("click", () => {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    showslide(currentSlide);
    selectedDot();
    // console.log("le click droit fonctionne");
    // console.log(currentSlide);
  });
}

// Fonction de remplacement de l'image et du texte à afficher

function showslide(currentSlide) {
  const img = document.querySelector(".banner-img");
  img.setAttribute(
    "src",
    "./assets/images/slideshow/" + slides[currentSlide].image
  );
  const p = document.querySelector("#banner p");
  p.innerHTML = slides[currentSlide].tagLine;
}

// Création d'une boucle pour calculer le nombre de points à afficher + class "dot"

function createDot() {
  const parentbullet = document.querySelector("#banner .dots");
  for (let i = 0; i < slides.length; i++) {
    let nombrepoints = document.createElement("div");
    parentbullet.appendChild(nombrepoints);
    nombrepoints.classList.add("dot");
  }
}

// Récupération des "dot" et condition pour appliquer "dot_selected" sur le point concerné

function selectedDot() {
  nombrepoints = document.querySelectorAll(".dot");
  console.log(nombrepoints);
  for (let i = 0; i < slides.length; i++) {
    const currentDot = nombrepoints[i];
    if (i === currentSlide) {
      currentDot.classList.add("dot_selected");
    } else {
      currentDot.classList.remove("dot_selected");
    }
  }
}
