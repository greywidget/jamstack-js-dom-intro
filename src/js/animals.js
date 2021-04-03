const buttons = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
const textSearch = document.getElementById("searchText");
console.log(textSearch);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var animal = this.getAttribute("animal");
        var typedValue = textSearch.value;
        
        for (let j = 0; j < images.length; j++) {
            if (animal == "all") {
                images[j].style.display = "inline-block";
            }
            else {
                var imageAltText = images[j].getAttribute("alt");
                console.log(imageAltText);
                if (images[j].classList.contains(animal)) {
                    if (typedValue !== "") {
                        console.log(typedValue);
                        console.log(imageAltText);
                        if (imageAltText != null && imageAltText.includes(typedValue)) {
                            images[j].style.display = "inline-block";
                        }
                        else {
                            images[j].style.display = "none";
                        }
                    }
                    else {
                        images[j].style.display = "inline-block";
                    }
                }
                else {
                    images[j].style.display = "none";
                }
            }
        }
    });
}
