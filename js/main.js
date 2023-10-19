$(function(){
  $('#hero').slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
  });

  $('.carousel').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnFocus: true,
  });

  $('.tab-title li:nth-child(1)').on("click", function(){
    $('#setitems').removeClass("d-none");
    $('#meet').addClass("d-none");
    $('#cow').addClass("d-none");
    $('#pig').addClass("d-none");
    $('#chicken').addClass("d-none");
    $('#cold').addClass("d-none");
    console.log("click");
  });
  $('.tab-title li:nth-child(2)').on("click", function(){
    $('#setitems').addClass("d-none");
    $('#meet').removeClass("d-none");
    $('#cow').addClass("d-none");
    $('#pig').addClass("d-none");
    $('#chicken').addClass("d-none");
    $('#cold').addClass("d-none");
  });
  $('.tab-title li:nth-child(3)').on("click", function(){
    $('#setitems').addClass("d-none");
    $('#meet').addClass("d-none");
    $('#cow').removeClass("d-none");
    $('#pig').addClass("d-none");
    $('#chicken').addClass("d-none");
    $('#cold').addClass("d-none");
  });
  $('.tab-title li:nth-child(4)').on("click", function(){
    $('#setitems').addClass("d-none");
    $('#meet').addClass("d-none");
    $('#cow').addClass("d-none");
    $('#pig').removeClass("d-none");
    $('#chicken').addClass("d-none");
    $('#cold').addClass("d-none");
  });
  $('.tab-title li:nth-child(5)').on("click", function(){
    $('#setitems').addClass("d-none");
    $('#meet').addClass("d-none");
    $('#cow').addClass("d-none");
    $('#pig').addClass("d-none");
    $('#chicken').removeClass("d-none");
    $('#cold').addClass("d-none");
  });
  $('.tab-title li:nth-child(6)').on("click", function(){
    $('#setitems').addClass("d-none");
    $('#meet').addClass("d-none");
    $('#cow').addClass("d-none");
    $('#pig').addClass("d-none");
    $('#chicken').addClass("d-none");
    $('#cold').removeClass("d-none");
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
    $(this).find(".sub").stop().slideDown(250);
  })
  $("#gnb > li").on("mouseout", function(){
    $(this).find(".sub").stop().slideUp(250);
  })
})