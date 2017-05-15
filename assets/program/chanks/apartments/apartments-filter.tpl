<div class="filter_block filter aparts_filter">
	<div class="body">
		<ul>
			<li>
				<label class="filter_row">
					<input type="radio" name="rooms" value="1"/>
					<div>
						<span class="num">1</span>
						<span>[[%room? &namespace=`unna`]]</span>
					</div>
				</label>
			</li>
			<li>
				<label class="filter_row">
					<input type="radio" name="rooms" value="2"/>
					<div>
						<span class="num">2</span>
						<span>[[%room? &namespace=`unna`]]</span>
					</div>
				</label>
			</li>
			<li>
				<label class="filter_row">
					<input type="radio" name="rooms" value="3"/>
					<div>
						<span class="num">3</span>
						<span>[[%room? &namespace=`unna`]]</span>
					</div>
				</label>
			</li>
			<li>
				<label class="filter_row">
					<input type="radio" name="levels" value="2"/>
					<div>
						<span class="num">2x</span>
						<span>[[%levels? &namespace=`unna`]]</span>
					</div>
				</label>
			</li>
		</ul>
	</div>
</div>
<div class="filter_block filter">
	<div class="title">
        [[%sortby? &namespace=`unna`]]:
	</div>
	<div class="body ">
		<ul>
			<li>
				<div class="range-slider sizes disabled">
					<div class="ui-slider-range-left"></div>
					<div class="ui-slider-range"></div>
					<div class="ui-slider-range-right"></div>
					<div class="left-limit-value" data-value="[[+area-min]]"></div>
					<div class="right-limit-value" data-value="[[+area-max]]"></div>
					<input type="hidden" name="full-area-from">
					<input type="hidden" name="full-area-to">
					<a href="#" class="ui-slider-handle left-handle origin"
					   data-value="[[+area-min]]"></a>
					<a href="#" class="ui-slider-handle right-handle origin"
					   data-value="[[+area-max]]"></a>
				</div>
				<div class="filter-title">
					[[%area? &namespace=`unna`]], [[%metr? &namespace=`unna`]]<sup>2</sup>
				</div>
			</li>
			<li>
				<div class="range-slider prices disabled">
					<div class="ui-slider-range-left"></div>
					<div class="ui-slider-range"></div>
					<div class="ui-slider-range-right"></div>
					<div class="left-limit-value" data-value="[[+price-min]]"></div>
					<div class="right-limit-value" data-value="[[+price-max]]"></div>
					<input type="hidden" name="price-from">
					<input type="hidden" name="price-to">
					<a href="#" class="ui-slider-handle left-handle"
					   data-value="[[+price-min]]"></a>
					<a href="#" class="ui-slider-handle right-handle"
					   data-value="[[+price-max]]"></a>
				</div>
				<div class="filter-title">
					[[%cena? &namespace=`unna`]], [[%thousand? &namespace=`unna`]] [[%uah]]
				</div>
			</li>
		</ul>
	</div>
</div>