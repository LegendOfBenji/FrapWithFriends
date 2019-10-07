class Removecityfromevents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :cityname
  end
end
