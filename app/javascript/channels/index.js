// Import all the channels to be used by Action Cable
import "channels/room_channel"
import * as ActionCable from "@rails/actioncable"
window.App || (window.App = {})
window.App.cable = ActionCable.createConsumer()
