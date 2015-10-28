$(document).ready(function() {
    //////////     MENU       ////////////

    var $header = $(".b-header"),
        $menulink = $(".menu-link"),
        $headerMenu = $(".b-header__nav");
    $menulink.on("click", function() {
        $header.add($headerMenu).toggleClass("active");
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $header.addClass('b-header--scroll');
        }
        else {
            $header.removeClass('b-header--scroll');
        }
    });

});