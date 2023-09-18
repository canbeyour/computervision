let cv; // OpenCV 객체

function onOpenCvReady() {
  cv = window.cv; // OpenCV 객체 초기화
  if (cv) {
    console.log("OpenCV.js is ready");
  } else {
    console.error("OpenCV.js failed to load.");
  }
}
