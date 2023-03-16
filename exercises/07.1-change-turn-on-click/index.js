var currentUser = "Mario";

window.onload = function loadfn() {
    document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
    // if (currentUser == "Mario" || currentUser == "Josh") {
    //     currentUser = "Juan";
    // } else if (currentUser == "Juan" || currentUser == "Josh") {
    //     currentUser = "Mario";
    // } else {
    //     currentUser = "Josh";

    // }

    switch (currentUser) {
        case "Mario":
            currentUser = "Juan"
            break;
        case "Juan":
            currentUser = "Josh"
            break;
        default:
            currentUser = "Mario"
    }

    document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}