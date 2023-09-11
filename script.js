const fromValueInput = document.getElementById('fromValue');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const toValueInput = document.getElementById('toValue');
const convertButton = document.querySelector('button');

function convertTemperature() {
  const fromValue = parseFloat(fromValueInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;
  
  let result;
  
  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    result = (fromValue * 9/5) + 32;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    result = (fromValue - 32) * 5/9;
  } else {
    result = fromValue;
  }
  
  toValueInput.value = result.toFixed(2);
}

convertButton.addEventListener('click', convertTemperature);

fromValueInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    convertTemperature();
  }
});
