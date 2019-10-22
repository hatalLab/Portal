let caftor= document.getElementById("plus").addEventprojects_listener("click",()=>{window.location.href="https://eloquentjavascript.net/index.html"})
function filtercategory(c) {
  if(c=="all") {
    var a = document.getElementById("projects_list").getElementsByClassName("filterDiv");
    for (let i = 0; i < a.length; i++)
    {
    a[i].style.display="block";
    }
    return;
  }
  var x = document.getElementsByClassName("projects_list");
  var y=document.getElementsByClassName("filterDiv");
  for (let i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }

 var s = document.getElementById("projects_list").getElementsByClassName(c);
 for (let i = 0; i < s.length; i++)
 {
 s[i].style.display="block";
 }

}
