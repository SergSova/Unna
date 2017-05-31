<div class="preload-box">
	<div class="preload-item">
		<div class="preload-inner"></div>
	</div>
	<div class="preload-item">
		<div class="preload-inner"></div>
	</div>
	<div class="preload-item">
		<div class="preload-inner"></div>
	</div>
	<div class="preload-item">
		<div class="preload-inner"></div>
	</div>
	<div class="preload-item">
		<div class="preload-inner"></div>
	</div>
	<div class="preload-item">
		<div class="preload-inner"></div>
	</div>
	<div class="preload-item">
		<div class="preload-inner"></div>
	</div>
	<div class="preload-item">
		<div class="preload-inner"></div>
	</div>
</div>
<script>
    var item = document.getElementsByClassName('preload-item');
    var arrTime = [];
    var arrInterval = [];
    for (var i = 0; i < item.length; i++) {
        var time = Math.random() * 1000;
        setTimeout(function (i) {
            item[i].classList.add('anim');
        }.bind(null, i), time);
        arrTime.push(time);
    }

    animPreload();

    function animPreload() {
        for (var i = 0; i < item.length; i++) {
            arrInterval.push(
                setInterval(function (i) {
                    item[i].classList.toggle('anim');
                }.bind(null, i), 1000 + arrTime[i])
            )
        }
    }

    window.onload = function () {
        for (var i = 0; i < item.length; i++) {
            clearInterval(arrInterval[i]);
            setTimeout(function (i) {
                item[i].classList.remove('anim');
            }.bind(null, i), 1000 + arrTime[i])
        }
    }
</script>
