const box = document.querySelector('.box');
const customSizeBtn = document.querySelector('.size');
const clearBtn = document.querySelector('.clear');

function buildGrid(size) {
	box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	for (let i = 0; i < (size * size); i++) {
		const newDiv = document.createElement('div');
		box.appendChild(newDiv);
	}
	const subs = document.querySelectorAll('.box > div');
	subs.forEach(sub => {
		sub.addEventListener('mouseover',addTrail);
	})
}

function addTrail() {
	this.classList.add('active');
}

function buildCustomGrid() {
	const customSize = prompt('How many boxes wide would you like?');
	if(customSize > 1 && customSize <= 100){
		box.innerHTML = '';
		buildGrid(customSize);
	} else {
		box.innerHTML = '';
		buildGrid(16);
	}
}
customSizeBtn.addEventListener('click',buildCustomGrid);

function clearGrid() {
	const subs = document.querySelectorAll('.box > div');
	subs.forEach(sub => {
		sub.classList.remove('active');
	})
}
clearBtn.addEventListener('click',clearGrid);

// build default 16x16 grid on page load
buildGrid(16);