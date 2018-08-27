'use strict';

// window.onload = function(){

document.addEventListener("DOMContentLoaded", function(event) {

var count = document.querySelectorAll('li')
  console.log(count.length);

var list = document.getElementsByTagName('li');

var i;
for (i = 0; i < list.length; i++)
list[i].insertAdjacentHTML('afterEnd', '<button onlclick="pop" class="remove" type="button">Remove!</button>');

var paragraph = document.getElementsByClassName('paragraph');

var j;
for (j = 0; j < paragraph.length; j++)
paragraph[j].insertAdjacentHTML('afterEnd', '<button class="remove" type="button">Add Me!</button>');

document.querySelector('h1').insertAdjacentHTML('afterEnd', '<h2> You have ' +
 count.length + ' items in your shopping cart. </h2>');

  });

  function pop() {
    var element = document.getElementsByTagName('li');
    element.parentNode.removeChild('ul');
  }

// var newh2 = document.createElement('h2');
// newh2.innerHTML = `you have ${counts[0].children.length}
// items in your shopping cart`;
// docment.getElementByTagName('h1')[0].appendChild(newh2);



/* create the ability to remove an item from
the shopping cart */

/* create the ability to remove an item
from the shopping cart */

/* create the ability to display a picture of the product
when the mouse hovers over the name of the "project" */
