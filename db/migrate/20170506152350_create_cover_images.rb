class CreateCoverImages < ActiveRecord::Migration[5.0]
  def change
    create_table :cover_images do |t|
      t.string :image

      t.timestamps null: false
    end
  end
end
