 let selectedValues=[];


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader=new FileReader();

        reader.onload=function(e) {
            $('#def_pic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
  
$("#id_img").change(function() {
    readURL(this);
}

);

$('#categories_form').on('keyup keypress', function(event) {
    let keyCode=event.keyCode || event.which;

    if (keyCode===13) {
        event.preventDefault();
        return false;
    }
}

);

let select_field=$("#select_tags");
let search_field=$("#search_tag");
let selected_tags=$("#selected_tags");

select_field.tagsinput( {
        tagClass: "edit-tag label label-info"
    }
);

search_field.tagsinput({
    tagClass: "search-tag label label-info"
});

let tags=$.makeArray($("#existing_tags").children());
tags=tags.map((item)=>item.id);

for (let tag of tags) {
    select_field.tagsinput('add', tag);
}

select_field.on('itemRemoved', function(event) {
        search_field.tagsinput('add', event.item);
    }
);

select_field.on('itemAdded',function(){
    $('.edit-tag').off('click',handleSelectField);
    $('.edit-tag').on('click',handleSelectField);
})

search_field.on("itemAdded", function(event) {
        selected_tags.append('<option selected="" value="'+ event.item + '">physics</option>');
        $('.search-tag').off('click',handleSearchField);
        $(".search-tag").on('click',handleSearchField);
    }
);

search_field.on("itemRemoved", function(event) {
        $("#selected_tags > option[value='"+event.item + "']").remove();
        select_field.tagsinput('add', event.item);
    }
);

/* $(".edit-tag").on('click',function(event){ 
    $("#search_tag").tagsinput("add",event.target.innerText);
    select_field.tagsinput("remove",event.target.innerText)
}); */

function handleSelectField(event){
    select_field.tagsinput("remove",event.target.innerText);
}

function handleSearchField(event){
        search_field.tagsinput('remove',event.target.innerText);
    }
$('.etid-tag').on('click',handleSelectField);



