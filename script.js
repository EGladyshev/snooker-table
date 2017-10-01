// идеи
// 1. время удара, время фрейма
// +2. вынести просчет очков на столе в отдельную функцию
// 3. Подсказка
// 4. Показывать фреймбол
// +5. когда забивается красный попробовать записать в локал сторэдж этот момент и после цветного обнулять!
// +6. Подсчитать очки на столе(осталось на цветных)
// +7. Показать забитые шары игрока
// +8. !!! по зачету и просчету очков настоле осталось, когда на столе лищь цветные, прописать!
// 9 учитывать забитые красные при фолах(уменьшать их)
var base = 60;
var clocktimer,dateObj,dh,dm,ds,ms;
var readout='';
var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0;
$(document).ready(function(){
	var body = $('body');
	localStorage["lastRed"] = 0;
	localStorage["lastBlack"] = 0;
	localStorage["lastFreeBall"] = 0;
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
		.on("click", "#pop-message button", closeMessagePopup) // Закрытие попапа фреймбола
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
		remainCalc = true,
		curPlayer = $(".player-block.active .player").text(),
		curPushedBall = parseInt($(".player-block.active .clogged-balls ."+$this.attr("class")+" span").text()),
		raznica = parseInt($(".remain .remainPoints").data("raznica")),
		newRaznica = 0;
	;
	//console.log(curPlayer);
	if($this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) > 0 && localStorage["lastFreeBall"] == 0/*  && localStorage["lastRed"] == 0*/){ // Просчет красных
		$(".player-block.active .result-points").text(parseInt(curPoint) + parseInt(points));
		$(".player-block.active .breakNFoul .break em").text(parseInt(Break) + parseInt(points));
		countRed = parseInt(countBall) - 1;
		$this.find(".count-ball").text(countRed);
		localStorage["lastRed"] = 1;
		localStorage["lastFreeBall"] = 0;
		//localStorage[curPlayer]["balls"][$this.attr("class")] = localStorage[curPlayer]["balls"][$this.attr("class")] + 1;
		$(".player-block.active .clogged-balls ."+$this.attr("class")+" span").text(curPushedBall + 1);
		$(".player-block.active .clogged-balls ."+$this.attr("class")).css("display", "inline-block");
		//console.log($(".player-block.active .clogged-balls ."+$this.attr("class")));
	}/* else if($this.hasClass("free-ball") && localStorage["lastRed"] == 1){ // Запрет свободного шара после красного
		remainCalc = false;
	} else if($this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) == 0 && localStorage["lastRed"] == 1){ // Запрет красного шара после красного
		remainCalc = false;
	}else if($this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) > 0  && localStorage["lastRed"] == 1){
		localStorage["lastRed"] = 1;
		//return false;
	}*/ else if(!$this.hasClass("red-ball") && parseInt($this.find(".count-ball").text()) > 0  && localStorage["lastRed"] == 1 && !$this.hasClass("free-ball")){ // Просчет цветных шаров после забития красных
		$(".player-block.active .result-points").text(parseInt(curPoint) + parseInt(points));
		$(".player-block.active .breakNFoul .break em").text(parseInt(Break) + parseInt(points));
		localStorage["lastRed"] = 0;
		$(".player-block.active .clogged-balls ."+$this.attr("class")+" span").text(curPushedBall + 1);
		$(".player-block.active .clogged-balls ."+$this.attr("class")).css("display", "inline-block");
		localStorage["lastFreeBall"] = 0;
		//return false;
	} else if(countRed == 0 && localStorage["lastRed"] == 0 && !$this.hasClass("free-ball") && countBall > 0){ // Просчет количества цветных после окончания красных
		if(parseInt($this.prev().find(".count-ball").text()) == 0){
			$(".player-block.active .result-points").text(parseInt(curPoint) + parseInt(points));
			$(".player-block.active .breakNFoul .break em").text(parseInt(Break) + parseInt(points));
			countCurBall = parseInt(countBall) - 1;
			$this.find(".count-ball").text(countCurBall);
			$(".player-block.active .clogged-balls ."+$this.attr("class")+" span").text(curPushedBall + 1);
			$(".player-block.active .clogged-balls ."+$this.attr("class")).css("display", "inline-block");
			//localStorage["lastFreeBall"] = 0;
		}
	} else if(Break == 0 && $this.hasClass("free-ball") && localStorage["lastBlack"] == 0){ // Засчитывание свободного шара только при серии в 0 очков, но не при розыгрыше на черном
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
		if(countRed > 0){
			localStorage["lastRed"] = 1;
			localStorage["lastFreeBall"] = 1;
		} else {
			localStorage["lastRed"] = 0;
			localStorage["lastFreeBall"] = 0;
		}
	}/* else {
		localStorage["lastRed"] = 0;
	}*/
	if(remainCalc){
		remain = getRemain();
		$(".remain .remainPoints").text(remain);
	}
	newRaznica = getFrameBall();
	//console.log("newRaznica: "+newRaznica);
	if(newRaznica < 0 && raznica > 0 /*&& newRaznica < 0*/){ // Определяем сыгран ли фреймбол
		//alert("Cыгран фреймбол");
		$("#pop-message strong").text("Cыгран фреймбол");
		$.magnificPopup.open({
			items: {
				src: '#pop-message'
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	}
}
function resetFrame(){
	$(".player-block .breakNFoul .break em").text(0); // обнуляем брейк
	$(".player-block .result-points").text(0); // обнуляем очки
	$(".red-ball .count-ball").text(15); // Заполняем количество шаров на столе
	$(".yellow-ball .count-ball, .green-ball .count-ball, .brown-ball .count-ball, .blue-ball .count-ball, .rose-ball .count-ball, .black-ball .count-ball, .free-ball .count-ball").text(1);
	$(".remain .remainPoints").text(147);
	$("body").find(".clogged-balls li").hide().find("span").text(0);
	ClearСlockFrame();
	StartStopFrame();
}
function nextFrame(){
	var player1Points = parseInt($(".player-left .result-points").text()),
		player2Points = parseInt($(".player-right .result-points").text()),
		player1Frames = parseInt($(".player-left .result-frame").text()),
		player2Frames = parseInt($(".player-right .result-frame").text())
	;
	if(player1Points > player2Points){
		$(".player-left .result-frame").text(player1Frames + 1);
		resetFrame();
	} else if(player1Points < player2Points){
		$(".player-right .result-frame").text(player2Frames + 1);
		resetFrame();
	} else { // сброс, переигровка на черном
		//console.log("сброс, переигровка на черном");
		$("#pop-message strong").text("Cброс, переигровка на черном");
		$.magnificPopup.open({
			items: {
				src: '#pop-message'
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		$("body").find(".balls li .count-ball").text(0);
		$("body").find(".balls li.black-ball .count-ball").text(1);
		$("body").find(".remain .remainPoints").text(7);
		localStorage["lastBlack"] = 1;
	}
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
			StartStopFrame();
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

function getFrameBall(){
	var remain = parseInt($(".remain .remainPoints").text()),
		player1Points = parseInt($(".player-left .result-points").text()),
		player2Points = parseInt($(".player-right .result-points").text()),
		maxPoints = 0, // Очки побеждающего
		raznica = 0, // Очки до фреймбола
		potencial = 0, // очки на столе + очки отстающего
		rest = 0 // очки отстающего
	;
	if(player1Points > player2Points){
		maxPoints = player1Points;
		rest = player2Points;
	} else if(player1Points < player2Points){
		maxPoints = player2Points;
		rest = player1Points;
	} else {
		maxPoints = player1Points;
		rest = player2Points;
	}
	potencial = remain + rest;
	//raznica = remain - maxPoints;
	raznica = potencial - maxPoints;
	//console.log(potencial);
	//console.log(raznica);
	$(".remain .remainPoints").data("raznica", raznica);
	return raznica;
}
function closeMessagePopup(){
	$.magnificPopup.close();
}
//функция для очистки поля
function ClearСlockFrame() {
	clearTimeout(clocktimer);
	h=1;m=1;tm=1;s=0;ts=0;ms=0;
	init=0;
	readout='00:00:00.00';
	//document.stopwatch.value=readout;
	$("body").find("input[name=stopwatch]").val(readout);
}
function StartTIMEFrame() {
	var cdateObj = new Date();
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000);
	if (t>999) { s++; }
	if (s>=(m*base)) {
		ts=0;
		m++;
	} else {
		ts=parseInt((ms/100)+s);
		if(ts>=base) { ts=ts-((m-1)*base); }
	}
	if (m>(h*base)) {
		tm=1;
		h++;
	} else {
		tm=parseInt((ms/100)+m);
		if(tm>=base) { tm=tm-((h-1)*base); }
	}
	ms = Math.round(t/10);
	if (ms>99) {ms=0;}
	if (ms==0) {ms='00';}
	if (ms>0&&ms<=9) { ms = '0'+ms; }
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; }
	dm=tm-1;
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; }
	dh=h-1;
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; }
	readout = dh + ':' + dm + ':' + ds + '.' + ms;
	//document.stopwatch.value = readout;
	$("body").find("input[name=stopwatch]").val(readout);
	clocktimer = setTimeout("StartTIMEFrame()",1);
}
//Функция запуска и остановки
function StartStopFrame() {
	if (init==0){
		ClearСlockFrame();
		dateObj = new Date();
		StartTIMEFrame();
		init=1;
	} else {
		clearTimeout(clocktimer);
		init=0;
	}
}
