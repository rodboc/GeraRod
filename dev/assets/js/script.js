$( document ).ready(function() {
    options = {
        autoplay: true,
        controls: ['play-large']
    };
    plyr.setup(options);

    var s = skrollr.init({
        smoothScrolling: true
    });
    if (s.isMobile()) {
        s.destroy();
    }
});


