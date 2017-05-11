<footer class="footer sub-foot">

    <div class="foot-menu scale-js-2" [[*id:in=`6,12`:then=`hidden`]]>
        [[$footer-menu?&parent=`[[+parent]]`]]
    </div>


    <div class="foot-nav">
        <div class="foot-left scale-js-1">
            <a href="[[++site_url]]"><img class="unna-dev" src="assets/images/unna-develop.png" alt=""></a>
        </div>
        <div class="foot-right scale-js-1">
            <div class="on-site">
                <div class="on-site-count">[[!online_people]]</div>
                <div class="on-site-text">[[%people.on.site? &namespace=`unna`]]</div>
            </div>
            <div class="fresh">
                <div class="created">[[%site.developed? &namespace=`unna`]]</div>
                <a href="http://freshweb.agency/" target="_blank">
                    <div class="fresh-logo">
                        <span>F</span><span>R</span><span>E</span><span>S</span><span>H</span></div>
                </a>
                <div class="creative">CREATIVE WEB AGENCY</div>
            </div>
        </div>
    </div>
</footer>
