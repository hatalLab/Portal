
let maxCategoriesLength=6;// this variable determine how many tags categories container contains
let favorites=$.makeArray($("#user-interest-tags").children()).map((tag) => tag.id);
let allCategories=$.makeArray($("#existing_tags").children()).map((tag) => tag.id);
let restTags=allCategories.filter((tag) => {
    let index;
    index=favorites.indexOf(tag);
    if(index ===-1)
        return tag;
});
let list={
    toRemove:[],
    toAdd:[]
};
let milisec=300;
let oneMiliSec=1;

function allbuttons(){
    for(let item of favorites) { //appending the user interested tags
        $(".categories-container").append(`<button class="filter-btn toggle-btn" data-toggle=".${item}" name='${item}'>${item.replace(/_/g,' ')}</button>`);
    }
    for(let item of restTags) { //appending the user interested tags
        $(".categories-container").append(`<button class="filter-btn toggle-btn" data-toggle=".${item}" name='${item}'>${item.replace(/_/g,' ')}</button>`);
        $(".categories-container > button[name='"+item.replace(/\s/g,'_') + "']").hide(oneMiliSec);
    }
    if (favorites.length<maxCategoriesLength) {
        let numberOfAdditions=Math.min(maxCategoriesLength-favorites.length, restTags.length);
        for (let i = 0; i < numberOfAdditions; i++) {
            $(".categories-container > button[name='"+restTags[i].replace(/\s/g,'_') + "']").show(milisec);   
        }
    }
}

allbuttons();
function format(){
var mixer=mixitup('#mix-wrapper', {
    load: {
        sort: 'order:asc'
    },
      animation: {
    //   effects: 'fade rotateZ(-180deg)',
    effectsOut: 'fade translateZ(-180%)',
      effectsIn: 'fade translateZ(180%)',
    //   easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      duration: 500
    },
    classNames: {
      block: 'controllers_container',
      elementToggle: 'toggle-btn',
      elementFilter: 'filter-btn',
      elementSort: 'sort-btn'
    },
    selectors: {
      target: '.mix-target'
    }
  });
}

format();

function filter(input) {
    input = input.toUpperCase();
    let tags = $.makeArray($('.categories-container > button:visible')).map((item) => item.name)//existing tags
    let theRest = [...restTags];
    if (input === "") {
        for (let tag of favorites) {             //remove a favorite tag from tags and adding it if it is hidden
            let index = tags.indexOf(tag);
            if (index === -1)
                list.toAdd.push(tag);
            else
                tags.splice(index, 1);
        }

        for(let item of tags){
            list.toRemove.push(item);
        }

        let num = Math.min(maxCategoriesLength - favorites.length, theRest.length);
        if (num > 0) {          //adding tags
            for (let i = 0; i < num; i++) {
                list.toAdd.push([theRest[i]]);
            }
        }
    }
    else {
        let upperCased = tags.map((item) => item.toUpperCase());
        for (let i = 0; i < upperCased.length;i++) {     //filter existing tags
            let index = upperCased[i].indexOf(input);
            if (index === -1)
                list.toRemove.push([tags[i]]);
        }
        let otherTags = allCategories.filter((tag) => {        //filtering duplicates
            if (tags.indexOf(tag) === -1) return tag;
        });

        upperCased = otherTags.map((item) => item.toUpperCase());
        for (let i = 0; i < upperCased.length; i++) {
            let index = upperCased[i].indexOf(input);
            if (index > -1)
                list.toAdd.push([otherTags[i]]);
        }
    }
    animation(list);
    list.toAdd=[];
    list.toRemove=[];
}

function animation(list) {
    let remove=[];
    for(let i =0;i<list.toRemove.length;i++){
        remove.push(list.toRemove[i].toString());
}
    let temp=[...remove]
    let add=[];
    for(let i =0;i<list.toAdd.length;i++){
        add.push(list.toAdd[i].toString());
}
    for(let item of temp){
        let index=add.indexOf(item);
        if(index >-1){
            add.splice(index,1);
            index=remove.indexOf(item);
            remove.splice(index,1);
        }
    }
    list.toAdd=add;
    list.toRemove=remove;
    for(let item of list.toRemove){
        removeButton(item.toString())
    }
    
    for(let item of list.toAdd){
        addButton(item.toString())
    }
    
   
}


function removeButton(tag) { //remove item
    let button=$(".categories-container > button[name='"+tag.replace(/\s/g,'_') + "']");
    button.transition({ fontSize:'0px'}, milisec, 'in',function(){
        button.transition({ height: '0px',width: '0px',margin:'0px',padding:'0px',border:'0px'})
        button.hide();
});
}

function addButton(tag, order) { //add item
    let button=$(".categories-container > button[name='"+tag.replace(/\s/g,'_') + "']");
    let all=$("#allTags");
    if(button.is(':visible')){
    button.transition({fontSize:'0px'}, milisec, 'in',function(){
        button.transition({ height: '0px',width: '0px',margin:'0px',padding:'0px',border:'0px'});
        button.show()});}
        button.transition({ fontSize:$("#allTags").css('fontSize')}, milisec, 'in',function(){
            button.transition({ height: '',width: '',margin:'',padding:'',border:''})
            button.show();
        });
}