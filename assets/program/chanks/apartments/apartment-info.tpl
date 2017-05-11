[[*action:is=``:else=`<a href="[[~[[*action]]]]" class="share"><span>[[%unna.action? &namspace=`unna`]]</span>
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
<div class="apart_slider">
	[[!getImageList?
	&tvname=`migx-apartment-galery`
	&docid=`[[*id]]`
	&tpl=`apart-slider-item-TPL`
	]]
</div>
<div class="apart_slider_nav">
	<div class="prev_image">
		<div></div>
	</div>
	<div class="next_image">
		<div></div>
	</div>
</div>
<table class="apart_info">
	<tr>
		<td class="active">
			<p class="num">[[*full-area]] <span>[[%metr? &namespace=`unna`]]<sup>2</sup></span></p>
			<p class="desc">[[%total? &namespace=`unna`]] [[%area? &namespace=`unna`]]</p>
		</td>
		<td>
			<p class="num">[[*living-area]] <span>[[%metr? &namespace=`unna`]]<sup>2</sup></span></p>
			<p class="desc">[[%living? &namespace=`unna`]] [[%area? &namespace=`unna`]]</p>
		</td>
        [[*price:isnot=``:then=`
		<td>
			<p class="num">[[*price]] <span>[[%uah]]/[[%metr? &namespace=`unna`]]<sup>2</sup></span></p>
			<p class="desc">[[%price? &namespace=`unna`]] 1 [[%metr? &namespace=`unna`]]<sup>2</sup></p>
		</td>`]]
	</tr>
</table>