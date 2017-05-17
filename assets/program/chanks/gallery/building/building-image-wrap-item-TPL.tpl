<div class="img-wrap">
            <div class="img-shadow">
                <img class="arc-img" src="[[+cover]]" alt="[[+title]]">
            </div>
            <p class="img-title">[[+title]]</p>
            <div class="img-line"></div>
            <div class="img-data">
                <div class="gallery-list">
                        [[!getImageList?
                        &value=`[[+images]]`
                        &tpl=`@CODE: <div class="slide">
                            <img src="[[+image]]" alt="slider">
                            <div class="slide-text">[[+date]]</div>
                            </div>`
                        ]]
                </div>
            </div>
        </div>