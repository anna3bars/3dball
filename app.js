const canvas = document.querySelector('.canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 131;

const currentFrame = (index) => `./best-ball/${(index + 1).toString()}.png`
const images = [];
let ball = {frame: 0}

for(let i = 0; i < frameCount; i++){
 const img = new Image();
 img.src = currentFrame(i);
 images.push(img)
}

gsap.to(ball, {
 frame: frameCount - 1,
 snap: "frame",
 ease: "none",
 scrollTrigger: {
  scrub: true,
  pin: "canvas",
  end: "500%",
  // markers: true
 },
 onUpdate: render,
})


images[0].onload = render;

gsap.fromTo(
 ".ball-text",
 {
   opacity: 0,
 },
 {
   opacity: 1,
   scrollTrigger: {
     scrub: 1,

     start: "50%",
     end: "60%",
   },
   onComplete: () => {
     gsap.to(".ball-text", { opacity: 0 });
   },
 }
);

function render() {
 context.clearRect(0, 0, canvas.width, canvas.height);
 context.drawImage(images[ball.frame], 0, 0, canvas.width, canvas.height);
}


// function render(){
//  context.clearRect(0, 0, canvas.width, canvas.height);
//  context.drawImage(images[ball.frame], 0, 0)
// }
//  render context.clearRect() --> what this functionsdoes is it literally
// just clears out the canvas for you deletes everything
// that's on it 



















