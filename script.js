gsap.registerPlugin(ScrollTrigger, CustomEase);

// start page2 gsap code ============================================
var clutter = "";
document
  .querySelector("#page2>h1")
  .textContent.split(" ")
  .forEach(function (text) {
    clutter += `<span> ${text} </span>`;
  });
document.querySelector("#page2>h1").innerHTML = clutter;

gsap.to("#page2>h1>span", {
  scrollTrigger: {
    trigger: "#page2>h1>span",
    start: "top bottom",
    end: "bottom top",
    scroller: "#main",
    scrub: 0.5,
    // markers: true,
  },
  stagger: 0.2,
  opacity: 1,
});
// end page2 gsap code ============================================

//start page3 canvas code =======================================

function canvas_3rd_page() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
 ./pics/frames00007.png
 ./pics/frames00010.png
 ./pics/frames00013.png
 ./pics/frames00016.png
 ./pics/frames00019.png
 ./pics/frames00022.png
 ./pics/frames00025.png
 ./pics/frames00028.png
 ./pics/frames00031.png
 ./pics/frames00034.png
 ./pics/frames00037.png
 ./pics/frames00040.png
 ./pics/frames00043.png
 ./pics/frames00046.png
 ./pics/frames00049.png
 ./pics/frames00052.png
 ./pics/frames00055.png
 ./pics/frames00058.png
 ./pics/frames00061.png
 ./pics/frames00064.png
 ./pics/frames00067.png
 ./pics/frames00070.png
 ./pics/frames00073.png
 ./pics/frames00076.png
 ./pics/frames00079.png
 ./pics/frames00082.png
 ./pics/frames00085.png
 ./pics/frames00088.png
 ./pics/frames00091.png
 ./pics/frames00094.png
 ./pics/frames00097.png
 ./pics/frames00100.png
 ./pics/frames00103.png
 ./pics/frames00106.png
 ./pics/frames00109.png
 ./pics/frames00112.png
 ./pics/frames00115.png
 ./pics/frames00118.png
 ./pics/frames00121.png
 ./pics/frames00124.png
 ./pics/frames00127.png
 ./pics/frames00130.png
 ./pics/frames00133.png
 ./pics/frames00136.png
 ./pics/frames00139.png
 ./pics/frames00142.png
 ./pics/frames00145.png
 ./pics/frames00148.png
 ./pics/frames00151.png
 ./pics/frames00154.png
 ./pics/frames00157.png
 ./pics/frames00160.png
 ./pics/frames00163.png
 ./pics/frames00166.png
 ./pics/frames00169.png
 ./pics/frames00172.png
 ./pics/frames00175.png
 ./pics/frames00178.png
 ./pics/frames00181.png
 ./pics/frames00184.png
 ./pics/frames00187.png
 ./pics/frames00190.png
 ./pics/frames00193.png
 ./pics/frames00196.png
 ./pics/frames00199.png
 ./pics/frames00202.png
 `;

    return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas_3rd_page();
//end page3 canvas code =====================================

//start page 4 ===============================================
var clutter1 = "";
document
  .querySelector("#page4>h1")
  .textContent.split(" ")
  .forEach(function (text) {
    clutter1 += `<span> ${text} </span>`;
  });
document.querySelector("#page4>h1").innerHTML = clutter1;

gsap.to("#page4>h1>span", {
  scrollTrigger: {
    trigger: "#page4>h1>span",
    start: "top bottom",
    end: "bottom top",
    scroller: "#main",
    scrub: 0.5,
    // markers: true,
  },
  stagger: 0.2,
  opacity: 1,
});
//end page4 =============================

//start page5 canvas ====================
function canvas_5th_page() {
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
         ./pics/bridges00004.png 
         ./pics/bridges00007.png 
         ./pics/bridges00010.png 
         ./pics/bridges00013.png 
         ./pics/bridges00016.png 
         ./pics/bridges00019.png 
         ./pics/bridges00022.png 
         ./pics/bridges00025.png 
         ./pics/bridges00028.png 
         ./pics/bridges00031.png 
         ./pics/bridges00034.png 
         ./pics/bridges00037.png 
         ./pics/bridges00040.png 
         ./pics/bridges00043.png 
         ./pics/bridges00046.png 
         ./pics/bridges00049.png 
         ./pics/bridges00052.png 
         ./pics/bridges00055.png 
         ./pics/bridges00058.png 
         ./pics/bridges00061.png 
         ./pics/bridges00064.png 
         ./pics/bridges00067.png 
         ./pics/bridges00070.png 
         ./pics/bridges00073.png 
         ./pics/bridges00076.png 
         ./pics/bridges00079.png 
         ./pics/bridges00082.png 
         ./pics/bridges00085.png 
         ./pics/bridges00088.png 
         ./pics/bridges00091.png 
         ./pics/bridges00094.png 
         ./pics/bridges00097.png 
         ./pics/bridges00100.png 
         ./pics/bridges00103.png 
         ./pics/bridges00106.png 
         ./pics/bridges00109.png 
         ./pics/bridges00112.png 
         ./pics/bridges00115.png 
         ./pics/bridges00118.png 
         ./pics/bridges00121.png 
         ./pics/bridges00124.png 
         ./pics/bridges00127.png 
         ./pics/bridges00130.png 
         ./pics/bridges00133.png 
         ./pics/bridges00136.png 
         ./pics/bridges00139.png 
         ./pics/bridges00142.png 
         ./pics/bridges00145.png 
         ./pics/bridges00148.png 
         ./pics/bridges00151.png 
         ./pics/bridges00154.png 
         ./pics/bridges00157.png 
         ./pics/bridges00160.png 
         ./pics/bridges00163.png  
         `;
    return data.split("\n")[index];
  }

  const frameCount = 55; //enter the number of pics passed inside "files func"

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas_5th_page();

