{if  $idx==4}
    </div>
</div>
<div class="img-sector">
    <div class="sector-wrap">
{/if}
{if ($idx>4&&($idx-4)%3==0) }
    </div>
</div>
<div class="img-sector">
    <div class="sector-wrap">
{/if}
<div class="img-wrap" data-img="[[+idx]]">
            <div class="img-shadow">
                <img class="arc-img" src="[[+image]]" alt="slider">
            </div>
            <p class="img-title">[[+title]]</p>
            <div class="img-line"></div>
            <div class="img-data">
                <div class="slide">
                    <img src="[[+image]]" alt="slider">
                    <span class="slide-text">[[+text]]</span>
                </div>
            </div>
        </div>
