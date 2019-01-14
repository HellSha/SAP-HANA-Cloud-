window.onload = function (){
    var computer = new Compucter(4,15.6, 'Windows 10 Pro', '8GB' , '1000GB');
    computer.toString();
}

function Compucter(coresNumber, displaySize, osVersion, ramSize, harddiskSize) {
    this.cores_number = coresNumber;
    this.display_size = displaySize;
    this.os_version = osVersion;
    this.ram_size = ramSize;
    this.harddist_size = harddiskSize;
    this.getCoresNumber = function (){
        return this.cores_number;
    }
    this.setCoresNumber = function (coresNumber){
        this.cores_number = coresNumber;
    }
    
}