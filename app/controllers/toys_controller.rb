class ToysController < ApplicationController
  def index
    @toys = Toy.all.order('name ASC')
    render json: @toys
  end
end
