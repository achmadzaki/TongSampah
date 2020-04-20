const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const openBtn = document.getElementById('buka');
const closeBtn = document.getElementById('tutup');
var rotation = 0;

//function
function buka() {    
tutupsampah();
if(rotation < Math.PI/2) {
rotation += 0.10; //delay membuka
requestAnimationFrame(buka);
    }
}
    
function tutup() {     
tutupsampah();  
if(rotation > 0) {
rotation -= 0.05; //delay menutup
requestAnimationFrame(tutup);
    }
} 


//function
function tutupsampah() {
ctx.clearRect(0, 0, canvas.width, 301);
ctx.clearRect(canvas.width/2, 0, canvas.width, canvas.height);
ctx.save();
ctx.fillStyle = '#0c7806';
ctx.translate(400, 300);
ctx.scale(-1, -1);
ctx.rotate(rotation);
ctx.fillRect(93, 38, 50, 20);
ctx.fillRect(0, 0, 240, 40);
ctx.restore();
}

function sampah() {
ctx.save();
ctx.fillStyle = '#095705';
ctx.fillRect(160, 300, 240, 290);
ctx.restore();
}

document.getElementById("buka").addEventListener('click', function() {
buka();
});

document.getElementById("tutup").addEventListener('click', function() {
tutup();
});

tutupsampah();
sampah();
