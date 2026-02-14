const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const planList = document.getElementById("ul.planList;")



addItemButton.addEventListener("click", () => {
    let ul = document.getElementById("thelist");
    let li = document.createElement("li");
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = "";
});


