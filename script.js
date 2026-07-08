let count = 0
let wood_per_click = 1
let lumberjacks = 0

let axe_cost = 10
let lumberjack_cost = 25
let chainsaw_cost = 100

function updateCount() {
    document.getElementById("counter").innerHTML = count;
    document.getElementById("axe_cost").innerHTML = axe_cost;
    document.getElementById("lumberjack_cost").innerHTML = lumberjack_cost;
    document.getElementById("chainsaw_cost").innerHTML = chainsaw_cost;

    if (count >= axe_cost) {
        document.getElementById("axe").removeAttribute("disabled")
    } else {
        document.getElementById("axe").setAttribute("disabled", "")
    }
    if (count >= lumberjack_cost) {
        document.getElementById("lumberjack").removeAttribute("disabled")
    } else {
        document.getElementById("lumberjack").setAttribute("disabled", "")
    }
    if (count >= chainsaw_cost) {
        document.getElementById("chainsaw").removeAttribute("disabled")
    } else {
        document.getElementById("chainsaw").setAttribute("disabled", "")
    }
}

document.getElementById("button").addEventListener("click", function () {
    count += wood_per_click
    updateCount()
})

document.getElementById("axe").addEventListener("click", function () {
    if (count >= axe_cost) {
        count -= axe_cost
        axe_cost += 3
        updateCount()
        wood_per_click += 1
    }
})

document.getElementById("lumberjack").addEventListener("click", function () {
    if (count >= lumberjack_cost) {
        count -= lumberjack_cost
        lumberjack_cost += 5
        updateCount()
        lumberjacks += 1
    }
})

document.getElementById("chainsaw").addEventListener("click", function () {
    if (count >= chainsaw_cost) {
        count -= chainsaw_cost
        chainsaw_cost += 10
        updateCount()
        wood_per_click += 10
    }
})

function everySecond() {
    count += lumberjacks
    updateCount()
    setTimeout(everySecond, 1000)
}
everySecond()