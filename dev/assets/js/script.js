$( document ).ready(function() {
    
    $("#player").vimeo_player();

    var s = skrollr.init({
        smoothScrolling: true
    });
    if (s.isMobile()) {
        s.destroy();
    }
});


