class RemoveBorrowedFromToy < ActiveRecord::Migration[5.1]
  def change
    remove_column(:toys, :borrowed)
  end
end
