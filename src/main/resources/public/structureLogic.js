/**
 * Created by austin on 3/24/16.
 */
var webSocket = new WebSocket("ws://" + location.hostname + ":" + location.port + "/structure");
webSocket.createStructure = function () { };
var creator = document.getElementById('creator');
var newfile = document.getElementById('newfile');
var bCount = 1;


function createButton () {
    var buttonName = 'button' + bCount;
    bCount += 1;
    var name = document.createTextNode(buttonName);
    var button = document.createElement("BUTTON");
    button.appendChild(name);
    document.body.appendChild(button);
    button.setAttribute("id", buttonName);
    document.getElementById(buttonName).addEventListener("click", createButton);
    document.getElementById(buttonName).addEventListener("oncontextmenu", rightClick);
}


function rightClick(){

}


function toggleDisplay(id, id2) {
    if (document.getElementById(id).style.display == "block") {
        document.getElementById(id).style.display = "none";
        document.getElementById(id2).innerHTML = ">";
    } else {
        document.getElementById(id).style.display = "block";
        document.getElementById(id2).innerHTML = "^";
    }
}

function displayMenu(){
    alert('Menu Displayed')
}

