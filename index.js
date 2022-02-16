const inputElem = document.querySelector('.text-input');
function getInput(inputElem) {
  console.log(inputElem.value);
}

inputElem.addEventListener('change', getInput);
