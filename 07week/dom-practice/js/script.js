'use strict';

// window.onload = function(){

document.addEventListener("DOMContentLoaded", function(event) {

var count = document.querySelectorAll('li')
  console.log(count.length);

  document.querySelector('h1').insertAdjacentHTML('afterEnd', '<h2> You have ' +
 count.length + ' items in your shopping cart. </h2>');

  });
// }

var newh2 = document.createElement('h2');
newh2.innerHTML = `you have ${counts[0].children.length}
items in your shopping cart`;
docment.getElementByTagName('h1')[0].appendChild(newh2);
