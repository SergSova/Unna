var windowWidthValue= (window.innerWidth > 0) ? window.innerWidth : screen.width;

var map;

$(window).on('load',function() {

    var myLatlng = { lat: 50.465706, lng: 30.604709 };


    map = new google.maps.Map(document.getElementById('contactsMap'), {
        zoom: 14,
        center: myLatlng,
        disableDefaultUI: true
    });

    setMarkers(map, markersInfo);
    infowindow = new google.maps.InfoWindow({
        content: "loading...",
        pixelOffset: new google.maps.Size(0, 0)
    });

    var mapstyle = [{"featureType":"all","elementType":"labels","stylers":[{"color":"#ff0000"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"color":"#ff0000"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"color":"#7f7479"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"color":"#c3b8b5"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ead9e0"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#4a3f47"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#7c7376"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"color":"#d3cac7"}]},{"featureType":"poi","elementType":"all","stylers":[{"color":"#a4999c"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#c3b8b5"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#6c6169"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#d6cbc7"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"color":"#c3b8b5"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a4999c"}]}];  

    map.setOptions({
        styles: mapstyle
    });
});

var markersInfo = [];

$('.office').each(function(index) {
    var markerInfoArr = $(this).find('.marker-info').html().split('&amp;');

    var markerObj = {
        lat         : markerInfoArr[0],
        lng         : markerInfoArr[1],
        icon        : markerInfoArr[2],
        activeIcon  : markerInfoArr[2].slice(0, -4)+'-active.png',
        title       : markerInfoArr[3],
        adress       : markerInfoArr[4],
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
            title: markerInfo.title,
            adress: markerInfo.adress,
            number: markerInfo.number
        });

        if (i == 0){
            marker.setIcon(marker.activeIcon);
        }

        markersArray.push(marker);

        google.maps.event.addListener(marker, "click", function() {
            var number = this.number;
            infowindow.setContent('' +
                '<style>' +
                '.gm-style .gm-style-iw{overflow: visible;}' +
                '.gm-style .gm-style-iw > div{overflow: visible!important;}' +
                '.gm-style .gm-style-iw > div > div{overflow: visible!important;}' +
                '.location-popup:after{opacity:1;background:url("'+ this.activeIcon +'") no-repeat center center;}' +
                '</style>' +
                '<div class="location-popup-inner '+this.color+'">' +
                '<div class="location-popup">' +
                '<h5>' + this.title + '</h5>' +
                '<p><span>' + this.adress + '</span></p>' +
                '</div>' +
                '</div>');
            infowindow.open(map, this);
            $('.gm-style-iw').prev().remove();
            $('.gm-style-iw').next().remove();
            // $('.location-popup-inner').on('mouseleave', function() {
            //     infowindow.close(map, this);
            // });

            // for (var j = 0; j < markersArray.length; j++) {
            //     markersArray[j].setIcon(markersArray[j].defaultIcon);
            //     console.log(markersArray[j].icon);
            // }
            // this.setIcon(emptyIcon);

            // google.maps.event.addListener(infowindow, "mouseout", function() {
            //     infowindow.close(map, this);
            // });

            for (var j = 0; j < markersArray.length; j++) {
                markersArray[j].setIcon(markersArray[j].defaultIcon);
            }
            this.setIcon(this.activeIcon);
        });

    }
}


$('.office:first-child').addClass('active');

$(window).on('load', function() {

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