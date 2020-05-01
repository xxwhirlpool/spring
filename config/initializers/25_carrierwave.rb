CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider => "Local",
    :local_root => "#{Rails.root}/public",
  }
  config.fog_directory = "/system"

  unless APP_CONFIG["fog"].nil?
    config.fog_credentials = APP_CONFIG["fog"]["credentials"] unless APP_CONFIG["fog"]["credentials"].nil?
    config.fog_directory = APP_CONFIG["fog"]["directory"] unless APP_CONFIG["fog"]["directory"].nil?
  end
end