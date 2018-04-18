class ChangeBorrowedInToys < ActiveRecord::Migration[5.1]
  def change
    change_column :toys, :borrowed, :boolean, :default => false
  end
end
