/* ===========================
   NVGYMFITNESS PREMIUM JS
=========================== */


/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", function () {

  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {

    nav.classList.add("nav-scroll");

  } else {

    nav.classList.remove("nav-scroll");

  }

});



/* HERO TEXT ANIMATION */

const heroTitle = document.querySelector(".hero-left h1");

const heroParagraph = document.querySelector(".hero-left p");

const heroButtons = document.querySelector(".hero-buttons");


window.addEventListener("load", () => {

  heroTitle.classList.add("show");

  setTimeout(() => {

    heroParagraph.classList.add("show");

  }, 300);

  setTimeout(() => {

    heroButtons.classList.add("show");

  }, 600);

});



/* SERVICE CARD HOVER EFFECT */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-12px) scale(1.03)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px) scale(1)";

  });

});



/* BMI CALCULATOR */

function calculateBMI() {

  let height = document.getElementById("height").value;

  let weight = document.getElementById("weight").value;

  const result = document.getElementById("result");

  if (height === "" || weight === "") {

    result.innerHTML = "Please enter all values";

    result.style.color = "red";

    return;

  }

  height = height / 100;

  let bmi = (weight / (height * height)).toFixed(1);

  let status = "";

  if (bmi < 18.5) {

    status = "Underweight";

  } else if (bmi >= 18.5 && bmi < 24.9) {

    status = "Normal Weight";

  } else if (bmi >= 25 && bmi < 29.9) {

    status = "Overweight";

  } else {

    status = "Obese";

  }

  result.innerHTML = `Your BMI is ${bmi} (${status})`;

  result.style.color = "#d4af37";

}



/* GALLERY IMAGE ANIMATION */

const images = document.querySelectorAll(".gallery-grid img");

images.forEach((img) => {

  img.addEventListener("mouseenter", () => {

    img.style.transform = "scale(1.07) rotate(1deg)";

  });

  img.addEventListener("mouseleave", () => {

    img.style.transform = "scale(1) rotate(0deg)";

  });

});



/* SCROLL REVEAL ANIMATION */

const reveals = document.querySelectorAll(
  ".about, .services, .gallery, .bmi, .cta"
);

window.addEventListener("scroll", revealSections);

function revealSections() {

  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((section) => {

    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {

      section.classList.add("active");

    }

  });

}



/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".box h3");

let started = false;

window.addEventListener("scroll", () => {

  const section = document.querySelector(".about-boxes");

  const sectionTop = section.offsetTop;

  if (window.scrollY > sectionTop - 500 && !started) {

    counters.forEach((counter) => {

      let target = parseInt(counter.innerText);

      let count = 0;

      let speed = target / 80;

      const update = () => {

        count += speed;

        if (count < target) {

          counter.innerText = Math.floor(count) + "+";

          requestAnimationFrame(update);

        } else {

          counter.innerText = target + "+";

        }

      };

      update();

    });

    started = true;

  }

});



/* PARALLAX HERO IMAGE */

window.addEventListener("mousemove", (e) => {

  const heroImage = document.querySelector(".hero-right img");

  let x = (window.innerWidth / 2 - e.pageX) / 40;

  let y = (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform = `translate(${x}px, ${y}px)`;

});



/* BUTTON GLOW EFFECT */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {

  btn.addEventListener("mousemove", (e) => {

    const x = e.offsetX;

    const y = e.offsetY;

    btn.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      #ffe082,
      #d4af37)
    `;

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.background = "#d4af37";

  });

});



/* TYPING EFFECT */

const text = "PREMIUM FITNESS EXPERIENCE";

let index = 0;

const typingElement = document.querySelector(".typing-text");

function typingEffect() {

  if (typingElement && index < text.length) {

    typingElement.innerHTML += text.charAt(index);

    index++;

    setTimeout(typingEffect, 80);

  }

}

typingEffect();



/* LOADER */

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  if (loader) {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    }, 1000);

  }

});