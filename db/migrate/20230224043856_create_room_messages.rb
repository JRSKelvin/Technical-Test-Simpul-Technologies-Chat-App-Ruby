class CreateRoomMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :room_messages do |t|
      t.references :room, null: false, foreign_key: true
      t.string :username
      t.text :message

      t.timestamps
    end
  end
end
