let selectedValues=[];
let selectedCategories=[];
function filtercategory(target){
    if (target === "all"){
        $("ul.projects_list li").show();
        $("#selected_tags").empty();
        selectedCategories=''
    }
    else {
    //    selectedCategories= $.makeArray(selectedCategories);
       selectedCategories.push(target);
    //    selectedCategories=selectedCategories.toString();
       $("ul.projects_list li").hide();
       for(let tag of selectedCategories){
$("."+tag).show();
       }
        // $("li").not(selectedCategories.toString()).hide();
        $("#selected_tags").append(`<li id=${target}>${event.target.outerText}</li>`);
}
}

$("#files").change(function(){
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#project_picture').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#files").change(function() {
    readURL(this);
  });

function filterTags(input){
let found=false;
let tagsContainer=$.makeArray($("#id_tags").children());
$("#id_tags").css("visibility","")
let val;
for (let category of tagsContainer){
    val=category.value;
    if(category.outerText.toUpperCase().indexOf(input.toUpperCase()) > -1){
        $("option[value='" +val  + "']").show();
        found=true;
}
else{
    $("option[value='" +val  + "']").hide();
}
}
if(found){
    $("#id_tags").show();
    $("#add_new_tag").hide();
}
else{
    $("#id_tags").hide();
    $("#add_new_tag").show();
}
if(input !=='' && event.keyCode === 13 && $("#id_tags").is(":hidden"))
    addNewTag(input);
}

function showAll(){
    $("#id_tags").show().css("visibility","visible");
    $("#id_tags").children().show();
}

function handleSelection(val){
    if($("#project_tags").children().length == 0)
    $("#project_tags").append(`<p>Project Tags </p>`);
    let tags=$.makeArray($("#id_tags").children()), selected=$.makeArray($("#id_tags").children("option:selected"));
    selectedValues=Array.from(selectedValues);
    selectedValues.push(selected[0].value);
    selectedValues=selectedValues.toString()
    $.each(selectedValues.split(","), function(i,e){
    $("#id_tags option[value='" + e + "']").prop("selected", true);
});
    let tag=tags[val - 1].outerText;
    $("#search_tag").val("");
    let children=$("#id_tags").children()
    $("#id_tags").css("visibility","hidden");
    $("#project_tags").append(`<li id=${val}>${tag}&nbsp; &#10006;</li>`);
    $("#"+ val).css({
        "background-color": '#FBE555',
        "fontSize": '15px',
        'height': '25px',
        'width':$("#"+val).outerWidth()+ 20 +'px'
    });
    $("#project_tags").unbind('click *');
    $("#project_tags").on('click','*',handleclick);
}

function handleclick(event){
    $("#"+event.target.id).remove();
    if($("#project_tags").children().length == 1)
    $("#project_tags").empty();
    $("option[value='" +event.target.id  + "']").removeAttr('selected');
}
$("#add_new_tag").hide();

function addNewTag(input){
    let val=$("#id_tags").children().length +1;
    $("#id_tags").append(`<li value=${val} selected>${input}</li>`);
    $("#project_tags").unbind('click *');
    handleSelection(val);
}

$('#categories_form').on('keyup keypress', function(event) {
    let keyCode = event.keyCode || event.which;
    if (keyCode === 13) { 
      event.preventDefault();
      return false;
    }
  });
