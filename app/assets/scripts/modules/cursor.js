import { gsap } from "gsap";

const playBtn = document.querySelector(".btn--play");
const cursor = document.querySelector(".cursor");
const play = document.querySelector(".intro");
const heading = document.querySelectorAll(".line span");

gsap.set(".btn--play", { xPercent: -50, yPercent: -40 });
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

function cursorMove(e) {
  gsap.to(cursor, 0.2, { x: e.pageX, y: e.pageY });
  gsap.to(playBtn, 0.5, { x: e.pageX, y: e.pageY });
}

function playAudio(e) {
  e.preventDefault();
  if (!playBtn.classList.contains("active")) {
    playBtn.classList.add("active");
    play.play();
    playBtn.innerText = "Stop";
    gsap.set([heading, ".heading"], {
      duration: 2,
      webkitTextFillColor: "#21bdb4",
      stagger: 1,
    });
  } else {
    playBtn.classList.remove("active");
    playBtn.innerText = "Play";
    play.currentTime = 0;
    gsap.set([heading, ".heading"], {
      duration: 2,
      webkitTextFillColor: "transparent",
      stagger: 1,
    });
    play.pause();
  }
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    window.addEventListener("mousemove", cursorMove);
    playBtn.addEventListener("click", playAudio);
  } else {
    playBtn.removeEventListener("click", playAudio);
    window.removeEventListener("mousemove", cursorMove);
  }
}

const cursorMedia = window.matchMedia("(min-width: 900px)");
myFunction(cursorMedia); // Call listener function at run time
cursorMedia.addListener(myFunction); // Attach listener function on state changes

// import LocomotiveScroll from "locomotive-scroll";

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".scrollContainer"),
//   smooth: true,
// });
