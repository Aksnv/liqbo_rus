/* Back-to-top button */

$(".back-to-top").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});


/* Main menu items click - page scroll */

$(".main-menu__item--home").click(function() {
  $("html, body").animate({
    scrollTop: $("#home").offset().top
  }, 1000);
  return false;
});

$(".main-menu__item--about").click(function() {
  $("html, body").animate({
    scrollTop: $("#about").offset().top
  }, 1000);
  return false;
});

$(".main-menu__item--our-team").click(function() {
  $("html, body").animate({
    scrollTop: $("#our-team").offset().top
  }, 1000);
  return false;
});

$(".main-menu__item--roadmap").click(function() {
  $("html, body").animate({
    scrollTop: $("#roadmap").offset().top
  }, 1000);
  return false;
});

$(".main-menu__item--qa").click(function() {
  $("html, body").animate({
    scrollTop: $("#qa").offset().top
  }, 1000);
  return false;
});

$(".main-menu__item--rewards").click(function() {
  $("html, body").animate({
    scrollTop: $("#rewards").offset().top
  }, 1000);
  return false;
});

$(".main-menu__item--blog").click(function() {
  $("html, body").animate({
    scrollTop: $("#blog").offset().top
  }, 1000);
  return false;
});

$(".main-menu__item--press").click(function() {
  $("html, body").animate({
    scrollTop: $("#press").offset().top
  }, 1000);
  return false;
});


/* Inline links click - page scroll */

$(".inline-link--offering").click(function() {
  $("html, body").animate({
    scrollTop: $("#offering").offset().top - 80
  }, 1000);
  return false;
});


/* Page scroll - header & main menu view */

