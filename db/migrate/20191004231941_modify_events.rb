class ModifyEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :cityname, :string, null: false
    add_column :events, :date, :string, null: false
    remove_column :events, :body
  end
end
