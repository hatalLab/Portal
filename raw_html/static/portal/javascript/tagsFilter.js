function defaultUserCategories() {
    $(".categories-container").empty();
    let interestTags=$.makeArray($("#user-interest-tags").children()); //interestTags will contain all the categories the user interested in

    interestTags=interestTags.map((item)=> {
            let value=item.id;
            value=value.replace(/_/g, ' ');
            return value;
        }

    );

    for(let item of interestTags) { //appending the user interested tags
        $(".categories-container").append(`<button class="btn"name='${item}'onclick="filtercategory('${item}')">${item}</button>`);
    }
    let children=$.makeArray($(".categories-container").children()).length; //how many categories already has in categories container
    let maxCategoriesLength=10;
    if (children<maxCategoriesLength) {
        let moreTags=allTags(interestTags);
        let numberOfAdditions=Math.min(maxCategoriesLength-children, moreTags.length);
        for(let i=0; i<numberOfAdditions; i++) {//adding more tags
            $(".categories-container").append(`<button class="btn"name='${moreTags[i]}'onclick="filtercategory('${moreTags[i]}')">${moreTags[i]}</button>`);
        }
    }
}

defaultUserCategories();

function allTags(existingCategories){
    let allTags=$.makeArray($("#existing_tags").children()); 

   let moreTags=allTags.map((item) => { //how many tags to add
            let value=item.id;
            value=value.replace(/_/g, ' ');
            return value
        }
    );

    for (let i=0; i<existingCategories.length; i++) {
        //deleting tags that we already apended
        let index=moreTags.indexOf(existingCategories[i]);
        if(index > -1)
         moreTags.splice(index, 1);
    }
    return moreTags;
}

let selectedCategories=[]; //will contain the filter history for the filterCategory function

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

function filter(input) {
    if(input === '')
    defaultUserCategories();
    else
    {
let defaultTags=$.makeArray($('.categories-container').children()).map((item) => item.innerText);
for (let item of defaultTags){
    if (item.indexOf(input) === -1)
        animate(item);
}
let oldTags=$.makeArray($('.categories-container').children()).map((item) => item.attributes.name.nodeValue);
let newTags=allTags(oldTags);
let numberOfTagsToAdd=maxCategoriesLength-oldTags.length;
if(numberOfTagsToAdd > 0){
for(let tag of newTags){
    if(tag.indexOf(input) > -1){
    addAnimate(tag);
    numberOfTagsToAdd--;
    if(numberOfTagsToAdd === 0)
    break;
}}
    }
    }
}

function animate(item){
    $(".categories-container > button[name='"+item + "']").remove();//delete
}

function addAnimate(tag){
    $(".categories-container").append(`<button class="btn" name='${tag} onclick="filtercategory('${tag}')">${tag}</button>`);
}