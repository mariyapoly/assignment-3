// Date Object

function getdateOfWeek(dateString = 0){
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getUTCDay()]
    return dayOfWeek;
}

const day = getdateOfWeek('2023-06-20');
const currentDay = getdateOfWeek();
console.log('Day of the week', day)
console.log("Today is", currentDay);


// Math Object
function calculateSquareRoot(numbers) {
    const sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
}
const numbers = [3, 4, 5, 6];
const result = calculateSquareRoot(numbers);
console.log(result);


function displaySquareRoot(numbers) {
    const sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    console.log('Square root of the sum of squares:', squareRoot);
}

const numbers2 = [3, 4, 5, 6];
displaySquareRoot(numbers2);


// 3 Numbers:



function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
}

const primeNumber = isPrime(2);
console.log(primeNumber);


// 7 Common Events

// a
document.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY
    alert(`coordinates (${x}, ${y})`);
});
// b
document.addEventListener('keydown', function(event){
    const keyCode = event.keyCode || event.which;
    alert(`Pressed key code: ${keyCode}`);
});
// c
const imageElement = document.getElementById('image');

imageElement.addEventListener('mouseover', function() {
  imageElement.src = './images/images3.jpeg';
});

// 8.HTML DOM Document:

const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');


button.addEventListener('click', function() {
  paragraph.textContent = 'Button Clicked!';
});

