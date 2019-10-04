class AddHostInformation < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :summary, :string
    add_column :users, :story, :string
    add_column :users, :discussion, :string
    add_column :users, :quote, :string
    add_column :users, :image_url, :string, limit: 1
  end
end
