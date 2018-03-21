$(document).ready(function() {
  console.log("JQUERY WAS LOADED");

  $("#formId").submit(function(event){
    event.preventDefault();
    console.log("I AM THE FORM AND I WAS SUBMITTED");
    var name = $("#name").val();
    var address = $("#address").val();
    var department = $("#department").val();
    var itemordered = $("#item-ordered").val();
    var dateordered = $("#date-ordered").val();

    $(".name").text(name);
    $(".address").text(address);
    $(".department").text(department);
    $(".item-ordered").text(itemordered);
    $(".date-ordered").text(dateordered);

    $("#receipt").show();
  });
  // $("#submitBtn").click(function() {
  // });
});
