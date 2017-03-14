<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="robots" content="noindex, nofollow">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0, shrink-to-fit=no">
	<!-- <meta name="viewport" content="width=device-width, initial-scale=0.5"> -->
	<title>Снукер. Электронное web-табло</title>
	<link rel="icon" type="image/x-icon" href="" />
	<link media="all" rel="stylesheet" href="style.css">
	<link media="all" rel="stylesheet" href="magnific-popup/magnific-popup.css">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600italic,400italic,600,300italic,300,700,700italic,800,800italic&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="magnific-popup/jquery.magnific-popup.min.js"></script>
</head>
<body>
	<div id="wrapper">
		<main role="main" id="main">
			<div class="container">
				<h1>Снукер web-табло</h1>
				<div class="top-button">
					<button class="new-game">Новая игра</button>
					<button class="next-frame">Следующий фрейм</button>
				</div>
				<div class="top-button">
					<button class="reset">Сброс</button>
					<button class="cancel-action">Отменить действие</button>
				</div>
				<div class="table">
					<div class="remain">Очков на столе: <span>147</span></div>
					<div class="left-clogged-ball">
						<ul class="clogged-balls">
							<li class="clogged-red"><span>12</span></li>
							<li class="clogged-yellow"><span>1</span></li>
							<li class="clogged-green"><span>1</span></li>
							<li class="clogged-brown"><span>1</span></li>
							<li class="clogged-blue"><span>1</span></li>
							<li class="clogged-rose"><span>1</span></li>
							<li class="clogged-black"><span>1</span></li>
						</ul>
					</div>
					<div class="right-clogged-ball">
						<ul class="clogged-balls">
							<li class="clogged-red"><span>12</span></li>
							<li class="clogged-yellow"><span>1</span></li>
							<li class="clogged-green"><span>1</span></li>
							<li class="clogged-brown"><span>1</span></li>
							<li class="clogged-blue"><span>1</span></li>
							<li class="clogged-rose"><span>1</span></li>
							<li class="clogged-black"><span>1</span></li>
						</ul>
					</div>
					<div class="result">
						<div class="player-block player-left active">
							<div class="player-points">
								<span class="player first-player ">Игрок 1</span>
								<span class="result-points">0</span>
								<span class="result-frame">0</span>
							</div>
							<div class="breakNFoul">
								<span class="break">Break: <em>0</em></span>
								<button>Фол</button>
							</div>
						</div>
						<div class="player-block player-right">
							<div class="player-points">
								<span class="result-frame">0</span>
								<span class="result-points">0</span>
								<span class="player second-player">Игрок 2</span>
							</div>
							<div class="breakNFoul">
								<span class="break">Break: <em>0</em></span>
								<button>Фол</button>
							</div>
						</div>
					</div>
				</div>
				<div class="next-player">
					<button>Переход хода</button>
				</div>
				<div class="balls-on-table">На столе шаров:</div>
				<ul class="balls">
					<li class="red-ball" data-point="1">
						<span class="count-ball" >15</span>
						<span class="value-ball" >1 очко</span>
					</li>
					<li class="yellow-ball" data-point="2">
						<span class="count-ball" >1</span>
						<span class="value-ball" >2 очка</span>
					</li>
					<li class="green-ball" data-point="3">
						<span class="count-ball" >1</span>
						<span class="value-ball" >3 очка</span>
					</li>
					<li class="brown-ball" data-point="4">
						<span class="count-ball" >1</span>
						<span class="value-ball" >4 очка</span>
					</li>
					<li class="blue-ball" data-point="5">
						<span class="count-ball" >1</span>
						<span class="value-ball" >5 очков</span>
					</li>
					<li class="rose-ball" data-point="6">
						<span class="count-ball" >1</span>
						<span class="value-ball" >6 очков</span>
					</li>
					<li class="black-ball" data-point="7">
						<span class="count-ball" >1</span>
						<span class="value-ball" >7 очков</span>
					</li>
					<li class="free-ball" data-point="1">
						<span class="count-ball">1</span>
						<span class="value-ball" >Free ball</span>
					</li>
				</div>
			</div>
		</main>
	</div>
	<!-- popups -->
	<div class="popup1 white-popup-block mfp-hide" id="pop-foul-points">
		<div class="popup-box">
			<strong>Сколько очков фол?</strong>
			<form action="" method="post">
				<input type="radio" value="4">
				<input type="radio" value="5">
				<input type="radio" value="6">
				<input type="radio" value="7">
				<input type="submit" value="Выбрать">
			</form>
		</div>
	</div>
</body>
</html>
<!--
<div class="popup2" id="popup2">
	<div class="popup-box" id="pop-basket">
	</div>
</div>
<div id="success-basket-message" class="white-popup-block mfp-hide">
	<p>Товар успешно добавлен в корзину.</p>
</div>
 -->