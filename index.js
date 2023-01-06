const colorSelector = document.getElementById("colorSelector");
const colorModeSelector = document.getElementById("colorModeSelector");

function getScheme() {
  const url = `https://www.thecolorapi.com/scheme?hex=${colorSelector.value.slice(1)}&mode=${
    colorModeSelector.value
  }&count=5`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let colorsArray = data.colors;
      console.log(colorsArray);
      getColorHex(colorsArray);
    });
}

document.querySelector("button").addEventListener("click", getScheme);

function getColorHex(data) {
  let hexValues = [];
  for (let object of data) {
    colorDiv.push(object.hex.value);
  }
  return hexValues;
}
