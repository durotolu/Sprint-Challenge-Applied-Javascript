/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselFunction () {
  //debugger
  const carouselDiv = document.createElement('div');
  carouselDiv.setAttribute('class', 'carousel');
  const leftButtonDiv = document.createElement('div');
  leftButtonDiv.setAttribute('class', 'left-button')
  const mountainImage = document.createElement('img');
  mountainImage.setAttribute('src', './assets/carousel/mountains.jpeg');
  const computerImage = document.createElement('img');
  computerImage.setAttribute('src', './assets/carousel/computer.jpeg');
  const treesImage = document.createElement('img');
  treesImage.setAttribute('src', './assets/carousel/trees.jpeg');
  const turntableImage = document.createElement('img');
  turntableImage.setAttribute('src', './assets/carousel/turntable.jpeg');
  const rightButtonDiv = document.createElement('div');
  rightButtonDiv.setAttribute('class', 'right-button')


  // let slideIndex = 1;
  // showSlides(slideIndex);

  leftButtonDiv.addEventListener('click', n => {
    document.querySelector('img').classList.toggle('.carousel');
  })
  //   showSlides(slideIndex += -1);
  // })

  // function showSlides (n) {
  //   var i;
  //   let slides = document.querySelector('img');
  //   if (n>slides.length) {slideIndex = 1}
  //   if (n<1) {slideIndex = slideIndex = slides.length}
  //   for (i=0; i<slides.length; i++) {
  //     slides[i].style.display = "initial";
  //   }
  //   slides[slideIndex-1].style.display = 'block';
  // }
  
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // function current(n) {
  //   showSlides(slideIndex =n);
  // }

  // function showSlides(n) {
  //   var i;
  // }

  carouselDiv.appendChild(leftButtonDiv);
  carouselDiv.appendChild(mountainImage);
  carouselDiv.appendChild(computerImage);
  carouselDiv.appendChild(treesImage);
  carouselDiv.appendChild(turntableImage);
  carouselDiv.appendChild(rightButtonDiv);

  let images = [mountainImage, computerImage, treesImage, turntableImage]
  let index= 0;
  images[0].style.display = "block";
  rightButtonDiv.addEventListener('click', () => {
    images.forEach(img => img.style.display = "none");
    let currentIndex = (index++) % images.length;

    images[currentIndex].style.display = "block";
  })

  return carouselDiv;
}

document.querySelector('.carousel-container').appendChild(carouselFunction());