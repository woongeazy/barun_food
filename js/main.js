$(function(){
  $('#hero').slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
 
  //화살표 애니메이션
  // $(".arrows").on("mouseover", function(){
  //   $(".left_arr").css("background", "rgba(255, 255, 255, 0.5)");
  //   $(".right_arr").css("background", "rgba(255, 255, 255, 0.5)");
  // });

  // $(".arrows").on("mouseout", function(){
  //   $(".left_arr").css("background", "none")
  //   $(".right_arr").css("background", "none")
  // });

  $("#gnb > li").on("mouseover", function(){
    $(this).find(".sub").stop().slideDown();
  })
  $("#gnb > li").on("mouseout", function(){
    $(this).find(".sub").stop().slideUp();
  })
})