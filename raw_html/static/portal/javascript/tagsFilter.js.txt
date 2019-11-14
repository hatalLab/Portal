let maxCategoriesLength=10;// this variable determine how many tags categories container contains
let favorites=$.makeArray($("#user-interest-tags").children()).map((tag) => tag.id);
let allCategories=$.makeArray($("#existing_tags").children()).map((tag) => tag.id);
let restTags=allCategories.filter((tag) => {
    let index;
    index=favorites.indexOf(tag);
    if(index ===-1)
        return tag;
});

function defaultUserCategories() {//this function sets the default categories container
    $(".categories-container").empty();
    for(let item of favorites) { //appending the user interested tags
        $(".categories-container").append(`<button class="btn" name='${item}'onclick="filtercategory('${item}')">${item.replace(/_/g,' ')}</button>`);
    }

    if (favorites.length<maxCategoriesLength) {
        let numberOfAdditions=Math.min(maxCategoriesLength-favorites.length, restTags.length);
        for(let i=0; i<numberOfAdditions; i++) {//adding more tags
            $(".categories-container").append(`<button class="btn" name='${restTags[i]}'onclick = "filtercategory('${restTags[i]}')">${restTags[i].replace(/_/g,' ')}</button>`);
        }
    
    }
}

defaultUserCategories();

function filterDuplicateTags(existingCategories) {//the function gets the existing tags and remove them from array of all tags
    let tagsToAdd=[...allCategories];
    for (let i=0; i<existingCategories.length; i++) { //deleting tags that we already apended
        let index1=tagsToAdd.indexOf(existingCategories[i])
        let index2= tagsToAdd.indexOf(existingCategories[i].replace(/\s/g,'_')) ;
        if(index1 > -1) 
            tagsToAdd.splice(index1, 1);
            else if(index2 >-1)
                tagsToAdd.splice(index2, 1);
    }
    return tagsToAdd;
}

let selectedCategories=[]; //will contain the filter history for the filterCategory function

/* function filtercategory(tag) { //filter project by category
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
} */

/* function handleActiveFilters(){ //give border to selected categories
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
} */

function filter(input) { //this function filters the categories container
    if (input==='' ){
        let tags=$.makeArray($('.categories-container').children()).map((item)=> item.innerText.replace(/\s/g,'_'));//existing tags
        let childsNum=tags.length;
        for(let tag of favorites){
            let index= tags.indexOf(tag);
            if(index > -1){
                tags.splice(index,1);
                // $(`.categories-container > button[name=${tag.replace(/\s/g,'_')}]`).remove();
                removeButton(tag);
                childsNum--;
                // addButton(tag);
            }
        }
        if (tags.length + favorites.length > maxCategoriesLength){
            let iterate=tags.length +favorites.length -maxCategoriesLength;
            for(let i=0;i<iterate;i++){
                $('.categories-container').children().last().remove();
                tags.splice(tags.length-1,1);
                childsNum--;
            }
        }
        let reversed=favorites.slice().reverse();
        for (let tag of reversed){
            addButton(tag,'before');
        }
        // tags=filterDuplicateTags(tags);
        let num=maxCategoriesLength-childsNum;
        tags=restTags;
        num=Math.min(num,tags.length);
        if(num > 0){
            for(let i =0; i<num;i++){
                addButton(tags[i]);
            }
        }
    }

    else {
        let exisTags=$.makeArray($('.categories-container').children()).map((item)=> item.innerText.replace(/\s/g,'_'));
        let old=[...exisTags];
        for (let item of exisTags) { //filter default tags
            let index=item.indexOf(input);
            if (index === -1)
            {
                removeButton(item.replace(/\s/g,"_")); //remove item}
                index=old.indexOf(item);
                old.splice(index,1);
            }
            }
        // let oldTags=$.makeArray($('.categories-container').children()).map((item)=> item.attributes.name.nodeValue);
        let newTags=filterDuplicateTags(old);
        let numberOfTagsToAdd=maxCategoriesLength-old.length;
        if (numberOfTagsToAdd > 0) {
            for(let tag of newTags) {
                if(tag.indexOf(input) > -1) {
                    addButton(tag.replace(/\s/g,"_"));
                    numberOfTagsToAdd--;
                }
                if(numberOfTagsToAdd===0)
                    break;
            }
        }
    }
}

function removeButton(tag) { //remove item
    let button=$(".categories-container > button[name='"+tag.replace(/\s/g,'_') + "']");

    button.animate( {
            'padding': '0px',
            'margin-left': '-10px',
            'font-size': '0px'
        }

        , 500, function() {
            button.remove();
            console.log(`${tag} removed`);
            
        }

    )
}

function addButton(tag, order) { //add item
    let container=$(".categories-container");

    let newButton=`<button class="btn"name='${tag.replace(/\s/g,'_')}'onclick="filtercategory('${tag.replace(/\s/g,'_')}')"style="opacity:0; font-size: 0px; padding: 0px;">${tag.replace(/_/g, ' ')}</button>`;
    if(order !== 'before') 
        container.append(newButton);
    else 
        container.prepend(newButton);
    newButton=$(".categories-container > button[name='"+tag + "']");
    console.log(`${tag} added`);
    newButton.animate( {
            'opacity':1,
            'margin-right': '-10px'
        }

        , 1, function() {
            newButton.animate( {
                    'font-size': $("#allTags").css('font-size'),
                    'padding': $("#allTags").css('font-size')
                }

                , 500)
        }

    )
}