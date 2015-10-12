// General
var people = [
    {gender: 'f', age: 12, name: 'Alice'},
    {gender: 'm', age: 46, name: 'Bob'},
    {gender: 'f', age: 18, name: 'Carol'},
    {gender: 'f', age: 32, name: 'Dolly'},
    {gender: 'm', age: 42, name: 'Eric'}
];

var svg1 = document.querySelector('#svg-non-lazy'),
    next1 = document.querySelector('#non-lazy-next'),
    svg2 = document.querySelector('#svg-lazy');

// Non-lazy

next1.addEventListener('click', run.bind(null, true));

var items1 = people.map((person, i) =>
    createItem(person, {'class': 'item', x: 10, y: 60 + i * 20})
);

items1.forEach(item => svg1.appendChild(item));

var step = 0;
function run (next) {
    var go = nonLazyGo[step];

    for (var n in go.items) {
        animate(items1[+n], go.items[n]);
    }

    step++;
}

