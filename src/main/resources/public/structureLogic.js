/**
 * @author Austin Sass
 * @date 3/24/16
 * @overview
 */
var webSocket = new WebSocket("ws://" + location.hostname + ":" + location.port + "/structure");
webSocket.createStructure = function () { };
var creator = document.getElementById('creator');
var newfile = document.getElementById('newfile');
var bCount = 1;



/**
 * Creates a new div (folder) to be used as a container for more divs and buttons and places it inside another div (folder).
 * @param {string} divID - This is the id of the parent div in which the child div for the new folder will be created.
 */


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
    button.setAttribute("class", "folderStyle");
    button.addEventListener("dblclick", openFile);
    div.appendChild(dropB);
    div.appendChild(img);
    div.appendChild(button);
    div.appendChild(addB);
    div.appendChild(filesDiv);
    document.getElementById(divID).appendChild(div);
}


/**
 * Creates a new div and button to act as a file place-mark.
 * A double-click attribute is added to the newly created button,
 * allowing the end user to command the opening of a respective
 * file.
 * @param {String} divID - id of parent div.
 */

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

/**
 * This function returns a new button that is used to the toggle the display of submenus.
 * Usage of this function can been seen in the createFolder function.
 * @param id
 * @param divId
 * @returns {Element}
 */
function createDropButton(id, divId) {
    var dropB = document.createElement("BUTTON");
    dropB.innerHTML = ">";
    dropB.setAttribute("id", id);
    dropB.setAttribute("onclick", "toggleDisplay('"+ divId + "','" + id + "');");
    dropB.setAttribute("class", "dropdown");
    document.body.appendChild(dropB);
    return dropB;
}

/**
 * Creates a new button that is either able to create a new folder button or file button.
 * @param {String} id - Will be used to set the new button's ID.
 * @param {String} typeCall - Specifies whether this button is to be used as "createFile" or "createFolder".
 * @returns {Element} - returns the a new button
 *
 * @example
 * var newButton = createAddButton("foldButton001", "newFolder");
 */
function createAddButton(id, typeCall) {
    var addB = document.createElement("BUTTON");
    addB.innerHTML = (createImg(id+"img", 10, 10, "add_file.png")).outerHTML;
    addB.setAttribute("id", id);
    addB.setAttribute("class", "addButton")
    addB.setAttribute("onclick", "createFile('" + typeCall + "')");
    document.body.appendChild(addB);
    return addB;
}

/**
 *
 * @param {String} id - Used to set id attribute of image.
 * @param {String} hi - Used to set image height.
 * @param {String} wi - Used to set image width.
 * @param {String} imgfile - Name of image to be linked (Must be located in resource directory).
 * @returns {Element}
 */
function createImg (id, hi, wi, imgfile) {
    var img = document.createElement("img");
    img.setAttribute("id", id);
    img.setAttribute("height", hi);
    img.setAttribute("width", wi);
    img.setAttribute("src", imgfile);
    document.body.appendChild(img);
    return img;
}

/**
 *
 * @param {String} id
 * @returns {Element}
 */
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

