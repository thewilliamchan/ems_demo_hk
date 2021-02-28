class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def view
    render 'view'
  end
end
