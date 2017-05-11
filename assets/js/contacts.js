var windowWidthValue= (window.innerWidth > 0) ? window.innerWidth : screen.width;

var map;

$(window).on('load',function() {

    var myLatlng = { lat: 50.471706, lng: 30.601709 };
    var mapstyle = [{"featureType":"all","elementType":"labels","stylers":[{"color":"#ff0000"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"color":"#ff0000"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"color":"#7f7479"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"color":"#c3b8b5"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ead9e0"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#4a3f47"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#7c7376"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"color":"#d3cac7"}]},{"featureType":"poi","elementType":"all","stylers":[{"color":"#a4999c"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#c3b8b5"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#6c6169"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#d6cbc7"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"color":"#c3b8b5"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a4999c"}]}];  


    map = new google.maps.Map(document.getElementById('contactsMap'), {
        zoom: 14,
        center: myLatlng,
        disableDefaultUI: true
    });

    map.setOptions({
        styles: mapstyle
    });
    setMarkers(map, markersInfo);


});

var markersInfo = [];

$('#mapOffices .office').each(function(index) {
    var markerInfoArr = $(this).find('.marker-info').html().split('&amp;');

    var markerObj = {
        lat         : markerInfoArr[0],
        lng         : markerInfoArr[1],
        icon        : markerInfoArr[2],
        activeIcon  : markerInfoArr[2].slice(0, -4)+'-active.png',
        number      : index
    };
    markersInfo.push(markerObj);
});

// mapOffices


var markersArray = [];

function setMarkers(map, markers) {

    for (var i = 0; i < markers.length; i++) {
        var markerInfo = markers[i];

        var siteLatLng = new google.maps.LatLng(+markerInfo.lat, +markerInfo.lng);
        var marker = new google.maps.Marker({
            position: siteLatLng,
            map: map,
            icon: markerInfo.icon,
            defaultIcon: markerInfo.icon,
            activeIcon: markerInfo.activeIcon,
            number: markerInfo.number
        });

        if (i == 0){
            marker.setIcon(marker.activeIcon);
        }

        markersArray.push(marker);

        google.maps.event.addListener(marker, "click", function() {
            var number = this.number;
            $('#mapOffices .office').removeClass('active').fadeOut(300, function() {
                setTimeout(function() {

                $('#mapOffices .office').eq(number).fadeIn(300).addClass('active');
                }, 300);
            });

            for (var j = 0; j < markersArray.length; j++) {
                markersArray[j].setIcon(markersArray[j].defaultIcon);
            }
            this.setIcon(this.activeIcon);
        });

    }
}
var w = $(window).width();
var scaleCorrection;
if (w < 1920){
    scaleCorrection = w/1920;
} else {
    scaleCorrection = 1;
}

$('.scale-contacts-1').css('transform', 'translate(0px,0px) scale('+scaleCorrection+')');
$('.office-container .office:first-child').addClass('active');
$(window).on('load', function() {
    // container hover
    var canHover = true;
    setTimeout(function() {
        $('.form-container').css('transform', contactsHoverVelue($('.form-container')));
    }, 300);
    setTimeout(function() {
        $('.form-container').removeClass('hidden-block');
    }, 1000);


    $(window).resize(function() {
        w = $(window).width();
        if (w < 1920){
            scaleCorrection = w/1920;
        } else {
            scaleCorrection = 1;
        }
        setTimeout(function() {
            $('.scale-contacts-1').css('transform', 'translate(0px,0px) scale('+scaleCorrection+')');
            // });
            $('.small').addClass('hidden-block');
            setTimeout(function() {
                $('.small').css('transform', contactsHoverVelue($('.small')));
            }, 200);
            setTimeout(function() {
                $('.small').removeClass('hidden-block');
            }, 400);
            
        }, 600);

    });



// function contactsContentScale() {
//     $('.scale-contacts-1').each(function() {
//         if($(this).hasClass('small'))
//     });
// }

function contactsHoverVelue(obj) {

    var elementTop = obj.offset().top;
    var elementLeft = obj.offset().left;

    var elementScale = scaleCorrection*0.7;

    var finishLeft = $('.right-side').offset().left + $('.right-side').outerWidth()-obj.outerWidth()*elementScale/scaleCorrection;
    var finishTop = $('.right-top').offset().top + $('.right-top').outerHeight() + 40*scaleCorrection;

    var transformX = (finishLeft-elementLeft);
    var transformY = finishTop-elementTop;

    var transformValue = 'translate('+transformX+'px, '+transformY+'px) scale('+elementScale+')';

    return transformValue;

}


$('.office-container .office').on('mouseenter',function() {
    if (canHover && $('.office-container').hasClass('small')){
        canHover = false;
        $('.office-container').removeClass('small');
        $('.form-container').addClass('small');
        $(this).closest('.office-container').css('transform', 'translate(0px,0px) scale('+scaleCorrection+')');
        $('.form-container').css('transform', contactsHoverVelue($('.form-container')));
        setTimeout(function() {
            canHover = true;
        }, 1000);
    }
});
$('.form-container').on('mouseenter',function() {
    if (canHover && $('.form-container').hasClass('small')){
        $(this).removeClass('small');
        $('.office-container').addClass('small');
        $(this).css('transform', 'translate(0px,0px) scale('+scaleCorrection+')');
        $('.office-container').css('transform', contactsHoverVelue($('.office-container .office.active')));
        canHover = false;
        setTimeout(function() {
            canHover = true;
        }, 1000);
    }
});


$('.get-direction').click(function(event) {
    event.preventDefault(event);
    var that = $(this);
    var somth;

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(successCallback,error);
        function successCallback(position) {
                var markerInfo = that.closest('.office').find('.marker-info').html().split('&amp;');
                var mapUrl = 'https://www.google.com.ua/maps/dir/'+position.coords.latitude+','+position.coords.longitude+'/'+markerInfo[0]+','+markerInfo[1];
                $('#map-popup').fadeIn('400').find('a').attr('href', mapUrl);
                $('#map-popup a').click(function() {
                    $('#map-popup').fadeOut('400');
                });
        }
        function error(err) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        };

    } else {
        alert('Ваше устройство не поддерживает геолокацию');
    }
});

$('.driving-direction').click(function(event) {
    event.preventDefault(event);
    $('#direction-popup').fadeIn('400');
});

$('#direction-popup').click(function() {
    $(this).fadeOut('400');
});

});