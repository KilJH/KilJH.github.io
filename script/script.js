window.addEventListener('load', function () {
	// 시계
	const clock = document.getElementById('clock');
	// 현재시간 설정
	function setClock() {
		const date = new Date();
		const time =
			(date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) +
			':' +
			(date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes());

		clock.innerText = time;
	}
	if (clock) {
		setClock();
		setInterval(setClock, 1000);
	}

	// 대학생활
});
