const colorSelector = document.getElementById("colorSelector");
const colorModeSelector = document.getElementById("colorModeSelector");

document.querySelector("button").addEventListener("click", getScheme);

function getScheme() {
  const url = `https://www.thecolorapi.com/scheme?hex=${colorSelector.value.slice(1)}&mode=${
    colorModeSelector.value
  }&count=5`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const colorsArray = data.colors;
      const colorDivs = document.querySelectorAll(".color-container > div:nth-of-type(1)");
      const hexCodeTextFields = document.querySelectorAll(".color-value");
      const hexColors = getColorHex(colorsArray);

      for (let i = 0; i < colorDivs.length; i++) {
        colorDivs[i].setAttribute("style", "background-color:" + hexColors[i]);
        hexCodeTextFields[i].textContent = hexColors[i];
      }
    });
}

function getColorHex(data) {
  let hexValues = [];
  for (let object of data) {
    hexValues.push(object.hex.value);
  }
  return hexValues;
}
