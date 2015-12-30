var Element = require('lib/element.js');
var Diff = require('lib/diff.js');


var el = Element.create;

var ul = el('ul', {id: 'list'}, [
    el('li', {class: 'item'}, ['item1']),
    el('li', {class: 'item'}, ['item2']),
    el('li', {class: 'item'}, ['item3']),
    el('li', {class: 'item'}, ['item4']),
])



var newUl = el('ul', {id: 'list'}, [
    el('li', {class: 'item',style:'color:red;font-size:18px;'}, ['item1']),
    el('li', {class: 'item'}, ['item2']),
    el('li', {class: 'item'}, ['item3']),
    el('li', {class: 'item'}, ['item4']),
])




// var pathes = Diff(ul,newUl);

console.log(ul,newUl);


// console.log(pathes);

var ul1 = Element.render(ul);
var ul2 = Element.render(newUl);




document.getElementById('pre1').innerHTML = JSON.stringify(ul);
document.getElementById('pre2').innerHTML = JSON.stringify(newUl);


document.body.appendChild(ul1);
document.body.appendChild(ul2);


