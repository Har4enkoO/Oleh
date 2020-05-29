document
  .getElementById('universe')
  .insertAdjacentText('beforeend', ` ${prompt('Enter the Worlds name')}`);
document
  .getElementById('mighty')
  .insertAdjacentText('beforeend', ` ${prompt('Enter your name')}`);
let food = 0;
let wood = 0;
let stone = 0;

document.getElementById('food').addEventListener('click', foodCount);
function foodCount() {
  food += 1;
  document.getElementById('foodCounter').innerHTML = `${food}`;
}
document.getElementById('wood').addEventListener('click', woodCount);
function woodCount() {
  wood += 1;
  document.getElementById('woodCounter').innerHTML = `${wood}`;
}
document.getElementById('stone').addEventListener('click', stoneCount);
function stoneCount() {
  stone += 1;
  document.getElementById('stoneCounter').innerHTML = `${stone}`;
}

let worker = 0;
document.getElementById('worker').addEventListener('click', workerCount);
function workerCount() {
  if (food >= 20) {
    worker += 1;
    food -= 20;
    document.getElementById('workerCounter').innerHTML = `${worker}`;
    document.getElementById('foodCounter').innerHTML = `${food}`;
  }
}
function f() {
  food -= 1;
  setTimeout(
    (document.getElementById('foodCounter').innerHTML = `${food}`),
    2000
  );
  f();
}

if (worker > 0 && food > 0) {
  f();
}
