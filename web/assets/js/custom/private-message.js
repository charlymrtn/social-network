jQuery(document).ready(function() {

  var ias = jQuery.ias({
    container: '#messages .box-content',
    item: '.message-item',
    pagination: '#messages .pagination',
    next: '#messages .pagination .next_link',
    triggetPageThreshold: 5
  });

  ias.extension(new IASTriggerExtension({
    text: 'Ver más mensajes',
    offset: 3
  }));

  ias.extension(new IASSpinnerExtension({
    src: URL+'/../assets/images/ajax-loader.gif'
  }));

  ias.extension(new IASNoneLeftExtension({
    text: 'NO hay más mensajes'
  }));

  ias.on('ready', function(event){

   });

   ias.on('rendered', function(event){

   });

});

function buttons(){

    $('[data-toggle="tooltip"]').tooltip();

    $(".btn-img").unbind("click").click(function(){
        $(this).parent().find('.pub-image').fadeToggle();
    });

    $(".btn-delete-pub").unbind("click").click(function(){
        $(this).parent().parent().addClass('hidden');

        $.ajax({
          url: URL+'/publication/remove/'+$(this).attr("data-id"),
          type: 'GET',
          success: function(response){
            console.log(response);
          }
        });
    });

    $(".btn-like").unbind("click").click(function(){
      $(this).addClass("hidden");
      $(this).parent().find(".btn-unlike").removeClass("hidden");

        $.ajax({
          url: URL+'/like/'+$(this).attr("data-id"),
          type: 'GET',
          success: function(response){
            console.log(response);
          }
        });
    });

    $(".btn-unlike").unbind("click").click(function(){
      $(this).addClass("hidden");
      $(this).parent().find(".btn-like").removeClass("hidden");

        $.ajax({
          url: URL+'/unlike/'+$(this).attr("data-id"),
          type: 'GET',
          success: function(response){
            console.log(response);
          }
        });
    });

}
