$(document).ready(function(){
$('#enter').on('click',function(){
var item = $('select option:selected').val();
   $('ul').append('<li>'+item+"</li>");
   if(item== 'Milk'){
   $('#pic').append("<img src='https://cloud.githubusercontent.com/assets/11163791/6759732/b1cb744a-cf18-11e4-909c-81b2570f3445.png'>");
   }
   else if (item=="Bananas"){
     $('#pic').append("<img src='https://cloud.githubusercontent.com/assets/11163791/6759953/b4ea5c70-cf1a-11e4-87a7-f99dcc13756b.png'>");;
}
else if (item=="Cake"){
  $('#pic').append("<img scr='https://cloud.githubusercontent.com/assets/11163791/6759935/7b5a1306-cf1a-11e4-8429-455de34b9128.jpg'>");
}
else{
  $('#pic').append("<img scr='https://cloud.githubusercontent.com/assets/11163791/6759943/87f0efb8-cf1a-11e4-93de-4df3afdf3794.png'>");
}
);
 $('#empty').on('click',function(){
var item = $('input').val();
$('ul').empty();
$('#pic').empty();
 });
});
