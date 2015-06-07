(function(){
  'use strict';

  var username = '';

  $(document).ready(function(){

    route();


    $(window).on('hashchange', function(event){
      event.preventDefault();
      route();
    });
  });

  function route() {
  switch(window.location.hash) {
    case '':
      $('.posts').html(JST['login']());
      break;
    case '#/chat':
      renderChat();
      break;
  }
}

function renderChat() {
  $('.posts').html(JST['chat']());
  console.log('username:', username);
  fetchMessages()
}




}

function renderMessages(messages){
  $('.messages-container').html(JST['messages'](messages));

}

$(function(){
  $("#textbox").keypress(function(event){
    if(event.which === 13) {
      event.preventDefault();
    }
  });
  $("#button").click(function() {
    var newMessage = $("#textbox").val();
    $("#textbox").val("");
    var prevState = $(".messages-container").html();
    $(".messages-container").html(prevState + "<br>" + newMessage);
  });
});
