class CreateBlogposts < ActiveRecord::Migration[6.1]
  def change
    create_table :blogposts, primary_key: 'title', id: :title do |t|
      t.string :title
      t.string :content
      t.string :tags

      t.timestamps
    end
  end
end
