let caftor = document.getElementById("plus").addEventListener("click", () => {
    window.location.href = "https://eloquentjavascript.net/index.html"
})

function filtercategory(c) {
    if (c == "all") {
        var a = document.getElementById("list").getElementsByClassName("filterDiv");
        for (let i = 0; i < a.length; i++) {
            a[i].style.display = "block";
        }
        return;
    }
    var x = document.getElementById("list").getElementsByClassName("filterDiv");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    var s = document.getElementById("list").getElementsByClassName(c);
    for (let i = 0; i < s.length; i++) {
        s[i].style.display = "block";
    }

}