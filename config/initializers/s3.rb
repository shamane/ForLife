CarrierWave.configure do |config|
  if Rails.env.development? || Rails.env.test?
    CarrierWave.configure do |config|
      config.storage = :file
    end
  else
    CarrierWave.configure do |config|
      config.storage = :fog
    end

    config.fog_credentials = {
      provider:              'AWS',
      aws_access_key_id:     '<key>',
      aws_secret_access_key: '<key>',
      region:                '<region>'
    }
    config.fog_directory  = "reactror-#{Rails.env}"
    config.fog_public = true
    config.fog_attributes = { 'Cache-Control' => 'max-age=315576000' }
  end
end
