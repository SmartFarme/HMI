/// Код описывающий работу вспплывающего цифрового блока для ввода значений //
const $input = $(".input-button");
$input.each(function(index) {
	$(this).on("click", function () {
		let $elements = $(".num-button");
		let $screen = $('#screen');
		let $clear = $('#clear');
		let $main = $('#main-div');
		let $mainContetn = $("#main-content");
		$main.toggleClass("main-div-active");
		$main.on("click", function (e) {
			if (!e.target.closest(".main-content")) {
				$main.removeClass("main-div-active");
				$screen.innerHTML = '0';
			}
		})
		false
		$elements.each(function(i) {
			console.log($elements[i])
			console.log($screen.html().length)
			if ($elements[i].html() === 'ОК') {
				$elements[i].on("click", function () {
					$input[index].innerHTML = $screen.innerHTML;
					$main.removeClass("main-div-active")
					$screen.innerHTML = '0';
					console.log($screen.innerHTML.length)
				})
			} else {
				$elements[i].on("click", function () {
          if ($screen.innerHTML.length == 4) {
            $screen.innerHTML = $screen.innerHTML;
          } else {
            if ($elements[i].innerHTML === "÷") {
              $screen.innerHTML += "/ ";
            } else {
              if ($screen.innerHTML === "0") {
                $screen.innerHTML = $elements[i].innerHTML;
              } else {
                $screen.innerHTML += $elements[i].innerHTML;
                console.log($screen.textContent);
              }
            }
          }
				});
			}
		})
	
		clear.onclick = function () {
			screen.innerHTML = '0';
		};
	})
})


const btnStart = document.querySelector(".clean-touch");
const progressBar = document.querySelector(".progress-inner");
const progressCont = document.querySelector(".cleaning-popup-main");
const cleanTouch = document.querySelector(".progress-cl-timer");

btnStart.addEventListener("click", () => {
  progressCont.classList.remove("hide");
  let interval = 0;
  let timeLeft = 30;
  let countDown = setInterval(() => {
    let progressWidth = interval / 30000 * 100;
    
    if(interval <30000) {
      progressBar.style.width = progressWidth + "%";
	  console.log(progressWidth)
      interval += 10;
	  let secLeft = Math.trunc(timeLeft - (interval / 1000));
	  if (secLeft >= 10) {
		cleanTouch.innerHTML = "0:" + Math.trunc(timeLeft - (interval / 1000));
	  } else {
		cleanTouch.innerHTML = "0:" + "0" + Math.trunc(timeLeft - (interval / 1000));
	  }
    } else {
      clearInterval(countDown)
      progressCont.classList.add("hide");
    }
  }, 10)
})

/* Цифровой блок на домашней странице */

let numElements = document.querySelectorAll(".numpud-button");
		let numScreen = document.querySelectorAll('.numpud-screen')[0];
		let numClear = document.getElementsByClassName('numpud-clear')[0];
		let numMain = document.querySelector('.numpud-main-div');
		let numMainContetn = document.querySelector(".numpud-main-content");
		for (let i = 0; i < numElements.length; i += 1) {
			if (numElements[i].innerHTML === 'ОК') {
				numElements[i].onclick = function () {
					numScreen.innerHTML = '0';
				}
			} else {
				numElements[i].onclick = function () {
					if (numScreen.innerHTML === "0") {
							numScreen.innerHTML = numElements[i].innerHTML;
						} else {
							numScreen.innerHTML += numElements[i].innerHTML;
							console.log(numScreen.textContent);
							if (numScreen.innerHTML.indexOf(".") != "-1") {
								numScreen.innerHTML = numScreen.innerHTML.substring(0, numScreen.innerHTML.indexOf(".") + 3);
							}
						}
					}
				};
			}
	
		numClear.onclick = function () {
			numScreen.innerHTML = '0';
		};
