$(document).ready(function() {
    $('.box').click(function() {
        var elementId = $(this).attr('id');
        var elementClass = $(this).attr('class');
        
        alert("ID: " + elementId + "\nClass: " + elementClass);
    });
});
