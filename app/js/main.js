$(document).ready(function() {
    $("body").fadeIn();

    setEqualHeight($(".b-third__wrapper > div"));

    //////////     MENU       ////////////

    var $header = $(".b-header"),
        $menulink = $(".b-menu__link"),
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
        layoutMode: 'fitRows'
    });
    $('.b-portfolio__buttons').on( 'click', '.b-portfolio__button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    ////////////   MAP   ////////////

    var center = [50.259552, 19.021679000000006];
    mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZmFicmk0IiwiYSI6ImNpZ2ptdDU4MDAwNTl0M2x1NW0xM2hvOWcifQ.hUjwh_j0B_GqIvfY0QRBEA';
    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>';

    var map = L.map('map', {
        "scrollWheelZoom": false
    }).setView(center, 16);

    L.tileLayer(mapboxUrl, {
        attribution: mbAttr,
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZmFicmk0IiwiYSI6ImNpZ2ptdDU4MDAwNTl0M2x1NW0xM2hvOWcifQ.hUjwh_j0B_GqIvfY0QRBEA'
    }).addTo(map);

    var marker = L.marker(center).addTo(map);
    marker.bindPopup("<b>Hello!</b><br>This is Katowice Rynek");

    // adding switchable map layers
    /*var satelite   = L.tileLayer(mapboxUrl, {id: 'mapbox.satellite', attribution: mbAttr}),
        streets  = L.tileLayer(mapboxUrl, {id: 'mapbox.streets', attribution: mbAttr});

    var layers = {
        Streets: streets,
        Satellite: satelite
    };

    layers.Streets.addTo(map);
    L.control.layers(layers).addTo(map);*/
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


