<footer class="footer [[*template:is=`24`:then=`sub-foot`]] ">
    <div class="foot-left scale-js-1">
        <a class="unna-dev" href="[[++site_url]]"><img src="assets/images/unna-development.svg" alt=""></a>
    </div>

    [[+parent:is=`0`:then=`
    [[*id:ne=`[[babelId?&id=`6`]]`:and:ne=`[[babelId?&id=`12`]]`:then=`
    <!--more btn center-->

    [[*template:ne=`21`:then=`
    <div class="btn-more-wrap">
        <div class="btn-arrows scale-js-1">
            <a href="" class="btn-arrows-left">
                <span></span>
                <span></span>
            </a>
            <img src="assets/images/mouse.svg" alt="mouse">
            <a href="" class="btn-arrows-right">
                <span></span>
                <span></span>
            </a>
        </div>
    </div>
    `]]
    `]]
    `:else=`
    [[*id:ne=`[[babelId?&id=`6`]]`:and:ne=`[[babelId?&id=`12`]]`:then=`
    <div class="foot-menu">
        [[$footer-menu?&parent=`[[+parent]]`]]
    </div>
    `]]
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
            <a href="http://freshweb.agency/?utm_source=our-sites&utm_medium=unna" target="_blank">
                <div class="fresh-logo">
                    <span>F</span><span>R</span><span>E</span><span>S</span><span>H</span></div>
            </a>
            <div class="creative">CREATIVE WEB AGENCY</div>
        </div>
    </div>

</footer>