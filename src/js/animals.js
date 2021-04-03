const buttons = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
const textSearch = document.getElementById("searchText");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var animal = this.getAttribute("animal");
        var typedValue = textSearch.value;
        
        for (let j = 0; j < images.length; j++) {
            if (animal == "all") {
                images[j].classList.remove("d-none");
            }
            else {
                var imageAltText = images[j].getAttribute("alt");
                if (images[j].classList.contains(animal)) {
                    if (typedValue !== "") {
                        if (imageAltText != null && imageAltText.includes(typedValue)) {
                            images[j].classList.remove("d-none");
                        }
                        else {
                            images[j].classList.add("d-none");
                        }
                    }
                    else {
                        images[j].classList.remove("d-none");
                    }
                }
                else {
                    images[j].classList.add("d-none");
                }
            }
        }
    });
}
