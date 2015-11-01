$(document).ready(function() {

    setEqualHeight($(".b-third__wrapper > div"));

    //////////     MENU       ////////////

    var $header = $(".b-header"),
        $menulink = $(".menu-link"),
        $headerMenu = $(".b-header__nav");
    $menulink.on("click", function() {
        $header.add($headerMenu).toggleClass("active");
    });

    if($(window).scrollTop() > 50) {
        $header.addClass('b-header--scroll');
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $header.addClass('b-header--scroll');
        }
        else {
            $header.removeClass('b-header--scroll');
        }
    });


    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                $header.add($headerMenu).removeClass("active");
                return false;
            }
        }
    });


    //////////     PORTFOLIO GRID       ////////////

    var $grid = $('.b-portfolio__layout').isotope({
        itemSelector: '.b-portfolio__item',
        layoutMode: 'fitRows',
        filter: '*'
    });
    $('.b-portfolio__buttons').on( 'click', '.b-portfolio__button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

});


/////    THIRD SECTION HEIGHT FIX    //////
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}