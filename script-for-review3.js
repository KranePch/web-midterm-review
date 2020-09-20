var userText = [];

if (userText.length == 0) {
    document.getElementById("jsArray").innerHTML = "Array is empty.";
}

function addArray() {
    var text = document.getElementById("userText").value.toString();

    userText.push(text);

    printArray(userText);
}

function printArray(lst) {
    var text = "";

    for (var i = 0; i < userText.length; ++i) {
        if (i % 2 == 0) {
            text += "<span style=\"color: red\">" + userText[i].charAt(0) + "</span>";
            text += userText[i].substr(1, userText[i].length);
        }
        else {
            text += userText[i];
        }
        text += "<br>";
    }

    document.getElementById("jsArray").innerHTML = text;
}