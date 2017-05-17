<aside class="left-side">
    [[*id:ne=`[[++site_start]]`:then=`
    <a href="[[++site_url]]" class="arrow-to-main">
        <span>На главную</span>
        <i class="icon-left-arrow-g"></i>
    </a>
    `]]
    <div class="sandwich-wrap">
        <a class="menu-sandwich" href="">
            <div class="sandwich-items">
                <div class="sandwich-item"></div>
                <div class="sandwich-item"></div>
                <div class="sandwich-item"></div>
            </div>
        </a>
    </div>
    <div class="header-logo">
        <a href="[[++site_url]]"><img src="assets/images/unna-logo.svg" alt="logo"></a>
    </div>
    <div class="panel-2">
        <a href="[[~[[babelId?&id=`2`]]]]" class="menu-apartment">
            <div class="menu-apart-white">
                <div class="menu-apart-items">
                    <div class="menu-apart-item"><span data-left="-11" data-right="5" data-speed="1"></span></div>
                    <div class="menu-apart-item"><span data-left="-6" data-right="9" data-speed="0.6"></span></div>
                    <div class="menu-apart-item"><span data-left="-11" data-right="5" data-speed="0.8"></span></div>
                </div>
            </div>
        </a>
        <div class="panel-text">[[%select? &namespace=`unna`]]<br>[[%apartment? &namespace=`unna`]]</div>
    </div>
    [[*id:in=`[[babelId?&id=`27`]]`:then=`
    <div class="panel-3">
        <div class="cam-wrap">
            <a href="[[~[[babelId?&id=`23`]]]]" class="live-cam ">
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="27px" viewBox="0 0 22.67 23.24">
                    <defs>
                        <style>.webcam-1 {
                                fill: none;
                                stroke: #fff;
                                stroke-miterlimit: 10;
                            }</style>
                    </defs>
                    <g stroke="#fff" fill="none">
                        <path d="M15.6,18.87c-.09.23-1.08.44-1.37.64-2.41.21-2.83.58-7.08-.59-3.91.3-6.65,1-6.65,1.83,0,1.1,4.85,2,10.83,2s10.83-.89,10.83-2C22.17,19.87,19.88,19.13,15.6,18.87Z"/>
                        <g class="web-cam-cent">
                            <ellipse cx="11.24" cy="10.12" rx="10.54" ry="9.62"/>
                            <ellipse cx="11.24" cy="10.12" rx="5.55" ry="5.06"/>
                            <ellipse cx="11.24" cy="10.22" rx="3.9" ry="3.56"/>
                        </g>
                    </g>
                </svg>
            </a>
        </div>
        <div class="panel-text">[[%web.link ? &namespace=`unna`]]</div>
    </div>
    `]]
    <div class="big-menu">
        <div class="bm-langs">
            [[!BabelLinks? &tpl=`tpl.babel`&showCurrent=`1`]]
        </div>
        [[Wayfinder?
        &startId=`0`
        &excludeDocs=`[[babelId?&id=`27`]]`
        &level=`2`
        &innerClass=`menu-subitems`
        &outerClass=`menu-bg`
        &innerRowTpl=`big-innerRowTpl`
        &innerTpl=`big-m.menu-innerTPL`
        &outerTpl=`big-m.menu-outerTPL`
        &rowTpl=`big-m.menu-itemTPL`
        ]]
        <div class="bm-bot">
            <p><a href="[[++site_url]]"><img src="assets/images/unna-logo.svg" alt="logo"></a></p>
            <p><a href="tel:+38[[++kontakt-phone]]" class="header-tel bm-tel ">+38[[++kontakt-phone]]</a></p>
            <p>
                <a class="header-address " href="">[[++kontakt-address]]</a>
                <a class="header-mail " href="mailto:[[++kontakt-email]]"
                   title="[[++kontakt-email]]">[[++kontakt-email]]</a>
            </p>
        </div>
    </div>
</aside>
