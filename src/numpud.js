/// Код описывающий работу вспплывающего цифрового блока для ввода значений ///

const inputt = Array.from(document.querySelectorAll(".input-button"));
for (let b = 0; b < inputt.length; b += 1) {
	inputt[b].onclick = function () {
		let elements = document.querySelectorAll(".num-button");
		let screen = document.querySelectorAll('.screen')[0];
		let clear = document.getElementsByClassName('clear')[0];
		let main = document.querySelector('.main-div');
		main.classList.toggle("main-div-active")
	
		for (let i = 0; i < elements.length; i += 1) {
			if (elements[i].innerHTML === 'Ввод') {
				elements[i].onclick = function () {
					inputt[b].innerHTML = screen.innerHTML;
					main.classList.remove("main-div-active")
					screen.innerHTML = '0';
				}
			} else if (elements[i].innerHTML === "X") {
				elements[i].onclick = function () {
					main.classList.remove("main-div-active")
					screen.innerHTML = '0';
				};
			} else {
				elements[i].onclick = function () {
					if (elements[i].innerHTML === "÷") {
						screen.innerHTML += "/ ";
					} else {
						if (screen.innerHTML === "0") {
							screen.innerHTML = elements[i].innerHTML;
						} else {
							screen.innerHTML += elements[i].innerHTML;
						}
					}
				};
			}
		}
	
		clear.onclick = function () {
			screen.innerHTML = '0';
		};
	}
}
