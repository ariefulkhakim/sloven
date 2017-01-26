(function($) {

jQuery(document).ready(function() {
  

    //this code for the croll animation
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
    

    //this code is for header
   jQuery(window).scroll(function() {
      var windowScrollPosTop = jQuery(window).scrollTop();

      if(windowScrollPosTop >= 100) {
        jQuery(".navbar .navbar-brand .fa-ils").css({ "color": "#000"});
        jQuery(".navbar .navbar-brand .fa-bars").css({ "color": "#000"});
        jQuery(".navbar .navbar-brand").css({ "margin-top": "2px", 
                                              "margin-bottom": "0px", 
                                              "color": "#000" });
        jQuery(".navbar").css({ "margin-top": "-14px", 
                                "margin-bottom": "0",
                                "background-color": "#fff",
                                "box-shadow": "3px 3px #eee" });
        jQuery(".navbar .navbar-nav").css({ "margin-top":"2px"});
        jQuery(".navbar .navbar-nav > li > a").css({ "color": "#000"});
      }
      else{
        jQuery(".navbar .navbar-brand .fa-ils").css({ "color": "#fff"});
        jQuery(".navbar .navbar-brand .fa-bars").css({ "color": "#fff"});
        jQuery(".navbar .navbar-brand").css({ "margin-top": "0px", 
                                              "border-bottom": "0",
                                              "color": "#fff" });
        jQuery(".navbar").css({ "margin-top": "0px", 
                                "margin-bottom": "0",
                                "background-color": "transparent",
                                "box-shadow": "none" });
        jQuery(".navbar .navbar-nav").css({ "padding":"15px 0px 0px 0px",
                                            "position":"relative" });
        jQuery(".navbar .navbar-nav > li > a").css({ "color": "#fff"});
        
      }
   });


$(".testimonial-content").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            theme: "tp-round-button",
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: true,
        });

$('#timeline').waypoint(function() {
      $('.timer').each(function() {
        counter = $(this).attr('data-count'),
        $(this).delay(6000).countTo({
          from: 0,
          to: counter,
          speed: 4000,// Stats Counter Speed
          refreshInterval: 50,
        });
      });
     }, { offset: '70%', triggerOnce: true });

});




}) (jQuery);


