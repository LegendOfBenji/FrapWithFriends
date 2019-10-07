class UsersToEventsInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :summary, :string
    add_column :events, :story, :string
    add_column :events, :discussion, :string
    add_column :events, :quote, :string
    remove_column :users, :summary
    remove_column :users, :story
    remove_column :users, :discussion
    remove_column :users, :quote
  end
end
