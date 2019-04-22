class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.text :swanson
      t.integer :length
      t.integer :likes

      t.timestamps
    end
  end
end
