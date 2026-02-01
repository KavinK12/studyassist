const { createElement } = require("react");



function newplan() {
    const newp = document.createElement("div")
    newp.innerHTML = "<h1>This is a new plan</h1> <h3> We like to plan</h3>";
    document.body.appendChild(newp);
}