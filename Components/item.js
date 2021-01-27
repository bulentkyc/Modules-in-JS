import {$} from '../Library/the404s.js';

export default function () {
    $('#list').insertAdjacentHTML('beforeend', '<li><button onclick = "this.parentElement.remove();">🗑️</button>'+$('#item').value+'</li>');
    
}