class DropLocationTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :locations
    add_column :events, :lat, :float
    add_column :events, :lng, :float
  end
end
