// Make a ton hero text

function heroHeadingAnimation() {
  var textWrapper = document.querySelector(".letter");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 70 * (i + 1) + 100,
  });
}

function heroParaAnimation() {
  var textWrapper = document.querySelector(".letter2");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter2'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".letter2",
    scale: [0.8, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 7 * (i + 1) + 1000,
  });
}

function heroDate() {
  var textWrapper = document.querySelector(".ml13");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter3'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".hero-date",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 2000,
  });
}

function citticAnimation() {
  anime.timeline({ loop: false }).add({
    targets: ".cittic-presents",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 500,
  });
}

function ctaanimation() {
  anime.timeline({ loop: false }).add({
    targets: ".cta",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 2500,
  });
}

function heroImageAnimation() {
  anime.timeline({ loop: false }).add({
    targets: ".hero-img",
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeInOutQuad",
    duration: 1200,
    delay: 2800,
  });
}
function sponsorsHeroAnimtaion() {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".made-possible",
      opacity: [0, 1],
      translateX: [500, 0],

      duration: 700,
      delay: 4500,
    })
    .add({
      targets: ".hero-sponsor-item",
      opacity: [0, 1],
      // scale: [0,1],
      // translateX: [1000,0],
      // translateZ: 0,
      // easing: "linear",
      duration: 500,
      delay: anime.stagger(200, { start: 0 }),
    })
    .add({
      targets: ".learnmoreContainer",
      opacity: [0, 1],
      duration: 500,
      delay: 200,
    });
}

// Ajal just trying out
function whyDescriptionAnimation() {
  anime.timeline({ loop: false }).add({
    targets: ".whyDesc",
    opacity: [0, 1],
    duration: 7000,
    delay: 1000,
  });
}
// Done

whyDescriptionAnimation();
citticAnimation();
heroHeadingAnimation();
heroParaAnimation();
heroDate();
ctaanimation();
heroImageAnimation();
