```javascript
const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

// 开始绘画
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', moveDrawing);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseleave', endDrawing);

// 开始绘画的函数
function startDrawing(event) {
    isDrawing = true;
    ctx.moveTo(event.offsetX, event.offsetY);
}

// 移动时绘画的函数
function moveDrawing(event) {
    if (isDrawing) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
}

// 结束绘画的函数
function endDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

// 清空签名的功能
document.getElementById('clearButton').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// 提交签名的功能
document.getElementById('submitButton').addEventListener('click', () => {
    const dataURL = canvas.toDataURL();
    console.log(dataURL); // 打印签名图像的数据URL
    // 这里可以添加将 dataURL 上传到服务器的代码
    alert('签名已提交！');
});
```