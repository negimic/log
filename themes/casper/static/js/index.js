(function(w) {

	// SVG render
	var headerSVG = document.getElementById('svg');
	var $diff = $('.anm-diff');

	var requestAnimFrame = function() {
		return (
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			}
		);
	}();

	var current_frame = 0;
	var total_frame = 60;
	var handle = 0;

	var paths = new Array();
	var length = new Array();
	var rendered = false;

	if (!headerSVG) {
		return false;
	} 

	headerSVG.querySelectorAll('path').forEach(function(path, i) {
		paths[i] = path;
		var l = paths[i].getTotalLength() + 30;
		length[i] = l;
		paths[i].style.strokeDasharray = l + ' ' + l;
		paths[i].style.strokeDashoffset = l;
	});

	function draw() {
		progress = current_frame/total_frame;
		if (progress > 1) {
			window.clearTimeout(handle);
			showDiff();
		} else {
			current_frame++;
			for (var j=0, len = paths.length; j<len;j++) {
				paths[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
			}
			handle = requestAnimFrame(draw);
		}
	}

	function render() {
		if (rendered) return;
		rendered = true;
		draw();
	}

	function showDiff() {
		$diff.addClass('is-animated');
	}

	setTimeout(function() {
		render();
	}, 400);

})(window);