class MainsController < ApplicationController
  def index
    gon.api_key= ENV['GNAVI_API_KEY']
  end
end
