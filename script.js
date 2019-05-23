const btn = document.querySelector('button');

btn.addEventListener('click', function sumValues(){
  let a = Number(document.querySelector('#first-number').value);
  let b = Number(document.querySelector('#second-number').value);
  let result = (a + b).toFixed(1);

  if (!isNaN(result)) {
    alert(`Сумма первого и второго числа: ${result}`);
  } else {
    alert('Введите число.'); 
  }
});
