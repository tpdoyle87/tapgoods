class ChangeLikesColumnToVotes < ActiveRecord::Migration[5.2]
  def change
        rename_column :quotes, :likes, :votes
  end
end
