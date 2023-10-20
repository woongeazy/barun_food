$(function () {
  $("#hero").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
  });

  $(".carousel").slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnFocus: true,
  });

  $(".tab-title li:nth-child(1)").on("click", function () {
    $("#setitems").removeClass("d-none");
    $("#meet").addClass("d-none");
    $("#fresh").addClass("d-none");
    $("#cool").addClass("d-none");
  });
  $(".tab-title li:nth-child(2)").on("click", function () {
    $("#setitems").addClass("d-none");
    $("#meet").removeClass("d-none");
    $("#fresh").addClass("d-none");
    $("#cool").addClass("d-none");
  });
  $(".tab-title li:nth-child(3)").on("click", function () {
    $("#setitems").addClass("d-none");
    $("#meet").addClass("d-none");
    $("#fresh").removeClass("d-none");
    $("#cool").addClass("d-none");
  });
  $(".tab-title li:nth-child(4)").on("click", function () {
    $("#setitems").addClass("d-none");
    $("#meet").addClass("d-none");
    $("#fresh").addClass("d-none");
    $("#cool").removeClass("d-none");
  });

  $(".brands > ul li:nth-child(4)").on("click", function () {
    $(".brands > div:nth-last-child(1)").removeClass("d-none");
    $(".brands > div:nth-last-child(2)").addClass("d-none");
    $(".brands > div:nth-last-child(3)").addClass("d-none");
    $(".brands > div:nth-last-child(4)").addClass("d-none");
  });
  $(".brands > ul li:nth-child(3)").on("click", function () {
    $(".brands > div:nth-last-child(1)").addClass("d-none");
    $(".brands > div:nth-last-child(2)").removeClass("d-none");
    $(".brands > div:nth-last-child(3)").addClass("d-none");
    $(".brands > div:nth-last-child(4)").addClass("d-none");
  });
  $(".brands > ul li:nth-child(2)").on("click", function () {
    $(".brands > div:nth-last-child(1)").addClass("d-none");
    $(".brands > div:nth-last-child(2)").addClass("d-none");
    $(".brands > div:nth-last-child(3)").removeClass("d-none");
    $(".brands > div:nth-last-child(4)").addClass("d-none");
  });
  $(".brands > ul li:nth-child(1)").on("click", function () {
    $(".brands > div:nth-last-child(1)").addClass("d-none");
    $(".brands > div:nth-last-child(2)").addClass("d-none");
    $(".brands > div:nth-last-child(3)").addClass("d-none");
    $(".brands > div:nth-last-child(4)").removeClass("d-none");
  });

  $(".news_qna_title > h2:nth-child(1)").on("click", function () {
    $(".news").removeClass("d-none");
    $(".qna").addClass("d-none");
  });
  $(".news_qna_title > h2:nth-child(2)").on("click", function () {
    $(".qna").removeClass("d-none");
    $(".news").addClass("d-none");
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

  $("#gnb > li").on("mouseover", function () {
    $(this).find(".sub").stop().slideDown(250);
  });
  $("#gnb > li").on("mouseout", function () {
    $(this).find(".sub").stop().slideUp(250);
  });
});
