let data = localStorage.getItem("data")
if (data === null) {
    data = default_data()
} else {
    data = { ...default_data(), ...JSON.parse(data)}
}

function default_data() {
    return {
        count: 0,
        wood_per_click: 1,
        lumberjacks: 0,
        woodchucks: 0,
        

        axe_cost: 10,
        lumberjack_cost: 25,
        chainsaw_cost: 100,
        woodchuck_cost: 500,
        timber_harvester_cost: 10000

    }
}

function updateCount() {
    document.getElementById("counter").innerHTML = data.count;
    document.getElementById("axe_cost").innerHTML = data.axe_cost;
    document.getElementById("lumberjack_cost").innerHTML = data.lumberjack_cost;
    document.getElementById("chainsaw_cost").innerHTML = data.chainsaw_cost;
    document.getElementById("woodchuck_cost").innerHTML = data.woodchuck_cost;
    document.getElementById("timber_harvester_cost").innerHTML = data.timber_harvester_cost;
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
     if (data.count >= data.woodchuck_cost) {
        document.getElementById("woodchuck").removeAttribute("disabled")
    } else {
        document.getElementById("woodchuck").setAttribute("disabled", "")
    }

     if (data.count >= data.timber_harvester_cost) {
        document.getElementById("timber_harvester").removeAttribute("disabled")
    } else {
        document.getElementById("timber_harvester").setAttribute("disabled", "")
    }
}
    localStorage.setItem("data", JSON.stringify(data))


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
document.getElementById("woodchuck").addEventListener("click", function () {
    if (data.count >= data.woodchuck_cost) {
        data.count -= data.woodchuck_cost
        data.woodchuck_cost += 50
        updateCount()
        data.woodchucks += 25
    }
})
document.getElementById("timber_harvester").addEventListener("click", function () {
    if (data.count >= data.timber_harvester_cost) {
        data.count -= data.timber_harvester_cost
        data.timber_harvester_cost += 10000
        updateCount()
        data.wood_per_click += 100
    }
})

document.getElementById("Reset").addEventListener("click", function () {
    data = default_data()
    updateCount()
})

function everySecond() {
    data.count += data.lumberjacks
    data.count += data.woodchucks * 25
    updateCount()
    setTimeout(everySecond, 1000)
}
everySecond()