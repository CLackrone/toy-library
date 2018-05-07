class AddLikesToToys < ActiveRecord::Migration[5.1]
  def change
    add_column :toys, :likes, :integer
  end
end
