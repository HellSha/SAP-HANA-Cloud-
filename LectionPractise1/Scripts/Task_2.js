window.onload = function () {
    addContacts();
}

function addContacts() {
    var i = 0;

    var elementContactItem = document.createElement("li");
    elementContactItem.setAttribute("class", "contacts-list-item");
    elementContactItem.setAttribute("onclick","displayMessages()");

    var elementImage = document.createElement("img");
    elementImage.setAttribute("class", "contacts-photo");
    elementImage.setAttribute("src", "Images/logo.png");

    var elementContactName = document.createElement("div");
    elementContactName.setAttribute("class", "person-name");
    elementContactName.innerHTML = "Person Name";

    elementContactItem.appendChild(elementImage);
    elementContactItem.appendChild(elementContactName);

    while (i < 9) {
        elementContactItem.setAttribute("id", 'contact-item-' + i);
        document.getElementById("contacts-list").appendChild(elementContactItem.cloneNode(true));
        i++;
    }
}

function displayMessages() {
    addMessages();
}

function addMessages() {
    document.getElementById("contact-messages").innerHTML = "";
    document.getElementById("contacts-top-name").innerHTML = "Person Name";
    var i = 0;
    //Messages of the first Person
    var elementMessageItem = document.createElement("div");
    elementMessageItem.setAttribute("class", "message-flex-item message-flex-item-1");

    var elementImage = document.createElement("img");
    elementImage.setAttribute("class", "contacts-photo-messages");
    elementImage.setAttribute("src", "Images/logo.png");

    var elementContactName = document.createElement("div");
    elementContactName.setAttribute("class", "message-text");
    elementContactName.innerHTML = "Lorem ipsum dolor sit amet, tamquam quaeque delicatissimi ne sed, ei posse fabulas delectus cum.Eius nusquam ne eum, te sint dicat recusabo pro.";

    elementMessageItem.appendChild(elementImage);
    elementMessageItem.appendChild(elementContactName);

    //Messages of the Second Person
    var elementMessageItem2 = document.createElement("div");
    elementMessageItem2.setAttribute("class", "message-flex-item message-flex-item-2");

    var elementImage2 = document.createElement("img");
    elementImage2.setAttribute("class", "contacts-photo-messages contacts-photo-second");
    elementImage2.setAttribute("src", "Images/person2.jpg");

    var elementMessageText = document.createElement("div");
    elementMessageText.setAttribute("class", "message-text-second");
    elementMessageText.innerHTML = "Lorem ipsum dolor sit amet, tamquam quaeque delicatissimi ne sed, ei posse fabulas delectus cum.Eius nusquam ne eum, te sint dicat recusabo pro.";

    elementMessageItem.appendChild(elementImage);
    elementMessageItem.appendChild(elementContactName);

    elementMessageItem2.appendChild(elementImage2);
    elementMessageItem2.appendChild(elementMessageText);


    while (i < 9) {
        elementMessageItem.setAttribute("id", 'message-item-' + i);
        setTimeout(document.getElementById("contact-messages").appendChild(elementMessageItem.cloneNode(true)), 1000);
        elementMessageItem2.setAttribute("id", "message-item-con-" + i);
        
        document.getElementById("contact-messages").appendChild(elementMessageItem2.cloneNode(true));
        i++;
    }
}
