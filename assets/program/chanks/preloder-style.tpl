<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		backface-visibility: hidden;
	}

	html,
	body {
		height: 100%;
		width: 100%;
		font-size: 0;
	}

	.preload-box {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.preload-item {
		display: inline-block;
		width: 25%;
		height: 50%;
		overflow: hidden;
		transition: 1s linear;
	}

	.preload-item.anim {
		opacity: .7;
	}

	.preload-inner {
		width: 100vw;
		height: 100vh;
		opacity: 1;
		background: url('[[#[[*parent]].katalog_image_bg_blur:default=`assets/images/gallery-blur.jpg`]]') no-repeat center;
		background-size: cover;
	}

	.preload-item:nth-child(2) .preload-inner {
		margin-left: -25vw;
	}

	.preload-item:nth-child(3) .preload-inner {
		margin-left: -50vw;
	}

	.preload-item:nth-child(4) .preload-inner {
		margin-left: -75vw;
	}

	.preload-item:nth-child(5) .preload-inner {
		margin-top: -50vh;
	}

	.preload-item:nth-child(6) .preload-inner {
		margin-top: -50vh;
		margin-left: -25vw;
	}

	.preload-item:nth-child(7) .preload-inner {
		margin-top: -50vh;
		margin-left: -50vw;
	}

	.preload-item:nth-child(8) .preload-inner {
		margin-top: -50vh;
		margin-left: -75vw;
	}
</style>
