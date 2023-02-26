// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery3
//= require popper
//= require bootstrap-sprockets
import "@hotwired/turbo-rails"
import "controllers"
import "channels"

$(function () {
  $("#new_room_message").on("ajax:success", function (a, b, c) {
    $(this).find('input[type="text"]').val("");
  });
});

$(function () {
  $('[data-channel-subscribe="room"]').each(function (index, element) {
    var $element = $(element),
      room_id = $element.data("room-id"),
      messageTemplate = $('[data-role="message-template"]');

    $element.animate({ scrollTop: $element.prop("scrollHeight") }, 1000);

    App.cable.subscriptions.create(
      {
        channel: "RoomChannel",
        room: room_id,
      },
      {
        received: function (data) {
          var content = messageTemplate.children().clone(true, true);
          content
            .find('[data-role="user-avatar"]')
            .attr("src", "https://gravatar.com/avatar/1.png");
          content.find('[data-role="message-text"]').text(data.message);
          content.find('[data-role="message-date"]').text(data.updated_at);
          $element.append(content);
          $element.animate({ scrollTop: $element.prop("scrollHeight") }, 1000);
        },
      }
    );
  });
});
