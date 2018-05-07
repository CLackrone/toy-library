class ToysController < ApplicationController
  before_action :set_toy, only: [:show, :destroy, :update]

  def index
    toys = Toy.all.order('name ASC')
    render json: toys
  end

  def show
    render json: @toy
  end

  def create
    toy = Toy.new(toy_params)
    if toy.save
      render json: toy
    else
      render json: { message: toy.errors }
    end
  end

  def update
    if @toy.update(toy_params)
      render json: @toy
    else
      render json: { message: @toy.errors }
    end
  end

  def destroy
    if @toy.destroy
      render status: 204
    else
      render json: { message: "Cannot delete toy"}, status: 400
    end
  end

  private

  def toy_params
    params.permit(:name, :age_range, :image_url, :description, :likes)
  end

  def set_toy
    @toy = Toy.find_by(id: params[:id])
  end

end

