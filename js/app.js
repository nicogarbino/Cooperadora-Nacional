var rellax = new Rellax('.rellax');

window.onscroll = function () {
  scroll = document.documentElement.scrollTop;

  nav_header = document.getElementById("nav_header");
  pagar3_button = document.querySelector(".pagar3");

  if (scroll > window.innerHeight * 0.6) {
    nav_header.classList.add("nav_mod");
  } else {
    nav_header.classList.remove("nav_mod");
  }

  if (scroll > window.innerHeight * 0.3) {
    pagar3_button.classList.remove("hidden");
  } else {
    pagar3_button.classList.add("hidden");
  }

};

/* HAMBURGER */
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".burger_menu")

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

  const opening = container__menu.classList.contains("hidden");
  container__menu.classList.toggle("hidden")

  if (opening) {
    document.body.style["overflow-y"] = "hidden";  
  } else {
    document.body.style["overflow-y"] = "";
  }
}

container__menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    console.log("clickeado")
    document.querySelector(".bars__menu").click();
  }
})

/* SCROLL */

ScrollReveal({ reset: true, distance: "80px", duration: 2500, delay: 300 });

ScrollReveal().reveal('.imagenNoticia_C', {  
  origin: "left",
  duration: 700,
  easing: 'ease-in',  
  rotate: {
      x: 100,
      z: 100
  }
  
});

ScrollReveal().reveal(".imagenNoticia", {
  delay: 100,
  origin: "left",
  interval: 100,
});

ScrollReveal().reveal(".text1_noticia", {
  delay: 100,
  origin: "right",
  interval: 100,
});

ScrollReveal().reveal(".link_noticia", {
  delay: 100,
  origin: "right",
  interval: 100,
});

ScrollReveal().reveal(".container_quienesSomos", {
  delay: 100,
  origin: "bottom",
  interval: 100,
});


// Agrega credenciales de SDK
const mp = new MercadoPago("TEST-24597592-2032-4c43-91bf-eefdac5f0283", {
  locale: "es-AR",
});

// Inicializa el checkout
mp.checkout({
  preference: {
    id: "840159631-339fabf4-a83a-42c3-bdbe-19bb3de58d5b",
  },
  render: {
    container: ".pagar", // Indica el nombre de la clase donde se mostrará el botón de pago
    label: "Pago", // Cambia el texto del botón de pago (opcional)
  },
});

mp.checkout({
  preference: {
    id: "840159631-339fabf4-a83a-42c3-bdbe-19bb3de58d5b",
  },
  render: {
    container: ".pagar2", // Indica el nombre de la clase donde se mostrará el botón de pago
    label: "Pago", // Cambia el texto del botón de pago (opcional)
  },
});

mp.checkout({
  preference: {
    id: "840159631-339fabf4-a83a-42c3-bdbe-19bb3de58d5b",
  },
  render: {
    container: ".pagar3", // Indica el nombre de la clase donde se mostrará el botón de pago
    label: "Cuota", // Cambia el texto del botón de pago (opcional)
  },
});