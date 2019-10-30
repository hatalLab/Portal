let maxCategoriesLength=10;// this variable determine how many tags categories container contains

function interestTags(){
    let tags=$.makeArray($("#user-interest-tags").children()).map((item)=> { //interestTags will contain all the categories the user interested in
        let value=item.id;
        value=value.replace(/\s/g,'_');
        return value;
    }
);
return tags 
}

function defaultUserCategories() {//this function sets the default categories container
    $(".categories-container").empty();
    let newTags=interestTags();

    for(let item of newTags) { //appending the user interested tags
        $(".categories-container").append(`<button class="btn" name='${item}'onclick="filtercategory('${item}')">${item.replace(/_/g,' ')}</button>`);
    }

    let childrenLength=$.makeArray($(".categories-container").children()).length; //how many categories already has in categories container

    if (childrenLength<maxCategoriesLength) {
        let moreTags=filterDuplicateTags(newTags);//delete the existing tags from the all tags list
        let numberOfAdditions=Math.min(maxCategoriesLength-childrenLength, moreTags.length);
        for(let i=0; i<numberOfAdditions; i++) {//adding more tags
            $(".categories-container").append(`<button class="btn" name='${moreTags[i]}'onclick = "filtercategory('${moreTags[i]}')">${moreTags[i].replace(/_/g,' ')}</button>`);
        }
    
    }
}

defaultUserCategories();

function filterDuplicateTags(existingCategories) {//the function gets the existing tags and remove them from array of all tags
    let allTags=$.makeArray($("#existing_tags").children());
    let tagsToAdd=allTags.map((item)=> {//tagsToAdd will contain which tags to add
            let value=item.id;
            value=value.replace(/\s/g,'_');
            return value;
        }
    );
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
    if (input===''){
        let tags=$.makeArray($('.categories-container').children()).map((item)=> item.innerText.replace(/_/g,' '));
        let interest=$.makeArray($('#user-interest-tags').children()).map((item)=> item.id.replace(/_/g,' '));
        for(let tag of interest){
            let index= tags.indexOf(tag);
            if(index > -1){
                tags.splice(index,1);
                $(`.categories-container > button[name=${tag.replace(/\s/g,'_')}]`).remove();
            }
        }
        if (tags.length + interest.length > maxCategoriesLength){
            let iterate=tags.length +interest.length -maxCategoriesLength;
            for(let i=0;i<iterate;i++){
                $('.categories-container').children().last().remove();
            }
        }
        tags=interestTags();
        for (let tag of tags){
            addButton(tag,'before');
        }
        tags=filterDuplicateTags(tags);
        let num=maxCategoriesLength-$.makeArray($('.categories-container').children()).length;
        if(num > 0){
            for(let i =0; i<num;i++){
                addButton(tags[i]);
            }
        }
    }

    else {
        let defaultTags=$.makeArray($('.categories-container').children()).map((item)=> item.innerText.replace(/\s/g,'_'));
        for (let item of defaultTags) { //filter default tags
            if (item.indexOf(input)===-1)
                removeButton(item.replace(/\s/g,"_")); //remove item
        }
        let oldTags=$.makeArray($('.categories-container').children()).map((item)=> item.attributes.name.nodeValue);
        let newTags=filterDuplicateTags(oldTags);
        let numberOfTagsToAdd=maxCategoriesLength-oldTags.length;
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
        }

    )
}

function addButton(tag, order) { //add item
    let container=$(".categories-container");

    let newButton=`<button class="btn"name='${tag.replace(/\s/g,'_')}'onclick="filtercategory('${tag.replace(/\s/g,'_')}')"style="opacity:0; font-size: 0px; padding: 0px;">${tag.replace(/_/g, ' ')}</button>`;
    if(order !==' before') 
        container.append(newButton);
    else 
        container.prepend(newButton);
    newButton=$(".categories-container > button[name='"+tag + "']");

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