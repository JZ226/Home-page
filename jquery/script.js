//Every Functionality comments are below the code
$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("#menu-card").slideToggle(300); 
    $(this).toggleClass("active"); 
  });

  $(".menu-link").click(function (e) {
    e.preventDefault(); // prevent jump
    $(".menu-link").removeClass("active");
    $(this).addClass("active");
  });
});
// This code uses jQuery to toggle the menu card and rotate the menu icon when clicked.
// It also adds an active class to the clicked menu link and removes it from others.
$(document).ready(function () {
  $("#sign-in-btn").click(function () {
    $("#message-box")
      .html("Here you get Sign In option but Sign In page is not responding.")
      .fadeIn()
      .delay(3000)
  .fadeOut();
  });
});
// This code uses jQuery to show a message when the sign-in button is clicked.
$(".cta-button1").click(function () {
    $(".error-message3")
      .text("Page didn't respond.")
      .fadeIn(200)          
      .delay(2000)          
      .fadeOut(300);        
  });
  $(".btn-green").click(function () {
    $(".error-message1")
      .text("Page didn't respond.")
      .fadeIn(200)          
      .delay(2000)          
      .fadeOut(300);        
  });
  $(".btn-outline").click(function () {
    $(".error-message2")
      .text("Page didn't respond.")
      .fadeIn(200)          
      .delay(2000)          
      .fadeOut(300);        
  });
  $(".tab-button.active").click(function () {
    $(".error-message4")
      .text("Page didn't respond.")
      .fadeIn(200)          
      .delay(2000)          
      .fadeOut(300);        
  });
  $(".cta-button2").click(function () {
    $(".error-message4")
      .text("Page didn't respond.")
      .fadeIn(200)          
      .delay(2000)          
      .fadeOut(300);        
  });
// This code uses jQuery to show an error message when the CTA button is clicked.
 $(document).ready(function () {
  $(".cta-button3").click(function () {
    var email = $("#email-input").val();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // this is regular expression check for email is valid or not

    if (emailPattern.test(email)) {
      $("#email-message")
        .text("Your email is correct but this is a testing web app.")
        .removeClass("invalid")
        .addClass("valid")
        .fadeIn()
        .delay(3000)
        .fadeOut();
    } else {
      $("#email-message")
        .text("Your email is not correct.")
        .removeClass("valid")
        .addClass("invalid")
        .fadeIn()
        .delay(3000)
        .fadeOut();
    }
  });
});
// This code uses jQuery to validate the email input when the CTA button is clicked.
$(document).ready(function () {
  const track = $(".testimonial-track");
  const cardWidth = $(".testimonial-card").outerWidth(true);
  let currentIndex = 0;
  const totalCards = $(".testimonial-card").length;
  const visibleCards = 3;

  $(".next").click(function () {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      updateSlider();
    }
  });

  $(".prev").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  function updateSlider() {
    const offset = -currentIndex * cardWidth;
    track.css("transform", `translateX(${offset}px)`);
  }

  updateSlider(); // Init on load
});

// This code uses jQuery to create a testimonial slider with next and previous buttons.
// $(document).ready(function () {
//   const $track = $('.carousel-track');

//   // Duplicate all logos for seamless scroll
//   const logos = $track.children().clone();
//   $track.append(logos);

//   $track.hover(
//     function () {
//       $(this).css('animation-play-state', 'paused');
//     },
//     function () {
//       $(this).css('animation-play-state', 'running');
//     }
//   );
// });
// CSS for the carousel
 $('#contactForm').submit(function(e) {
      e.preventDefault(); // prevent page reload
      this.reset();
    });
// This code uses jQuery to reset the contact form when submitted, preventing page reload.