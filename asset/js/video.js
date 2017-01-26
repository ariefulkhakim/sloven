$(document).ready(function () {

    "use strict";

    // Magnific Popup
    var videoBtn = $(".video-popup-btn");

    videoBtn.magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 500,
        gallery: {
            enabled: true
        }
    });

    

});