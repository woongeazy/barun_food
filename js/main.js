$(function(){
  $('#hero').slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        dots: true
        }
      }
    ]
  });
  $('#setitems').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  });
  $('#review').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  });
  
  $(".arrows").on("mouseover", function(){
    $(".left_arr").css("background", "rgba(255, 255, 255, 0.5)");
    $(".right_arr").css("background", "rgba(255, 255, 255, 0.5)");
  });

  $(".arrows").on("mouseout", function(){
    $(".left_arr").css("background", "none")
    $(".right_arr").css("background", "none")
  });
})