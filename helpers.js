

function createItem (o, attr) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'text'),
        text = JSON.stringify(o).replace('"gender"', 'gender').replace('"age"', 'age').replace('"name"', 'name').replace(/,/g, ', ');

    for (var key in attr) {
        el.setAttribute(key, attr[key]);
    }

    el.textContent = text;

    return el;
}

function animate (el, attr) {
    Velocity(el, attr, { duration: 500 });
}
