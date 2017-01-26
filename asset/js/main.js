
$(function() {
        $('.chart').easyPieChart({
            //your configuration goes here
            size:160,
            animate: 2000,
            lineCap:'butt',
            trackColor: 'rgba(0, 0, 0, 0.42)',
            barColor: '#f1c40f',
            lineWidth: 5
        });
    });


    /* ==============================================
    Isotope
    =============================================== */

        // FIlter
        if( $("#filter").length>0 ) {
            var container = $('#filter');
            container.isotope({
                itemSelector: '.gallery-item',
                transitionDuration: '0.8s'
            });
            $(".filter").click(function(){
                $(".filter.active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                container.isotope({ 
                    filter: selector
                });
                return false;
            });

            $(window).resize(function(){
                setTimeout(function(){
                    container.isotope();
                },1000);
            }).trigger('resize');
        }

            if ( $('#type-masory').length ) {

            var $container = $('#type-masory');

            $container.imagesLoaded( function(){
              $container.fadeIn(1000).isotope({
                itemSelector : '.masonry-item'
              });
            });
        }


 $("html").niceScroll({
      cursorcolor:"#11abb0", // Set cursor color
      cursorwidth: "8", // Sety cursor width
      cursorborder: "" // Set cursor border color, default left none
    });


$('.timer').countTo();

        $('.couner-time').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -200
        }); 


//Google Map
  // var latitude = $('#google-map').data('latitude')
  // var longitude = $('#google-map').data('longitude')
  // function initialize_map() {
  //   var myLatlng = new google.maps.LatLng(latitude,longitude);
  //   var mapOptions = {
  //     zoom: 14,
  //     scrollwheel: false,
  //     disableDefaultUI: true,
  //     center: myLatlng
  //   };
  //   var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
  //   var contentString = '';
  //   var infowindow = new google.maps.InfoWindow({
  //     content: '<div class="map-content"><ul class="address">' + $('.address').html() + '</ul></div>'
  //   });
  //   var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map
  //   });
  //   google.maps.event.addListener(marker, 'click', function() {
  //     infowindow.open(map,marker);
  //   });
  // }
  //   initialize_map();
  //   $('#map').on('hidden.bs.collapse', function () {
  //     initialize_map();
  //   })
  //   $('#map').on('shown.bs.collapse', function () {
  //     initialize_map(); 
  //   })
    
  // google.maps.event.addDomListener(window, 'resize', function() {
     
  //   });
    
