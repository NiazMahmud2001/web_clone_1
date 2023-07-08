gsap.registerPlugin(ScrollTrigger); 




// start page2 gsap code ============================================
var clutter = "";
document.querySelector("#page2>h1").textContent.split(" ").forEach(function (text) {
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
   stagger: .2, 
   opacity: 1,
})
// end page2 gsap code ============================================


//start page3 canvas code =======================================

function canvas_3rd_page(){
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
  pics/frames00007.png
  pics/frames00010.png
  pics/frames00013.png
  pics/frames00016.png
  pics/frames00019.png
  pics/frames00022.png
  pics/frames00025.png
  pics/frames00028.png
  pics/frames00031.png
  pics/frames00034.png
  pics/frames00037.png
  pics/frames00040.png
  pics/frames00043.png
  pics/frames00046.png
  pics/frames00049.png
  pics/frames00052.png
  pics/frames00055.png
  pics/frames00058.png
  pics/frames00061.png
  pics/frames00064.png
  pics/frames00067.png
  pics/frames00070.png
  pics/frames00073.png
  pics/frames00076.png
  pics/frames00079.png
  pics/frames00082.png
  pics/frames00085.png
  pics/frames00088.png
  pics/frames00091.png
  pics/frames00094.png
  pics/frames00097.png
  pics/frames00100.png
  pics/frames00103.png
  pics/frames00106.png
  pics/frames00109.png
  pics/frames00112.png
  pics/frames00115.png
  pics/frames00118.png
  pics/frames00121.png
  pics/frames00124.png
  pics/frames00127.png
  pics/frames00130.png
  pics/frames00133.png
  pics/frames00136.png
  pics/frames00139.png
  pics/frames00142.png
  pics/frames00145.png
  pics/frames00148.png
  pics/frames00151.png
  pics/frames00154.png
  pics/frames00157.png
  pics/frames00160.png
  pics/frames00163.png
  pics/frames00166.png
  pics/frames00169.png
  pics/frames00172.png
  pics/frames00175.png
  pics/frames00178.png
  pics/frames00181.png
  pics/frames00184.png
  pics/frames00187.png
  pics/frames00190.png
  pics/frames00193.png
  pics/frames00196.png
  pics/frames00199.png
  pics/frames00202.png
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
    scrub: .5,
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
canvas_3rd_page()
//end page3 canvas code =====================================


//start page 4 ===============================================
var clutter1 = "";
document.querySelector("#page4>h1").textContent.split(" ").forEach(function (text) {
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
   stagger: .2, 
   opacity: 1,
})
//end page4 ====================================================== 