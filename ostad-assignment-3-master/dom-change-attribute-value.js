function changeImageSource() {
    const image = document.getElementById('myImage');
    image.src = './images/image2.png';
    image.alt = 'New Image';
  }
  
  const button = document.getElementById('changeButton');
  button.addEventListener('click', changeImageSource);