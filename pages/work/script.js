const menu = document.querySelector(".menu-btn");
const topLeftSlider = document.querySelector(".top-left-slide");
const bottomLeftSlider = document.querySelector(".bottom-left-slide");

const topRightSlider = document.querySelector(".top-right-slide");
const middleRightSlider = document.querySelector(".middle-right-slide");
const bottomRightSlider = document.querySelector(".bottom-right-slide");

const eksOne = document.querySelector(".eks-one");
const eksTwo = document.querySelector(".eks-two");
const eksThree = document.querySelector(".eks-three");

var isOpen = false;

menu.addEventListener("click", () => {
  topLeftSlider.classList.toggle("top-left-slide-show");
  bottomLeftSlider.classList.toggle("bottom-left-slide-show");
  topRightSlider.classList.toggle("top-right-slide-show");
  middleRightSlider.classList.toggle("middle-right-slide-show");
  bottomRightSlider.classList.toggle("bottom-right-slide-show");
  eksTwo.classList.toggle("eks-two-fade");

  const tl = gsap.timeline();
  const tlEksThree = gsap.timeline();

  if (!isOpen) {
    tl.to(".eks-one", {
      y: isOpen ? 0 : 9,
    }).to(".eks-one", {
      rotate: isOpen ? 0 : 45,
    });

    tlEksThree
      .to(".eks-three", {
        y: isOpen ? 0 : -9,
      })
      .to(".eks-three", {
        rotate: isOpen ? 0 : -45,
      });
  } else {
    tl.to(".eks-one", {
      rotate: isOpen ? 0 : 45,
    }).to(".eks-one", {
      y: isOpen ? 0 : 9,
    });

    tlEksThree
      .to(".eks-three", {
        rotate: isOpen ? 0 : -45,
      })
      .to(".eks-three", {
        y: isOpen ? 0 : -9,
      });
  }

  isOpen = !isOpen;
});

gsap.from(".simple", {
  x: -100,
  duration: 1,
});
gsap.from(".menu", {
  x: -100,
  duration: 1.2,
  delay: 0.3,
  opacity: 0,
});
gsap.from(".navi", {
  y: -500,
  duration: 2,
  delay: 0.4,
  opacity: 0,
});

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
