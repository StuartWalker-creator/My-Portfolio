const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const section = document.getElementById('projects');
canvas.width = section.offsetWidth;
canvas.height = section.offsetHeight;

window.addEventListener('resize', () => {
  canvas.width = section.offsetWidth;
  canvas.height = section.offsetHeight;
});

class Circle {
  constructor(x,y,xd,yd,radius,color) {
    this.x=x;
    this.y=y;
    this.yd=yd;
    this.xd=xd;
    this.radius=radius;
    this.color=color;
  }
  draw(){
    ctx.beginPath()
    ctx.arc(this.x+this.xd,this.y+this.yd,this.radius,0,50)
    ctx.stroke()
    ctx.fillStyle=this.color
    ctx.fill()
  }
  update(){
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.xd = -this.xd;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.yd = -this.yd;
    }
    
    this.x+=this.xd
    this.y+=this.yd
    this.draw()
  }
}

function randomColor() {
  return `hsl(${Math.random() * 360}, 70%, 60%)`;
}

let circles = []

for (var i = 0; i < 100; i++) {
  let xd = Math.floor(Math.random()-0.5)*10
  let yd = Math.floor(Math.random()-0.5)*8
  let radius = Math.random() * 40 + 10;
  let x = Math.random() * (canvas.width - radius * 2) + radius;
  let y = Math.random() * (canvas.height - radius * 2) + radius;
  
  let color = randomColor()
  
  circles.push(new Circle(x,y,xd,yd,radius,color))
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach((circle)=>{
  circle.update()
  console.log(circle)

})
  requestAnimationFrame(draw);
}
draw();

