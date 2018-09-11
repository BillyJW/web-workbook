'use strict';

// window.onload = function(){

document.addEventListener("DOMContentLoaded", function(event) {

var count = document.querySelectorAll('li')
  console.log(count.length);
var list = document.getElementsByTagName('li');
// gets the number of items in the shopping cart

var i;
for (i = 0; i < list.length; i++)
list[i].insertAdjacentHTML('afterEnd', '<button onclick="pop()" id="bam" type="button">Remove!</button>');
// inserts the remove button on the shopping cart list


var paragraph = document.getElementsByClassName('paragraph');
var j;
for (j = 0; j < paragraph.length; j++)
paragraph[j].insertAdjacentHTML('afterEnd', '<button class="remove" type="button">Add Me!</button>');
// creates the add button for the various items



document.querySelector('h1').insertAdjacentHTML('afterEnd', '<h2> You have ' +
 count.length + ' items in your shopping cart. </h2>');
// creates the shopping cart number lister
  });

  function pop() {
    var element = document.getElementsByTagname('li');
    element.remove();
  }

  function test() {
    document.getElementById('bam').style.color = 'red';
  }
  //test function

// var newh2 = document.createElement('h2');
// newh2.innerHTML = `you have ${counts[0].children.length}
// items in your shopping cart`;
// docment.getElementByTagName('h1')[0].appendChild(newh2);

// funtion insertAdItem () {
//   var newInput = document.createElement('input');
//   newInput.setAttribute("placeholder", "type to add");
//   let cart  = document.getElementsByTagName("ul");
//   cart[0].after(newInput);
//   newInput.setAttribute("id", "input-text");
// }
//
// let newButton = document.createElement('button');
// newButton.innerHTML = 'Add Items';
// let nextButton = document.getElementsByTagName("input");
// nextButton[0].after(newButton);
//
// newButton.onclick = addItem;
/* create the ability to remove an item from
the shopping cart */

/* create the ability to remove an item
from the shopping cart */

/* create the ability to display a picture of the product
when the mouse hovers over the name of the "project" */
