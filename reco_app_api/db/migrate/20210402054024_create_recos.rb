class CreateRecos < ActiveRecord::Migration[6.1]
  def change
    create_table :recos do |t|
      t.string :category
      t.string :name
      t.money :cost
      t.string :source
      t.string :description
      t.timestamps
    end
  end
end
