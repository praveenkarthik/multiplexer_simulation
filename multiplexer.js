var S1, S2, S3, D1, D2, D3, D4, D5, D6, D7, D8, s1, s2, s3, d1, d2, d3, d4, d5, d6, d7, d8, result, res;

function init() {
	S1 = document.getElementById("S1");
	S2 = document.getElementById("S2");
	S3 = document.getElementById("S3");

	D1 = document.getElementById("D1");
	D2 = document.getElementById("D2");
	D3 = document.getElementById("D3");
	D4 = document.getElementById("D4");
	D5 = document.getElementById("D5");
	D6 = document.getElementById("D6");
	D7 = document.getElementById("D7");
	D8 = document.getElementById("D8");
	result = document.getElementById("result");

	s1 = s2 = s3 = d1 = d2 = d3 = d4 = d5 = d6 = d7 = d8 = false;
	updateUI();
}
function updateUI() {
	res = (((!s1)&&(!s2)&&(!s3)&&(d1)) || ((!s1)&&(!s2)&&(s3)&&(d2)) || ((!s1)&&(s2)&&(!s3)&&(d3)) || ((!s1)&&(s2)&&(s3)&&(d4)) || ((s1)&&(!s2)&&(!s3)&&(d5)) || ((s1)&&(!s2)&&(s3)&&(d6)) || ((s1)&&(s2)&&(!s3)&&(d7)) || ((s1)&&(s2)&&(s3)&&(d8)));
	if (s1 == true) {
		S1.innerHTML = 1;
	} else {
		S1.innerHTML = 0;
	}
	if (s2 == true) {
		S2.innerHTML = 1;
	} else {
		S2.innerHTML = 0;
	}
	if (s3 == true) {
		S3.innerHTML = 1;
	} else {
		S3.innerHTML = 0;
	}
	if (d1 == true) {
		D1.innerHTML = 1;
	} else {
		D1.innerHTML = 0;
	}
	if (d2 == true) {
		D2.innerHTML = 1;
	} else {
		D2.innerHTML = 0;
	}
	if (d3 == true) {
		D3.innerHTML = 1;
	} else {
		D3.innerHTML = 0;
	}
	if (d4 == true) {
		D4.innerHTML = 1;
	} else {
		D4.innerHTML = 0;
	}
	if (d5 == true) {
		D5.innerHTML = 1;
	} else {
		D5.innerHTML = 0;
	}
	if (d6 == true) {
		D6.innerHTML = 1;
	} else {
		D6.innerHTML = 0;
	}
	if (d7 == true) {
		D7.innerHTML = 1;
	} else {
		D7.innerHTML = 0;
	}
	if (d8 == true) {
		D8.innerHTML = 1;
	} else {
		D8.innerHTML = 0;
	}
	if(res == true) {
		result.innerHTML = 1;
	} else {
		result.innerHTML = 0;
	}
}

function changeValue(id) {
	switch (id) {
		case "S1":
			s1 = !s1;
			break;
		case "S2":
			s2 = !s2;
			break;
		case "S3":
			s3 = !s3;
			break;
		case "D1":
			d1 = !d1;
			break;
		case "D2":
			d2 = !d2;
			break;
		case "D3":
			d3 = !d3;
			break;
		case "D4":
			d4 = !d4;
			break;
		case "D5":
			d5 = !d5;
			break;
		case "D6":
			d6 = !d6;
			break;
		case "D7":
			d7 = !d7;
			break;
		case "D8":
			d8 = !d8;
			break;
	}
	updateUI();
}