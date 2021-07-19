function generateCat() {
    let image = document.createElement("img");
    let div = document.getElementById('flex-cat-gen')
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
function reset() {
    document.getElementById('flex-cat-gen').remove();
}