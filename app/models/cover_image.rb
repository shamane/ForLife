class CoverImage < ApplicationRecord
  include InterfaceImageConcern

  mount_uploader :image, ImageUploader
end
