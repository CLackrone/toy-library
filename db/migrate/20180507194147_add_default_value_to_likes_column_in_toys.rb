class AddDefaultValueToLikesColumnInToys < ActiveRecord::Migration[5.1]
  def change
    change_column :toys, :likes, :integer, :default => 0
  end
end
