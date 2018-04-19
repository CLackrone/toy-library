class ToysController < ApplicationController
  
  def index
    @toys = Toy.all.order('name ASC')
    render json: @toys
  end

  def create
    toy = Toy.new(toy_params)
    if toy.save
      render json: toy
    else
      render json: { message: toy.errors }
    end
  end

  private

  def toy_params
    params.permit(:name, :age_range, :image_url, :description, :borrowed)
  end

end
