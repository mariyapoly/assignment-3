function changeTextColor() {
    const paragraphs = document.querySelectorAll('.highlight');
    paragraphs.forEach(paragraph => {
      paragraph.style.color = 'red';
    });
  }
  
  changeTextColor();