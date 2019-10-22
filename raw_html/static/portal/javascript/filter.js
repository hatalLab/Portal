function filtercategory(target){
    if (target === "all"){
        $("ul.projects_list li").show();
        $("#selected_tags").empty();
    }
    else {
        $("li").not("."+target).hide();
        $("#selected_tags").append(`<li id=${target}>${event.target.outerText}</li>`);
}
}

// function findCategory()