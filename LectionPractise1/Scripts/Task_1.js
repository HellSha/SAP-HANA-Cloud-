window.onload = function () {
    addText();
}

function addText() {
    var i = 0;

    var elementCell = document.createElement("div");
    elementCell.setAttribute("class", "Rtable-cell");

    var elementBack = document.createElement("div");
    elementBack.setAttribute("class","backgroundImage");

    var elementHeader = document.createElement("header");
    elementHeader.innerHTML = "Header";

    var elementText = document.createElement("div");
    elementText.setAttribute("class","cardText");
    elementText.innerHTML = "Lorem ipsum dolor sit amet, tamquam quaeque delicatissimi ne sed, ei posse fabulas delectus cum.Eius nusquam ne eum, te sint dicat recusabo pro. Ad solet impetus temporibus pro, delectus lobortis cu eam, mollis voluptua no mei. Cum everti vivendum ea, id eros salutatus sit. Ne his admodum inciderint. Omnes iracundia intellegam eum an. Sit no natum delicata conclusionemque, in quot aliquando similique sed, unum persius ut sea.";

    var elementInput = document.createElement("input");
    elementInput.setAttribute("type", "button");
    elementInput.setAttribute("value", "Details");
    elementInput.setAttribute("class", "button-details");

    elementBack.appendChild(elementHeader);
    elementBack.appendChild(elementText);
    elementBack.appendChild(elementInput);

    elementCell.appendChild(elementBack);

    var root = document.getElementById("root");

    while (i < 9) {
       elementCell.setAttribute("id", i); document.getElementById("root").appendChild(elementCell.cloneNode(true));
        i++;
    }
}
