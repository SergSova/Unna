var windowWidthValue= (window.innerWidth > 0) ? window.innerWidth : screen.width;
var map;

$(window).on('load', function() {

    var myLatlng = { lat: 50.471706, lng: 30.601709 };


    map = new google.maps.Map(document.getElementById('locationMap'), {
        zoom: 14,
        center: myLatlng
    });

    setMarkers(map, markersInfo);
    infowindow = new google.maps.InfoWindow({
        content: "loading...",
        pixelOffset: new google.maps.Size(0, 0)
    });

    var mapstyle = [{ "featureType": "all", "elementType": "labels", "stylers": [{ "color": "#ff0000" }, { "visibility": "on" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "color": "#7f7479" }] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "color": "#c3b8b5" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#ead9e0" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#4a3f47" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#7c7376" }] }, { "featureType": "landscape", "elementType": "labels.text", "stylers": [{ "color": "#d3cac7" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "color": "#a4999c" }] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [{ "color": "#c3b8b5" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "color": "#6c6169" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#d6cbc7" }] }, { "featureType": "transit", "elementType": "labels.text", "stylers": [{ "color": "#c3b8b5" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#a4999c" }] }];

    map.setOptions({
        styles: mapstyle
    });
});

var markersInfo = [];
var emptyIcon = "assets/images/marker-empty.png";

function collectMarkersInfo(objects) {
    markersInfo = [];
    var color;
    objects.each(function() {
        var markerInfoArr = $(this).html().split('&amp;');
        var isVisible = $(this).closest('selector');
        if (markerInfoArr.length > 5 && markerInfoArr[6] == 'white') {
            color = 'white-color';
        } else {
            color = 'green-color';
        }
        var iconImage = markerInfoArr[4];
        if (windowWidthValue < 1370){
            iconImage = iconImage.replace('images/location/','images/mobile-icons/');
        }
        var markerObj = {
            lat: markerInfoArr[0],
            lng: markerInfoArr[1],
            title: markerInfoArr[2],
            adress: markerInfoArr[3],
            icon: iconImage,
            group: markerInfoArr[5],
            color: color,
            visible: $(this).hasClass('visible')
        };
        markersInfo.push(markerObj);
    });
}

collectMarkersInfo($('#locationInfo span'));

var markersArray = [];

function setMarkers(map, markers) {

    for (var i = 0; i < markers.length; i++) {
        var markerInfo = markers[i];
        if (markerInfo.visible) {
            var siteLatLng = new google.maps.LatLng(+markerInfo.lat, +markerInfo.lng);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                title: markerInfo.title,
                adress: markerInfo.adress,
                group: markerInfo.group,
                icon: markerInfo.icon,
                defaultIcon: markerInfo.icon,
                color: markerInfo.color,
                visible: markerInfo.visible
            });

            markersArray.push(marker);

            google.maps.event.addListener(marker, "mouseover", function() {
                // map.panTo(this.getPosition());
                infowindow.setContent('' +
                    '<style>' +
                    '.gm-style .gm-style-iw{overflow: visible;}' +
                    '.gm-style .gm-style-iw > div{overflow: visible!important;}' +
                    '.gm-style .gm-style-iw > div > div{overflow: visible!important;}' +
                    '.location-popup:after{opacity:1;background:url("' + this.icon + '") no-repeat center center;}' +
                    '</style>' +
                    '<div class="location-popup-inner ' + this.color + '">' +
                    '<div class="location-popup">' +
                    '<h5>' + this.title + '</h5>' +
                    '<p><span>' + this.adress + '</span></p>' +
                    '</div>' +
                    '</div>');
                infowindow.open(map, this);
                $('.gm-style-iw').prev().remove();
                $('.gm-style-iw').next().remove();
                $('.location-popup-inner').on('mouseleave', function() {
                    infowindow.close(map, this);
                });

                // for (var j = 0; j < markersArray.length; j++) {
                //     markersArray[j].setIcon(markersArray[j].defaultIcon);
                //     console.log(markersArray[j].icon);
                // }
                // this.setIcon(emptyIcon);

                google.maps.event.addListener(infowindow, "mouseout", function() {
                    infowindow.close(map, this);
                });
            });


            // google.maps.event.addListener(marker, "mouseout", function() {
            //     infowindow.close(map, this);
            // });
        } else {
            if (markersArray.length > 0) {
                for (var b = 0; b < markersArray.length; b++) {
                    if (markersArray[b].group == markerInfo.group) {
                        markersArray[b].setMap(null);
                        markersArray.splice(b, 1);
                        b--;
                    }
                }
            }
        }
    }
}

// filters click

$('.location-type').click(function() {
    var group = $(this).data('group');
    if (!$(this).hasClass('active')) {
        $('#locationInfo span').each(function() {
            if ($(this).data('group') == group) {
                $(this).addClass('visible');
            }
        });
    } else {
        $('#locationInfo span').each(function() {
            if ($(this).data('group') == group) {
                $(this).removeClass('visible');
            }
        });
    }
    collectMarkersInfo($('#locationInfo span:not(.default)[data-group="' + group + '"]'));
    setMarkers(map, markersInfo);
    $(this).toggleClass('active');

    $('.location-type').each(function() {
        if ($(this).hasClass('active')) {
            hideButtonHide();
            return false;
        } else {
            hideButtonShow();
            // return false;
        }
    });
});

$('.location-hide').click(function() {
    if (!$(this).hasClass('active')) {
        hideButtonShow();
        $('.location-type.active').click();
    } else {
        hideButtonHide();
        $('.location-type:not(.active)').click();
    }
});

function hideButtonHide() {
    $('.location-hide').removeClass('active');
    $('.location-hide span').html('Скрыть все окружение');
}

function hideButtonShow() {
    $('.location-hide').addClass('active');
    $('.location-hide span').html('Показать все окружение');
}

