module InterfaceImageConcern
  extend ActiveSupport::Concern

  included do
    validates_presence_of :image, on: :create
    validates_format_of :image, with: %r{\.(png|jpg|jpeg)$}i, message: 'should be images', multiline: true, on: :create
  end
end
