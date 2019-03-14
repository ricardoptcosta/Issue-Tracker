var elementId = 0;

var description = document.getElementById("description");
var severity = document.getElementById("severity");
var assignedTo = document.getElementById("assignedTo");

function showInput() {


    var descriptionValue = description.value;
    var severityValue = severity.value;
    var assignedToValue = assignedTo.value;


    createIssue(descriptionValue, severityValue, assignedToValue);

    clearInputFields();
}

function createIssue(descriptionValue, severityValue, assignedToValue) {
    var node = document.createElement("li");

    node.id = elementId;
    elementId++;

    var button = document.createElement("button");
    button.setAttribute('content', 'test content');
    button.setAttribute('class', 'btn');
    button.innerHTML = 'Delete';

    var textnode = document.createTextNode(descriptionValue + " - " +
        severityValue + " - " + assignedToValue);

    node.appendChild(textnode);

    document.getElementById("p1").appendChild(node).append(button)

    button.addEventListener("click", function () {
        document.getElementById(node.id).remove();
    })
}

function clearInputFields() {
    description.value = "";
    severity.value = "low";
    assignedTo.value = "";

}