document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll('.slider img');
    let currentImageIndex = 0;
  
    function showImage(index) {
      images.forEach((img, i) => {
        if (i === index) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    }
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    }
  
    // Auto play functionality
    let intervalId = setInterval(nextImage, 2000);
  
    // Stop auto play when mouse is over the slider
    let slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', function() {
      clearInterval(intervalId);
    });
  
    // Resume auto play when mouse leaves the slider
    slider.addEventListener('mouseleave', function() {
      intervalId = setInterval(nextImage, 2000);
    });
  });
  