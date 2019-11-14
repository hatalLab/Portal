let selectedValues=[];

$("#img_label").offset({top:$("#text-container").offset().top});
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
tags=tags.map((item)=>{let value = item.id
value = value.replace(/_/g,' ')
return value});

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
    let value=event.item.replace(/\s/g,'_');
        selected_tags.append(`<option selected="" value=${value}>${event.item}</option>`);
        $('.search-tag').off('click',handleSearchField);
        $(".search-tag").on('click',handleSearchField);
    }
);

search_field.on("itemRemoved", function(event) {
    let value=event.item.replace(/\s/g,'_');
        $("#selected_tags > option[value='"+value + "']").remove();
        select_field.tagsinput('add', event.item);
    }
);

function handleSelectField(event){
    select_field.tagsinput("remove",event.target.innerText);
}

function handleSearchField(event){
        search_field.tagsinput('remove',event.target.innerText);
    }


    $('.edit-tag').on('click',handleSelectField);