//start page 6===================================
var clutter2 = "";
document
  .querySelector("#page6>h1")
  .textContent.split(" ")
  .forEach(function (text) {
    clutter2 += `<span> ${text} </span>`;
  });
document.querySelector("#page6>h1").innerHTML = clutter1;

gsap.to("#page6>h1>span", {
  scrollTrigger: {
    trigger: "#page6>h1>span",
    start: "top bottom",
    end: "bottom top",
    scroller: "#main",
    scrub: 0.5,
    // markers: true,
  },
  stagger: 0.2,
  opacity: 1,
});
//end page 6 ==================================

//start page7 =================================
function canvas_7th_page() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
               https://thisismagma.com/assets/home/lore/seq/1.webp?2
               https://thisismagma.com/assets/home/lore/seq/2.webp?2
               https://thisismagma.com/assets/home/lore/seq/3.webp?2
               https://thisismagma.com/assets/home/lore/seq/4.webp?2
               https://thisismagma.com/assets/home/lore/seq/5.webp?2
               https://thisismagma.com/assets/home/lore/seq/6.webp?2
               https://thisismagma.com/assets/home/lore/seq/7.webp?2
               https://thisismagma.com/assets/home/lore/seq/8.webp?2
               https://thisismagma.com/assets/home/lore/seq/9.webp?2
               https://thisismagma.com/assets/home/lore/seq/10.webp?2
               https://thisismagma.com/assets/home/lore/seq/11.webp?2
               https://thisismagma.com/assets/home/lore/seq/12.webp?2
               https://thisismagma.com/assets/home/lore/seq/13.webp?2
               https://thisismagma.com/assets/home/lore/seq/14.webp?2
               https://thisismagma.com/assets/home/lore/seq/15.webp?2
               https://thisismagma.com/assets/home/lore/seq/16.webp?2
               https://thisismagma.com/assets/home/lore/seq/17.webp?2
               https://thisismagma.com/assets/home/lore/seq/18.webp?2
               https://thisismagma.com/assets/home/lore/seq/19.webp?2
               https://thisismagma.com/assets/home/lore/seq/20.webp?2
               https://thisismagma.com/assets/home/lore/seq/21.webp?2
               https://thisismagma.com/assets/home/lore/seq/22.webp?2
               https://thisismagma.com/assets/home/lore/seq/23.webp?2
               https://thisismagma.com/assets/home/lore/seq/24.webp?2
               https://thisismagma.com/assets/home/lore/seq/25.webp?2
               https://thisismagma.com/assets/home/lore/seq/26.webp?2
               https://thisismagma.com/assets/home/lore/seq/27.webp?2
               https://thisismagma.com/assets/home/lore/seq/28.webp?2
               https://thisismagma.com/assets/home/lore/seq/29.webp?2
               https://thisismagma.com/assets/home/lore/seq/30.webp?2
               https://thisismagma.com/assets/home/lore/seq/31.webp?2
               https://thisismagma.com/assets/home/lore/seq/32.webp?2
               https://thisismagma.com/assets/home/lore/seq/33.webp?2
               https://thisismagma.com/assets/home/lore/seq/34.webp?2
               https://thisismagma.com/assets/home/lore/seq/35.webp?2
               https://thisismagma.com/assets/home/lore/seq/36.webp?2
               https://thisismagma.com/assets/home/lore/seq/37.webp?2
               https://thisismagma.com/assets/home/lore/seq/38.webp?2
               https://thisismagma.com/assets/home/lore/seq/39.webp?2
               https://thisismagma.com/assets/home/lore/seq/40.webp?2
               https://thisismagma.com/assets/home/lore/seq/41.webp?2
               https://thisismagma.com/assets/home/lore/seq/42.webp?2
               https://thisismagma.com/assets/home/lore/seq/43.webp?2
               https://thisismagma.com/assets/home/lore/seq/44.webp?2
               https://thisismagma.com/assets/home/lore/seq/45.webp?2
               https://thisismagma.com/assets/home/lore/seq/46.webp?2
               https://thisismagma.com/assets/home/lore/seq/47.webp?2
               https://thisismagma.com/assets/home/lore/seq/48.webp?2
               https://thisismagma.com/assets/home/lore/seq/49.webp?2
               https://thisismagma.com/assets/home/lore/seq/50.webp?2
               https://thisismagma.com/assets/home/lore/seq/51.webp?2
               https://thisismagma.com/assets/home/lore/seq/52.webp?2
               https://thisismagma.com/assets/home/lore/seq/53.webp?2
               https://thisismagma.com/assets/home/lore/seq/54.webp?2
               https://thisismagma.com/assets/home/lore/seq/55.webp?2
               https://thisismagma.com/assets/home/lore/seq/56.webp?2
               https://thisismagma.com/assets/home/lore/seq/57.webp?2
               https://thisismagma.com/assets/home/lore/seq/58.webp?2
               https://thisismagma.com/assets/home/lore/seq/59.webp?2
               https://thisismagma.com/assets/home/lore/seq/60.webp?2
               https://thisismagma.com/assets/home/lore/seq/61.webp?2
               https://thisismagma.com/assets/home/lore/seq/62.webp?2
               https://thisismagma.com/assets/home/lore/seq/63.webp?2
               https://thisismagma.com/assets/home/lore/seq/64.webp?2
               https://thisismagma.com/assets/home/lore/seq/65.webp?2
               https://thisismagma.com/assets/home/lore/seq/66.webp?2
               https://thisismagma.com/assets/home/lore/seq/67.webp?2
               https://thisismagma.com/assets/home/lore/seq/68.webp?2
               https://thisismagma.com/assets/home/lore/seq/69.webp?2
               https://thisismagma.com/assets/home/lore/seq/70.webp?2
               https://thisismagma.com/assets/home/lore/seq/71.webp?2
               https://thisismagma.com/assets/home/lore/seq/72.webp?2
               https://thisismagma.com/assets/home/lore/seq/73.webp?2
               https://thisismagma.com/assets/home/lore/seq/74.webp?2
               https://thisismagma.com/assets/home/lore/seq/75.webp?2
               https://thisismagma.com/assets/home/lore/seq/76.webp?2
               https://thisismagma.com/assets/home/lore/seq/77.webp?2
               https://thisismagma.com/assets/home/lore/seq/78.webp?2
               https://thisismagma.com/assets/home/lore/seq/79.webp?2
               https://thisismagma.com/assets/home/lore/seq/80.webp?2
               https://thisismagma.com/assets/home/lore/seq/81.webp?2
               https://thisismagma.com/assets/home/lore/seq/82.webp?2
               https://thisismagma.com/assets/home/lore/seq/83.webp?2
               https://thisismagma.com/assets/home/lore/seq/84.webp?2
               https://thisismagma.com/assets/home/lore/seq/85.webp?2
               https://thisismagma.com/assets/home/lore/seq/86.webp?2
               https://thisismagma.com/assets/home/lore/seq/87.webp?2
               https://thisismagma.com/assets/home/lore/seq/88.webp?2
               https://thisismagma.com/assets/home/lore/seq/89.webp?2
               https://thisismagma.com/assets/home/lore/seq/90.webp?2
               https://thisismagma.com/assets/home/lore/seq/91.webp?2
               https://thisismagma.com/assets/home/lore/seq/92.webp?2
               https://thisismagma.com/assets/home/lore/seq/93.webp?2
               https://thisismagma.com/assets/home/lore/seq/94.webp?2
               https://thisismagma.com/assets/home/lore/seq/95.webp?2
               https://thisismagma.com/assets/home/lore/seq/96.webp?2
               https://thisismagma.com/assets/home/lore/seq/97.webp?2
               https://thisismagma.com/assets/home/lore/seq/98.webp?2
               https://thisismagma.com/assets/home/lore/seq/99.webp?2
               https://thisismagma.com/assets/home/lore/seq/100.webp?2
               https://thisismagma.com/assets/home/lore/seq/101.webp?2
               https://thisismagma.com/assets/home/lore/seq/102.webp?2
               https://thisismagma.com/assets/home/lore/seq/103.webp?2
               https://thisismagma.com/assets/home/lore/seq/104.webp?2
               https://thisismagma.com/assets/home/lore/seq/105.webp?2
               https://thisismagma.com/assets/home/lore/seq/106.webp?2
               https://thisismagma.com/assets/home/lore/seq/107.webp?2
               https://thisismagma.com/assets/home/lore/seq/108.webp?2
               https://thisismagma.com/assets/home/lore/seq/109.webp?2
               https://thisismagma.com/assets/home/lore/seq/110.webp?2
               https://thisismagma.com/assets/home/lore/seq/111.webp?2
               https://thisismagma.com/assets/home/lore/seq/112.webp?2
               https://thisismagma.com/assets/home/lore/seq/113.webp?2
               https://thisismagma.com/assets/home/lore/seq/114.webp?2
               https://thisismagma.com/assets/home/lore/seq/115.webp?2
               https://thisismagma.com/assets/home/lore/seq/116.webp?2
               https://thisismagma.com/assets/home/lore/seq/117.webp?2
               https://thisismagma.com/assets/home/lore/seq/118.webp?2
               https://thisismagma.com/assets/home/lore/seq/119.webp?2
               https://thisismagma.com/assets/home/lore/seq/120.webp?2
               https://thisismagma.com/assets/home/lore/seq/121.webp?2
               https://thisismagma.com/assets/home/lore/seq/122.webp?2
               https://thisismagma.com/assets/home/lore/seq/123.webp?2
               https://thisismagma.com/assets/home/lore/seq/124.webp?2
               https://thisismagma.com/assets/home/lore/seq/125.webp?2
               https://thisismagma.com/assets/home/lore/seq/126.webp?2
               https://thisismagma.com/assets/home/lore/seq/127.webp?2
               https://thisismagma.com/assets/home/lore/seq/128.webp?2
               https://thisismagma.com/assets/home/lore/seq/129.webp?2
               https://thisismagma.com/assets/home/lore/seq/130.webp?2
               https://thisismagma.com/assets/home/lore/seq/131.webp?2
               https://thisismagma.com/assets/home/lore/seq/132.webp?2
               https://thisismagma.com/assets/home/lore/seq/133.webp?2
               https://thisismagma.com/assets/home/lore/seq/134.webp?2
               https://thisismagma.com/assets/home/lore/seq/135.webp?2
               https://thisismagma.com/assets/home/lore/seq/136.webp?2
         `;
    return data.split("\n")[index];
  }

  const frameCount = 136; //enter the number of pics passed inside "files func"

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page7`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page7",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas_7th_page();

