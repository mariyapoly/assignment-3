const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', function() {
  paragraph.classList.add('highlight');
});