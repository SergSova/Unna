<div class="apart [[+idx:is=`1`:then=`current`]]">
    [[+tv.action:is=``:else=`<a href="[[~[[+tv.action]]]]" class="share">
        <span>[[*context_key:is=`web`:then=`Акция`:else=`Акцiя`]]</span>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 72.05 43.92">
            <defs>
                <style>.svg-all-actions {
                        fill: none;
                        stroke: #fff;
                        stroke-miterlimit: 10;
                        stroke-width: 7px
                    }</style>
            </defs>
            <title>arrow</title>
            <path class="svg-all-actions" d="M69.68 20.68H0M46 .78l24.52 19.95L46 43.19"></path>
        </svg>
    </a>`]]
    <div>
        <div class="media">
            <img src="[[+tv.base-image]]"/>
        </div>
        <div class="info">
            <p class="title">[[+pagetitle]] [[%metr? &namespace=`unna`]]<sup>2</sup></p>
            <table class="apart_info">
                <tr class="active">
                    <td class="num">[[+tv.full-area]]</td>
                    <td>
                        <span>[[%metr? &namespace=`unna`]]<sup>2</sup></span>
                    </td>
                    <td class="desc">[[%total? &namespace=`unna`]] [[%area? &namespace=`unna`]]</td>
                </tr>
                <tr>
                    <td class="num">[[+tv.living-area]]</td>
                    <td>
                        <span>[[%metr? &namespace=`unna`]]<sup>2</sup></span>
                    </td>
                    <td class="desc">[[%living? &namespace=`unna`]] [[%area? &namespace=`unna`]]</td>
                </tr>
                [[+tv.price:isnot=``:then=`
                <tr>
                    <td class="num">[[+tv.price]]</td>
                    <td>
                        <span>[[%uah]]/[[%metr? &namespace=`unna`]]<sup>2</sup></span>
                    </td>
                    <td class="desc">[[%price? &namespace=`unna`]] 1 [[%metr? &namespace=`unna`]]<sup>2</sup></td>
                </tr>
                `]]
            </table>
            <a class="link_to_apart" href="[[~[[+id]]]]">
                <span>[[%look:ucfirst? &namespace=`unna`]] [[%apartment? &namespace=`unna`]]</span>
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="20px"
                     viewBox="0 0 72.05 43.92">
                    <defs>
                        <style>.svg-all-actions {
                                fill: none;
                                stroke: #fff;
                                stroke-miterlimit: 10;
                                stroke-width: 7px
                            }</style>
                    </defs>
                    <title>arrow</title>
                    <path class="svg-all-actions" d="M69.68 20.68H0M46 .78l24.52 19.95L46 43.19"></path>
                </svg>
            </a>
        </div>
    </div>
</div>