// page7 circle ======
gsap.to(".page7_cir", {
  scrollTrigger: {
    trigger: ".page7_cir",
    start: "top bottom",
    end: "bottom top",
    // markers: true,
    //pin: true,
    scrub: true,
    scroller: "#main",
  },
  scale: 2.6,
});
gsap.to(".page7_cir_inner", {
  scrollTrigger: {
    trigger: ".page7_cir_inner",
    start: "top bottom",
    end: "bottom top",
    // markers: true,
    //pin: true,
    scrub: true,
    scroller: "#main",
  },
  backgroundColor: "#0a3bce91",
});

//adding animation in page 9 ===================================

gsap.to("#page9", {
  scrollTrigger: {
    trigger: "#page9",
    start: "top top",
    end: "bottom 70%",
    scrub: 0.5,
    scroller: "#main",
    // markers:true,
  },
  backgroundColor: "rgba(3, 38, 142,1)",
});
//adding color animation on page10 =============================

//adding canvas code for page 10 =========================================
function canvas_10th_page() {
  const canvas = document.querySelector(
    "#page10>.page10>.page10_bottom>.page10_right>canvas"
  );
  const canvas1 = document.querySelector(
    "#page10>.page10>.page10_bottom>.page10_right"
  );
  const context = canvas.getContext("2d");

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  window.addEventListener("resize", function () {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    render();
  });

  function files(index) {
    var data = `
               ./pics/1_1.webp 
               ./pics/2.webp 
               ./pics/3.webp 
               ./pics/4.webp 
               ./pics/5.webp 
               ./pics/6.webp 
               ./pics/7.webp 
               ./pics/8.webp 
               ./pics/9.webp 
               ./pics/10.webp 
               ./pics/11.webp 
               ./pics/12.webp 
               ./pics/13.webp 
               ./pics/14.webp 
               ./pics/15.webp 
               ./pics/16.webp 
               ./pics/17.webp 
               ./pics/18.webp 
               ./pics/19.webp 
               ./pics/20.webp 
               ./pics/21.webp 
               ./pics/22.webp 
               ./pics/23.webp 
               ./pics/24.webp 
               ./pics/25.webp 
               ./pics/26.webp 
               ./pics/27.webp 
               ./pics/28.webp 
               ./pics/29.webp 
               ./pics/30.webp 
               ./pics/31.webp 
               ./pics/32.webp 
               ./pics/33.webp 
               ./pics/34.webp 
               ./pics/35.webp 
               ./pics/36.webp 
               ./pics/37.webp 
               ./pics/38.webp 
               ./pics/39.webp 
               `;
    return data.split("\n")[index];
  }

  const frameCount = 38; //enter the number of pics passed inside "files func"

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page10>.page10>.page10_bottom>.page10_right`,
      start: `top 20%`,
      end: `100% bottom`,
      scroller: `#main`,
      // markers:true,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page10>.page10>.page10_bottom>.page10_right",
    pin: true,
    scroller: `#main`,
    start: `top 20%`,
    end: `100% bottom`,
  });
}
canvas_10th_page();

