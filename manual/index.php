<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="robots" content="noindex, nofollow">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0, shrink-to-fit=no">
	<!-- <meta name="viewport" content="width=device-width, initial-scale=0.5"> -->
	<title>Снукер. Электронное web-табло</title>
	<link rel="icon" type="image/x-icon" href="" />
	<link media="all" rel="stylesheet" href="/style.css">
	<link media="all" rel="stylesheet" href="/magnific-popup/magnific-popup.css">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600italic,400italic,600,300italic,300,700,700italic,800,800italic&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="/script.js"></script>
	<script type="text/javascript" src="/magnific-popup/jquery.magnific-popup.min.js"></script>
</head>
<body>
	<div id="wrapper">
		<main role="main" id="main">
			<div class="container">
				<h1>Снукер web-табло</h1>
				<ul class="main-menu">
					<li>
						<a href="/">Главная</a>
					</li>
					<li>
						<a href="/manual/">Инструкция</a>
					</li>
					<li>
						<a href="/contacts/">Контакты</a>
					</li>
				</ul>
				<p class="manual-text">
				Здравствуйте уважаемые любители снукера. Спасибо, что посетили сайт snooker-table.
				Snooker-table - это сайт, на котором вы сможете отобразить результаты, события Вашего снукерного матча, а именно: очки, фреймы, фолы, оставшиеся очки на столе, свободные шары.
				Допустим Вы пришли в бильярдный клуб поиграть в снукер, но вам не нравится или не удобно пользоваться механическим табло в бильярдных клубах. Если у Вас есть смартфон и доступ в интернет, вы можете абсолютно бесплатно воспользоваться сайтом snooker-table.
				Зайдя на сайт Вы вводите имена игроков, нажимаете кнопку "Показать снукер-таблицу", Вы видите электронное табло, где отображены  имена игроков, заработанные ими очки, оставшиеся на столе, выигранные фреймы, брейки.
				Забив какой-либо шар, Вы нажимаете на соответствующий его цвету шар внизу табло и в зависимости от его ценности, игроку засчитываются очки в зачет и в брейк.
				При не забитом шаре, Вы должны нажать кнопку "Переход хода" и активность игроков изменится. Брейк ошибившегося игрока обнулиться и свой брейк начнет следующий игрок.
				При фоле, Вы можете воспользоваться кнопкой "Фол" и при нажатии ее, Вам предоджится на выбор сколько очков фол(4,5,6,7) и эти очки засчитываются сопернику. Также просиходит автоматический переход хода. Если противник решил повторить позицию, то кнопкой "Переход хода", можно сменить активного игрока.
				<!-- Если вы ошибочно засчитали неправильное количество очков, кнопкой "Отменить действие", снимаются последние засчитанные очки и Вы сможете засчитать уже правильное количество очков игроку. -->
				Если у игрок забил свободный шар, то нажмите внизу табло на шар с подписью "Free ball", тогда игроку засчитывается 1 очко.
				Когда Вы закончили фрейм, то можете нажать кнопку "Следующий фрейм" и начать новую партию, после чего выигранный фрейм засчитается игроку с наибольшим количеством очков. Также нажав на кнопку "Новая игра", Вы сможете ввести новых игроков и начать новый матч. Кнопкой "Сброс", можно обнулить очки в текущем фрейме(например если это был тренировочный фрейм).
				Пользуйтесь пожалуйста сайтом snooker-table, если он Вам понравился, советуйте его своим друзьям и оставляйте отзывы на странице контакты. Свои пожелания и предложения можете писать на имейл указанный <!-- в описании к видео или --> на странице "Контакты" сайта snooker-table.
				<br>
				Удачных Вам игр. С уважением, автор сайта snooker-table Евгений Гладышев.
				</p>
			</div>
		</main>
	</div>
	<!-- popups -->
	<div class="popup1 white-popup-block mfp-hide" id="pop-foul-points">
		<div class="popup-box">
			<strong>Сколько очков фол?</strong>
			<form action="" method="post">
				<label class="active" for="foul4points"><input id="foul4points" name="foul" type="radio" value="4" checked>4 очка</label>
				<label for="foul5points"><input id="foul5points" name="foul" type="radio" value="5">5 очка</label>
				<label for="foul6points"><input id="foul6points" name="foul" type="radio" value="6">6 очка</label>
				<label for="foul7points"><input id="foul7points" name="foul" type="radio" value="7">7 очка</label>
				<input type="submit" value="Выбрать">
			</form>
		</div>
	</div>
</body>
</html>