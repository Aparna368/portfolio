window.onload = function() {
    var btn = document.getElementById("btn");
    var nav = document.getElementsByClassName("nav")[0];
    var container = document.getElementsByClassName("container")[0];

    btn.onclick = function() {
        if (nav.style.left === "0px") {
            nav.style.left = "-250px";
        } else {
            nav.style.left = "0px";
        }
        container.style.position = "relative";
    }
}
