// идеи
// время удара, время фрейма
// вынести просчет очков на столе в отдельную функцию
$(document).ready(function(){
	var body = $('body');
	localStorage["lastRed"] = 0;
	body
		.on("click", ".next-player button", nextPlayer)
		.on("click", ".balls li", getPoints)
		.on("click", ".reset", resetFrame)
		.on("click", ".next-frame", nextFrame)
		.on("click", ".breakNFoul button", getPopupFoul)
	;
});
function nextPlayer(){
	$(".player-block.active").removeClass("active").siblings(".player-block").addClass("active");
	$(".player-block .breakNFoul .break em").text(0);
	localStorage["lastRed"] = 0;
	return false;
}
function getPoints(){
	var $this = $(this),
		points = $this.data("point"),
		curPoint = $(".player-block.active .result-points").text(),
		Break = $(".player-block.active .breakNFoul .break em").text(),
		countBall = $this.find(".count-ball").text(),
		countRed = parseInt($(".balls li.red-ball .count-ball").text()),
		newCount = 0,
		remain = 0,
		counRed = 0, counYellow = 0, counGreen = 0, counBrown = 0,
		counBlue = 0, counRose = 0, counBlack = 0
	;
	$(".player-block.active .result-points").text(parseInt(curPoint) + parseInt(points));
	$(".player-block.active .breakNFoul .break em").text(parseInt(Break) + parseInt(points));
	if($this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) > 0 ){
		countRed = parseInt(countBall) - 1;
		$this.find(".count-ball").text(countRed);
		//if(newCount == 0)
			localStorage["lastRed"] = 1;
	} else {
		localStorage["lastRed"] = 0;
	}

	remain = getRemain();
	$(".remain span").text(remain);

	//else if($this.has)
	//1. когда забивается последний красный попробовать записать в локал сторэдж этот момент и после цветного обнулять!
	//2. Подсчитать очки на столе
	//3. Показать забитые шары игрока
	//return false;
}
function resetFrame(){
	$(".player-block .breakNFoul .break em").text(0); // обнуляем брейк
	$(".player-block .result-points").text(0); // обнуляем очки
	$(".red-ball .count-ball").text(15); // Заполняем количество шаров на столе
	$(".yellow-ball .count-ball, .green-ball .count-ball, .brown-ball .count-ball, .blue-ball .count-ball, .rose-ball .count-ball, .black-ball .count-ball").text(1);
	$(".remain span").text(147);
}
function nextFrame(){
	var player1Points = parseInt($(".player-left .result-points").text()),
		player2Points = parseInt($(".player-right .result-points").text()),
		player1Frames = parseInt($(".player-left .result-frame").text()),
		player2Frames = parseInt($(".player-right .result-frame").text())
	;
	if(player1Points > player2Points){
		$(".player-left .result-frame").text(player1Frames + 1);
	} else if(player1Points < player2Points){
		$(".player-right .result-frame").text(player2Frames + 1);
	} else { // сброс, переигровка на черном
		console.log("сброс, переигровка на черном");
	}

	resetFrame();
}
function getRemain(countRed){
	// Закончил здесь, на просчете оставшихся очков на цветных
	var remain = 0,
		countRed = parseInt($(".balls .red-ball .count-ball").text())
	;
	if(parseInt($(".balls li.red-ball").text()) > 0 && localStorage["lastRed"] == 1){
		remain = parseInt($(".balls li.red-ball .count-ball").text())*7 + countRed + 27 + 7;
	} else if(parseInt($(".balls li.red-ball").text()) > 0 && localStorage["lastRed"] == 0){
		remain = parseInt($(".balls li.red-ball .count-ball").text())*7 + countRed + 27;
	} else if(parseInt($(".balls li.red-ball").text()) == 0 && localStorage["lastRed"] == 1){
		remain = 34;
	} else if(parseInt($(".balls li.red-ball").text()) == 0 && localStorage["lastRed"] == 0
		&& parseInt($(".balls li.yellow-ball").text()) > 0
	){
		remain = 27
	} else if(parseInt($(".balls li.red-ball").text()) == 0 && localStorage["lastRed"] == 0
		&& parseInt($(".balls li.yellow-ball").text()) == 0
		&& parseInt($(".balls li.green-ball").text()) > 0
	){
		remain = 25;
	} else if(parseInt($(".balls li.red-ball").text()) == 0 && localStorage["lastRed"] == 0
		&& parseInt($(".balls li.green-ball").text()) == 0
		&& parseInt($(".balls li.brown-ball").text()) > 0
	){
		remain = 22;
	} else if(parseInt($(".balls li.red-ball").text()) == 0 && localStorage["lastRed"] == 0
		&& parseInt($(".balls li.brown-ball").text()) == 0
		&& parseInt($(".balls li.blue-ball").text()) > 0
	){
		remain = 18;
	} else if(parseInt($(".balls li.red-ball").text()) == 0 && localStorage["lastRed"] == 0
		&& parseInt($(".balls li.blue-ball").text()) == 0
		&& parseInt($(".balls li.rose-ball").text()) > 0
	){
		remain = 13;
	} else if(parseInt($(".balls li.red-ball").text()) == 0 && localStorage["lastRed"] == 0
		&& parseInt($(".balls li.rose-ball").text()) == 0
		&& parseInt($(".balls li.black-ball").text()) > 0
	){
		remain = 7;
	}
	return remain;
}
function getPopupFoul(){
	$.magnificPopup.open({
		items: {
			src: '#pop-foul-points'
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	return false
}