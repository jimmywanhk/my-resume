/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission().then((permissionState) => {
      if (permissionState === "granted" || permissionState === "denied") {
        $(".requestOrientation").css("display", "none");
      }
    });
  }

  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(function () {
    $("h1.responsive-headline").fitText(1, {
      minFontSize: "40px",
      maxFontSize: "90px",
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $(".requestOrientation").on("click", function (e) {
    e.preventDefault();

    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
    }
    $(".requestOrientation").css("display", "none");
  });

  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#basic-navbar-nav a");

  sections.waypoint({
    handler: function (event, direction) {
      var active_section;
      active_section = $(this);

      if (direction === "up") {
        active_section = active_section.prev();

        if (typeof active_section.attr("id") === "undefined") {
          active_section = active_section.prevAll("section, header").first();
        }
      }

      var active_link = $(
        '#basic-navbar-nav > div > a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.removeClass("current");
      active_link.addClass("current");
    },
    offset: "35%",
  });

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $("header").css({ height: $(window).height() });
  $(window).on("resize", function () {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on("scroll", function () {
    var h = $("header").height();
    var y = $(window).scrollTop();
    var nav = $("#nav-wrap");

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut("fast");
    } else {
      if (y < h * 0.2) {
        nav.removeClass("opaque").fadeIn("fast");
      } else {
        nav.addClass("opaque").fadeIn("fast");
      }
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $(".item-wrap a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: "mfp-fade",
  });

  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*	Flexslider
/*----------------------------------------------------*/
  $(".flexslider").flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false,
  });

  /*----------------------------------------------------*/
  /*	contact form
------------------------------------------------------*/

  $("form#contactForm button.submit").on("click", function (event) {
    event.preventDefault();
    $("#image-loader").fadeIn();

    var contactName = $("#contactForm #contactName").val();
    var contactEmail = "wankaho@hotmail.com";
    var contactSubject = $("#contactForm #contactSubject").val();
    var contactMessage =
      $("#contactForm #contactMessage").val() +
      "%0D%0A%0D%0AWith Regards, %0D%0A" +
      contactName;

    window.location =
      "mailto:" +
      contactEmail +
      "?subject=" +
      contactSubject +
      "&body=" +
      contactMessage;

    // var data =
    //   "contactName=" +
    //   contactName +
    //   "&contactEmail=" +
    //   contactEmail +
    //   "&contactSubject=" +
    //   contactSubject +
    //   "&contactMessage=" +
    //   contactMessage;

    // $.ajax({
    //   type: "POST",
    //   url: "inc/sendEmail.php",
    //   data: data,
    //   success: function (msg) {
    //     // Message was sent
    //     if (msg == "OK") {
    //       $("#image-loader").fadeOut();
    //       $("#message-warning").hide();
    //       $("#contactForm").fadeOut();
    //       $("#message-success").fadeIn();
    //     }
    //     // There was an error
    //     else {
    //       $("#image-loader").fadeOut();
    //       $("#message-warning").html(msg);
    //       $("#message-warning").fadeIn();
    //     }
    //   },
    // });
    // return false;
  });
});
