class RemoveTagsFromListings < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :tags, :string
  end
end
