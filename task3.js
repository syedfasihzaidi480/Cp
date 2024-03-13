$(document).ready(function() {
    $('#toggleButton').click(function() {
        var image = $('#uploadedImage');
        var button = $(this);
        
        if (image.is(':visible')) {
            image.hide();
            button.text('Show Image');
        } else {
            image.show();
            button.text('Hide Image');
        }
    });

    $('#imageInput').change(function() {
        var file = this.files[0];
        var reader = new FileReader();
        
        reader.onload = function(event) {
            $('#uploadedImage').attr('src', event.target.result);
        }
        
        reader.readAsDataURL(file);
    });
});
