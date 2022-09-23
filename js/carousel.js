let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function(){
  offset = offset + 100;
  if (offset == 300) {
    offset = 0;
  }
  sliderLine.style.left = -offset + '%';
});

document.querySelector('.pred').addEventListener('click', function(){
  offset = offset - 100;
  if (offset < 0) {
    offset = 0;
  }
  sliderLine.style.left = -offset + '%';
});
