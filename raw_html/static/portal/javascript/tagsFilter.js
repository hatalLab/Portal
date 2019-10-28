let interestTags=$.makeArray($("#user-interest-tags").children()); //interestTags will contain all the categories the user interested in
interestTags=interestTags.map((item) => {
   let value = item.id
value=value.replace(/_/g, ' ');
return value});//
for(let item of interestTags){//appending the user interested tags
    $(".categories-container").append(`<button class="btn" onclick="filtercategory('${item}')">${item}</button>`);
}

let children=$.makeArray($(".categories-container").children()).length; //how many categories already has in categories container
let maxCategoriesLength=4;
if (children<maxCategoriesLength){
let moreTags=$.makeArray($("#existing_tags").children());//how many tags to add
moreTags=moreTags.map((item) => {
    let value = item.id
   value= value.replace(/_/g, ' ');
    return value});
for (let i=0;i<interestTags.length;i++){//deleting tags that we already apended
    let index =moreTags.indexOf(interestTags[i]);
    if(index > -1)
    moreTags.splice(index, 1);
}
let numberOfAdditions=Math.min(maxCategoriesLength-children,moreTags.length)
for(let i=0;i<numberOfAdditions;i++){//adding more tags
    $(".categories-container").append(`<button class="btn" onclick="filtercategory('${moreTags[i]}')">${moreTags[i]}</button>`)
}
}

let selectedCategories=[];//will contain the filter history for the filterCategory function

function filtercategory(tag) {//filter project by category
    if (tag==="all") {
        $("ul.projects_list li").show(); //show all
        selectedCategories=''
    }

    else {
        selectedCategories.push(tag);
        $("ul.projects_list li").hide();

        for(let tag of selectedCategories) {
            $("."+tag).show();
        }
    }
}

function filter(input){

}
