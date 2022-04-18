//Trabajando con el DOM y los textos
$(document).ready(function(){

    // 1)Metiendo a la lista lo que capturemos del input
    // aqui se podria usar (append, prepend, html, before y after en el mismo lugar, depende de donde queramos que se añada el contenido)
    $('#btnLink').click(function(){
        $('#menu').append('<li><a href="'+ $('#newLink').val() +'"></a></li>');
        viewLinks();
    })

    
    // 2)metiendo en la lista todo lo que haya dentro de los href
    viewLinks();

    function viewLinks(){
        $('a').each(function(index){
            var that = $(this); //that seria nuestra etiqueta <a>
            var enlace = that.attr('href'); //enlace seria nuestro contenido de href=""
            that.text(enlace);
        });
    };
    
    //buenisimo el attr y removeAttr(para aderir un atributo o sacar un atributo);
    





});