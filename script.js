console.log("Testing the connection to javascript file");
var player = "X"
function chooseBox(id) {
    console.log(id);
    var element = document.getElementById(`${id}`)
    if (element.innerHTML == "") {
        document.getElementById(`${id}`).innerHTML = player;
        if (player == "X") {
            player = "O";
        }
        else {
            player = "X"
        }
    }
}
