<footer class="footer">
    <div class="foot-left scale-js-1">
        <a href="[[++site_url]]"><img class="unna-dev" src="assets/images/unna-develop.png" alt=""></a>
    </div>

    [[+parent:in=`0`then=`
    <div class="btn-more">
        <div class="btn-more-wrap">
            <img src="assets/images/mouse.png" alt="mouse">
            <span></span>
            <span></span>
        </div>
    </div>
    `:else=`
    <div class="foot-menu">
        [[$footer-menu?&parent=`[[+parent]]`]]
    </div>
    `]]

    <div class="foot-right foot-scale">
        <!--sit on site-->
        <div class="on-site">
            <div class="on-site-count">[[!online_people]]</div>
            <div class="on-site-text">[[%people.on.site? &namespace=`unna`]]</div>
        </div>
        <!--fresh-->
        <div class="fresh">
            <div class="created">[[%site.developed? &namespace=`unna`]]</div>
            <a href="http://freshweb.agency/" target="_blank">
                <div class="fresh-logo">
                    <span>F</span><span>R</span><span>E</span><span>S</span><span>H</span></div>
            </a>
            <div class="creative">CREATIVE WEB AGENCY</div>
        </div>
    </div>

</footer>