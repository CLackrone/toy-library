class ChangeAgeRangeToStringInToys < ActiveRecord::Migration[5.1]
  def change
    change_column :toys, :age_range, :string
  end
end
