// идеи
// время удара, время фрейма
//+++ вынести просчет очков на столе в отдельную функцию
// Подсказка
//+++ !!! по зачету и просчету очков настоле осталось, когда на столе лищь цветные, прописать!
$(document).ready(function(){
	var body = $('body');
	localStorage["lastRed"] = 0;
	body
		.on("click", ".next-player button", nextPlayer) // Переход хода
		.on("click", ".balls li", getPoints) // Зачисление очков
		.on("click", ".reset", resetFrame) // Сброс
		.on("click", ".next-frame", nextFrame) // Следующий фрейм
		.on("click", ".breakNFoul button", getPopupFoul) // Открытие попапа с выбором количества очков
		.on("click", "#pop-foul-points form label", chooseFoulPoints) // Выбор количества очков для фола
		.on("submit", "#pop-foul-points form", getFoulPoints) // Засчитывание фол очков
		.on("submit", "#new-game-form", getTable) // Получаем снукер-таблицу
		.on("click", ".new-game", getWelcomePage) // Получаем главную страницу
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
		points = parseInt($this.data("point")),
		curPoint = parseInt($(".player-block.active .result-points").text()),
		Break = parseInt($(".player-block.active .breakNFoul .break em").text()),
		countBall = parseInt($this.find(".count-ball").text()),
		countRed = parseInt($(".balls li.red-ball .count-ball").text()),
		newCount = 0,
		remain = 0,
		counRed = 0, counYellow = 0, counGreen = 0, counBrown = 0,
		counBlue = 0, counRose = 0, counBlack = 0,
		remainCalc = true;
	;
	if($this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) > 0  && localStorage["lastRed"] == 0){ // Просчет красных
		$(".player-block.active .result-points").text(parseInt(curPoint) + parseInt(points));
		$(".player-block.active .breakNFoul .break em").text(parseInt(Break) + parseInt(points));
		countRed = parseInt(countBall) - 1;
		$this.find(".count-ball").text(countRed);
		localStorage["lastRed"] = 1;
	}/* else if($this.hasClass("free-ball") && localStorage["lastRed"] == 1){ // Запрет свободного шара после красного
		remainCalc = false;
	} else if($this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) == 0 && localStorage["lastRed"] == 1){ // Запрет красного шара после красного
		remainCalc = false;
	}*/ else if($this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) > 0  && localStorage["lastRed"] == 1){
		localStorage["lastRed"] = 1;
		//return false;
	}else if(!$this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) > 0  && localStorage["lastRed"] == 1 && !$this.hasClass("free-ball")){ // Просчет цветных шаров после забития красных
		$(".player-block.active .result-points").text(parseInt(curPoint) + parseInt(points));
		$(".player-block.active .breakNFoul .break em").text(parseInt(Break) + parseInt(points));
		localStorage["lastRed"] = 0;
		//return false;
	} else if(countRed == 0 && localStorage["lastRed"] == 0 && !$this.hasClass("free-ball") && countBall > 0){ // Просчет количества цветных после окончания красных
		if(parseInt($this.prev().find(".count-ball").text()) == 0){
			$(".player-block.active .result-points").text(parseInt(curPoint) + parseInt(points));
			$(".player-block.active .breakNFoul .break em").text(parseInt(Break) + parseInt(points));
			countCurBall = parseInt(countBall) - 1;
			$this.find(".count-ball").text(countCurBall);
		}
	} else if(Break == 0 && $this.hasClass("free-ball")){ // Засчитывание свободного шара только при серии в 0 очков
		if(countRed == 0 && parseInt($(".balls li.yellow-ball").text()) > 0){
			points = 2;
		} else if(parseInt($(".balls li.yellow-ball").text()) == 0
			&& parseInt($(".balls li.green-ball").text()) > 0
		){
			points = 3;
		} else if(parseInt($(".balls li.green-ball").text()) == 0
			&& parseInt($(".balls li.brown-ball").text()) > 0
		){
			points = 4;
		} else if(parseInt($(".balls li.brown-ball").text()) == 0
			&& parseInt($(".balls li.blue-ball").text()) > 0
		){
			points = 5;
		} else if(parseInt($(".balls li.blue-ball").text()) == 0
			&& parseInt($(".balls li.rose-ball").text()) > 0
		){
			points = 6;
		} else if(parseInt($(".balls li.rose-ball").text()) == 0
			&& parseInt($(".balls li.black-ball").text()) > 0
		){
			points = 7;
		}
		$(".player-block.active .result-points").text(parseInt(curPoint) + parseInt(points));
		$(".player-block.active .breakNFoul .break em").text(parseInt(Break) + parseInt(points));
		if(countRed > 0)
			localStorage["lastRed"] = 1;
		else
			localStorage["lastRed"] = 0;
	}/* else {
		localStorage["lastRed"] = 0;
	}*/
	if(remainCalc){
		remain = getRemain();
		$(".remain span").text(remain);
	}

	//else if($this.has)
	//+1. когда забивается красный попробовать записать в локал сторэдж этот момент и после цветного обнулять!
	//+2. Подсчитать очки на столе(осталось на цветных)
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
function chooseFoulPoints(){
	$(this).addClass("active").siblings().removeClass("active");
}
function getFoulPoints(){
	var $this = $(this),
		foulPoints = parseInt($this.find("input[type=radio]:checked").val()),
		opponent = $(".player-block.active").siblings().find(".result-points"),
		curPoints = parseInt(opponent.text())
	;
	opponent.text(curPoints + foulPoints);
	$.magnificPopup.close();
	$(".next-player button").click();
	return false;
}
function getTable(){
	var player1 = $("#player1").val(),
		player2 = $("#player2").val()
	;
	$.ajax({
		url: "/ajax/getTable.php",
		type: "POST",
		data: {
			player1:player1,
			player2:player2
		},
		success: function(html){
			$(".container").html(html);
		}
	});
	return false;
}
function getTable(){
	var player1 = $("#player1").val(),
		player2 = $("#player2").val()
	;
	$.ajax({
		url: "/ajax/getTable.php",
		type: "POST",
		data: {
			player1:player1,
			player2:player2
		},
		success: function(html){
			$(".container").html(html);
		}
	});
	return false;
}
function getWelcomePage(){
	$.ajax({
		url: "/ajax/getWelcomePage.php",
		type: "POST",
		data: {
		},
		success: function(html){
			$(".container").html(html);
		}
	});
	return false;
}