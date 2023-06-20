const myList = document.getElementById('myList');

for (let i = 1; i <= 5; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = i;
  myList.appendChild(listItem);
}