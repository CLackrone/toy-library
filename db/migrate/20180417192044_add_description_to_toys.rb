class AddDescriptionToToys < ActiveRecord::Migration[5.1]
  def change
    add_column :toys, :description, :text
    add_column :toys, :borrowed, :boolean
  end
end
