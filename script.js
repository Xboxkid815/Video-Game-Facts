let count = 0
function addone() {
    count += 2 ** Math.max(0,Math.floor(Math.log2(count/25)))
    updateCount();
}

function updateCount() {
    document.getElementById("counter").innerHTML = count;
}
