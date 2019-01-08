window.onload = function () {
    var name = "";
    var person = prompt("Please enter your name", "Alena");
    if (/\d/.test(person) == false) {
        for (var i = person.length - 1; i >= 0; i--) {
            name += person[i];
        }
        document.getElementById("name").innerHTML = name;
    } else {
        person = person.toLowerCase();
        for (var i = 0; i < person.length; i++) {
            if (i % 2 != 0) {
                name += person[i].toUpperCase();
            } else {
                name += person[i];
            }
        }
        document.getElementById("name").innerHTML = name;
    }
};
