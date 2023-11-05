$(function () {

  console.log(screen.availWidth); //스크린 객채 / 가로폭
  
  $("#hero").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
  });

  $(".close_btns button").on("click", function () {
    $(".popup_bg").addClass("d-none");
  });

  $(".btnSubmit").on("click", function () {
    $("#btnSubmit").on("click");
  });

  // $('body').on("click", function(){
  //   $('form').css("display", "none")
  // });
  $(".top-select").on("click", function () {
    $(".bg-main2").addClass("on");
    $("form").stop().slideDown(600);
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
  let tabBtn = $(".community_title > h2"); //버튼 설정
  let tabCont = $(".community_contents > ul"); //콘텐츠 설정
  tabCont.hide().eq(0).show(); //콘텐츠를 숨긴다. 첫번째껀. 보인다.
  
  tabBtn.on("click", function () {
    const index = $(this).index(); //클릭한 번호를 저장
    // console.log("클릭한 번호 : "+index);

    $(this).addClass("on sec").siblings().removeClass("on sec"); //내가 클릭한 버튼에 클래스를 추가하고 나머지 클래스에선 제거
    tabCont.eq(index).show().siblings().hide(); //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
  });

  // tab 버튼은 작동을 하는데 컨텐츠 hidden이 작동이상을 일으켜 모바일 버젼을 새로 만듬

  let mtabCont = $(".m_community_contents > ul"); //콘텐츠 설정
  mtabCont.hide().eq(0).show(); //콘텐츠를 숨긴다. 첫번째껀. 보인다.

  tabBtn.on("click", function () {
    const index = $(this).index(); //클릭한 번호를 저장
    console.log("클릭한 번호 : "+index);

    $(this).addClass("on sec").siblings().removeClass("on sec"); //내가 클릭한 버튼에 클래스를 추가하고 나머지 클래스에선 제거
    mtabCont.eq(index).show().siblings().hide(); //내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
  });

  $(".community_title h2").on("mouseover", function () {
    $(this).find("h2").css("backguround", "#333333");
  });
  $(".setitem01").on("mouseenter", function () {
    $(this).find(".setitem_text").addClass("on");
  });
  $(".setitem01").on("mouseleave", function () {
    $(this).find(".setitem_text").removeClass("on");
  });
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

  let currentIndex = 0; //현재 이미지 번호 부여
  setInterval(function () {
    let nextIndex = (currentIndex + 1) % 3;
    $(".slider").eq(currentIndex).fadeOut();
    $(".slider").eq(nextIndex).fadeIn();
    currentIndex = nextIndex;

    // console.log("currentIndex :" + currentIndex);
    // console.log("nextIndex :" + nextIndex);
  }, 3000);

  let m_currentIndex = 0; //현재 이미지 번호 부여
  setInterval(function () {
    let nextIndex = (m_currentIndex + 1) % 3;
    $(".mb_slider").eq(m_currentIndex).fadeOut();
    $(".mb_slider").eq(nextIndex).fadeIn();
    m_currentIndex = nextIndex;

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
    $(".bg-main").addClass("on");
    $(this).find(" > a").css("background", "var(--third-color)");
  });
  $("#gnb > li").on("mouseout", function () {
    $(".sub").stop().slideUp(250);
    $(".bg-main").removeClass("on");
    $(this).find(" > a").css("background", "none");
  });

  $(".jubu-text button").on("click", function () {
    $(".jubu_infos").stop().slideDown(300);
    $('footer').removeClass("mt-12")
  });
  $(".jubu_info > p").on("click", function () {
    $(".jubu_infos").stop().slideUp(300);
  });


  let mcurrentIndex = 0;
  // $(".m_sliders_wrap").append($(".m_slider").first().clone(true));   //m_sliders_wrap의 마지막에 m_slider의 첫번째 div를 복제해라

  setInterval(function () {
    mcurrentIndex++;
    $(".m_sliders_wrap").animate(
      { marginLeft: -mcurrentIndex * 100 + "vw" },
      600
    );
    // console.log(mcurrentIndex);

    if (mcurrentIndex == 3) {
      setTimeout(function () {
        $(".m_sliders_wrap").animate({ marginLeft: 0 }, 0);
        mcurrentIndex = 0;
      }, 700);
    }
  }, 3000);

  // setInterval(function(){
  //   mcurrentIndex++;
  //   $(".m_sliders_wrap").css("transform", "translate("+ -mcurrentIndex * 33.33+"vw)")
  //   console.log(mcurrentIndex);

  //   if(mcurrentIndex == 3){
  //     setTimeout(function(){
  //       $(".m_sliders_wrap").css("transition", "none")
  //       mcurrentIndex = 0;
  //       $(".m_sliders_wrap").css("transition", "all", "300ms")
  //     }, 700)
  //   }
  // },3000)

  $(".icons").on("click", function () {
    $(".m_menu_bg").css("right", "0vw");
  });
  $(".fa-xmark").on("click", function () {
    $(".m_menu_bg").css("right", "-70vw");
  });

  $("#m_gnb > li").on("click", function () {
    $(this).find(".m_lnb").stop().slideToggle(300);
  });
});
