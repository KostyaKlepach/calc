// function plus() {
// 	let num1, num2, sum;

// 	num1 = document.getElementById('num1').value;
// 	num1 = parseInt(num1);
// 	if (isNaN(num1)){
// 		alert('Enter pls number!')
// 	}

// 	num2 = document.getElementById('num2').value;
// 	num2 = parseInt(num2);
// 	if (isNaN(num2)){
// 		alert('Enter pls number!')
// 	}

// 	sum = num1 + num2;

// 	document.getElementById('result').innerHTML = sum;
// }

// function mynus() {
// 	let num1, num2, sum;

// 	num1 = document.getElementById('num1').value;
// 	num1 = parseInt(num1);
// 	if (isNaN(num1)){
// 		alert('Enter pls number!')
// 	}

// 	num2 = document.getElementById('num2').value;
// 	num2 = parseInt(num2);
// 	if (isNaN(num2)){
// 		alert('Enter pls number!')
// 	}

// 	sum = num1 - num2;

// 	document.getElementById('result').innerHTML = sum;
// }

// function degree() {
// 	let num1, num2, sum;

// 	num1 = document.getElementById('num1').value;
// 	num1 = parseInt(num1);
// 	if (isNaN(num1)){
// 		alert('Enter pls number!')
// 	}

// 	num2 = document.getElementById('num2').value;
// 	num2 = parseInt(num2);
// 	if (isNaN(num2)){
// 		alert('Enter pls number!')
// 	}

// 	sum = num1 / num2;

// 	document.getElementById('result').innerHTML = sum;
// }

// function multiplication() {
// 	let num1, num2, sum;

// 	num1 = document.getElementById('num1').value;
// 	num1 = parseInt(num1);
// 	if (isNaN(num1)){
// 		alert('Enter pls number!')
// 	}

// 	num2 = document.getElementById('num2').value;
// 	num2 = parseInt(num2);
// 	if (isNaN(num2)){
// 		alert('Enter pls number!')
// 	}

// 	sum = num1 * num2;

// 	document.getElementById('result').innerHTML = sum;
// }

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

if(isNaN(a && b && c)){
	alert('Enter numbers pls!')
} else {
alert(quadratic(a, b, c));
}
function quadratic(a, b, c) {
	let d, x1, x2;
	d = b*b - 4*a*c;
 
	if(d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2*a);
		x2 = (-b - Math.sqrt(d)) / (2*a);
		return('x1=' +x1+ '   x2=' +x2);
	} else if (d == 0) {
		x1 = (-b) / (2*a);
		return('x = '+x1)
	}
	else if (d < 0) {
		return('No answer, because D < 0');
	}
}




