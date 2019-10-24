 let selectedValues=[];
let selectedCategories=[];

function filtercategory(target){
    if (target === "all"){
        $("ul.projects_list li").show(); //show all
        // $("#selected_tags").empty();
        selectedCategories=''
    }
    else {
    //     let tags=$.makeArray($("#existing_tags").children()).map((item) =>item.id);
    // let toBeShown=tags;
    // for(let tag of selectedCategories){
    //     toBeShown=toBeShown.filter((item) =>{
    //         if(tag === item)
    //         return item
    //     });
    // }

    //    selectedCategories= $.makeArray(selectedCategories);
       selectedCategories.push(target);
       
    //    selectedCategories=selectedCategories.toString();
       $("ul.projects_list li").hide();
       for(let tag of selectedCategories){
$("."+tag).show();
       }
        // $("li").not(selectedCategories.toString()).hide();
        // $("#selected_tags").append(`<li id=${target}>${event.target.outerText}</li>`);
}
}

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#def_pic').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#id_img").change(function() {
    readURL(this);
  });

function filterTags(input){
let found=false;
let tagsContainer=$.makeArray($("#id_tags").children());
tagsContainer=tagsContainer.map((tag) => tag.className);
$("#id_tags").css("visibility","");
if(event.keyCode===13 || input === ""){
    $("#id_tags").toggle();
    $("#id_tags").hide();
    handleBtn();
}
else{
// let val;
        for (let category of tagsContainer){
            val=category.value;
                if(category.toUpperCase().indexOf(input.toUpperCase()) > -1){
                    // $("option[value='" +val  + "']").show();
                    $("."+category).show();
                    found=true;
            }
                else{
                    // $("option[value='" +val  + "']").hide();
                    $("."+category).hide();
                }
        }
        if(found){
            $("#id_tags").show();
            // $("#add_new_tag").hide();
            handleBtn();
        }
        else{
            $("#id_tags").hide();
            // $("#add_new_tag").show();
            handleBtn();
        }
        if(input !=='' && event.keyCode === 13 && $("#id_tags").is(":hidden"))
            addNewTag(input);
        }
}
function showAll(){
    $("#id_tags").toggle().css("visibility","visible");
    $("#id_tags").children().show();
    handleBtn();
}

function handleBtn(){
    if($("#id_tags").is(":visible")){
        $("#show_tags_btn").text("Hide Tags");
    }
    else
    $("#show_tags_btn").text("Show All Tags");
}
function handleSelection(val){
    let tags=$.makeArray($("#id_tags").children()); /* selected=$.makeArray($("#id_tags").children("option:selected")) */;
    /* selectedValues=Array.from(selectedValues);
    selectedValues.push(selected[0].value);
    selectedValues=selectedValues.toString(); */

   /*  $.each(selectedValues.split(","), function(i,e){ //select multiple
    $("#id_tags option[value='" + e + "']").prop("selected", true);
    $("div.bootstrap-tagsinput input").val(e);
    var element = $.Event( "keypress", { which: 13 } );
$('div.bootstrap-tagsinput input').trigger(element);
}); */
    // let tag=tags[val - 1].value;
    // $("#search_tag").val("");
    // let children=$("#id_tags").children()
    // $("#id_tags").css("visibility","hidden");
    // $("#project_tags").append(`<li id=${val}>${tag}&nbsp; &#10006;</li>`);
    // $("#"+ val).css({
    //     "background-color": '#FBE555',
    //     "fontSize": '15px',
    //     'height': '25px',
    //     'width':$("#"+val).outerWidth()+ 20 +'px'
    // });
    // $("#project_tags").unbind('click *');
    // $("#project_tags").on('click','*',handleclick);
    // var $input = $("input").tagsinput('input');
// $input.addClass('custom-class');
// $('input').tagsinput('add', 'vino');
    // $('.custom-class').tagsinput('add',val);
    // mytagsinput.tagsinput('add', { id: 1, text: 'mytext'});
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
$("#id_tags").hide();

    $("[id$=search_tag]").tagsinput('items');
$('input').keyup(function (event) {
    filterTags(event.target.value);
       });

$("#id_tags").children().on('click',function(){
    handleSelection(event.target.parentNode.className)});

    /* $("#show_tags_btn").keypress(function(e){
        if(e.keyCode === 13){
            e.preventDefault();
        }
     }); */

     /* $("#def_pic").mouseenter(function(){
         $("#def_pic").css('opacity','0.3');
         $(".edit").css("visibility","");
         $(".middle").css("opacity",'1');
     }).mouseleave(function(){
         $("#def_pic").css('opacity','1');
         $(".edit").css("visibility","hidden");
         $(".middle").css("opacity",'0');
     })
 */