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
				<div class="content-text">
					<p class="manual-text">
						Пользуйтесь пожалуйста сайтом snooker-table, если он Вам понравился, советуйте его своим друзьям и оставляйте отзывы на странице контакты. Свои пожелания и предложения можете писать на имейл указанный <!-- в описании к видео или --> на странице "Контакты" сайта snooker-table.
					</p>
					<form class="callback" action="#" method="post">
						<div class="form-row">
							<label>Имя: </label>
							<input id="user-name" type="text" placeholder="Имя" autocomplete="off">
						</div>
						<div class="form-row">
							<label>Текст сообщения: </label>
							<textarea id="message" value="Текст сообщения"></textarea>
						</div>
					</form>
				</div>
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