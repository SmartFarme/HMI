/// Код описывающий работу вспплывающего цифрового блока для ввода значений ///

const inputt = Array.from(document.querySelectorAll(".input-button"));
const mark = document.querySelector(".mark");
const dot = document.querySelector(".dot");
for (let b = 0; b < inputt.length; b += 1) {
	inputt[b].onclick = function () {
		let elements = document.querySelectorAll(".num-button");
		let screen = document.querySelectorAll('.screen')[0];
		let clear = document.getElementsByClassName('clear')[0];
		let main = document.querySelector('.main-div');
		main.classList.toggle("main-div-active");
		mark.disabled = true;
		dot.disabled = true;
		for (let i = 0; i < elements.length; i += 1) {
			if (inputt[b].classList.contains("dot-button")) {
				dot.disabled = false;
			};
			if (inputt[b].classList.contains("mark-button")) {
				mark.disabled = false;
			};
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
			} else if (elements[i].innerHTML === "+/-") {
				elements[i].onclick = function () {
					screen.innerHTML = screen.innerHTML * (-1);
				};
			} else if (elements[i].innerHTML === ".") {
				elements[i].onclick = function () {
					if (screen.innerHTML === "0") {
						screen.innerHTML = "0.";
					} else if (screen.innerHTML.includes(".")) {
						screen.innerHTML = screen.innerHTML;
					} else {
						screen.innerHTML += elements[i].innerHTML;
					}
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
							console.log(screen.textContent);
							if (screen.innerHTML.indexOf(".") != "-1") {
								screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.indexOf(".") + 3);
							}
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


const btnStart = document.querySelector(".clean-touch");
const progressBar = document.querySelector(".progress-inner");
const progressCont = document.querySelector(".cleaning-popup-main");

btnStart.addEventListener("click", () => {
  progressCont.classList.remove("hide");
  let interval = 30000;
  let countDown = setInterval(() => {
    let progressWidth = interval / 30000 * 100;
    
    if(interval >0) {
      progressBar.style.width = progressWidth + "%";
      interval -= 10;
    } else {
      clearInterval(countDown)
      progressCont.classList.add("hide");
    }
  }, 10)
})