function gotoIndex() {
	window.location.href = "./index.html"
}

function useNow() {
	window.location.href = "productsAndServices.html";
}

function gotoProduction1() {
	window.location.href = "production1.html"
}

function gotoProduction2() {
	window.location.href = "production2ESG.html"
}

function gotoProduction3() {
	window.location.href = "production1.html"
}

function gotoProduction4() {
	window.location.href = "production1.html"
}



//加速
var itv = null;
var timer = null;

function loadlazy() {
	clearTimeout(itv);
	itv = setTimeout(function() {
		var winHeight = $(window).height();
		var scrolltop = $(window).scrollTop();
		$('img').each(function() {
			var oTop = $(this).offset().top;
			if ((oTop - scrolltop) > 0 && (oTop - scrolltop) < winHeight) {
				var src = $(this).attr("data_src");
				$(this).attr("src", src);
			}
		})
	}, 70);
}

// 页面滚动加载
$(window).scroll(function() {
	loadlazy();
});

$(function() {
	// loadlazy();
	clearTimeout(timer);
	timer = setTimeout(function() {
		$(window).scrollTop(5);
		loadlazy();

	}, 500)
});

//    $(window).scrollTop(0);