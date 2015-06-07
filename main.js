(function(){
  'use strict';

  var username = '';

  $(document).ready(function(){

    // route();


    $(document).on("submit", ".chat-form", function(event) {
      event.preventDefault();
      var text = $(this).find('textarea').val();

    });

    function renderMessages(messages){
      $('.messages-container').html(JST['messages'](messages));

    }

    $(function(){
      $("#textbox").keypress(function(event){
        if(event.which === 13) {
          event.preventDefault();
        }
      });
      $("#button1").click(function() {
        var newMessage = $("#textbox1").val();
        $("#textbox1").val("");
        var prevState = $("#first-post").html();
        $("#first-post").html(prevState + "<br>" + newMessage);
        $.ajax({
        url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
        type: "POST",
        data: {
          content: newMessage
        }
      });
      });
    });


  });
//     $(window).on('hashchange', function(event){
//       event.preventDefault();
//       route();
//     });
//   });
//
//   function route() {
//   switch(window.location.hash) {
//     case '':
//       $('.posts').html(JST['login']());
//       break;
//     case '#/chat':
//       renderChat();
//       break;
//   }
// }

// function renderChat() {
//   $('.posts').html(JST['chat']());
//   console.log('username:', username);
//   fetchMessages()
// }
//
// var menuId = $(".posts").first().attr("id");
// var request = $.ajax({
//   // url: ,
//   type: "POST",
//   data: {id : menuId},
//   dataType: "json"
// });

// request.done(function(msg) {
//   $("#log").html( msg );
// });
//
// request.fail(function(jqXHR, textStatus) {
//   alert( "Request failed: " + textStatus );
// });





}) ();
