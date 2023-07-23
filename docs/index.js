import gsap from "./gsap/all.js";
import { Flip } from "./gsap/Flip.js";
import { ScrollTrigger } from "./gsap/ScrollTrigger.js";
import { Observer } from "./gsap/Observer.js";
import { ScrollToPlugin } from "./gsap/ScrollToPlugin.js";
import { Draggable } from "./gsap/Draggable.js";
import { MotionPathPlugin } from "./gsap/MotionPathPlugin.js";
import { TextPlugin } from "./gsap/TextPlugin.js";
import anime from "./gsap/animejs/lib/anime.es.js";
gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  TextPlugin
);

//==================start button animation =========================
var butt1 = document.querySelector(".si1_class_non_auto");
var butt2 = document.querySelector(".si1_class_auto");

butt1.addEventListener("mouseenter", (e) => {
  gsap.to(".inner_slider1", {
    x: -50,
    duration: 1,
  });
});

butt1.addEventListener("mouseleave", (e) => {
  gsap.to(".inner_slider1", {
    x: 110,
    duration: 0.7,
  });
});

butt1.addEventListener("click", () => {
  gsap.to(".inner_slider1", {
    x: -50,
    duration: 1,
    delay: 0,
  });

  gsap.to(".inner_slider1", {
    x: 110,
    duration: 0.7,
    delay: 1.2,
  });
});

butt2.addEventListener("mouseenter", (e) => {
  gsap.to(".inner_slider2", {
    x: -50,
    duration: 1,
  });
});

butt2.addEventListener("mouseleave", (e) => {
  gsap.to(".inner_slider2", {
    x: 110,
    duration: 0.7,
  });
});

butt2.addEventListener("click", () => {
  gsap.to(".inner_slider2", {
    x: -50,
    duration: 1,
    delay: 0,
  });

  gsap.to(".inner_slider2", {
    x: 110,
    duration: 0.7,
    delay: 1.2,
  });
});
//==================end button animation =========================
//================= start img boc-shadow animation ==============

//end   locomotive scrolling: =========================================
var img_all = [
  document.querySelector(".pic1"),
  document.querySelector(".pic2"),
  document.querySelector(".pic3"),
  document.querySelector(".pic4"),
  document.querySelector(".pic5"),
  document.querySelector(".pic6"),
  document.querySelector(".pic7"),
  document.querySelector(".pic8"),
  document.querySelector(".pic9"),
  document.querySelector(".pic10"),
  document.querySelector(".pic11"),
  document.querySelector(".pic12"),
  document.querySelector(".pic13"),
  document.querySelector(".pic14"),
];

console.log(document.body.offsetWidth + " " + document.body.offsetHeight);

var i = 0;

