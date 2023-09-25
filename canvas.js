const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const images = [];
const imagePaths = ["./rock.jpg", "./scissor.jpg", "./paper.jpg"];

const imageWidth = 100; // 이미지의 가로 크기
const imageHeight = 100; // 이미지의 세로 크기

function setImages() {
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * imagePaths.length);

    let x = Math.floor(Math.random() * canvas.width - imageWidth);
    let y = Math.floor(Math.random() * 800) * -1;
    let speed = 3;

    images.push({
      x,
      y,
      speed,
      imagePath: imagePaths[num],
    });
  }
}

function drawImages() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 지우기

  for (let i = 0; i < 10; i++) {
    let img = new Image();
    img.src = images[i].imagePath;

    ctx.drawImage(img, images[i].x, images[i].y, imageWidth, imageHeight);
    images[i].y += images[i].speed;
    console.log(images[i].y);

    if (images[i].y == -imageHeight) {
      return;
    }
  }
  requestAnimationFrame(drawImages);
}
