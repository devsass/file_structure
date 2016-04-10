/**
 * Created by austin on 3/24/16.
 */
var webSocket = new WebSocket("ws://" + location.hostname + ":" + location.port + "/structure");
webSocket.createStructure = function () { };
var creator = document.getElementById('creator');
var newfile = document.getElementById('newfile');
var bCount = 1;


function createFolder (divID) {
    var buttonName = 'button' + bCount;
    bCount += 1;
    var div = createDiv(buttonName + "div");
    document.body.appendChild(div);
    var img = createImg(buttonName + "img", "14", "20", "index.jpg");
    document.body.appendChild(img);
    var name = document.createTextNode(buttonName);
    var button = document.createElement("BUTTON");
    button.appendChild(name);
    document.body.appendChild(button);
    button.setAttribute("id", buttonName);
    button.setAttribute("class", "fileStyle");
    button.addEventListener("dblclick", openFile);
    div.appendChild(img); div.appendChild(button);
    document.getElementById(divID).appendChild(div);
}

function createFile (divID) {
    var buttonName = 'button' + bCount;
    bCount += 1;
    var div = createDiv(buttonName + "div");
    document.body.appendChild(div);
    //var img = createImg(buttonName + "img", "14", "20", "index.jpg");
    //document.body.appendChild(img);
    var name = document.createTextNode(buttonName);
    var button = document.createElement("BUTTON");
    button.appendChild(name);
    document.body.appendChild(button);
    button.setAttribute("id", buttonName);
    button.setAttribute("class", "fileStyle");
    button.addEventListener("dblclick", openFile);
    //div.appendChild(img);
    div.appendChild(button);
    document.getElementById(divID).appendChild(div);
}

function createImg (id, hi, wi, imgfile) {
    var img = document.createElement("img");
    img.setAttribute("id", id);
    img.setAttribute("height", hi);
    img.setAttribute("width", wi);
    img.setAttribute("src", imgfile);
    return img;
}

function createDiv(id) {
    var div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", "folder");
    return div;
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

function openFile() {
    alert('You opened a file');
}

