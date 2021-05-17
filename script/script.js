window.onload = function () {
	let _scrollTop = window.scrollY || document.documentElement.scrollTop;
	let fullHeight = document.body.clientHeight;

	// 스크롤 될 때마다 현재위치 저장
	window.addEventListener('scroll', function () {
		_scrollTop = window.scrollY || document.documentElement.scrollTop;
		fullHeight = document.body.clientHeight;
	});

	// 스크롤에 맞춰 이미지 바꾸기
	function changeLogo() {
		// 스크롤 영역 210vh~ 410vh
		// console.log(_scrollTop / fullHeight);
		var img = document.getElementById('changedImg');
		if (img) {
			if (_scrollTop / fullHeight > 0.39) img.src = './img/logo/nextjs.png';
			else if (_scrollTop / fullHeight > 0.355)
				img.src = './img/logo/nodejs.png';
			else if (_scrollTop / fullHeight > 0.32)
				img.src = './img/logo/typescript.png';
			else if (_scrollTop / fullHeight > 0.285)
				img.src = './img/logo/react.png';
			else if (_scrollTop / fullHeight > 0.25)
				img.src = './img/logo/htmlcss.png';
			else img.src = './img/logo/javascript.png';
		}
	}
	window.addEventListener('scroll', changeLogo);

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
	// 시계느낌으로 깜빡거리기
	function flicker() {
		clock.style.display = 'none';
		setTimeout(function () {
			clock.style.display = 'block';
		}, 300);
		// if (clock.style.display === 'none') clock.style.display = 'block';
		// else if (clock.style.display !== 'none') clock.style.display = 'none';
	}

	setClock();
	setInterval(setClock, 5000);

	// 부모의 형제의 자식
	function setImg(e) {
		console.log(e.target.parentNode.previousElementSibling);
		const selectedSrc = e.target.src;
		const mainImg = e.target.parentNode.previousElementSibling.children[0];
		mainImg.src = selectedSrc;
	}

	// 이미지 선택 시 사진 바뀌게
	const imgContainer = document.getElementsByClassName('imgContainer');

	for (let i = 0; i < imgContainer.length; i++) {
		const selectionContainer = imgContainer[i].children[1];
		for (let j = 0; j < selectionContainer.children.length; j++) {
			selectionContainer.children[j].addEventListener('click', setImg);
		}
	}
};
