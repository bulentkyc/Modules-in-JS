export default function () {
    let list = `<ul id="list">${localStorage.getItem('todoList')}</ul>`

    return list;
}