function square() {
    var theSquare = document.getElementById('task3-square');
    var myFunction = function () {
        alert('Hey, look at my red square!');
    };
    theSquare.addEventListener('mouseover', myFunction);
}
square();
