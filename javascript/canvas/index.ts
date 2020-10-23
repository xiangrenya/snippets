// 注意：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。
function drawFace() {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement;
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
    ctx.stroke();
}

function drawTriangle() {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement;
    var ctx = canvas.getContext('2d');

    // Fill triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroke triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
}

function drawImage() {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement;
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        console.log(ctx.getImageData(50, 50, 100, 100));
        // ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
    }
    img.src = 'images/backdrop.png';
}