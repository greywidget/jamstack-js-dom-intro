function dontGoThere() {
    var theLink = document.getElementById('task4-link');
    var myInterceptFunction = function (event) {
        event.preventDefault();
        alert("Won't you stay? (Just a little bit longer...)");
    };
    theLink.addEventListener('click', myInterceptFunction);
}
dontGoThere();
