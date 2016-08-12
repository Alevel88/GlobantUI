$('#oculto').hide();

$(document).ready(function () {
    $('#oculto').fadeIn(3000);
});





$('#btn').click(function () {
    $.get('http://api.icndb.com/jokes/random', function (data) { 
        $('#joke').text(data);       
    });
});



