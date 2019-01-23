function openNewPage() {
    window.open("https://getbootstrap.com/docs/4.0/components/buttons/");
}

function drawFlexbox() {

    document.body.innerHTML = "";
    var link = document.querySelector('link[rel=import]');
    var content = link.import.querySelector('.Rtable');
    document.body.appendChild(content.cloneNode(true));
}
