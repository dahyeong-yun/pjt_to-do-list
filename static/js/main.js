$(function(){
    console.log("document ready");
});

function addTask() {
    var taskCon = document.getElementById('taskContent').value;
    console.log(taskCon);
    
    var contents =  document.getElementById("contents");
    console.log(contents);
    
    var makeDiv = document.createElement("div");
    var node = document.createTextNode(taskCon);
    makeDiv.classList.add("task");
    makeDiv.appendChild(node);
    contents.appendChild(makeDiv);
}

function init() {
    console.log("start");
}

window.onload = function() {
    console.log("window onload");
}

init(/*context*/);