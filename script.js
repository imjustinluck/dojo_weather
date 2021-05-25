let isCels = true
let con = document.querySelectorAll("h3")

function convert() {
    isCels = !isCels
    if (isCels) {
        for (var i = 0; i < con.length; i++) {
            con[i].innerHTML = (Math.round(((parseFloat(con[i].innerHTML) - 32) * (5 / 9))*10))/10
        }
    }
    else {
        for (var i = 0; i < con.length; i++) {
            con[i].innerHTML = (Math.round(((parseFloat(con[i].innerHTML) * (9 / 5)) + 32) *10))/10
        }
    }
}
