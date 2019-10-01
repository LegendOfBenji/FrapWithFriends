class CreateAttendees < ActiveRecord::Migration[5.2]
  def change
    create_table :attendees do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
      add_index :attendees, [:user_id, :event_id], unique: true
  end
end
