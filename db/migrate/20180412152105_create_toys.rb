class CreateToys < ActiveRecord::Migration[5.1]
  def change
    create_table :toys do |t|
      t.string :name
      t.integer :age_range
      t.string :image_url

      t.timestamps
    end
  end
end
