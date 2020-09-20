function submitValue() {
    changeColor();
    itemText();
}

function changeColor() {
    var divContent = document.getElementsByClassName("block")[0];
    var color = document.getElementById("selectColor").value.toString();

    divContent.style.color = color;
}

function itemText() {
    var headText = document.getElementsByClassName("block")[0];
    var text = document.getElementById("item-list").value.toString();

    headText = headText.firstElementChild.innerHTML = text;
}