var sum_wi = 0;
var sum_hei = 0;
var sum_rat = 0;
img_all.forEach((elem) => {
  var wid = elem.width;
  var hi = elem.height;
  var ratio = wid / hi;
  //var ratio = hi / wid;
  var ratio_wid = wid / hi;
  var ratio_hi = hi / wid;
  sum_wi += wid;
  sum_hei += hi;
  sum_rat += ratio;

  console.log(wid + " " + hi + " " + ratio);
  //start etting width and height for the image ==========================================
  if (document.body.offsetWidth >= 1551) {
    img_all[i].style.width = (document.body.offsetWidth / 6.5) * ratio + "px";
    img_all[i].style.height = document.body.offsetWidth / 6 + "px";
  } else if (
    document.body.offsetWidth >= 1380 &&
    document.body.offsetWidth <= 1550
  ) {
    img_all[i].style.width = (document.body.offsetWidth / 6.7) * ratio + "px";
    img_all[i].style.height = document.body.offsetWidth / 6.7 + "px";
  } else if (
    document.body.offsetWidth >= 1080 &&
    document.body.offsetWidth <= 1379
  ) {
    img_all[i].style.width = (document.body.offsetWidth / 6) * ratio + "px";
    img_all[i].style.height = document.body.offsetWidth / 6 + "px";
  } else if (
    document.body.offsetWidth > 720 &&
    document.body.offsetWidth < 1080
  ) {
    if (ratio_hi > ratio_wid) {
      img_all[i].style.width = document.body.offsetHeight / 6.3 + "px";
      img_all[i].style.height =
        (document.body.offsetHeight / 6.3) * ratio_hi + "px";
    } else {
      img_all[i].style.width =
        (document.body.offsetWidth / 6.5) * ratio_wid + "px";
      img_all[i].style.height = document.body.offsetWidth / 6.5 + "px";
    }
  } else if (
    document.body.offsetWidth > 500 &&
    document.body.offsetWidth < 719
  ) {
    if (ratio_hi > ratio_wid) {
      img_all[i].style.width = document.body.offsetHeight / 8 + "px";
      img_all[i].style.height =
        (document.body.offsetHeight / 8) * ratio_hi + "px";
    } else {
      img_all[i].style.width =
        (document.body.offsetWidth / 5) * ratio_wid + "px";
      img_all[i].style.height = document.body.offsetWidth / 5 + "px";
    }
  } else if (document.body.offsetWidth <= 500) {
    if (ratio_hi > ratio_wid) {
      img_all[i].style.width = document.body.offsetHeight / 9.6 + "px";
      img_all[i].style.height =
        (document.body.offsetHeight / 10) * ratio_hi + "px";
    } else {
      img_all[i].style.width =
        (document.body.offsetWidth / 4) * ratio_wid + "px";
      img_all[i].style.height = document.body.offsetWidth / 4 + "px";
    }
  }
  //end setting width and height for the image ==========================================

  //start hover box-shadow animation:=================================================
  img_all[i].addEventListener("mouseenter", (er) => {
    gsap.to(er, {
      onUpdate: () => {
        er.target.style.boxShadow =
          "-1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) ,0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 5px 5px 10px 0px rgba(0,0,0,0.5)";
        er.target.style.transition = "box-shadow 0.3s 0s linear";
      },
      duration: 0.3,
      delay: 0,
    });
    gsap.to(er, {
      onUpdate: () => {
        er.target.style.boxShadow =
          "-1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) ,0px -1.3px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 5px 5px 10px 0px rgba(0,0,0,0.6)";
        er.target.style.transition = "box-shadow 0.4s 0s linear";
      },
      duration: 0.4,
      delay: 0.3,
    });
    gsap.to(er, {
      onUpdate: () => {
        er.target.style.boxShadow =
          "-1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) ,0px -1.3px 0px 0px rgba(0 , 255 , 0 , 1) , 1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 5px 5px 10px 0px rgba(0,0,0,0.7)";
        er.target.style.transition = "box-shadow 0.3s 0s linear";
      },
      duration: 0.3,
      delay: 0.6,
    });
    gsap.to(er, {
      onUpdate: () => {
        er.target.style.boxShadow =
          "-1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) ,0px -1.3px 0px 0px rgba(0 , 255 , 0 , 1) , 1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 1.3px 0px 0px rgba(0 , 255 , 0 , 1) , 5px 5px 10px 0px rgba(0,0,0,0.7)";
        er.target.style.transition = "box-shadow 0.4s 0s linear";
      },
      duration: 0.4,
      delay: 1,
    });
  });
  img_all[i].addEventListener("mouseleave", (er) => {
    gsap.to(er, {
      onUpdate: () => {
        er.target.style.boxShadow =
          "0px 0px 0px 0px rgba(0 , 255 , 0 , 1) ,0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 5px 5px 10px 0px rgba(0,0,0,0.5)";
        er.target.style.transition = "box-shadow 0.3s 0s linear";
      },
      duration: 0.3,
      delay: 1.1,
    });
    gsap.to(er, {
      onUpdate: () => {
        er.target.style.boxShadow =
          "-1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) ,0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 5px 5px 10px 0px rgba(0,0,0,0.6)";
        er.target.style.transition = "box-shadow 0.4s 0s linear";
      },
      duration: 0.4,
      delay: 0.8,
    });
    gsap.to(er, {
      onUpdate: () => {
        er.target.style.boxShadow =
          "-1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) ,0px -1.3px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 5px 5px 10px 0px rgba(0,0,0,0.7)";
        er.target.style.transition = "box-shadow 0.3s 0s linear";
      },
      duration: 0.3,
      delay: 0.55,
    });
    gsap.to(er, {
      onUpdate: () => {
        er.target.style.boxShadow =
          "-1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) ,0px -1.3px 0px 0px rgba(0 , 255 , 0 , 1) , 1.3px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 0px 0px 0px 0px rgba(0 , 255 , 0 , 1) , 5px 5px 10px 0px rgba(0,0,0,0.7)";
        er.target.style.transition = "box-shadow 0.4s 0s linear";
      },
      duration: 0.4,
      delay: 0.2,
    });
  });
  //end hover box-shadow animation:=================================================
  console.log(i);
  i++;
});
console.log("width: " + sum_wi + "  height:" + sum_hei + " ratio:" + sum_rat);
if (screen.width > 719 && screen.width < 1080) {
  document.querySelector(".shuffleImage").style.height = "55px";
} else if (screen.width <= 720) {
  document.querySelector(".shuffleImage").style.height = "45px";
}

var shuffle_img = () => {
  var a = Math.floor(Math.random() * 14);
  var b = Math.floor(Math.random() * 14);
  while (a == b) {
    b = Math.floor(Math.random() * 14);
    //console.log("looped");
  }
  while (img_all[a].style.order == b && img_all[b].style.order == a) {
    a = Math.floor(Math.random() * 14);
    b = Math.floor(Math.random() * 14);
    while (a == b) {
      b = Math.floor(Math.random() * 14);
      //console.log("looped");
    }
  }
  //var state = [img_all[a], img_all[a]];
  const state1 = Flip.getState(".pic1");
  const state2 = Flip.getState(".pic2");
  const state3 = Flip.getState(".pic3");
  const state4 = Flip.getState(".pic4");
  const state5 = Flip.getState(".pic5");
  const state6 = Flip.getState(".pic6");
  const state7 = Flip.getState(".pic7");
  const state8 = Flip.getState(".pic8");
  const state9 = Flip.getState(".pic9");
  const state10 = Flip.getState(".pic10");
  const state11 = Flip.getState(".pic11");
  const state12 = Flip.getState(".pic12");
  const state13 = Flip.getState(".pic13");
  const state14 = Flip.getState(".pic14");
  img_all[a].style.order = b;
  //img_wrapper[a].style.order = b;
  img_all[b].style.order = a;

  Flip.from(state1, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state2, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state3, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state4, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state5, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state6, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state7, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state14, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state8, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state9, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state10, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state11, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state12, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  Flip.from(state13, {
    //absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    delay: 0,
    simple: true,
  });
  console.log(a + " " + b);
};

var auto_shuffle = () => {
  setInterval(() => {
    shuffle_img();
  }, 2000);
};

document
  .querySelector(".si1_class_non_auto")
  .addEventListener("click", shuffle_img);
document
  .querySelector(".si1_class_auto")
  .addEventListener("click", auto_shuffle);
