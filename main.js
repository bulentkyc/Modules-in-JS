import {$, parentPicker as pp, boilerPlateHTML, tester} from './Library/the404s.js';
import todoHeader from './Components/itemCreator.js';
import * as testMod from './Library/test.js';
import varSet from './Library/test2.js';
import * as test3 from './Library/test3.js';
import itemList  from "./Components/itemList.js";
import item from './Components/item.js';

$('body').insertAdjacentHTML('afterbegin', boilerPlateHTML);
//TODO: Check why function is no reachable from outside?
function btnClickHandler() {
    //$('#list').insertAdjacentHTML('beforeend', '<li>'+$('#item').value+'</li>');
    //item component goes here
    item();
    localStorage.setItem('todoList', $('#list').innerHTML);
}

$('main').insertAdjacentHTML('afterbegin', todoHeader());
$('main').insertAdjacentHTML('beforeend', itemList());

$('#btn').addEventListener('click', btnClickHandler);


console.log(pp('body'));

tester();

console.log(testMod.var1);

varSet.var4();

test3.pleaseTestMe();