$(document).ready(function(){
  $('#add').on('click', function(){
    var items=$('input').val();
    $("div").append('<p>'+items+'</p>')
  });
  $("#remove").on('click', function(){
    var item=$('input').val();
    $('div').empty();
  })
}
)
