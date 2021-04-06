class AddDescriptionToRecos < ActiveRecord::Migration[6.1]
  def change
    change_table :recos do |t|
      t.string :genre
    end
  end
end