(function () {

  var headerBottom = document.querySelector(".header-bottom");
  var personalButton = document.querySelector(".header-personal");
  var selectLanguage = document.querySelector(".select-language");

  var pageContentHomeItem = document.querySelector(".main-menu__item--home");
  var pageContentAboutItem = document.querySelector(".main-menu__item--about");
  var pageContentTeamItem = document.querySelector(".main-menu__item--our-team");
  var pageContentRoadmapItem = document.querySelector(".main-menu__item--roadmap");
  var pageContentQAItem = document.querySelector(".main-menu__item--qa");
  var pageContentRewardsItem = document.querySelector(".main-menu__item--rewards");
  var pageContentBlogItem = document.querySelector(".main-menu__item--blog");
  var pageContentPressItem = document.querySelector(".main-menu__item--press");

  var pageHeader = document.querySelector(".header");
  var pageContentHome = document.querySelector(".home");
  var pageContentAbout = document.querySelector(".about");
  var pageContentTeam = document.querySelector(".our-team");
  var pageContentRoadmap = document.querySelector(".roadmap");
  var pageContentQA = document.querySelector(".qa");
  var pageContentRewards = document.querySelector(".rewards");
  var pageContentBlog = document.querySelector(".blog");
  var pageContentPress = document.querySelector(".press");

  window.addEventListener("scroll", function(event) {

    var pageHeaderCoordinates = pageHeader.getBoundingClientRect();
    var pageContentHomeCoordinates = pageContentHome.getBoundingClientRect();
    var pageContentAboutCoordinates = pageContentAbout.getBoundingClientRect();
    var pageContentTeamCoordinates = pageContentTeam.getBoundingClientRect();
    var pageContentRoadmapCoordinates = pageContentRoadmap.getBoundingClientRect();
    var pageContentQACoordinates = pageContentQA.getBoundingClientRect();
    var pageContentRewardsCoordinates = pageContentRewards.getBoundingClientRect();
    var pageContentBlogCoordinates = pageContentBlog.getBoundingClientRect();
    var pageContentPressCoordinates = pageContentPress.getBoundingClientRect();

    if (pageHeaderCoordinates.bottom < 10) {
      headerBottom.classList.add("header-bottom--scroll");
      personalButton.classList.add("header-personal--scroll");
      selectLanguage.classList.add("select-language--scroll");
    } else {
      headerBottom.classList.remove("header-bottom--scroll");
      personalButton.classList.remove("header-personal--scroll");
      selectLanguage.classList.remove("select-language--scroll");
    }

    if ((pageContentHomeCoordinates.top < 10) 
      && (pageContentHomeCoordinates.top > -pageContentHomeCoordinates.height)) {
      pageContentHomeItem.classList.add("main-menu__item--active");
    } else {
      pageContentHomeItem.classList.remove("main-menu__item--active");
    }

    if ((pageContentAboutCoordinates.top < 10) 
      && (pageContentAboutCoordinates.top > -pageContentAboutCoordinates.height)) {
      pageContentAboutItem.classList.add("main-menu__item--active");
    } else {
      pageContentAboutItem.classList.remove("main-menu__item--active");
    }

    if ((pageContentTeamCoordinates.top < 10) 
      && (pageContentTeamCoordinates.top > -pageContentTeamCoordinates.height)) {
      pageContentTeamItem.classList.add("main-menu__item--active");
    } else {
      pageContentTeamItem.classList.remove("main-menu__item--active");
    }

    if ((pageContentRoadmapCoordinates.top < 10) 
      && (pageContentRoadmapCoordinates.top > -pageContentRoadmapCoordinates.height)) {
      pageContentRoadmapItem.classList.add("main-menu__item--active");
    } else {
      pageContentRoadmapItem.classList.remove("main-menu__item--active");
    }

    if ((pageContentQACoordinates.top < 10) 
      && (pageContentQACoordinates.top > -pageContentQACoordinates.height)) {
      pageContentQAItem.classList.add("main-menu__item--active");
    } else {
      pageContentQAItem.classList.remove("main-menu__item--active");
    }

    if ((pageContentRewardsCoordinates.top < 10) 
      && (pageContentRewardsCoordinates.top > -pageContentRewardsCoordinates.height)) {
      pageContentRewardsItem.classList.add("main-menu__item--active");
    } else {
      pageContentRewardsItem.classList.remove("main-menu__item--active");
    }

    if ((pageContentBlogCoordinates.top < 10) 
      && (pageContentBlogCoordinates.top > -pageContentBlogCoordinates.height)) {
      pageContentBlogItem.classList.add("main-menu__item--active");
    } else {
      pageContentBlogItem.classList.remove("main-menu__item--active");
    }

    if ((pageContentPressCoordinates.top < 10) 
      && (pageContentPressCoordinates.top > -pageContentPressCoordinates.height)) {
      pageContentPressItem.classList.add("main-menu__item--active");
    } else {
      pageContentPressItem.classList.remove("main-menu__item--active");
    }

  });

}());


/* Сountdown counter */

function countdownCounter() {
  var finishDate = new Date(2018, 0, 1);
  var curentDate = new Date();

  if ((curentDate - finishDate) >= 0) {
    $(".header-top__timer-days span").text(0);
    $(".header-top__timer-hours span").text(0);
    $(".header-top__timer-minutes span").text(0);
    $(".header-top__timer-seconds span").text(0);
  } else {
    var time = finishDate - curentDate;
    var days = Math.floor(time / (24 * 3600 * 1000));
    var hours = Math.floor((time / (24 * 3600 * 1000) - days) * 24);
    var minutes = Math.floor((((time / (24 * 3600 * 1000) - days) * 24) - hours) * 60);
    var seconds = Math.floor((((((time / (24 * 3600 * 1000) - days) * 24) - hours) * 60) - minutes) * 60);

    $(".header-top__timer-days span").text(days);
    $(".header-top__timer-hours span").text(hours);
    $(".header-top__timer-minutes span").text(minutes);
    $(".header-top__timer-seconds span").text(seconds);
  }
};

setInterval(countdownCounter, 1000);


/* Q&A accordeon */

