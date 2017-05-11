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
                <form action="/send_mail.php" method="post">
                    <input type="hidden" name="action" value="send_mail">
                    <input type="hidden" name="to" value="sergeysova@ukr.net">
                    <input type="hidden" name="subject" value="Узнать больше">
                    <input type="text" name="name" placeholder="[[%name]]">
                    <input type="text" name="phone" placeholder="[[%phone]]">
                    <input type="email" name="mail" placeholder="e-mail">
                    <!-- <input type="date" name="name" placeholder="дата"> -->
                    <!-- <input type="time" name="name" placeholder="время"> -->
                    <button>[[%learn]] [[%more]]<i class="icon-angle-right"></i></button>
                </form>
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
