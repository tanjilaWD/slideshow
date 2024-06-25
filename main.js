const slideshowElements = document.querySelectorAll('.slideshow-element');
 
let currentElements = 1;

setInterval(() => {
    customElements ++;
  let currentElement = document.querySelector('.current'); 
  currentElement.classList.remove('current');

  if (currentElements > slideshowElements.length){
    slideshowElements[0].classList.add('current');
  } else{
    currentElement.nextElementSibling.classList.add('current');

  }
  currentElement.nextElementSibling.classList.add('current');

},2000);