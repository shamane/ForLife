class ImageUploader < CarrierWave::Uploader::Base
  # include CarrierWave::Vips
  include CarrierWave::RMagick

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{model.id}"
  end

  version :thumb do
    process resize_to_fill: [460, 310]
  end

  version :small do
    process resize_to_fill: [100, 100]
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end
end
