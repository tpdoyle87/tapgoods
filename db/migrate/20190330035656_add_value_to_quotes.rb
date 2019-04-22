class AddValueToQuotes < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :value, :integer
  end
end
