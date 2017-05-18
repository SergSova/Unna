<div class="content">
    <div class="content-wrap">
        <h1 class="scale-element" data-font="81" data-scale="1">[[*pagetitle]]</h1>
        <div class="content-text">
            <div class="office-container scale-contacts-1" id="mapOffices">
                [[!getImageList?
                &docid=`[[*id]]`
                &tvname=`migx_contact`
                &tpl=`contact_map_item_TPL`
                &limit=`2`
                ]]
            </div>
            <!-- /office-container -->
            <div class="form-container hidden-block scale-contacts-1 small">
                [[$form_chank]]
            </div>
        </div>
    </div>
</div>
<div id="map-popup">
    <div class="popup-inner">
        <a href="#" target="_blank">[[%open_Google_map]]</a>
    </div>
</div>
<div id="direction-popup">
    <div class="popup-inner">
        <img src="assets/images/driving-direction.png" alt="Как доехать">
    </div>
</div>
<div id="contactsMap"></div>
