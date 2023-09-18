let cv; // OpenCV 객체]
let video;

function onOpenCvReady() {
  cv = window.cv; // OpenCV 객체 초기화
  if (cv) {
    console.log("OpenCV.js is ready");
    initialize();
  } else {
    console.error("OpenCV.js failed to load.");
  }
}

async function initialize() {
  video = document.getElementById("webcam");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (e) {
    console.error(e);
  }
}
