$(function () {
  $("#hero").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
  });
  
  $('.close_btns button').on("click", function(){
    $('.popup_bg').addClass("d-none")
  })
  
  $('.btnSubmit').on("click", function(){
    $('#btnSubmit').on("click")
  })

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
  let tabBtn = $('.community_title > h2');      //버튼 설정
  let tabCont = $('.community_contents > ul');  //콘텐츠 설정
  tabCont.hide().eq(0).show();                  //첫번째 콘텐츠만 보이게 설정

  tabBtn.on("click", function(){
    const index = $(this).index();              //클릭한 번호를 저장

    $(this).addClass("on sec").siblings().removeClass("on sec");  //내가 클릭한 버튼에 클래스를 추가하고 나머지 클래스에선 제거
    tabCont.eq(index).show().siblings().hide()                    //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
  })

  $('.community_title h2').on("mouseover", function(){
    $(this).find('h2').css("backguround", "#333333")
  })

  $('.setitem01').on("mouseenter", function() {
    $(this).find('.setitem_text').addClass('on');
  })
  $('.setitem01').on("mouseleave", function() {
    $(this).find('.setitem_text').removeClass('on');
  })
  // $('.setitem01').on("mouseout", function() {
  //   $(this).find('.setitem_text').removeClass('on');
  // })

  // let hoverBtn = $('#setitems .setitem01')
  // hoverBtn.on("mouseover", function() {
  //   $(this).find('.setitem_text').addClass('on');
  // })
  // hoverBtn.on("mouseout", function(){
  //   $(this).find('.setitem_text').removeClass('on')
  // })


  let currentIndex = 0 ; //현재 이미지 번호 부여
  setInterval(function(){
    let nextIndex = (currentIndex + 1) % 3;
    $('.slider').eq(currentIndex).fadeOut();
    $('.slider').eq(nextIndex).fadeIn();
    currentIndex = nextIndex;

    // console.log("currentIndex :" + currentIndex);
    // console.log("nextIndex :" + nextIndex);

  }, 3000);


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
