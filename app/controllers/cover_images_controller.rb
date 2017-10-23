class CoverImagesController < ApiController
  def index
    render json: Services::ItemService.new().results.as_json
  end

  def show
    render json: Services::ItemService.new(params[:id]).results.first
  end
end
