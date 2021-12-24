function hoverIn(x) {
	x.style.color = "#403f44";
}

function hoverOut(x) {
	x.style.color = "#fff";
}

const input = document.getElementsByClassName("form__input");

function errorControl() {
	input[0].onblur = function () {
		if (input[0].value.trim() === "") {
			// not email
			input[0].classList.add("invalid");
			input[0].style.borderBottom = "3px solid #ff6868";
		}
	};

	input[0].onfocus = function () {
		if (this.classList.contains("invalid")) {
			// remove the "error" indication, because the user wants to re-enter something
			this.classList.remove("invalid");
			input[0].style.borderBottom = "";
		}
	};

	input[1].onblur = function () {
		if (!input[1].value.includes("@")) {
			// not email
			input[1].classList.add("invalid");
			input[1].style.borderBottom = "3px solid #ff6868";
		}
	};

	input[1].onfocus = function () {
		if (this.classList.contains("invalid")) {
			// remove the "error" indication, because the user wants to re-enter something
			this.classList.remove("invalid");
			input[1].style.borderBottom = "";
		}
	};

	input[2].onblur = function () {
		if (input[2].value.trim() === "") {
			// not email
			input[2].classList.add("invalid");
			input[2].style.borderBottom = "3px solid #ff6868";
		}
	};

	input[2].onfocus = function () {
		if (this.classList.contains("invalid")) {
			// remove the "error" indication, because the user wants to re-enter something
			this.classList.remove("invalid");
			input[2].style.borderBottom = "";
		}
	};
}

errorControl();
