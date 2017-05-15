const canvas = document.getElementById('canvas');
class Rect {
 constructor(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.text = false;
 }
}

const context = canvas.getContext('2d');
const images = [1,2,3,4,5,6,7,8,9,10,11,12].map(e => {
 const img = new Image();
 img.src = 'images/' + e + '.jpg';
 return img;
});
const rects = [
 new Rect(2,0,1,1),
 new Rect(3,0,1,1),
 new Rect(0,1,1,2),
 new Rect(1,1,1,2),
 new Rect(2,1,1,1),
 new Rect(3,1,1,1),
 new Rect(2,2,1,1),
 new Rect(3,2,1,1),
 new Rect(0,3,1,1),
 new Rect(1,3,1,1),
 new Rect(2,3,1,1),
 new Rect(3,3,1,1)
];

const text = [
 "Today was our first travel day. We met Graham, Mikki, and Lauren at the airport and flew to New York."
];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = () => {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
};

window.onmousemove = (evt) => {
 for(let i=0;i<rects.length;i++){
  if((rects[i].x*canvas.width/4) < evt.pageX && evt.pageX < ((rects[i].x + rects[i].w) * canvas.width / 4) && 
    (rects[i].y*canvas.height/4) < evt.pageY && evt.pageY < ((rects[i].y + rects[i].h) * canvas.height / 4)){
  }
 }
}

setInterval(() => {
 context.clearRect(0,0,canvas.width,canvas.height);
 for(let i=0;i<rects.length;i++){
  context.drawImage(images[i],rects[i].x*canvas.width/4,rects[i].y*canvas.height/4,rects[i].w*canvas.width/4,rects[i].h*canvas.height/4);
 }
},1000/60);
