const form = document.getElementById('form');
const input = document.getElementById('inputTask');
const list = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  const btn = document.createElement('button');
  btn.textContent = 'Eliminar';
  btn.className = 'del';
  btn.addEventListener('click', () => li.remove());
  li.appendChild(btn);
  list.appendChild(li);
  input.value = '';
});