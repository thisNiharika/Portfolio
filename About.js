var image = document.getElementById('image');

var images = ["Image/Im.jpg","Image/Niharika.jpg", "Image/Designer.jpg", "Image/developer.jpg"];

setInterval(function(){
    let pic = Math.floor(Math.random()*4);
    image.src = images[pic];
},300)

console.log("hello");

