class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :body, null: false
      t.integer :openings, null: false
      t.integer :location_id, null: false
      t.integer :host_id, null: false

      t.timestamps
    end
  end
end
