function showData(xhr) {
    var array = JSON.parse(xhr.responseText);
    var myHTMLStr = '<table>';
    myHTMLStr += '<thead><tr><th>UID</th><th>ID</th><th>Name</th><th>Email</th><th>Body</th><th colspan="2">Edit/Delete</th></tr></thead>';
    if (Array.isArray(array)) {
        for (var i in array) {
            myHTMLStr += '<tr><td>' + array[i]['postId'] + '</td><td>' +
                array[i]['id'] + '</td><td>' +
                array[i]['name'] + '</td><td>' +
                array[i]['email'] + '</td><td>' +
                array[i]['body'] + '</td> <td>' +
                '<button class="btn btn-danger" id="deleteBtn" onclick="deleteRequest(' +
                array[i]['id'] + ')">Delete</button></td><td>' +
                '<button class="btn btn-warning" id="putBtn" onclick="drawFormPut(' +
                array[i]['id'] + ')">Edit</button></td></tr>';
        }
    } else {
        myHTMLStr += '<tr><td>' + array.postId + '</td><td>' +
            array.id + '</td><td>' +
            array.name + '</td><td>' +
            array.email + '</td><td>' +
            array.body + '</td> <td class="btn btn-danger">' +
            '<button id="deleteBtn" onclick="deleteRequest()">Delete</button></td><button class="btn btn-warning"' +
            '<button id="putBtn" onclick="drawFormPut()">Edit</button></td></tr>';
    }
    myHTMLStr += '</table>';
    document.getElementById('table').innerHTML = myHTMLStr;
}

function getRequest() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showData(this);
            console.log(this.responseText);
        }
    };
    request.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    request.send();
}

function putRequest() {
    var params = {};
    var id = document.getElementById('commentId').value;
    params.postId = document.getElementById('userId').value;
    params.name = document.getElementById('name').value;
    params.email = document.getElementById('email').value;
    params.body = document.getElementById('comment').value;

    var request = new XMLHttpRequest();
    var jsonData = JSON.stringify(params);

    request.open('PUT', 'https://jsonplaceholder.typicode.com/comments/' + id, true);
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send(params);
    
    console.log(request.responseText);

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('Changes saved!');
            console.log(this.responseText);
        }
        else{
            alert("Error. " + request.status);
        }
    };
}

function postRequest() {
    var params = {};
    params.postId = document.getElementById('userId').value;
    params.name = document.getElementById('name').value;
    params.email = document.getElementById('email').value;
    params.body = document.getElementById('comment').value;

    var request = new XMLHttpRequest();
    var jsonData = JSON.stringify(params);

    request.open('POST', 'https://jsonplaceholder.typicode.com/comments', true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(params);

     console.log(request.responseText);   

    
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('Changes saved!');
            console.log(this.responseText);
        }
        else{
            alert("Error. " + request.status);
        }
    };
}

function deleteRequest(id) {
    var request = new XMLHttpRequest();

    request.open('DELETE', 'https://jsonplaceholder.typicode.com/comments/' + id);
    request.send();
    
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('Comment was successfully deleted!');
            console.log(this.responseText);
        }
    };
}

function drawFormPut(id) {
    document.body.innerHTML = "";
    var link = document.querySelector('link[rel=import]');
    var content = link.import.querySelector('#postForm');
    document.body.appendChild(content.cloneNode(true));
    document.getElementById('commentId').setAttribute('disabled', 'disabled');
    document.getElementById('commentId').value = id;
}

function drawFormPost() {
    document.body.innerHTML = "";
    var link = document.querySelector('link[rel=import]');
    var content = link.import.querySelector('#postForm');
    document.body.appendChild(content.cloneNode(true));
    document.getElementById('subbutton').setAttribute('onclick','postRequest()');
}
