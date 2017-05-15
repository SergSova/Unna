<div class="apart">
    <div>
        <div class="compass"></div>
        <div class="media">
            [[!getImageList?
            &tvname=`migx-apartment-mobile-galery`
            &docid=`[[+id]]`
            &tpl=`@CODE:
            <div>
                <img src="[[+image]]"/>
            </div>
            `
            ]]
        </div>
        [[+tv.action:!empty=`<a href="[[~[[+tv.action]]]]" class="share">
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
        <div class="info">
            <p class="title">[[+pagetitle]] [[%metr? &namespace=`unna`]]<sup>2</sup></p>
            <table class="apart_info">
                <tr class="active">
                    <td class="num">[[+tv.full-area]]</td>
                    <td><span>[[%metr? &namespace=`unna`]]<sup>2</sup></td>
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
            <div class="more_info">
                <div class="rooms">
                    <ol>
                        [[!getImageList?
                        &tvname=`migx_detail`
                        &docid=`[[+id]]`
                        &tpl=`apartment-detail-item-TPL`
                        ]]
                    </ol>
                </div>
                <a class="pdf_file" href="[[+planirovka]]" target="_blank">
                    [[%download:ucfirst? &namespace=`unna`]] [[%planirovku? &namespace=`unna`]]
                </a>
                <a class="show_more" href="#">[[%submit?&namespace=`unna`]]</a>
            </div>
            <p class="more_button"><span>[[%more?&namespace=`unna`]]</span><span class="arrow"></span></p>
        </div>
    </div>
</div>
