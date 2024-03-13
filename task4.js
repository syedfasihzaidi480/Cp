$(document).ready(function() {
    $('.removeRow').click(function() {
        $(this).closest('tr').remove();
    });
});
