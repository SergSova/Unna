<div class="foot-line">
            <a href="[[~[[+parent]]]]" class="circ">
                <span>[[#[[+parent]].menutitle:is=``:then=`[[#[[+parent]].pagetitle]]`:else=`[[#[[+parent]].menutitle]]`]]</span>
            </a>
            [[!Wayfinder?
            &startId=`[[+parent]]`
            &level=`1`
            &outerTpl=`menu-outerTPL`
            &rowTpl=`footer-menu-item`
            ]]
        </div>