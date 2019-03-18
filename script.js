window.onload = function () {
	initColorPicker();
};

function initColorPicker() {
	let colorBox = document.getElementById("color-box")
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	let colorPickers = document.getElementsByClassName("picker")
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
	let pickerLen =pickerElements.length
	for (let i = 0; i < pickerLen; i++) {
		pickerElements[i].addEventListener('change', () => {
			console.log("Red value: ", rgb.red.value);
			let red = rgb.red.value;
			let green = rgb.green.value
			let blue = rgb.blue.value
			setBoxBGColor(colorBox, red, green, blue);
			})
		}
	}

function setBoxBGColor(colorBox, red, green, blue) {
	rgbVal = [red, green, blue].join(',');
	colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}