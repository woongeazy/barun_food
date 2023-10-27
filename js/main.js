$(function () {
  $("#hero").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
  });
  
  // $('body').on("click", function(){
  //   $('form').css("display", "none")
  // });
  $('.top-select').on("click", function(){
    $('.bg-main2').addClass("on");
    $('form').stop().slideDown(600);
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
    $(".jubu_infos").stop().slideUp(300);
  });
  $(".brands > ul li:nth-child(3)").on("click", function () {
    $(".brands > div:nth-last-child(1)").addClass("d-none");
    $(".brands > div:nth-last-child(2)").removeClass("d-none");
    $(".brands > div:nth-last-child(3)").addClass("d-none");
    $(".brands > div:nth-last-child(4)").addClass("d-none");
    $(".jubu_infos").stop().slideUp(300);
  });
  $(".brands > ul li:nth-child(2)").on("click", function () {
    $(".brands > div:nth-last-child(1)").addClass("d-none");
    $(".brands > div:nth-last-child(2)").addClass("d-none");
    $(".brands > div:nth-last-child(3)").removeClass("d-none");
    $(".brands > div:nth-last-child(4)").addClass("d-none");
    $(".jubu_infos").stop().slideUp(300);
  });
  $(".brands > ul li:nth-child(1)").on("click", function () {
    $(".brands > div:nth-last-child(1)").addClass("d-none");
    $(".brands > div:nth-last-child(2)").addClass("d-none");
    $(".brands > div:nth-last-child(3)").addClass("d-none");
    $(".brands > div:nth-last-child(4)").removeClass("d-none");
    $(".jubu_infos").stop().slideUp(300);
  });

  // $(".community_title > h2:nth-child(1)").on("click", function () {
  //   $(".news").removeClass("d-none");
  //   $(".event").addClass("d-none");
  //   $(".qna").addClass("d-none");
  //   $(".gamaeng").addClass("d-none");
  // });
  // $(".community_title > h2:nth-child(2)").on("click", function () {
  //   $(".news").addClass("d-none");
  //   $(".event").removeClass("d-none");
  //   $(".qna").addClass("d-none");
  //   $(".gamaeng").addClass("d-none");

  // });
  // $(".community_title > h2:nth-child(3)").on("click", function () {
  //   $(".news").addClass("d-none");
  //   $(".event").addClass("d-none");
  //   $(".qna").removeClass("d-none");
  //   $(".gamaeng").addClass("d-none");
  // });
  // $(".community_title > h2:nth-child(4)").on("click", function () {
  //   $(".news").addClass("d-none");
  //   $(".event").addClass("d-none");
  //   $(".qna").addClass("d-none");
  //   $(".gamaeng").removeClass("d-none");
  // });
  let tabBtn = $('.community_title > h2');
  let tabCont = $('.community_contents > ul');
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function(){
    const index = $(this).index();

    $(this).addClass("on sec").siblings().removeClass("on sec");
    tabCont.eq(index).show().siblings().hide()
  })


  $('.community_title h2').on("mouseover", function(){
    console.log("over");
    (this).find('h2').css("backguround", "#333333")
  })

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
    $(".sub").stop().slideDown(250);
    $('.bg-main').addClass("on");
  });
  $("#gnb > li").on("mouseout", function () {
    $(".sub").stop().slideUp(250);
    $('.bg-main').removeClass("on");
  });

  $(".jubu-text button").on("click", function () {
    $(".jubu_infos").stop().slideDown(300);
  });
  $(".jubu_info > p").on("click", function () {
    $(".jubu_infos").stop().slideUp(300);
  });
});