//gsap on page10 txt====
gsap.to(".page10_01", {
  color: "rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: ".page10_01",
    start: "top 70%",
    end: "top 40%",
    scroller: "#main",
    scrub: true,
    // markers: true,
    onLeave: () => {
      gsap.to(".page10_01", {
        color: "rgba(255,255,255,0.3)",
        scrollTrigger: {
          trigger: ".page10_01",
          start: "top 15%",
          end: "top 5%",
          scroller: "#main",
          scrub: true,
          // markers: true,
        },
      });
    },
  },
});
gsap.to(".page10_02", {
  color: "rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: ".page10_02",
    start: "top 70%",
    end: "top 40%",
    scroller: "#main",
    scrub: true,
    // markers: true,
    onLeave: () => {
      gsap.to(".page10_02", {
        color: "rgba(255,255,255,0.3)",
        scrollTrigger: {
          trigger: ".page10_02",
          start: "top 15%", //that line determine where your canvas stops and start animation
          end: "top 5%", //that line determine where your canvas stops and start animation
          scroller: "#main",
          scrub: true,
          // markers: true,
        },
      });
    },
  },
});
gsap.to(".page10_03", {
  color: "rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: ".page10_03",
    start: "top 70%",
    end: "top 40%",
    scroller: "#main",
    scrub: true,
    // markers: true,
    onLeave: () => {
      gsap.to(".page10_03", {
        color: "rgba(255,255,255,0.3)",
        scrollTrigger: {
          trigger: ".page10_03",
          start: "top 15%",
          end: "top 5%",
          scroller: "#main",
          scrub: true,
          // markers: true,
        },
      });
    },
  },
});
gsap.to(".page10_04", {
  color: "rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: ".page10_04",
    start: "top 70%",
    end: "top 40%",
    scroller: "#main",
    scrub: true,
    // markers: true,
    onLeave: () => {
      gsap.to(".page10_04", {
        color: "rgba(255,255,255,0.3)",
        scrollTrigger: {
          trigger: ".page10_04",
          start: "top 15%", //that line determine where your canvas stops and start animation
          end: "top 5%", //that line determine where your canvas stops and start animation
          scroller: "#main",
          scrub: true,
          // markers: true,
        },
      });
    },
  },
});

