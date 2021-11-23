let iput = document.querySelector('.iput');
let button = document.querySelector('button');
let clean = document.querySelector('clean');

button.onclick = function lia() {
    let e = iput.value;
    console.log("Площадь грани куба: ", Math.pow(e, 2));
    document.getElementById('kalik').innerHTML = 'Площадь грани куба: ' + Math.pow(e, 2);
    console.log("Площадь полной поверхности грани куба: ", 6 * Math.pow(e, 2));
    document.getElementById('2').innerHTML = 'Площадь полной поверхности грани куба: ' + 6 * Math.pow(e, 2);
    console.log("Объём грани куба: ", Math.pow(e, 3));
    document.getElementById('3').innerHTML = 'Объём грани куба: ' + Math.pow(e, 3);
}
clean.onclick = function yabe() {
    delete button;
}