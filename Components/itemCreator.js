

function itemCreator() {
    const outputHTML = `
    <section>
    <input id="item" type='text'>
    <button id='btn'>Add</button>
    </section>`

    
    return outputHTML;
}


export default itemCreator;

//<button onclick="console.log(document.getElementById('item').value)">Add</button>