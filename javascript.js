$(function () {
    // Attach click event to the 'ADDTODO' button
    $("#addbutton").click(handleButtonClick);
    // Attach click event to remove buttons to remove corresponding to-dos
    $("#todos").on("click", ".remove", removeMe);
});

function handleButtonClick() {
    var newTodo = $("#myinput").val();
    if (!newTodo) {
        $("#myinput").addClass("error");
        return;
    }
    $("#myinput").removeClass("error");
    
    // Append new row to the table with the new to-do item and remove button
    $("#todos tbody").append('<tr><td>' + newTodo + '</td><td><button class="remove">Remove</button></td></tr>');
}

function removeMe() {
    // Remove the parent row of the clicked remove button
    $(this).closest("tr").fadeOut(function() {
        $(this).remove();
    });
}
