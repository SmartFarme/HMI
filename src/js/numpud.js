/// Код описывающий работу вспплывающего цифрового блока для ввода значений //
const $input = $(".input-button");
$input.each(function(index) {
	$(this).on("click", function (index) {
		let $elements = $(".num-button");
		let $screen = $('#screen');
		let $clear = $('#clear');
		let $main = $('#main-div');
		let $current = $(this);
		$main.toggleClass("main-div-active");
		$main.on("click", function (e) {
			if (!e.target.closest(".main-content")) {
				$main.removeClass("main-div-active");
				console.log($screen.text());
				$screen.text(0)
				$elements.off()
			}
		})
		false
		$elements.each(function() {
			console.log($(this).text())
			if ($(this).text() === 'ОК') {
				$(this).on("click" , function () {
					$current.text($screen.text())
					$main.removeClass("main-div-active");
					$screen.text(0)
					$elements.off()
				})
			} else {
				$(this).on("click", function (ev) {
          if ($screen.text().length == 4) {
            $screen.text(($screen.text()))
          } else {
            if ($(this).text() == "÷") {
              $screen.text('/');
            } else {
              if ($screen.text() == "0") {
                $screen.text($(this).text());
              } else {
                $screen.text($screen.text() + $(this).text())
                console.log($screen.text());
              }
            } 
          }
				});
			}
		})
	
		$clear.on("click", function () {
			$screen.text(0);
		});
	})
})




//Блокировка экрана на 30 секунд для возможности протереть сенсоный экран
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
