const images = [];
const imagePaths = ["./rock.jpg", "./scissor.jpg", "./paper.jpg"];

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
