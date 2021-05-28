// Dynamic client side scripting
// it adds interactivity to your website
// Always put javascript file before closing the body tag in HTML
// DOM API(Document object model)- has capability to manipulate the doc
const heading = document.querySelector('h2');
heading.textContent = 'This is webpage';

//alert('Something is wrong');

// Events
// Real interactivity on a website requires event handlers. 
/*
document.querySelector('html').onclick = function()
{
    alert('Stop disturbing me');
}
*/

// use JavaScript and DOM API features to alternate the display of one of two images. This change will happen as a user clicks the displayed image.


// The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}