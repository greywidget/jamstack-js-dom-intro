function addParagraph() {
    // Create a new paragraph element and add it to a div on your page
    var newPara = document.createElement('p');
    var newText = document.createTextNode("By Hokey, I wasn't expecting that!");
    newPara.appendChild(newText);
    newPara.className="text-danger";
    var task2wrapper = document.getElementById('task2wrapper');
    task2wrapper.appendChild(newPara);
}