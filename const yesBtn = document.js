const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

yesBtn.addEventListener('click', function() {
	alert('Eu também te amo, meu pato da vida!');
});

noBtn.addEventListener('mouseover', function() {
	this.style.position = 'absolute';
	this.style.left = `${Math.floor(Math.random() * 80)}%`;
	this.style.top = `${Math.floor(Math.random() * 80)}%`;
});
