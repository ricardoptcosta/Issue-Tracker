var elementId = 0;

function showInput() {
    var description = document.getElementById("description").value;
    var severity = document.getElementById("severity").value;
    var assignedTo = document.getElementById("assignedTo").value;

    createIssue(description, severity, assignedTo);
}

function createIssue(description, severity, assignedTo) {
    var node = document.createElement("li");

    node.id = elementId;
    elementId++;

    var button = document.createElement("button");
    button.setAttribute('content', 'test content');
    button.setAttribute('class', 'btn');
    button.innerHTML = 'Delete';

    var textnode = document.createTextNode(description + " - " +
        severity + " - " + assignedTo);

    node.appendChild(textnode);

    document.getElementById("p1").appendChild(node).append(button)

    button.addEventListener("click", function () {
        document.getElementById(node.id).remove();
    })

}