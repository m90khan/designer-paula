import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const heading = document.querySelectorAll(".line span");
const heading2 = document.querySelectorAll("li");

const image1 = document.querySelector(".hero-image-profile-1");
const image2 = document.querySelector(".hero-image-profile-2");

let t1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });

t1.from(".header", { duration: 2, yPercent: 1000 }).from(heading, {
  y: 100,
  delay: 0.5,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});

ScrollTrigger.matchMedia({
  "(min-width:900px)": function () {
    let t2 = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
    });

    t2.fromTo(
      image1,
      { y: 200 },
      {
        y: -350,

        scrollTrigger: {
          trigger: image1, // selector or element
          start: "-100% center", // [trigger] [scroller] positions
          end: "100% bottom", // [trigger] [scroller] positions
          // markers: true,
          anticipatePin: 1,
          scrub: true,
        },
      }
    ).fromTo(
      image2,
      { y: 200 },
      {
        y: -250,

        scrollTrigger: {
          trigger: image2, // selector or element
          start: "-100% center", // [trigger] [scroller] positions
          end: "100% bottom", // [trigger] [scroller] positions
          // markers: true, // only during development!
          anticipatePin: 1,
          scrub: true,
        },
      }
    );
  },
});

ScrollTrigger.matchMedia({
  "(min-width:600px)": function () {
    let t3 = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
    });

    t3.fromTo(
      [".big-text--1", ".big-text--3"],
      { x: -1000 },
      {
        x: 400,
        stagger: 0.1,

        scrollTrigger: {
          trigger: [".big-text--1", ".big-text--3"], // selector or element
          start: "-150% center", // [trigger] [scroller] positions
          end: "200% top", // [trigger] [scroller] positions
          // markers: {
          //   startColor: "white",
          //   endColor: "white",
          //   fontSize: "18px",
          //   fontWeight: "bold",
          //   indent: 20,
          // },
          scrub: true,
          anticipatePin: 1,
        },
      }
    ).fromTo(
      ".big-text--2",
      { x: 200 },
      {
        x: -1000,

        scrollTrigger: {
          trigger: ".big-text--2", // selector or element
          start: "-300% center", // [trigger] [scroller] positions
          end: "200% top", // [trigger] [scroller] positions
          // markers: true,
          scrub: true,
          anticipatePin: 1,
        },
      },
      "-=1"
    );
  },
});
