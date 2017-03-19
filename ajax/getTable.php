<h1>Снукер web-табло</h1>
<ul class="main-menu">
	<li>
		<a href="/">Главная</a>
	</li>
	<li>
		<a href="/manual/">Инструкция</a>
	</li>
	<!-- <li>
		<a href="/contacts/">Контакты</a>
	</li> -->
</ul>
<div class="top-button">
	<button class="new-game" title="кнопка в разработке">Новая игра</button>
	<button class="next-frame">Следующий фрейм</button>
</div>
<div class="top-button">
	<button class="reset">Сброс</button>
	<button class="cancel-action" title="кнопка в разработке">Отменить действие</button>
</div>
<div class="table">
	<div class="remain">Очков на столе: <span>147</span></div>


	<div class="result">
		<div class="player-block player-left active">
			<div class="player-points">
				<span class="player first-player "><?=$_POST["player1"]?></span>
				<span class="result-frame">0</span>
				<span class="result-points">0</span>
			</div>
			<div class="breakNFoul">
				<span class="break">Break: <em>0</em></span>
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
				<button>Фол</button>
			</div>
		</div>
		<div class="player-block player-right">
			<div class="player-points">
				<span class="player second-player"><?=$_POST["player2"]?></span>
				<span class="result-frame">0</span>
				<span class="result-points">0</span>
			</div>
			<div class="breakNFoul">
				<span class="break">Break: <em>0</em></span>
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
