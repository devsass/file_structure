/**
 * Created by austin on 3/24/16.
 */
var webSocket = new WebSocket("ws://" + location.hostname + ":" + location.port + "/structure");
webSocket.createStructure = function () { };
var creator = document.getElementById('creator');
var newfile = document.getElementById('newfile');
document.getElementById("creator").addEventListener("click", createButton);
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
    document.getElementById("creator").addEventListener("click", createButton);
    alert('You right clicked me');
    creator.firstChild.data = "renamed";
}

