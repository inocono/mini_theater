class CreateTheaters < ActiveRecord::Migration[6.1]
  def change
    create_table :theaters do |t|
      t.string :name, null: false
      t.string :image
      t.text :description
      t.string :address
      t.string :screen
      t.string :seat
      t.text :price
      t.text :homepage
      t.text :sns
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
