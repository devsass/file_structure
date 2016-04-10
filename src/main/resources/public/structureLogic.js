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
    var filesDiv = createDiv(buttonName + "div" + "files");
    var img = createImg(buttonName + "img", "14", "20", "index.png");
    var name = document.createTextNode(buttonName);
    var button = document.createElement("BUTTON");
    var dropB = createDropButton(buttonName + "drop", filesDiv.getAttribute("id"));
    var addB = createAddButton(buttonName + "add", filesDiv.getAttribute("id"));
    button.appendChild(name);
    document.body.appendChild(button);
    button.setAttribute("id", buttonName);
    button.setAttribute("class", "fileStyle");
    button.addEventListener("dblclick", openFile);
    div.appendChild(dropB);
    div.appendChild(img);
    div.appendChild(button);
    div.appendChild(addB);
    div.appendChild(filesDiv);
    document.getElementById(divID).appendChild(div);
}

function createFile (divID) {
    var buttonName = 'button' + bCount;
    bCount += 1;
    var div = createDiv(buttonName + "div");
    //var img = createImg(buttonName + "img", "14", "20", "index.png");
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

function createDropButton(id, divId) {
    var dropB = document.createElement("BUTTON");
    dropB.innerHTML = ">";
    dropB.setAttribute("id", id);
    dropB.setAttribute("onclick", "toggleDisplay('"+ divId + "','" + id + "');");
    dropB.setAttribute("class", "dropdown");
    document.body.appendChild(dropB);
    return dropB;
}

function createAddButton(id, param) {
    var addB = document.createElement("BUTTON");
    addB.innerHTML = (createImg(id+"img", 10, 10, "add_file.png")).outerHTML;
    addB.setAttribute("id", id);
    addB.setAttribute("class", "addButton")
    addB.setAttribute("onclick", "createFile('" + param + "')");
    document.body.appendChild(addB);
    return addB;
}

function createImg (id, hi, wi, imgfile) {
    var img = document.createElement("img");
    img.setAttribute("id", id);
    img.setAttribute("height", hi);
    img.setAttribute("width", wi);
    img.setAttribute("src", imgfile);
    document.body.appendChild(img);
    return img;
}

function createDiv(id) {
    var div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", "folder");
    document.body.appendChild(div);
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

