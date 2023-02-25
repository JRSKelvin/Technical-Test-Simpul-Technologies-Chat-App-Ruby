class RoomMessagesController < ApplicationController
  before_action :load_entities

  def create
    @room_message =
      RoomMessage.create room: @room,
                         username: params.dig(:room_message, :username),
                         message: params.dig(:room_message, :message)
    RoomChannel.broadcast_to @room, @room_message
  end

  protected

  def load_entities
    @room = Room.find params.dig(:room_message, :room_id)
  end
end