$(".qa__item h2").click(function(e) {
  e.preventDefault();
  if ($(this).parent().hasClass("qa__item--open")) {
    $(this).parent().removeClass("qa__item--open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("qa__item--open");
    $(this).next().slideDown();
  }
});


/* Our blog carousel */

$(".blog-navigation__button--forward").click(function() {
  $(".blog-navigation__button--back").removeAttr("disabled");
  for (var i = 0; i < $(".blog-item").length; i++) {
    if ($($(".blog-item")[i]).hasClass("blog-item--visible")) {
      $($(".blog-item")[i]).removeClass("blog-item--visible");
      $($(".blog-item")[i + 1]).removeClass("blog-item--visible");
      $($(".blog-item")[i + 2]).addClass("blog-item--visible");
      $($(".blog-item")[i + 3]).addClass("blog-item--visible");
      if (i == 2) {
        $(".blog-navigation__button--forward").attr("disabled", "disabled");
      }
      break;
    }
  }
  for (var j = 0; j < $(".blog-pagination__item").length; j++) {
    if ($($(".blog-pagination__item")[j]).hasClass("blog-pagination__item--active")) {
      $($(".blog-pagination__item")[j]).removeClass("blog-pagination__item--active");
      $($(".blog-pagination__item")[j + 1]).addClass("blog-pagination__item--active");
      break;
    }
  }
});

$(".blog-navigation__button--back").click(function() {
  $(".blog-navigation__button--forward").removeAttr("disabled");

  for (var i = 0; i < $(".blog-item").length; i++) {
    if ($($(".blog-item")[i]).hasClass("blog-item--visible")) {
      $($(".blog-item")[i]).removeClass("blog-item--visible");
      $($(".blog-item")[i + 1]).removeClass("blog-item--visible");
      $($(".blog-item")[i - 1]).addClass("blog-item--visible");
      $($(".blog-item")[i - 2]).addClass("blog-item--visible");
      if (i == 2) {
        $(".blog-navigation__button--back").attr("disabled", "disabled");
      }
      break;
    }    
  }
  for (var j = 0; j < $(".blog-pagination__item").length; j++) {
    if ($($(".blog-pagination__item")[j]).hasClass("blog-pagination__item--active")) {
      $($(".blog-pagination__item")[j]).removeClass("blog-pagination__item--active");
      $($(".blog-pagination__item")[j - 1]).addClass("blog-pagination__item--active");
      break;
    }
  }
});


/* Press carousel */

$(".press-navigation__button--forward").click(function() {
  $(".press-navigation__button--back").removeAttr("disabled");
  for (var i = 0; i < $(".press-item").length; i++) {
    if ($($(".press-item")[i]).hasClass("press-item--visible")) {
      $($(".press-item")[i]).removeClass("press-item--visible");
      $($(".press-item")[i + 1]).removeClass("press-item--visible");
      $($(".press-item")[i + 2]).addClass("press-item--visible");
      $($(".press-item")[i + 3]).addClass("press-item--visible");
      if (i == 0) {
        $(".press-navigation__button--forward").attr("disabled", "disabled");
      }
      break;
    }
  }
  for (var j = 0; j < $(".press-pagination__item").length; j++) {
    if ($($(".press-pagination__item")[j]).hasClass("press-pagination__item--active")) {
      $($(".press-pagination__item")[j]).removeClass("press-pagination__item--active");
      $($(".press-pagination__item")[j + 1]).addClass("press-pagination__item--active");
      break;
    }
  }
});

$(".press-navigation__button--back").click(function() {
  $(".press-navigation__button--forward").removeAttr("disabled");

  for (var i = 0; i < $(".press-item").length; i++) {
    if ($($(".press-item")[i]).hasClass("press-item--visible")) {
      $($(".press-item")[i]).removeClass("press-item--visible");
      $($(".press-item")[i + 1]).removeClass("press-item--visible");
      $($(".press-item")[i - 1]).addClass("press-item--visible");
      $($(".press-item")[i - 2]).addClass("press-item--visible");
      if (i == 2) {
        $(".press-navigation__button--back").attr("disabled", "disabled");
      }
      break;
    }    
  }
  for (var j = 0; j < $(".press-pagination__item").length; j++) {
    if ($($(".press-pagination__item")[j]).hasClass("press-pagination__item--active")) {
      $($(".press-pagination__item")[j]).removeClass("press-pagination__item--active");
      $($(".press-pagination__item")[j - 1]).addClass("press-pagination__item--active");
      break;
    }
  }
});


/* Page scroll informer */

(function () {

  var scrollInformer = document.querySelector(".scroll-informer");

  window.addEventListener("scroll", function(event) {

    if ($(window).scrollTop() == 0) {
      scrollInformer.classList.remove("scroll-informer--middle");
      scrollInformer.classList.remove("scroll-informer--bottom");
      scrollInformer.classList.add("scroll-informer--top");
    } else if ($(window).scrollTop() + $(window).height() >= $(document).height() - 1) {
      scrollInformer.classList.remove("scroll-informer--top");
      scrollInformer.classList.remove("scroll-informer--middle");
      scrollInformer.classList.add("scroll-informer--bottom");
    } else {
      scrollInformer.classList.remove("scroll-informer--top");
      scrollInformer.classList.remove("scroll-informer--bottom");
      scrollInformer.classList.add("scroll-informer--middle");
    }

  });

}());


/* Page scroll social links */

(function () {

  var socilaLinks = document.querySelector(".social-links");
  var startScrollTop = 0;

  window.addEventListener("scroll", function(event) {

    var curentScrollTop = $(this).scrollTop();

    if ((curentScrollTop > startScrollTop) && (curentScrollTop > 130)) {
      socilaLinks.classList.add("social-links--scroll");
    } else if ((curentScrollTop < startScrollTop) && (curentScrollTop < 130)) {
      socilaLinks.classList.remove("social-links--scroll");
    }

    startScrollTop = curentScrollTop;

  });

}());


/* Open/close popup buttons */

$(".popup-link--purchase").click(function(e) {
  e.preventDefault();
  $(".popup--purchase").toggleClass("popup--active");
  /*$(".header-bottom--scroll").css("visibility", "hidden");*/
});

$(".popup--purchase .popup__close-button").click(function() {
  $(".popup--purchase").toggleClass("popup--active");
  /*$(".header-bottom--scroll").css("visibility", "visible");*/
});

$(".popup-link--report").click(function(e) {
  e.preventDefault();
  $(".popup--report").toggleClass("popup--active");
});

$(".popup--report .popup__close-button").click(function() {
  $(".popup--report").toggleClass("popup--active");
});

$(".footer-content__calculator-button").click(function(e) {
  e.preventDefault();
  $(".popup--calculator").toggleClass("popup--active");
});

$(".popup--calculator .popup__close-button").click(function() {
  $(".popup--calculator").toggleClass("popup--active");
});

$(".blog-article").click(function(e) {
  e.preventDefault();
  $(".popup--article").toggleClass("popup--active");
});

$(".popup--article .popup__close-button").click(function() {
  $(".popup--article").toggleClass("popup--active");
});


/* jQuery Form Styler activation */

(function($) {
$(function() {

  $('select').styler();
    
});
})(jQuery);


/* Stay tuned subscribe form */

$(".header-top__stay-tuned a").click(function(e) {
  e.preventDefault();
  $(".header-top__subscribe-form").addClass("header-top__subscribe-form--visible");
  $(".header-top__stay-tuned").addClass("header-top__stay-tuned--hidden");
  $(".header-personal").addClass("header-personal--hidden");
});

$(".subscribe-form__close-button").click(function(e) {
  e.preventDefault();
  $(".header-top__subscribe-form").removeClass("header-top__subscribe-form--visible");
  $(".header-top__stay-tuned").removeClass("header-top__stay-tuned--hidden");
  $(".header-personal").removeClass("header-personal--hidden");
});

