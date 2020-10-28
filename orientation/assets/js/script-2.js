window.onload = function () {
    lax.setup(); // init
    const updateLax = () => {
      lax.update(window.scrollY);
      window.requestAnimationFrame(updateLax);
    };
    window.requestAnimationFrame(updateLax);
  };

  $(document).ready(function () {
    $(".nav-link").on("click", function () {
      var page = $(this).attr("href");
      var speed = 750;
      var offset = 120;
      $("html, body").animate(
        {
          scrollTop: $(page).offset().top - offset,
        },
        speed
      );
      $(".navbar-collapse").collapse("hide");
      return false;
    });
    $("#LearnMoreLink").on("click", function () {
      var page = $(this).attr("href");
      var speed = 750;
      var offset = 120;
      $("html, body").animate(
        {
          scrollTop: $(page).offset().top - offset,
        },
        speed
      );
      $(".navbar-collapse").collapse("hide");
      return false;
    });
    $(window).scroll(function () {
      // Says this function is preformed continuisly while scrolling.
      let Scroll = $(window).scrollTop() + 1;
      let AboutSectionOffset = $("#about").offset().top - 400; // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
      let whySectionOffset = $("#whySection").offset().top - 400;
      let scheduleSectionOffset = $("#schedule").offset().top - 400;
      let sponsorsSectionOffset = $("#sponsors").offset().top - 400;
      let faqSectionOffset = $("#faqq").offset().top - 400;
      let contactSectionOffset = $("#contact").offset().top - 700;
      if (Scroll < AboutSectionOffset) {
        $(".nav-active").removeClass("nav-active");
        $("#homeLink").addClass("nav-active");
      } else if (
        Scroll > AboutSectionOffset &&
        Scroll < scheduleSectionOffset
      ) {
        $(".nav-active").removeClass("nav-active");
        $("#aboutLink").addClass("nav-active");
      } else if (
        Scroll > scheduleSectionOffset &&
        Scroll < sponsorsSectionOffset
      ) {
        $(".nav-active").removeClass("nav-active");
        $("#scheduleLink").addClass("nav-active");
      } else if (
        Scroll > sponsorsSectionOffset &&
        Scroll < faqSectionOffset
      ) {
        $(".nav-active").removeClass("nav-active");
        $("#sponsorsLink").addClass("nav-active");
      } else if (
        Scroll > faqSectionOffset &&
        Scroll < contactSectionOffset
      ) {
        $(".nav-active").removeClass("nav-active");
        $("#faqLink").addClass("nav-active");
      } else {
        $(".nav-active").removeClass("nav-active");
        $("#contactLink").addClass("nav-active");
      }
    });
  });