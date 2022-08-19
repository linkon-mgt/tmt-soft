$(function () {
  //back to to button animation
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    if (sticky > 50) {
      $(".back-to-top").fadeIn(300)
    } else {
      $(".back-to-top").fadeOut(300)
    }
  });
  //back to top button click start
  $(".back-to-top").click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 2000)
  })
  //back to top button  end



  $(window).scroll(function () {
    // sticky menu start
    var sticky = $(this).scrollTop()
    if (sticky > 50) {
      $(".mobile-menu").addClass("sticky-menu")
    } else {
      $(".mobile-menu").removeClass("sticky-menu")
    }
    // sticky menu end
  })
  
  // counter up start
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  // counter up end

})

// custom mobile menu start
let mobile_menu = document.getElementById("mobile-menu");
let bars = document.querySelector(".bars");
let line_one = document.querySelector(".line-one");
let line_two = document.querySelector(".line-two");
let line_three = document.querySelector(".line-three");


bars.addEventListener("click", function () {
  mobile_menu.classList.toggle("slide-menu");
  line_one.classList.toggle("close-line1");
  line_two.classList.toggle("close-line2");
  line_three.classList.toggle("close-line3");
})

// custom mobile menu end