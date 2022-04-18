$(document).ready(function(){
    //EVENTOS: mouseover, mouseout, hover, click, dblclick, blur, focus, mousedown, mouseup
    //INTERESANTE COMO HICIMOS QUE NOS PERSIGA EL CURSOR

    var caja = $(".caja");

    //mouseover, mouseout, click, dblclick, focus y blur, mousedown, mouseup se pondria todo en el mimsmo lugar que en este caso esta mauseover
    // caja.mouseover(function(){
    //     $(this).css('background', 'red'); 
    // });

    // hover es la fucion de moseover y mouseout veamos un ejemplo

    function pintarVerde(){
        $(this).css('background', 'green');
    }
    function pintarAzul(){
        $(this).css('background', 'blue');
    }
    caja.hover(pintarVerde, pintarAzul);

    //Algo mas interesante, mostrando datos del INPUT
    var nombre = $('#nombre'); //mi input
    var datosUser = $('#datosUser'); //mi div

    nombre.blur(function(){
        datosUser.text($(this).val()).show();
    })
    
    //Haciendo que nos persiga el cursor X horizontalmente, Y verticalmente
    $(document).mousemove(function(){
        $('#ball').css('left', event.clientX)
                  .css('top', event.clientY); 
    });



});