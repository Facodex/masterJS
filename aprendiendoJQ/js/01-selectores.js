$(document).ready(function(){
    
    $('#parrafo1').css('background', 'red'); //selector de ID

    $('.parrafo').click(function(){  //selector de clases
        $(this).css('background', 'blue');
    });

    //si queremos tambien los podemos meter a una var, igual con los casos anteriores
    var p = $('p');  //selector de etiquetas
    p.css('font-size', '30px');
});