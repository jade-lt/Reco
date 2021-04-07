class AddImgToRecos < ActiveRecord::Migration[6.1]
  def change
    change_table :recos do |t|
      t.string :img
    end
  end
end
