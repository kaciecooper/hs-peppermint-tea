$(function () {
    // Your Code from here on down. Don't delete that line above!

    $(function () { // wait for document ready
        // init
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
                duration: "200%" // this works just fine with duration 0 as well
                // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
                // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
            }
        });

        // get all slides
        var slides = document.querySelectorAll("section.panel");

        // create scene for every slide
        for (var i = 0; i < slides.length; i++) {
            new ScrollMagic.Scene({
                    triggerElement: slides[i]
                })
                .setPin(slides[i], {
                    pushFollowers: false
                })
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        }
    });

    var window_height;
    var header_height;
    var doc_height;
    var posTop_s1;
    var posBottom_s1;
    var posTop_s2;
    var posBottom_s2;
    $(document).ready(function () {
        getValues();
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();


        if (scroll < posTop_s1) {
            $('.sticky').removeClass('fixy');
            $('.sticky').removeClass('bottom');
        }

        if (scroll > posTop_s1) {
            $('.sticky').removeClass('fixy');
            $('.sticky').removeClass('bottom');
            $('#s1 .sticky').addClass('fixy');
        }
        if (scroll > posBottom_s1) {
            $('.sticky').removeClass('fixy');
            $('.sticky').removeClass('bottom');
            $('#s1 .sticky').addClass('bottom');
            $('.bottom').css({
                'max-height': window_height + 'px'
            });
        }


    });

    function getValues() {
        window_height = $(window).height();
        doc_height = $(document).height();
        header_height = $('header').height();

        //get heights first
        var height_s1 = $('#s1').height();


        //get top position second
        posTop_s1 = header_height;
        posTop_s2 = posTop_s1 + height_s1;

    }


    var rtime;
    var timeout = false;
    var delta = 200;
    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            getValues();
        }
    }


    document.querySelector('scroll-container').scrollLeft = 100 % ;


    var cwidth = document.getElementById("width");
    var nwidth = document.getElementById("nwidth");
    var cheight = document.getElementById("height");
    var nheight = document.getElementById("nheight");
    var cborderradius = document.getElementById("borderradius");
    var nborderradius = document.getElementById("nborderradius");
    var copacity = document.getElementById("opacity");
    var nopacity = document.getElementById("nopacity");
    var crotate = document.getElementById("rotate");
    var nrotate = document.getElementById("nrotate");
    var object = document.getElementById("target");
    var width = 0;
    var height = 0;
    var borderradius = 0;
    var opacity = 1;
    var rotate = 0;

    cwidth.addEventListener("input", function () {
        nwidth.innerHTML = this.value;
        width = this.value;
        object.style.width = width + "px";
    });

    cheight.addEventListener("input", function () {
        nheight.innerHTML = this.value;
        height = this.value;
        object.style.height = height + "px";
    });

    cborderradius.addEventListener("input", function () {
        nborderradius.innerHTML = this.value;
        borderradius = this.value;
        object.style.borderRadius = borderradius + "px";
    });

    copacity.addEventListener("input", function () {
        nopacity.innerHTML = this.value / parseFloat(500);
        console.log(opacity);
        opacity = this.value / parseFloat(500);
        object.style.opacity = opacity;
    });

    crotate.addEventListener("input", function () {
        nrotate.innerHTML = this.value;
        rotate = this.value;
        object.style.transform = "rotate(" + rotate + "deg)";
    });


    // End of Your Code . Don't delete that line below!!
});