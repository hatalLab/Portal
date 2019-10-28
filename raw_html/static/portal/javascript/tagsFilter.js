let maxCategoriesLength=10;// this variable determine how many tags categories container contains

function defaultUserCategories() {//this function sets the default categories container
    $(".categories-container").empty();
    let interestTags=$.makeArray($("#user-interest-tags").children()).map((item)=> { //interestTags will contain all the categories the user interested in
        let value=item.id;
        value=value.replace(/_/g, ' ');
        return value;
    }
); 
    for(let item of interestTags) { //appending the user interested tags
        $(".categories-container").append(`<button class="btn" name='${item.replace(/\s/g,'_')}'onclick="filtercategory('${item.replace(/\s/g,'_')}')">${item}</button>`);
    }

    let childrenLength=$.makeArray($(".categories-container").children()).length; //how many categories already has in categories container

    if (childrenLength<maxCategoriesLength) {
        let moreTags=filterDuplicateTags(interestTags);//delete the existing tags from the all tags list
        let numberOfAdditions=Math.min(maxCategoriesLength-childrenLength, moreTags.length);
        for(let i=0; i<numberOfAdditions; i++) {//adding more tags
            $(".categories-container").append(`<button class="btn" name='${moreTags[i].replace(/\s/g,'_')}'onclick = "filtercategory('${moreTags[i].replace(/\s/g,'_')}')">${moreTags[i]}</button>`);
        }
    }
}

defaultUserCategories();

function filterDuplicateTags(existingCategories) {//the function gets the existing tags and remove them from array of all tags
    let allTags=$.makeArray($("#existing_tags").children());
    let tagsToAdd=allTags.map((item)=> {//tagsToAdd will contain which tags to add
            let value=item.id;
            value=value.replace(/_/g, ' ');
            return value;
        }
    );
    for (let i=0; i<existingCategories.length; i++) { //deleting tags that we already apended
        let index=tagsToAdd.indexOf(existingCategories[i]);
        if(index > -1) 
            tagsToAdd.splice(index, 1);
    }
    return tagsToAdd;
}

let selectedCategories=[]; //will contain the filter history for the filterCategory function

function filtercategory(tag) { //filter project by category
    if (tag==="all") {
        $("ul.projects_list li").show(); //show all
        selectedCategories=[]; //clear history
        handleActiveFilters();
    }
    else {
        selectedCategories.push(tag); //add new filter to the history
        $("ul.projects_list li").hide();  //hide all
        for(let tag of selectedCategories) {  //show based on the history
            $("."+tag).show();
        }
        handleActiveFilters();
    }
}

function handleActiveFilters(){ //give border to selected categories
    $("div.categories-container button").css('border','none');
    for (let tag of selectedCategories){
    $(".categories-container > button[name = '"+tag +"']").css({"border-color": "#C1E0FF", 
    "border-width":"2px", 
    "border-style":"solid"});
}
    if(selectedCategories.length === 0)
        $(".fixed-container > button[name='all']").css({"border-color": "#C1E0FF", 
        "border-width":"2px", 
        "border-style":"solid"});
}

function filter(input) { //this function filters the categories container
    if (input==='')
        defaultUserCategories(); //show default
    else {
        let defaultTags=$.makeArray($('.categories-container').children()).map((item)=> item.innerText);
        for (let item of defaultTags) { //filter default tags
            if (item.indexOf(input)===-1)
                animate(item); //remove item
        }
        let oldTags=$.makeArray($('.categories-container').children()).map((item)=> item.attributes.name.nodeValue);
        let newTags=filterDuplicateTags(oldTags);
        let numberOfTagsToAdd=maxCategoriesLength-oldTags.length;
        if (numberOfTagsToAdd > 0) {
            for(let tag of newTags) {
                if(tag.indexOf(input) > -1) {
                    addAnimate(tag);
                    numberOfTagsToAdd--;
                }
                if(numberOfTagsToAdd===0)
                    break;
            }
        }
    }
}

function animate(tag) {  //remove item
    $(".categories-container > button[name='"+tag + "']").remove(); //delete
}

function addAnimate(tag) { //add item
    $(".categories-container").append(`<button class="btn" name='${tag} onclick="filtercategory('${tag}')">${tag}</button>`);
}