<div class="office">
    <div class="office-inner">
        <span class="marker-info">[[+coordLat]]&[[+coordLng]]&assets/images/contact-icon/marker-office[[+idx]].png</span>
        <div>
            <h5>[[+title]]</h5>
        </div>
        <div>
            <p>[[+address]]</p>
        </div>
        <div class="worktime">
            <p>[[%sheduble? &namespace=`unna`]]:</p>
            <p>
                  <span>
                    [[%work_schedule? &namespace=`unna`]]: [[+work_schedule]]
                  </span>
                <span>
                    [[%weekend_schedule? &namespace=`unna`]]: [[+weekend_schedule]]
                  </span>
            </p>
        </div>
        <div class="contact-info">
            <p><i class="iconloc-phone"></i> <a href="tel:+38[[+phone]]"></a>[[+phone]]</p>
            <p><i class="iconloc-mail"></i> <a href="mail:[[+email]]">[[+email]]</a></p>
        </div>
        <div class="buttons">
            <a href="#" class="driving-direction">[[%shema_transfer?&namespace=`unna`]]<span>[[%shema_transfer?&namespace=`unna`]]</span><i class="iconloc-left-arrow-b"></i></a>
            <a href="#" class="get-direction">[[%make_marshrut?&namespace=`unna`]]<span>[[%make_marshrut?&namespace=`unna`]]</span><i class="iconloc-left-arrow-b"></i></a>
        </div>
    </div>
</div>