// page11 cursor animation ======================================
//grab and slide ====
const slider = document.querySelector(".page11_inline");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.computedStyleMap.cursor = "grabbing";
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.computedStyleMap.cursor = "grab";
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.computedStyleMap.cursor = "grab";
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast

  gsap.to(slider, {
    duration: 0.3,
    //ease:Power1.easeInOut,
    scrollLeft: scrollLeft - walk,
  });
  //   console.log(walk);
});

//page12 company logo animation =================================
gsap.to("#page12>.page12_bottom", {
  left: 0,
  duration: 30,
  delay: 0,
  repeat: -1,
  ease: Power0.easeNone,
});

//page 13 button animation ======================================
var page13_but = document.querySelector("#page13>button");
var page13_but_div = document.querySelector("#page13>button>div");

page13_but.addEventListener("mouseenter", (e) => {
  /*gsap.to(page13_but, {
   //that is another button animation with css linear gradient
      ease: Power3.easeInOut,
      duration: 0.4,
      background: "linear-gradient(0deg, rgba(10,60,206,1) 0%, rgba(255,255,255,1) 0%)",
   });*/

  gsap.to("#page13>button>.t2", {
    top: 0,
    ease: Power4.easeOut,
    duration: 0.6,
  });

  gsap.to(page13_but_div, {
    y: 30,
    ease: Power3.easeInOut,
    duration: 0.3,
  });
  gsap.to(page13_but_div, {
    y: -30,
    duration: 0,
    color: "black",
    delay: 0.3,
  });
  gsap.to(page13_but_div, {
    y: 0,
    duration: 0.3,
    delay: 0.3,
  });
});
page13_but.addEventListener("mouseleave", (e) => {
  /*gsap.to(page13_but, {
      //that is another button animation with css linear gradient
         ease: Power3.easeInOut,
         duration: 0.4,
         background:"linear-gradient(180deg, rgba(10,60,206,1) 100%, rgba(255,255,255,1) 100%)",
      })*/

  gsap.to("#page13>button>.t2", {
    top: "100%",
    ease: Power4.easeOut,
    duration: 0.6,
  });

  gsap.to(page13_but_div, {
    y: -30,
    ease: Power3.easeInOut,
    duration: 0.3,
  });
  gsap.to(page13_but_div, {
    y: 30,
    duration: 0,
    color: "white",
    delay: 0.3,
  });
  gsap.to(page13_but_div, {
    y: 0,
    duration: 0.3,
    delay: 0.3,
  });
});
