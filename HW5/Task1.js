function Computer(coresNumber, displaySize, osVersion, ramSize, memoryStorage) {
    this.cores_number = coresNumber;
    this.display_size = displaySize;
    this.os_version = osVersion;
    this.ram_size = ramSize;
    this.memory_storage = memoryStorage;
}
Computer.prototype.getCoresNumber = function () {
    return this.cores_number;
}
Computer.prototype.setCoresNumber = function (coresNumber) {
    this.cores_number = coresNumber;
}


function UltraBook(coresNumber, displaySize, osVersion, ramSize, memoryStorage, weight) {
    Computer.call(this, coresNumber, displaySize, osVersion, ramSize, memoryStorage);
    this.weight = weight;

    this.toString = function () {
        var compInfo = '';
        compInfo += ' UltraBook Item \n' +
            'Number of processor cores: ' + coresNumber + '\n' +
            'Display size' + displaySize + '\n' +
            'OS version: ' + osVersion + '\n' +
            'RAM size: ' + ramSize + '\n' +
            'Memory Storage: ' + memoryStorage + '\n' +
            'Weight: ' + weight + '\n';
        return compInfo;
    }
}

UltraBook.prototype.setWeight = function (_weight) {
    this.weight = _weight;
}

UltraBook.prototype.getWeight = function () {
    return this.weight;
}

function ComputingServer(coresNumber, displaySize, osVersion, ramSize, memoryStorage, networkConnection) {
    Computer.call(this, coresNumber, displaySize, osVersion, ramSize, memoryStorage);
    this.network_connection = networkConnection;

    this.toString = function () {
        var servInfo = '';
        servInfo += ' Server Item \n' +
            'Number of processor cores: ' + coresNumber + '\n' +
            'OS version: ' + osVersion + '\n' +
            'RAM size: ' + ramSize + '\n' +
            'Memory Storage: ' + memoryStorage + '\n' +
            'Network: ' + networkConnection + '\n';
        return servInfo;
    }
}
ComputingServer.prototype.setNetwork = function (_network) {
    this.network_connection = _network;
}
ComputingServer.prototype.getNetwork = function () {
    return this.network_connection;
}

UltraBook.prototype = Object.create(Computer.prototype);
UltraBook.prototype.constructor = UltraBook;
ComputingServer.prototype.constructor = ComputingServer;

var UltraBookobObjArray = [];
var ComputingServObjArray = [];

function createServerObj() {
    var serverItem = new ComputingServer(document.getElementById('coresNumberServ').value, document.getElementById('dsserv').value, document.getElementById('osvServ').value, document.getElementById('ramsServ').value, document.getElementById('memsServ').value, document.getElementById('nwc').value);
    ComputingServObjArray.push(serverItem);
    alert(serverItem.toString());
    console.log(serverItem.toString());
}

function createUltraBookObj() {
    var ultraBookItem = new UltraBook(document.getElementById('coresNumber').value, document.getElementById('ds').value, document.getElementById('osv').value, document.getElementById('rams').value, document.getElementById('mems').value, document.getElementById('weight').value);
    UltraBookobObjArray.push(ultraBookItem);
    alert(ultraBookItem.toString());
    console.log(ultraBookItem.toString());
}
