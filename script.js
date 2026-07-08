
let data = {
    count: 0,
    wood_per_click: 1,
    lumberjacks: 0,

    axe_cost: 10,
    lumberjack_cost: 25,
    chainsaw_cost: 100,

}

function updateCount() {
    document.getElementById("counter").innerHTML = data.count;
    document.getElementById("axe_cost").innerHTML = data.axe_cost;
    document.getElementById("lumberjack_cost").innerHTML = data.lumberjack_cost;
    document.getElementById("chainsaw_cost").innerHTML = data.chainsaw_cost;

    if (data.count >= data.axe_cost) {
        document.getElementById("axe").removeAttribute("disabled")
    } else {
        document.getElementById("axe").setAttribute("disabled", "")
    }
    if (data.count >= data.lumberjack_cost) {
        document.getElementById("lumberjack").removeAttribute("disabled")
    } else {
        document.getElementById("lumberjack").setAttribute("disabled", "")
    }
    if (data.count >= data.chainsaw_cost) {
        document.getElementById("chainsaw").removeAttribute("disabled")
    } else {
        document.getElementById("chainsaw").setAttribute("disabled", "")
    }
}

document.getElementById("button").addEventListener("click", function () {
    data.count += data.wood_per_click
    updateCount()
})

document.getElementById("axe").addEventListener("click", function () {
    if (data.count >= data.axe_cost) {
        data.count -= data.axe_cost
        data.axe_cost += 3
        updateCount()
        data.wood_per_click += 1
    }
})

document.getElementById("lumberjack").addEventListener("click", function () {
    if (data.count >= data.lumberjack_cost) {
        data.count -= data.lumberjack_cost
        data.lumberjack_cost += 5
        updateCount()
        data.lumberjacks += 1
    }
})

document.getElementById("chainsaw").addEventListener("click", function () {
    if (data.count >= data.chainsaw_cost) {
        data.count -= data.chainsaw_cost
        data.chainsaw_cost += 10
        updateCount()
        data.wood_per_click += 10
    }
})

function everySecond() {
    data.count += data.lumberjacks
    updateCount()
    setTimeout(everySecond, 1000)
}
everySecond()