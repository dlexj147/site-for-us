
let i = 0;
let text1 = "Déjà un mois passé avec toi.";
let text2 = "Je t'aime mon coeur."
let speed = 100;

function typeWriter(text, para) {
	if (ok == 2) {
		clearInterval(typeInterval);
	}
	if (i < text.length) {
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else {
		if (ok == 0) {
			i = 0;
		}
		ok += 1;
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
typeInterval = setInterval(function () {
	if (ok == 0) {
		typeWriter(text1, "txt1");
	}
	else if (ok == 1) {
		sleep(2000).then(() => { typeWriter(text2, "txt2"); });

	}
}, 100);
//};
