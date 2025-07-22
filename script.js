// OTP Signup Support
window.isOTPSignupSupported = true;
window.isEUOTPSignupSupported = true;

// Carousel Slide Function
function changeCarouselSlide(slide) {
  var allItems = document.querySelectorAll('.carousel-item');
  allItems.forEach(function(item) {
    item.classList.remove('active');
  });
  
  // Activate the correct carousel item
  var targetItem = document.querySelectorAll('.carousel-item')[slide];
  if(targetItem) {
    targetItem.classList.add('active');
  }
}

// Case Study Video Handling
$(document).ready(function() {
  $('#case-study-video').on('click', function(event) {
    var videoPlayerContainer = $('#video-player');
    videoPlayerContainer.removeClass('hide');
    window.setTimeout(function() {
      videoPlayerContainer.addClass('open');
      videoPlayerContainer.find('#player').html(
        '<iframe id="yt-case-study-video" src="https://www.youtube-nocookie.com/embed/-1wBb5SjIH4?autoplay=1&rel=0&showinfo=0&autohide=1&enablejsapi=1" frameborder="0" allowfullscreen></iframe>'
      );
    });
    event.preventDefault();
  });

  $('#video-player').on('click', function() {
    var $this = $(this);
    $this.removeClass('open');
    $this.find('#yt-case-study-video').remove();
    window.setTimeout(function() {
      $this.addClass('hide');
    }, 450);
  });
});

// Image Reload Function
function zfReloadImg() {
  var imgElement = document.getElementById('zfimg-id');
  if (imgElement.src.indexOf('&d') !== -1) {
    imgElement.src = imgElement.src.substring(0, imgElement.src.indexOf('&d')) + '&d' + new Date().getTime();
  } else {
    imgElement.src = imgElement.src + '&d' + new Date().getTime();
  }
}

// Social Media Icon Hover Effects
function setupSocialIcons() {
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
      this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    icon.addEventListener('mouseout', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
} 