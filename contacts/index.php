<? require_once($_SERVER["DOCUMENT_ROOT"].'/header.php');?>
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
<? require_once($_SERVER["DOCUMENT_ROOT"].'/footer.php');?>