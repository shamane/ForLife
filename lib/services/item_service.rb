class Services::ItemService
  def initialize(params = nil)
    @params = params
  end

  def results
    items(@params)
  end

  private

  def items(params)
    if @params.present?
      CoverImage.where(id: @params)
    else
      CoverImage.all
    end.map do |image|
    {
      id: image.id,
      title: image.image.url,
      title_orig: image.image.url,
      title_thumb: image.image_url(:thumb)
    }
    end
  end
end
