
document.getElementById("add-button").addEventListener("click", function () {
    CreateItem();
})

function CreateItem(name = "") {
    let div = document.createElement("div");
    let input = document.createElement("input");
    input.value = name
    input.type = "text";

    let del = document.createElement("button");
    del.textContent = "Trash";
    del.addEventListener("click", function () {
        div.remove();
    });
    let check = document.createElement("button");
    check.textContent = "✅";
    check.addEventListener("click", function () {

        createCompleted(div.children[0].value);


        div.remove();
        alert("Congrats, you completed your task");


    });


    div.className = "item";
    div.appendChild(input);
    div.appendChild(del);
    div.appendChild(check);

    document.getElementById("items").appendChild(div);
}

function createCompleted(name) {
    let completed = document.createElement("p");
    completed.className = "completed";
    completed.textContent = name
    document.getElementById("completed").appendChild(completed);
}

function save() {
    let data = {
        items: [],
        completed: [],
    }

    for (let item of document.getElementById("items").children) {
        data.items.push(item.children[0].value)
    }
    for (let item of document.getElementById("completed").children) {
        data.completed.push(item.textContent)
    }
    localStorage.setItem("todo", JSON.stringify(data))
}
setInterval(save, 1000)
let data = localStorage.getItem("todo")
if (data == null) {
    data = {
        items: [],
        completed: [],
    }

}
else {
    data = JSON.parse(data)
}
for (let item of data.items) CreateItem(item)
for (let item of data.completed) createCompleted(item)