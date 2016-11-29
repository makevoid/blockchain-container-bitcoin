require_relative 'env'

class BControlUI < Roda

  plugin(:assets,
    css: ["style.css"],
    js:  %w(
      vendor/zepto.js
      vendor/underscore.js
      vendor/qrcode.js
    ),
  )
  plugin :render, engine: "haml"
  plugin :partials
  plugin :not_found


  include ViewHelpers

  def wallet
    @wallet = Wallet.new
    # @@wallet ||= Wallet.new
  end

  def explorer
    @explorer = Explorer.new
  end

  route do |r|
    @time = Time.now

    r.root do
      r.redirect "/blocks"
    end

    r.on "blocks" do
      r.is do
        r.get do
          view "blocks"
        end
      end

      r.on ":id" do |id|
        r.is do
          r.get do
            view "block"
          end
        end
      end
    end

    # all BC gets will be public, otherwise add if APP_ENV=="development"
    r.on "cache" do
      r.is do
        r.get do
          view "cache"
        end
      end

      redis = Redis.new

      r.on ":id" do |id|
        r.is do
          r.get do
            json_route
            { value: redis.get(id) }.to_json
          end
        end
      end

    end

    r.assets
  end

  not_found do
    view "not_found"
  end
end
