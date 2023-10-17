$(function(){
  $('#hero').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $("#hero").on("mouseover", function(e){
    $(".left_arr").css("background", "rgba(255, 255, 255, 0.5)")
    $(".right_arr").css("background", "rgba(255, 255, 255, 0.5)")
    console.log("over");
  });
  $("#hero").on("mouseout", function(e){
    console.log("asdf");
    $(".left_arr").css("background", "none")
    $(".right_arr").css("background", "none")
  })
})