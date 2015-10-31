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

    //////////     PORTFOLIO GRID       ////////////

    var $grid = $('.b-portfolio__layout').isotope({
        itemSelector: '.b-portfolio__item',
        layoutMode: 'fitRows'
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